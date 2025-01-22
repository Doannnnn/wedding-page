import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
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
                console.error(error);
            });
    }, [setLoading]);

    return (
        <div className="slider-area slider-style-2 slider-two parallax">
            <Swiper
                loop={true}
                speed={4000}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="swiper-container"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="single-slider"
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;
