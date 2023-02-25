import { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import http from "./http";
import { browserName, isBrowser, isMobile } from "react-device-detect";
import Contact from "./Contact";
// import "../scss/main";

export default function Create() {
  const [date, setDate] = useState();
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState(null);
  const [contactDetails, setContactDetails] = useState(false);

  const userDetails = {
    browser: browserName,
    deviceType: isBrowser ? "Browser" : "Mobile",
    userAgent: browserName,
  };

  useEffect(() => {
    http.post("/userdetails", userDetails).catch(function (error) {
      console.log("error", error);
    });
  }, []);

  const handelChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handelDate = (date) => {
    setInputs((values) => ({
      ...values,
      ["dob"]: date.toLocaleDateString("zh-Hans-CN"),
    }));
    setDate(date);
  };

  const handelNext = () => {
    setContactDetails(true);

    setError(true);
  };

  return (
    <div className="container">
      {!contactDetails && (
        <>
          <h2>Enter Your Personal Details</h2>
          <div className="container">
            <div className="row">
              <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
                <div className="forepart">
                  <div id="slide01">
                    <div className="mb-3 text-start">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        name="first_name"
                        className="form-control"
                        value={inputs.first_name || ""}
                        onChange={handelChange}
                      ></input>
                      {error && null == inputs?.first_name ? (
                        <label className="text-danger">
                          First Name cannot be Empty
                        </label>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="mb-3 text-start">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        name="last_name"
                        className="form-control"
                        value={inputs.last_name || ""}
                        onChange={handelChange}
                        required
                      ></input>
                      {error && null == inputs?.last_name ? (
                        <label className="text-danger">
                          Last Name cannot be Empty
                        </label>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="mb-3 text-start">
                      <label className="form-label">
                        Enter Your Date of Birth
                      </label>
                      <DatePicker value={date} onChange={handelDate} />
                      {error && null == date ? (
                        <label className="text-danger">
                          Date cannot be Empty
                        </label>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="mb-4 text-center">
                      <button
                        type="button"
                        className="btn btn-warning next01"
                        onClick={handelNext}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {contactDetails && (
        <>
          <Contact inputs={inputs} setInputs={setInputs} />
        </>
      )}
    </div>
  );
}
