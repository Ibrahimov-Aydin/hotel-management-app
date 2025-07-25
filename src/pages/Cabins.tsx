import Row from '../ui/Row';
import Heading from '../ui/Heading';
import CabinTable from '../features/cabins/CabinTable';
import CreateCabinForm from '../features/cabins/CreateCabinForm';
import Button from '../ui/Button';
import { useState } from 'react';

export default function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Cabins</Heading>
        <p>Filter | Sort</p>
      </Row>
      <CabinTable />
      <Button
        variation="primary"
        size="medium"
        type="button"
        onClick={() => setShowForm((show) => !show)}
      >
        Add new cabin
      </Button>
      {showForm && <CreateCabinForm />}
    </>
  );
}
