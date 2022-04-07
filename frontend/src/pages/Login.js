
import { useState } from "react";


// import logo from "../../../logo.png";
// import googleLogo from "../../../google_logo.png";
// import facebookLogo from "../../../facebook_logo.png";

// import { ArrowLeftCircle } from "bootstrap-icons";
import styles from '../App.css'

import { useTransition, useSpring, animated } from "react-spring";

import { Form, Button } from "react-bootstrap";

export default function LogIn() {
    const [forgot, setForgot] = useState(false);
    const [firstTime, setFirstTime] = useState(false);

    const handleClickForgot = () => {
        setForgot((forgot) => !forgot);
    };

    const handleClickFirstTime = () => {
        setFirstTime((firstTime) => !firstTime);
    };

    const transition = useTransition(forgot, {
        from: { x: 10, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
    });

    const transition2 = useTransition(forgot, {
        from: { x: 50, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
    });

    const transition3 = useTransition(forgot, {
        from: { x: 700, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: -300, y: 0, opacity: 0 },
    });

    const transition4 = useTransition(firstTime, {
        from: { x: 700, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: -300, y: 0, opacity: 0 },
    });

    return (
        <div>
            {firstTime ? (
                <Form>
                    <div>
                        <div>
                            <i class="bi bi-arrow-left-circle"></i>
                            {/* <ArrowLeftCircle
                                onClick={handleClickFirstTime}
                                size={20}
                                aria-label="Back Button"
                            />{" "} */}
                        </div>
                        <a href="/">
                            <img
                                src="/logo2.png"
                                alt="Logo"
                                width={125}
                                height={39}
                                className={styles.logo}
                            />
                        </a>
                        <h2>Sign up</h2>
                    </div>
                    <p>Please enter your infomation to sign up.</p>
                    <Form.Group className="mb-12" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter address" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <a className={styles.signupButton} onClick={handleClickFirstTime}>
                        <p>Log in</p>
                    </a>
                    <Button variant="primary" type="submit">
                        <div>Continue</div>
                    </Button>
                    <div className={styles.or}>or </div>
                    <Button
                        type="submit"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            backgroundColor: "white",
                            border: "1px solid #002c71",
                            color: "#002c71",
                        }}
                    >
                        <div className="buttonLogo">
                            Continue with
                            <img
                                src='/google_logo.png'
                                alt="Google Logo"
                                width={42}
                                height={42}
                                className={styles.logo}
                            />
                        </div>
                    </Button>
                    <Button
                        type="submit"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            backgroundColor: "white",
                            border: "1px solid #002c71",
                            color: "#002c71",
                        }}
                    >
                        <div className="buttonLogo2">
                            Continue with
                            <img
                                src='/facebook_logo.png'
                                alt="Facebook Logo"
                                width={25}
                                height={25}
                                className={styles.logoFacebook}
                            />
                        </div>
                    </Button>
                </Form>
            ) : (
                <Form className={styles.form}>
                    <div className={styles.upperForm}>
                        {transition((style, item) =>
                            item ? (
                                <animated.div
                                    style={style}
                                    className={styles.upperFormBackButton}
                                >
                                    <i class="bi bi-arrow-left-circle"></i>
                                    {/* <ArrowLeftCircle
                                        onClick={handleClickForgot}
                                        className={styles.backButton}
                                        size={20}
                                        aria-label="Back Button"
                                    />{" "} */}
                                </animated.div>
                            ) : (
                                ""
                            )
                        )}
                        <a href="/">
                            <img
                                src='/logo.png'
                                alt=""
                                width={125}
                                height={39}
                                className={styles.logo}
                            />
                        </a>

                        {transition2((style, item) =>
                            item ? (
                                <animated.h2 style={style}>Reset your password</animated.h2>
                            ) : (
                                ""
                            )
                        )}

                        {transition2((style, item) =>
                            item ? "" : <animated.h2 style={style}>Log in</animated.h2>
                        )}
                    </div>

                    {transition3((style, item) =>
                        item ? (
                            <animated.div>
                                <p>
                                    Please enter your email address. We will send you an email to
                                    reset your password.
                                </p>
                            </animated.div>
                        ) : (
                            ""
                        )
                    )}
                    <Form.Group
                        className="mb-12"
                        // onChange={(e) => setUser({ ...user, username: e.target.value })}
                        controlId="formBasicEmail"
                    >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter address" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    {transition3((style, item) =>
                        item ? (
                            ""
                        ) : (
                            <animated.div style={style}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <a className={styles.forgotButton} onClick={handleClickForgot}>
                                    <p>Forgot password?</p>
                                </a>
                                <a
                                    className={styles.signupButton}
                                    onClick={handleClickFirstTime}
                                >
                                    <p>Sign Up</p>
                                </a>
                            </animated.div>
                        )
                    )}

                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
                    {forgot ? (
                        <Button variant="primary" type="submit">
                            <div>Send Email</div>
                        </Button>
                    ) : (
                        <>
                            <Button variant="primary" type="submit">
                                <div>Continue</div>
                            </Button>
                            <div className={styles.or}>or </div>
                            <Button
                                type="submit"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    backgroundColor: "white",
                                    border: "1px solid #002c71",
                                    color: "#002c71",
                                }}
                            >
                                <div className="buttonLogo">
                                    Continue with
                                    <img
                                        src='/google_logo.png'
                                        alt="Google Logo"
                                        width={42}
                                        height={42}
                                        className={styles.logo}
                                    />
                                </div>
                            </Button>
                            <Button
                                type="submit"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    backgroundColor: "white",
                                    border: "1px solid #002c71",
                                    color: "#002c71",
                                }}
                            >
                                <div className="buttonLogo2">
                                    Continue with
                                    <img
                                        src='/facebook_logo.png'
                                        alt="Facebook Logo"
                                        width={25}
                                        height={25}
                                        className={styles.logoFacebook}
                                    />
                                </div>
                            </Button>
                        </>
                    )}
                </Form>
            )}
        </div>
    );
}
