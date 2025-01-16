function Countdown() {
    return (
        <div className="count-down-area">
            <section
                className="count-down-section section-padding parallax"
                data-speed="7"
            >
                <div className="container">
                    <div className="count-down-item count-down-item2">
                        <div className="row">
                            <div className="col-12 col-md-4 section-area">
                                <div className="section-sub"></div>
                                <h2 className="big">
                                    <span>We Are Waiting For.....</span> The Big
                                    Day
                                </h2>
                            </div>
                            <div className="col-12 col-md-8 clock-area">
                                <div className="count-down-clock">
                                    <div id="clock"></div>
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
