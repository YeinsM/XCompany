import { useHistory } from "react-router-dom";

export const CustomerTable = ({ customers }) => {

  const history = useHistory();

  return (
    <div>
      <button
        className="btn-floating btn-large waves-effect waves-light green"
        onClick={() => {
          history.push(`/customerform/${0}`);
        }}
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
                    onClick={() => {
                      const id = customer.customerId;
                      history.push(`/customerform/${id}`);
                    }}
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
