import { useState } from 'react';
import './poster.css';

function Poster({ title, image }) {
    const [flipped, setFlipped] = useState(false)

    const handleFlip = () => {
        setFlipped(!flipped);
      };
    
      return (
        <div className='Poster' onClick={handleFlip}>
          <div className={`Poster-Container ${flipped ? 'Poster-Flip' : ''}`}>
            <div className="Poster-Front">
              <img className='Poster-Image' src={image} alt={title} />
            </div>
            <div className="Poster-Back">
              <h2>{title}</h2>
            </div>
          </div>
        </div>
    );
}

export default Poster;