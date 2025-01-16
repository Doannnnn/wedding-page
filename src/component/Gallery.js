function Gallery() {
    return (
        <div id="gallery" className="gallery-area pt--100 pb--70">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2>Our Gellary</h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="gallery-menu text-center">
                            <button className="active" data-filter="*">
                                All
                            </button>
                            <button data-filter=".Pre-Wedding">
                                Pre Wedding
                            </button>
                            <button data-filter=".Enagagement">
                                Enagagement
                            </button>
                            <button data-filter=".Parties">Parties</button>
                        </div>
                    </div>
                </div>
                <div className="row grid">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 grid-item Pre-Wedding">
                        <div className="gallery-single">
                            <a href="" className="expand-img">
                                <img src="" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 grid-item Enagagement">
                        <div className="gallery-single">
                            <a href="" className="expand-img">
                                <img src="" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item Pre-Wedding">
                        <div className="gallery-single">
                            <a href="" className="expand-img">
                                <img src="" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item Parties">
                        <div className="gallery-single">
                            <a href="" className="expand-img">
                                <img src="" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item Enagagement Parties">
                        <div className="gallery-single">
                            <a href="" className="expand-img">
                                <img src="" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item Enagagement Parties">
                        <div className="gallery-single">
                            <a href="" className="expand-img">
                                <img src="" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
