import { useState, useEffect } from "react";
export default function Meme(){

    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:""
    });

    const [allMemes, setAllMemes] = useState([])
    
    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevImage => ({
           ...prevImage,
           randomImage: url 
        }));
    }

    function handleChange(){
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(res => setAllMemes(res.data.memes))
    })

    return(
        <main>
            <div className="form" >
                <input 
                    type="text" 
                    placeholder="Top Text" 
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}    
                />

                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}    
                />
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>

            </div>
        </main>
    )
}