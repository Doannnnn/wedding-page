function Header() {
    return (
        <header className="sticky-header">
            <div className="header-area header-area-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-11 col-sm-11 col-10">
                            <div className="logo">
                                <h1>
                                    <a href="index.html">
                                        Harry
                                        <span>
                                            <i
                                                className="fa fa-heart"
                                                aria-hidden="true"
                                            ></i>
                                        </span>
                                        Nancy
                                    </a>
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-9 d-none d-lg-block">
                            <div className="main-menu">
                                <nav id="nav_mobile_menu">
                                    <ul className="">
                                        <li className="active">
                                            <a href="index.html">Home</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="index.html">
                                                        Home Default
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-2.html">
                                                        Home Style 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-3.html">
                                                        Home Ripple
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html">
                                                        Home Spirit
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-5.html">
                                                        Home Particles
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-6.html">
                                                        Home Particleground
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-7.html">
                                                        Home Surface
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-8.html">
                                                        Home Video Bg
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#cuple">Cuple</a>
                                        </li>
                                        <li>
                                            <a href="#story">Story</a>
                                        </li>
                                        <li>
                                            <a href="#people">People</a>
                                        </li>
                                        <li>
                                            <a href="#event">Eevent</a>
                                        </li>
                                        <li>
                                            <a href="#gallery">Gallery</a>
                                        </li>
                                        <li>
                                            <a href="#Contact">Rsvp</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">blog</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="blog.html">blog</a>
                                                </li>
                                                <li>
                                                    <a href="blog-details.html">
                                                        blog details
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-12 d-block d-lg-none">
                            <div id="mobile_menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
