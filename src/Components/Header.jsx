import Logo from '../assets/images/Troll Face.png'

export default function Header(){
    return(
        <header>
            <img src= {Logo} className='header--image'/>
            <h1 className='header--title'>Meme Generator</h1>

        </header>
    )
}