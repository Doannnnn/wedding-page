function Welcome() {
    return (
        <div
            className="welcome-area"
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.81), rgba(100, 158, 147, 0.81)), 
                         transparent url('https://hellloexpert.com/tf/html/lavelo/img/1.jpg') 
                         no-repeat center center / cover fixed`,
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-content">
                            <h2>Welcome to our big day</h2>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or less normal
                                distribution of letters
                            </p>
                            <div className="btn">
                                <a href="#Contact">RSVP</a>
                            </div>
                            <div className="btn">
                                <a
                                    className="popup-gmaps"
                                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25211.21212385712!2d144.95275648773628!3d-37.82748510398018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2zTWVsYm91cm5lIFZJQyAzMDA0LCDgpoXgprjgp43gpp_gp43gprDgp4fgprLgpr_gpq_gprzgpr4!5e0!3m2!1sbn!2sbd!4v1503742051881"
                                >
                                    Location
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
