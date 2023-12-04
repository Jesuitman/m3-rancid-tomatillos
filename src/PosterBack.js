import { useState } from 'react';
import './PosterBack.css'

function PosterBack({ title, release, rating }) {

    return (
        <div className='Poster-Back'>          
            <h2>{title}</h2>
            <h3>Average Rating: {rating}</h3>
            <h3>Release Date: {release}</h3>
        </div>
    )
}

export  default  PosterBack;