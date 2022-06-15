import { useEffect } from "react";

export function HighlightedItem(props) {
    const {
        currentItem
    } = props;

    useEffect(() => {
        let video = document.getElementById("video_background");
        
        video.addEventListener("canplay", function() {
            setTimeout(function() {
                video.play();
            }, 1000);
        });
    }, [])

    return (
        <section
            className="custom-component cat-data highlighted-item"
            // style={{
            //     backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(13, 13, 13, 1)), url(${currentItem.image})`
            // }}
        >
            <video id="video_background" poster="images/dmm_background.jpg" preload="true" muted loop>
  <source src="https://d2v9y0dukr6mq2.cloudfront.net/video/preview/SsRadVyPGjdkeg9tt/videoblocks-computer-hacking-in-process-cyber-security-concept_h-l3zbu4xb__PM.mp4" />
    <source src="videos/backgroundvideo.webm" type="video/webm" />
</video>
            <div className="container">
                <div className="item-title">
                    { currentItem?.name }
                </div>
                <div className="item-desc">
                    consectetur adipiscing elit. Diam quis maecenas fermentum mattis eget lacus. Turpis urna nunc odio vel. Pharetra scelerisque turpis  
                </div>
                <div className="btn btn-primary">Watch Now</div>
            </div>
        </section>
    )
}