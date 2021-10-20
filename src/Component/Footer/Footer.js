import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-secondary text-white pt-5 pb-4">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">About Us</h5>
                        <hr className="mb-4" />
                        <p> We provide world class eye treatment in our hospital. We have world's best surgeon and advanced treatment devices. Advanced surgical machinery surgeons with multi-fellowship training around the world.</p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Get Info</h5>
                        <hr className="mb-4" />
                        <p>
                            <Link to="/" className="text-white text-decoration-none">Account Information</Link>
                        </p>

                        <p>
                            <Link to="/" className="text-white text-decoration-none">Help</Link>
                        </p>
                        <p>
                            <Link to="/" className="text-white text-decoration-none">Learn More</Link>
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact Us</h5>
                        <hr className="mb-4" />
                        <p>
                            <li className="fas fa-home mr-3 list-unstyled"></li> Address: Melbourne, Austrilia
                        </p>
                        <p>
                            <li className="fas fa-envelope mr-3 list-unstyled"></li>E-mail: m.eyehospital@gmail.com
                        </p>
                        <p>
                            <li className="fas fa-home mr-3 list-unstyled"></li>Phone: 0491 570 156
                        </p>
                    </div>
                    <hr className="mb-4" />
                    <div className="row d-flex justify-content-center">
                        <p>
                            <small>Copyright ©2022 All rights reserved by:
                                <Link className="text-decoration-none text-warning mx-2">Melbourne EYE Hospital</Link>
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;