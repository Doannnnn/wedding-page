import React, { useEffect, useState } from "react";
import Isotope from "isotope-layout";

function Gallery() {
    const [activeFilter, setActiveFilter] = useState("*");

    useEffect(() => {
        // Initialize Isotope after the component is mounted
        const grid = document.querySelector(".grid");
        const iso = new Isotope(grid, {
            itemSelector: ".grid-item",
            percentPosition: true,
            masonry: {
                columnWidth: ".grid-item",
            },
        });

        // Clean up Isotope instance when the component is unmounted
        return () => {
            iso.destroy();
        };
    }, []);

    useEffect(() => {
        // Re-filter the grid when the filter changes
        const grid = document.querySelector(".grid");
        const iso = new Isotope(grid);
        iso.arrange({ filter: activeFilter });
    }, [activeFilter]);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <div id="gallery" className="gallery-area pt--100 pb--70">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2>Our Gallery</h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="gallery-menu text-center">
                            <button
                                className={activeFilter === "*" ? "active" : ""}
                                onClick={() => handleFilterClick("*")}
                            >
                                All
                            </button>
                            <button
                                className={
                                    activeFilter === ".Pre-Wedding"
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    handleFilterClick(".Pre-Wedding")
                                }
                            >
                                Pre Wedding
                            </button>
                            <button
                                className={
                                    activeFilter === ".Enagagement"
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    handleFilterClick(".Enagagement")
                                }
                            >
                                Enagagement
                            </button>
                            <button
                                className={
                                    activeFilter === ".Parties" ? "active" : ""
                                }
                                onClick={() => handleFilterClick(".Parties")}
                            >
                                Parties
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row grid">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 grid-item Pre-Wedding">
                        <div className="gallery-single">
                            <a href="" className="expand-img">
                                <img
                                    src="https://hellloexpert.com/tf/html/lavelo/img/gallery/1.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 grid-item Enagagement">
                        <div className="gallery-single">
                            <a href="" className="expand-img">
                                <img
                                    src="https://hellloexpert.com/tf/html/lavelo/img/gallery/4.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item Pre-Wedding">
                        <div className="gallery-single">
                            <a href="" className="expand-img">
                                <img
                                    src="https://hellloexpert.com/tf/html/lavelo/img/gallery/2.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item Parties">
                        <div className="gallery-single">
                            <a href="" className="expand-img">
                                <img
                                    src="https://hellloexpert.com/tf/html/lavelo/img/gallery/3.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item Enagagement Parties">
                        <div className="gallery-single">
                            <a href="" className="expand-img">
                                <img
                                    src="https://hellloexpert.com/tf/html/lavelo/img/gallery/5.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 col-sm-6 grid-item Enagagement Parties">
                        <div className="gallery-single">
                            <a href="" className="expand-img">
                                <img
                                    src="https://hellloexpert.com/tf/html/lavelo/img/gallery/6.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
