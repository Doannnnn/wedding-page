function MusicBox() {
    return (
        <div className="music-box music-box-2">
            <button className="music-box-toggle-btn">
                <i className="fa fa-music" aria-hidden="true"></i>
            </button>
            <div className="music-holder">
                <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/102137206&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
            </div>
        </div>
    );
}

export default MusicBox;
