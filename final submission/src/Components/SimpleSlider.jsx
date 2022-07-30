import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnaOVt4iyoWMX4GvJnHIplFVK_jWfgz8gbw&usqp=CAU",
    "https://www.chatelaine.com/wp-content/uploads/2019/02/romance-books-2019_feature-810x608.jpg",
    "https://assets.vogue.com/photos/61b8ec5c8dfa948c34e89029/master/pass/00_story.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyv8ic1OdkegoixgTc1dfu2ckVvSg9Tgwcpg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMF_BmSXZXBN1BWvkbRexr9O9Mz3Bvvdy9ow&usqp=CAU"
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