import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Gift() {
    const options = {
        loop: true,
        margin: 0,
        nav: false,
        items: 5,
        smartSpeed: 1000,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 3,
            },
            480: {
                items: 2,
            },
            760: {
                items: 4,
            },
            1080: {
                items: 4,
            },
        },
    };

    return (
        <div className="gift-area pt--100 pb--30">
            <div className="container">
                <div className="col-12">
                    <div className="section-title text-center">
                        <h2>Gift Registration</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised.
                        </p>
                    </div>
                </div>
                <div className="gift-item">
                    <OwlCarousel className="Gift-carousel" {...options}>
                        <img
                            src="https://hellloexpert.com/tf/html/lavelo/img/gift/3.png"
                            alt="gift"
                            style={{ width: "50%" }}
                        />
                        <img
                            src="https://hellloexpert.com/tf/html/lavelo/img/gift/2.png"
                            alt="gift"
                            style={{ width: "50%" }}
                        />
                        <img
                            src="https://hellloexpert.com/tf/html/lavelo/img/gift/3.png"
                            alt="gift"
                            style={{ width: "50%" }}
                        />
                        <img
                            src="https://hellloexpert.com/tf/html/lavelo/img/gift/4.png"
                            alt="gift"
                            style={{ width: "50%" }}
                        />
                    </OwlCarousel>
                </div>
            </div>
        </div>
    );
}

export default Gift;
