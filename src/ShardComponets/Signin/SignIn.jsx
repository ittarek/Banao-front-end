import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SignIn.css"
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
const [showSignIn, setShowSign] = useState(true)
const [showJoin, setShowJoin] = useState(false)

  const handleShowSign = () =>{
    
    if(showJoin === true){
  setShowJoin(false);
    }
setShowSign(true)


  }
  const handleShowJoin = () => {
     if (showSignIn === true) {
       setShowSign(false);
     }
     setShowJoin(true);
  }
  return (
    <main className="singIn-container mx-auto ">
      <div className="mb-3 toggle-link">
        <button
          onClick={handleShowSign}
          className=" text-decoration-none me-3 sign-in-btn"
        >
          Sign In
        </button>
        <button
          onClick={handleShowJoin}
          className=" text-decoration-none join-in-btn"
        >
          Join In
        </button>
      </div>
      {showSignIn && (
        <>
          <Form className="signIn-form mx-auto d-flex flex-column">
            <div className="social-button">
              <Button
                variant="primary"
                className="text-center justify-content-between google-button "
                type="submit"
              >
                <span className="google-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="_x31__stroke">
                      <g id="Google">
                        <path
                          id="Vector"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.44827 8.00005C3.44827 7.48043 3.53452 6.98218 3.68865 6.51493L0.992398 4.45605C0.466898 5.52293 0.170898 6.72518 0.170898 8.00005C0.170898 9.27393 0.466648 10.4753 0.991273 11.5416L3.68602 9.47868C3.5334 9.01355 3.44827 8.51718 3.44827 8.00005Z"
                          fill="#FBBC05"
                        />
                        <path
                          id="Vector_2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.18206 3.27275C9.31094 3.27275 10.3306 3.67275 11.1317 4.32725L13.4622 2C12.0421 0.763625 10.2213 0 8.18206 0C5.01606 0 2.29506 1.8105 0.992188 4.456L3.68831 6.51487C4.30956 4.62912 6.08044 3.27275 8.18206 3.27275Z"
                          fill="#EA4335"
                        />
                        <path
                          id="Vector_3"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.18206 12.7274C6.08056 12.7274 4.30969 11.371 3.68844 9.48523L0.992188 11.5437C2.29506 14.1896 5.01606 16.0001 8.18206 16.0001C10.1361 16.0001 12.0017 15.3062 13.4018 14.0062L10.8426 12.0277C10.1204 12.4826 9.21106 12.7274 8.18206 12.7274Z"
                          fill="#34A853"
                        />
                        <path
                          id="Vector_4"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.8293 8.00022C15.8293 7.52747 15.7564 7.01834 15.6471 6.54572H8.18213V9.63659H12.4791C12.2643 10.6905 11.6795 11.5006 10.8426 12.0278L13.4019 14.0063C14.8726 12.6413 15.8293 10.6078 15.8293 8.00022Z"
                          fill="#4285F4"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="google-text"> Continue with Google</span>
              </Button>
              <Button variant="primary" className="facebook-" type="submit">
                <span className="facebook-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Group">
                      <path
                        id="Vector"
                        d="M15.9 8C15.9 11.9027 13.0699 15.1445 9.35 15.785V10.4125H11.1141H11.1999L11.2129 10.3277L11.5676 8.01516L11.5853 7.9H11.4688H9.35V6.49931C9.35 6.19752 9.42409 5.91182 9.60483 5.70282C9.78323 5.49653 10.0785 5.35 10.5537 5.35H11.5625H11.6625V5.25V3.28125V3.19687L11.5793 3.18268L11.5625 3.28125L11.5793 3.18267L11.5793 3.18266L11.5791 3.18264L11.5785 3.18254L11.5764 3.18219L11.5683 3.18084L11.5372 3.17579C11.5101 3.17146 11.4705 3.16529 11.4203 3.1579C11.32 3.14313 11.1772 3.12345 11.0068 3.10379C10.6666 3.0645 10.2147 3.025 9.77172 3.025C8.83783 3.025 8.05466 3.30837 7.50485 3.8587C6.95494 4.40912 6.65 5.21504 6.65 6.2375V7.9H4.71875H4.61875V8V10.3125V10.4125H4.71875H6.65V15.785C2.93015 15.1445 0.1 11.9027 0.1 8C0.1 3.63695 3.63695 0.1 8 0.1C12.3631 0.1 15.9 3.63695 15.9 8Z"
                        fill="#1877F2"
                        stroke="white"
                        strokeWidth="0.2"
                      />
                      <path
                        id="Vector_2"
                        d="M6.75 10.2125H4.81875V8.1H6.75H6.85V8V6.2375C6.85 5.25496 7.14223 4.50463 7.64634 4.00005C8.15054 3.49538 8.87824 3.225 9.77172 3.225C10.204 3.225 10.6475 3.26363 10.9839 3.30246C11.1518 3.32186 11.2926 3.34125 11.3912 3.35577C11.4182 3.35975 11.4421 3.36336 11.4625 3.36651V5.15H10.5537C10.0351 5.15 9.67856 5.31179 9.45354 5.572C9.23087 5.82949 9.15 6.16845 9.15 6.49931V8V8.1H9.25H11.3522L11.0282 10.2125H9.25H9.15V10.3125V15.8168C8.7746 15.8716 8.39066 15.9 8 15.9C7.60934 15.9 7.22537 15.8716 6.85 15.8168V10.3125V10.2125H6.75Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.2"
                      />
                    </g>
                  </svg>
                </span>
                <span className="facebook-text"> Continue with Facebook</span>
              </Button>
            </div>
            <Form.Text className="text-muted text-center connect-text">
              Or connect wit
            </Form.Text>
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  className="mt-3"
                  placeholder=" email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="password" placeholder="Password" />
                <span className="position-relative password-eye">
                  {" "}
                  <FaEye />
                </span>
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <span className="forget-lock-icon">
                    <FaLock />
                  </span>
                  <Link
                    to="#"
                    className="ms-1 text-decoration-none text-reset"
                    label=""
                  >
                    Forget Password?
                  </Link>
                </Form.Group>
              </div>
              <Button className="continue-btn" type="submit">
                Continue
              </Button>
            </div>
          </Form>{" "}
        </>
      )}

      {showJoin && (
        <Form className="join-form mx-auto">
          <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="email"
                className="mt-3"
                placeholder=" email"
              />
            </Form.Group>

            <Form.Group className="" controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                type="password"
                placeholder="Password"
                className="-mb-5"
              />
              <span className="position-relative password-eye">
                {" "}
                <FaEye />
              </span>
              <Link
                to="#"
                className="join-forget-text text-decoration-none text-reset d-flex justify-content-between"
                label=""
              >
                <span> === ==== ====</span> Forget Password?
              </Link>
            </Form.Group>

            <div className="mt-4">
              <Form.Group className="mb-3" controlId="formBasicText">
                <p className="terms-policy">
                  By continuing, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </Form.Group>

              <Button className="continue-btn" type="submit">
                Continue
              </Button>
            </div>
          </div>
          <Form.Text className="text-muted text-center connect-text-join">
            Or connect wit
          </Form.Text>
          <div className="social-button mt-4">
            <Button
              variant="primary"
              className="text-center justify-content-between google-button "
              type="submit"
            >
              <span className="google-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="_x31__stroke">
                    <g id="Google">
                      <path
                        id="Vector"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.44827 8.00005C3.44827 7.48043 3.53452 6.98218 3.68865 6.51493L0.992398 4.45605C0.466898 5.52293 0.170898 6.72518 0.170898 8.00005C0.170898 9.27393 0.466648 10.4753 0.991273 11.5416L3.68602 9.47868C3.5334 9.01355 3.44827 8.51718 3.44827 8.00005Z"
                        fill="#FBBC05"
                      />
                      <path
                        id="Vector_2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.18206 3.27275C9.31094 3.27275 10.3306 3.67275 11.1317 4.32725L13.4622 2C12.0421 0.763625 10.2213 0 8.18206 0C5.01606 0 2.29506 1.8105 0.992188 4.456L3.68831 6.51487C4.30956 4.62912 6.08044 3.27275 8.18206 3.27275Z"
                        fill="#EA4335"
                      />
                      <path
                        id="Vector_3"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.18206 12.7274C6.08056 12.7274 4.30969 11.371 3.68844 9.48523L0.992188 11.5437C2.29506 14.1896 5.01606 16.0001 8.18206 16.0001C10.1361 16.0001 12.0017 15.3062 13.4018 14.0062L10.8426 12.0277C10.1204 12.4826 9.21106 12.7274 8.18206 12.7274Z"
                        fill="#34A853"
                      />
                      <path
                        id="Vector_4"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.8293 8.00022C15.8293 7.52747 15.7564 7.01834 15.6471 6.54572H8.18213V9.63659H12.4791C12.2643 10.6905 11.6795 11.5006 10.8426 12.0278L13.4019 14.0063C14.8726 12.6413 15.8293 10.6078 15.8293 8.00022Z"
                        fill="#4285F4"
                      />
                    </g>
                  </g>
                </svg>
              </span>
              <span className="google-text"> Continue with Google</span>
            </Button>
            <Button variant="primary" className="facebook-" type="submit">
              <span className="facebook-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M15.9 8C15.9 11.9027 13.0699 15.1445 9.35 15.785V10.4125H11.1141H11.1999L11.2129 10.3277L11.5676 8.01516L11.5853 7.9H11.4688H9.35V6.49931C9.35 6.19752 9.42409 5.91182 9.60483 5.70282C9.78323 5.49653 10.0785 5.35 10.5537 5.35H11.5625H11.6625V5.25V3.28125V3.19687L11.5793 3.18268L11.5625 3.28125L11.5793 3.18267L11.5793 3.18266L11.5791 3.18264L11.5785 3.18254L11.5764 3.18219L11.5683 3.18084L11.5372 3.17579C11.5101 3.17146 11.4705 3.16529 11.4203 3.1579C11.32 3.14313 11.1772 3.12345 11.0068 3.10379C10.6666 3.0645 10.2147 3.025 9.77172 3.025C8.83783 3.025 8.05466 3.30837 7.50485 3.8587C6.95494 4.40912 6.65 5.21504 6.65 6.2375V7.9H4.71875H4.61875V8V10.3125V10.4125H4.71875H6.65V15.785C2.93015 15.1445 0.1 11.9027 0.1 8C0.1 3.63695 3.63695 0.1 8 0.1C12.3631 0.1 15.9 3.63695 15.9 8Z"
                      fill="#1877F2"
                      stroke="white"
                      strokeWidth="0.2"
                    />
                    <path
                      id="Vector_2"
                      d="M6.75 10.2125H4.81875V8.1H6.75H6.85V8V6.2375C6.85 5.25496 7.14223 4.50463 7.64634 4.00005C8.15054 3.49538 8.87824 3.225 9.77172 3.225C10.204 3.225 10.6475 3.26363 10.9839 3.30246C11.1518 3.32186 11.2926 3.34125 11.3912 3.35577C11.4182 3.35975 11.4421 3.36336 11.4625 3.36651V5.15H10.5537C10.0351 5.15 9.67856 5.31179 9.45354 5.572C9.23087 5.82949 9.15 6.16845 9.15 6.49931V8V8.1H9.25H11.3522L11.0282 10.2125H9.25H9.15V10.3125V15.8168C8.7746 15.8716 8.39066 15.9 8 15.9C7.60934 15.9 7.22537 15.8716 6.85 15.8168V10.3125V10.2125H6.75Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="0.2"
                    />
                  </g>
                </svg>
              </span>
              <span className="facebook-text"> Continue with Facebook</span>
            </Button>
          </div>
        </Form>
      )}
    </main>
  );
};

export default SignIn;
