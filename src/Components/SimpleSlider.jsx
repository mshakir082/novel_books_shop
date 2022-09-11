import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    
    "https://www.chatelaine.com/wp-content/uploads/2019/02/romance-books-2019_feature-810x608.jpg",
    "https://assets.vogue.com/photos/61b8ec5c8dfa948c34e89029/master/pass/00_story.jpg",
    "https://imgs.search.brave.com/FXDXE53mGf17LV9hzd8bJAwtlNDJOlE4qGFr7Mt0SSk/rs:fit:1200:830:1/g:ce/aHR0cHM6Ly9pbWcu/cmVhZHRoaXN0d2lj/ZS5jb20vdW5zYWZl/L2xpc3RzL2Jlc3Qt/YWx0ZXJuYXRlLWhp/c3RvcnktYm9va3Mt/Yjg5NDZhMDdlZC5w/bmc",
    "https://imgs.search.brave.com/KFhe_uyFNE6thtZQ8KrXws57BwAcfxFwjEHfpu34VU0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ5LzEy/LzVlLzQ5MTI1ZWYw/NTZmYmNhM2Y5ZDY3/ZGM0M2NhNDE1Nzk2/LnBuZw"
];


const Slideshow = () => {
    const [autoplay, setAutoplay] = useState(true);

    return (
        <>
            <div style={{ width: "100%", height: "100%" }}>
                <Slide autoplay={autoplay}>
                    {slideImages.map((item) => (
                        <div className="each-slide" >
                            {/* <div style={{ 'backgroundImage': `url(${slideImages[0]})`, height: "355px" }}> */}
                            <div style={{ width: "100%", height: "350px" }}>
                                <img src={item} style={{ width: "100%",  height: "350px" }} />
                            </div>
                        </div>
                    ))}

                </Slide>
            </div >
        </>
    )
};

export default Slideshow;