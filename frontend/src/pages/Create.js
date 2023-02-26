import { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import http from "./http";
import { browserName, isBrowser } from "react-device-detect";
import Contact from "./Contact";
import "../dist/css/main.css";
import Logo from "./Logo";
import Footer from "./Footer";

export default function Create() {
  const [date, setDate] = useState();
  const [input, setInput] = useState({});
  const [error, setError] = useState(null);
  const [contactDetails, setContactDetails] = useState(false);

  const userDetails = {
    browser: browserName,
    deviceType: isBrowser ? "Browser" : "Mobile",
    userAgent: browserName,
  };

  useEffect(() => {
    http.post("/userDetails", userDetails).catch(function (error) {
      console.log("error", error);
    });
  }, []);

  const handelChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput((values) => ({ ...values, [name]: value }));
  };

  const handelDate = (date) => {
    setInput((values) => ({
      ...values,
      ["dob"]: date.toLocaleDateString("zh-Hans-CN"),
    }));
    setDate(date);
  };

  const handelNext = () => {
    setError(true);

    if (3 == Object.keys(input).length) {
      setContactDetails(true);
    }
  };

  return (
    <>
      <Logo />
      <section className="bnrsection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">
              <img src={require("../dist/img/bnr.jpg")} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
                <h1>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h1>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </p>
              </div>
              <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
                <div className="formpart">
                  {!contactDetails && (
                    <>
                      <h2>Enter Your Personal Details</h2>
                      <div className="container">
                        <div className="row">
                          <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
                            <div className="forepart">
                              <div id="slide01">
                                <div className="mb-3 text-start">
                                  <label className="form-label">
                                    First Name
                                  </label>
                                  <input
                                    type="text"
                                    name="first_name"
                                    className="form-control"
                                    placeholder="First Name"
                                    value={input.first_name || ""}
                                    onChange={handelChange}
                                  ></input>
                                  {error && null == input?.first_name ? (
                                    <label className="text-danger">
                                      First Name cannot be Empty
                                    </label>
                                  ) : (
                                    ""
                                  )}
                                </div>

                                <div className="mb-3 text-start">
                                  <label className="form-label">
                                    Last Name
                                  </label>
                                  <input
                                    type="text"
                                    name="last_name"
                                    placeholder="Last Name"
                                    className="form-control"
                                    value={input.last_name || ""}
                                    onChange={handelChange}
                                    required
                                  ></input>
                                  {error && null == input?.last_name ? (
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
                                  <DatePicker
                                    value={date}
                                    onChange={handelDate}
                                  />
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
                      <Contact input={input} setInput={setInput} />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
