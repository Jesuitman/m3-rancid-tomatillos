import { useState } from 'react';
import './PosterBack.css'

function PosterBack({ release }) {
    
    return (
        <div className='Poster_Back'>
            <h2>{release}</h2>
        </div>
    )
}

export  default  PosterBack;