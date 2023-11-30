import './poster.css';

function Poster({ title, image }) {

    return (
        <div className='Poster'>
        <img className='Poster-Image' src={image}></img>
        <h2 className='Poster-Name'>{title}</h2>
        </div>
    )
}

export default Poster;