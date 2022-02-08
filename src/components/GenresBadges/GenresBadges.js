import React from 'react';
import {Link} from 'react-router-dom';
import Badge from 'react-simple-badges';
import randomColor from 'randomcolor';

const GenresBadges = ({genres}) => {
    return (
        <div>{genres.map(({name, id}) => {
            return <Link to={'/genres/' + id} key={id}>
                <Badge name={name}
                       style={{color: 'white'}}
                       backgroundColor={`${randomColor()}`}/>
            </Link>
        })}
        </div>
    );
};

export {GenresBadges};