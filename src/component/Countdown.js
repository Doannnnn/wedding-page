import React, { useState, useEffect } from "react";

function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date("2025-12-25T00:00:00"); // Ngày mục tiêu
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const totalDays = Math.floor(
                    difference / (1000 * 60 * 60 * 24)
                );
                const months = Math.floor(totalDays / 30); // Giả định mỗi tháng có 30 ngày
                const days = totalDays % 30;
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ months, days, hours, minutes, seconds });
            } else {
                clearInterval(interval); // Dừng bộ đếm khi hết thời gian
                setTimeLeft({
                    months: 0,
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
            }
        }, 1000);

        return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    }, []);

    return (
        <div className="count-down-area">
            <section
                className="count-down-section section-padding parallax"
                data-speed="7"
            >
                <div className="container">
                    <div className="count-down-item count-down-item2">
                        <div className="row">
                            <div
                                className="col-12 col-md-4 section-area"
                                style={{
                                    background: `url(https://hellloexpert.com/tf/html/lavelo/img/counter/3.jpg) no-repeat center center / cover`,
                                }}
                            >
                                <div className="section-sub"></div>
                                <h2 className="big">
                                    <span>We Are Waiting For.....</span> The Big
                                    Day
                                </h2>
                            </div>
                            <div className="col-12 col-md-8 clock-area">
                                <div className="count-down-clock">
                                    <div id="clock">
                                        <div className="box">
                                            <div className="date">
                                                {timeLeft.months}
                                            </div>
                                            <span>Months</span>
                                        </div>
                                        <div className="box">
                                            <div className="date">
                                                {timeLeft.days}
                                            </div>
                                            <span>Days</span>
                                        </div>
                                        <div className="box">
                                            <div className="date">
                                                {timeLeft.hours}
                                            </div>
                                            <span>Hours</span>
                                        </div>
                                        <div className="box">
                                            <div className="date">
                                                {timeLeft.minutes}
                                            </div>
                                            <span>Minutes</span>
                                        </div>
                                        <div className="box">
                                            <div className="date">
                                                {timeLeft.seconds}
                                            </div>
                                            <span>Seconds</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Countdown;
