import './PosterBack.css'
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

function PosterBack({ title, release, rating, id }) {
    return (
        <div className='Poster-Back'>          
            <Link to={`/${id}`}><h2>{title}</h2></Link>
            <h3>Average Rating: {rating}/10</h3>
            <h3>Release Date: {release}</h3>
        </div>
    )
}

export  default  PosterBack;

PosterBack.propTypes = {
    title: Proptypes.string.isRequired,
    release: Proptypes.string,
    rating: Proptypes.number,
    id: Proptypes.number.isRequired
};