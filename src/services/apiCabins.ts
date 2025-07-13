import supabase from './supabase';
import type { Tables } from '../types/supabase';

export async function getCabins(): Promise<Tables<'cabins'>[] | null> {
  const { data: cabins, error } = await supabase.from('cabins').select('*'); // bunu biz supabase den copy etdik.

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded!');
  }

  return cabins;
}
