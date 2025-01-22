import { useEffect } from "react";
import axios from "axios";

function Cuple() {
    useEffect(() => {
        axios
            .get("https://iwedding-wp.yopithemes.com/wp-json/wp/v2/wedding/")
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div id="cuple" className="couple-area pt--100 pb--80">
            <div className="container">
                <div className="col-l2">
                    <div className="section-title text-center">
                        <h2>Happy Cuple</h2>
                    </div>
                </div>
                <div className="couple-item">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                            <div className="couple-img">
                                <img
                                    src="https://hellloexpert.com/tf/html/lavelo/img/couple/5.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="couple-content mt--30">
                                <h4>NANCY ELIZABETH</h4>
                                <p>
                                    Hi I am Nancy Elizabeth. I am going to
                                    introduce myself.I am a professional graphic
                                    designer.
                                </p>
                            </div>
                            <div className="social-icon">
                                <ul className="d-flex">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 couple-single">
                            <div className="couple-shape">
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 couple-single md-0">
                            <div className="couple-img">
                                <img
                                    src="https://hellloexpert.com/tf/html/lavelo/img/couple/6.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="couple-content mt--30">
                                <h4>HARRY WILLIAM</h4>
                                <p>
                                    Hi I am Nancy Elizabeth. I am going to
                                    introduce myself.I am a professional graphic
                                    designer.
                                </p>
                            </div>
                            <div className="social-icon">
                                <ul className="d-flex">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cuple;
