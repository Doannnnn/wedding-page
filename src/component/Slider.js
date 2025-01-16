import { useState, useEffect } from "react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

function Slider({ setLoading }) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios
            .get("https://658cd3fb7c48dce9473814b8.mockapi.io/slider")
            .then((response) => {
                setImages(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="slider-area slider-style-2 slider-two parallax">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {images.map((image, index) => (
                        <div
                            className="single-slider swiper-slide"
                            key={index}
                            style={{
                                background: `url(${image.url}) no-repeat center/cover`,
                            }}
                        >
                            <div className="container">
                                <div className="slider-content sd-default-content">
                                    <div className="col-lg-12">
                                        <span>WE’RE GETTING MARRIED</span>
                                        <h4>Save Our Date</h4>
                                        <p>25 December 2017</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Add Arrows */}
                <div className="swiper-button-next">
                    <i className="fa fa-angle-right"></i>
                </div>
                <div className="swiper-button-prev">
                    <i className="fa fa-angle-left"></i>
                </div>
            </div>
        </div>
    );
}

export default Slider;
