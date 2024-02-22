import { useState } from "react";
import memesData from "../../memesData.js";
export default function Meme(){

    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:""
    });

    const [memeImages, setMemeImages] = useState(memesData)

    function getMemeImage(){
        const memesArray = memeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevImage => ({
           ...prevImage,
           randomImage: url 
        }));
    }
    return(
        <main>
            <div className="form" >
                <input type="text" placeholder="Top Text" className="form--input"/>
                <input type="text" placeholder="Bottom text" className="form--input"/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
                <img src={meme.randomImage} className="meme--image" alt="" />
        </main>
    )
}


// import React from "react"
// import memesData from "../../memesData.js"

// export default function Meme() {
//     const [memeImage, setMemeImage] = React.useState("")
//     /**
//      * Challenge: Save the random meme URL in state
//      * - Below the div.form, add an <img /> and set the
//      *   src to the new `memeImage` state you created
//      */
    
//     function getMemeImage() {
//         const memesArray = memesData.data.memes
//         const randomNumber = Math.floor(Math.random() * memesArray.length)
//         setMemeImage(memesArray[randomNumber].url)
        
//     }
    
//     return (
//         <main>
//             <div className="form">
//                 <input 
//                     type="text"
//                     placeholder="Top text"
//                     className="form--input"
//                 />
//                 <input 
//                     type="text"
//                     placeholder="Bottom text"
//                     className="form--input"
//                 />
//                 <button 
//                     className="form--button"
//                     onClick={getMemeImage}
//                 >
//                     Get a new meme image 🖼
//                 </button>
//             </div>
//             <img src={memeImage} className="" />
//         </main>
// )}