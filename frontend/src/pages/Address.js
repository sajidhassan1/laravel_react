import { useState } from "react";
import { useParams } from "react-router-dom";
import http from "./http";
import { useNavigate } from "react-router-dom";

export default function Address() {
  const userName = useParams();
  const [hasPreviousAddress, setHasPreviousAddress] = useState("other");
  const navigate = useNavigate();
  const [addressList, setAddressList] = useState([
    {
      address_line_1: "",
      address_line_2: "",
      address_line_3: "",
    },
  ]);

  const handelClick = (event) => {
    setHasPreviousAddress(event.target.value);
  };

  const addNewAddress = () => {
    setAddressList([
      ...addressList,
      {
        address_line_1: "",
        address_line_2: "",
        address_line_3: "",
      },
    ]);
  };

  const removeAddress = () => {
    const list = [...addressList];
    list.pop();
    setAddressList(list);
  };

  const handelChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...addressList];
    list[index][name] = value;
    setAddressList(list);
  };

  const submitForm = () => {
    http
      .post("/address", { addressList, userName })
      .then((res) => {
        navigate("/");
      })
      .catch(function (error) {
        console.log("error", error.response.error);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
            <h1>
              Hi <span>{userName.name}</span> Lorem Ipsum is simply dummy text
              of the printing and typesetting industry.
            </h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </div>

          <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
            <div className="formpart">
              <form action="">
                <div id="slide03">
                  {hasPreviousAddress == "other" && (
                    <div className="form-check">
                      <div className="mb-3 text-center">
                        <input
                          type="radio"
                          name="hasPreviousAddress"
                          value="yes"
                          id="yes"
                          onClick={handelClick}
                        />
                        <label htmlFor="yes">Yes</label>
                      </div>
                      <div className="mb-3 text-center">
                        <input
                          type="radio"
                          name="hasPreviousAddress"
                          value="No"
                          id="No"
                          onClick={handelClick}
                        />
                        <label htmlFor="No">No</label>
                      </div>
                    </div>
                  )}

                  {hasPreviousAddress == "yes" && (
                    <div className="form-check">
                      <h2>Enter your Previous Address</h2>
                      {addressList.map((list, index) => {
                        return (
                          <div key={index} className="container">
                            <div className="row">
                              <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
                                <div className="forepart">
                                  <div id="slide01">
                                    <div className="mb-3 text-start">
                                      <label className="form-label">
                                        Previous Address {index + 1}
                                      </label>
                                      <input
                                        type="text"
                                        name="address_line_1"
                                        className="form-control"
                                        placeholder="Address Line 1"
                                        value={addressList.address_line_1}
                                        onChange={(e) => handelChange(e, index)}
                                      />
                                      <input
                                        type="text"
                                        name="address_line_2"
                                        className="form-control"
                                        placeholder="Address Line 2"
                                        value={addressList.address_line_2}
                                        onChange={(e) => handelChange(e, index)}
                                      />
                                      <input
                                        type="text"
                                        name="address_line_3"
                                        className="form-control"
                                        placeholder="Address Line 3"
                                        value={addressList.address_line_3}
                                        onChange={(e) => handelChange(e, index)}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      {hasPreviousAddress == "no" && (
                        <div>
                          <label className="form-label">Thank You</label>
                        </div>
                      )}

                      <div className="mb-3 text-center">
                        <button
                          type="button"
                          className="btn btn-warning next01"
                          onClick={submitForm}
                        >
                          Save
                        </button>
                      </div>
                      <div className="mb-3 text-center">
                        <button
                          type="button"
                          className="btn btn-warning next01"
                          onClick={addNewAddress}
                        >
                          Add another Address
                        </button>
                      </div>
                      {addressList.length > 1 && (
                        <div className="mb-3 text-center">
                          <button
                            type="button"
                            className="btn btn-warning "
                            onClick={removeAddress}
                          >
                            Remove Address
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
