import { useEffect, useState } from "react";
import { getAll } from "./store";

export const CustomerTable = () => {
  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    getAll(setCustomers, "customers");
  }, []);

  return (
    <div>
      <button
        className="btn-floating btn-large waves-effect waves-light green"
        onClick={() => {}}
        style={{ float: "right" }}
      >
        <i className="material-icons">add</i>
      </button>

      {customers !== null ? (
        <table className="striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Addresses</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.customerId}>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.addresses}</td>
                <td>
                  <button
                    className="btn-floating waves-effect waves-light yellow accent-4"
                    onClick={() => {}}
                  >
                    <i className="material-icons">edit</i>
                  </button>
                  &nbsp;
                  <button
                    className="btn-floating waves-effect waves-light red darken-4"
                    onClick={() => {}}
                  >
                    <i className="material-icons">delete_forever</i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        "There is not customers"
      )}
      
    </div>
  );
};
