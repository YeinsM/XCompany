import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAll, getById, post, put } from "../helpers/store";
import { CustomModal } from "../modals/MyModal";

/* eslint-disable jsx-a11y/anchor-is-valid */
export const CustomerForm = () => {
  const { id } = useParams();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });

  const [addresses, setAddresses] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const customerData = {
      firstName: data.firstName,
      lastName: data.lastName,
    };
    id > 0 ? put(id, customerData) : post("customers", customerData);
  };

  useEffect(() => {
    getById(id, "customers");
  console.log(getById(id, "customers"));
  }, [id]);

  useEffect(() => {
    getAll(setAddresses, "addresses");
  }, []);

  return (
    <>
      <br />
      <h1 style={{ textAlign: "center" }}>
        {id > 0 ? "Edit Customer" : "Create Customer"}{" "}
      </h1>
      <br />
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">chevron_right</i>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={data.firstName}
                onChange={handleChange}
                className="validate"
              />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">chevron_right</i>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={data.lastName}
                onChange={handleChange}
                className="validate"
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <h3 style={{ float: "left" }}>Addresses</h3>
              {/* {data.customerId === id ? ( */}
              <table className="striped">
                <tbody>
                  {/* var myArray = ['a', 1, 'a', 2, '1']; var unique =
                  myArray.filter((v, i, a) => a.indexOf(v) === i); */}
                  {addresses.filter(
                    (address) => address.customerId === id
                    //   (value, index, address) => (
                    //   <tr key={address.addressId}>
                    //     <td>{address.location}</td>
                    //   </tr>
                    // )
                  )}
                </tbody>
              </table>
              {/* ) : (
                "There isn't yet addresses in this customer" */}
              {/* )} */}
            </div>

            <div className="col-md-auto">
              <CustomModal id={id} show={show} setShow={handleShow} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
