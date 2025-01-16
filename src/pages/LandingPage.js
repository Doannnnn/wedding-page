import { useState } from "react";
import Contact from "../component/Contact";
import Countdown from "../component/Countdown";
import Cuple from "../component/Cuple";
import Event from "../component/Event";
import Footer from "../component/Footer";
import Gallery from "../component/Gallery";
import Gift from "../component/Gift";
import Header from "../component/Header";
import MusicBox from "../component/MusicBox";
import People from "../component/People";
import Preloader from "../component/Preloader";
import Slider from "../component/Slider";
import Story from "../component/Story";
import Welcome from "../component/Welcome";

function LandingPage() {
    const [loading, setLoading] = useState(true);

    const handleLoading = (isLoading) => {
        setLoading(isLoading);
    };

    return (
        <>
            {loading && <Preloader />}
            <Header />
            <Slider setLoading={handleLoading} />
            <Countdown />
            <Cuple />
            <Welcome />
            <Story />
            <People />
            <Event />
            <Gallery />
            <Contact />
            <Gift />
            <Footer />
            <MusicBox />
        </>
    );
}

export default LandingPage;
