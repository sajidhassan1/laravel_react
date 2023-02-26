import { useState } from "react";
import http from "./http";
import { useNavigate } from "react-router-dom";
import { browserName, isBrowser, isMobile } from "react-device-detect";

export default function Contact({ input, setInput }) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const userDetails = {
    browser: browserName,
    deviceType: isBrowser ? "Browser" : "Mobile",
    userAgent: browserName,
  };

  const errorDiv = error ? (
    <div className="error">
      <i className="material-icons error-icon"></i>
      {error}
    </div>
  ) : (
    ""
  );

  const handelChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput((values) => ({ ...values, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    setError(true);

    if (!/^\d{10}$/.test(input.phone_number)) {
      alert("Invalid phone number");
      return;
    }
    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email_address)
    ) {
      alert("Invalid email address");
      return;
    }
    http
      .post("/users", input)
      .then((res) => {
        navigate(`/address/${input.first_name}`);
      })
      .catch(function (err) {
        setError(err.response.data.message);
        console.log("error", err.response.data.message);
      });
  };

  return (
    <div>
      <h2>Enter Your Contact Details</h2>
      <div className="container">
        <div className="row">
          <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
            <div className="forepart">
              <div id="slide01">
                <div className="mb-3 text-start">
                  <label className="form-label">Phone Number</label>

                  <input
                    required
                    min="10"
                    type="number"
                    name="phone_number"
                    className="form-control"
                    value={input.phone_number || ""}
                    onChange={handelChange}
                  ></input>
                  {error && null == input?.phone_number ? (
                    <label className="text-danger">
                      Phone Number cannot be Empty
                    </label>
                  ) : (
                    ""
                  )}
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email_address"
                    className="form-control"
                    value={input.email_address || ""}
                    onChange={handelChange}
                  ></input>
                  {error && null == input?.email_address ? (
                    <label className="text-danger">
                      Email Address cannot be Empty
                    </label>
                  ) : (
                    ""
                  )}
                </div>
                {errorDiv}
                <div className="mb-4 text-center">
                  <button
                    type="button"
                    className="btn btn-warning next01"
                    onClick={submitForm}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
