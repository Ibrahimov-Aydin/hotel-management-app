import supabase, { supabaseUrl } from './supabase';
import type { Tables, TablesInsert } from '../types/supabase';

export async function getCabins(): Promise<Tables<'cabins'>[] | null> {
  const { data: cabins, error } = await supabase.from('cabins').select('*'); // bunu biz supabase den copy etdik.

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded!');
  }

  return cabins;
}

export async function deleteCabin(id: number) {
  const { data: cabins, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id);

  if (error) {
    console.log(error);
    throw new Error('Cabin could not be deleted!');
  }

  return cabins;
}

export async function createCabin(newCabin: TablesInsert<'cabins'>) {
  const image = newCabin?.image;

  let imageName = '';

  if (image instanceof FileList) {
    imageName = `${Math.random()}-${image[0].name}`.replace(/\//g, '');
  } else if (image instanceof File) {
    imageName = `${Math.random()}-${image.name}`.replace(/\//g, '');
  } else if (typeof image === 'string') {
    imageName = `${Math.random()}-${image}`.replace(/\//g, '');
  }

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // Create a Cabin
  const { data: cabins, error } = await supabase
    .from('cabins')
    .insert([{ ...newCabin, image: imagePath }])
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error('Cabin could not be created!');
  }

  if (
    !image ||
    typeof image === 'string' ||
    (image instanceof FileList && image.length === 0)
  ) {
    throw new Error('No valid image provided');
  }

  const file: File = image instanceof FileList ? image[0] : image;

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, file);

  if (storageError) {
    await supabase.from('cabins').delete().eq('id', cabins.id);
    console.error(storageError);
    throw new Error(
      'Cabins image could not be uploaded and the cabin was not created'
    );
  }

  return cabins;
}
