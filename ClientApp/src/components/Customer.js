import { CustomerTable } from "./helpers/Table";
import { useEffect, useState } from "react";
import { getAll } from "./helpers/store";

export const Customer = () => {
  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    getAll(setCustomers, "customers")
  }, []);

  return <CustomerTable customers={customers} setCustomers={setCustomers} />;
};

export default Customer;
