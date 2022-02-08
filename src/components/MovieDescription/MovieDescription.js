import React, {useEffect, useState} from 'react';
import Badge from "react-simple-badges";
import randomColor from "randomcolor";
import {useSelector} from "react-redux";
import "./ScoreMeter.css"

const MovieDescription = () => {
    const {movieDesc} = useSelector(state => state.movieDesc);
    const [animateMeter, setAnimateMeter] = useState(false);

    const date = new Date(movieDesc?.release_date);
    const formattedDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
    const formattedRevenue = `$${movieDesc?.revenue.toString().replace(/\B(=(\d{3})+(!\d))/g, ",")}`;
    const formattedBudget = `$${movieDesc?.budget.toString().replace(/\B(=(\d{3})+(!\d))/g, ",")}`;
    const formattedRuntime = `${movieDesc?.runtime} minutes`;
    const strokeDash = 339.292;

    useEffect(() => {
        setTimeout(() => {
            setAnimateMeter(true);
        }, 200);

    }, [])

    return (
        <div className={'desc-container'}>
            <div>
                <div>{movieDesc.genres.map(({name, id}) => <Badge key={id} name={name}
                                                                  style={{color: 'white'}}
                                                                  backgroundColor={`${randomColor()}`}/>)}</div>
                <div>
                    <p>{movieDesc.overview}</p>
                </div>
            </div>
            <div className={"info"}>
                <div>
                    <div><b>Release Date:</b> {formattedDate}</div>
                    <div><b>Revenue:</b> {formattedRevenue}</div>
                    <div><b>Budget:</b> {formattedBudget}</div>
                    <div><b>Runtime:</b> {formattedRuntime}</div>
                </div>
                <div className={'score'}>
                    <span>{movieDesc.vote_average}</span>
                    <svg className={"scoreMeter"}>
                        <circle className={"scoreMeterCircle"}/>
                        <circle
                            className={"scoreMeterValue"}
                            style={{
                                strokeDasharray: strokeDash.toString(),
                                strokeDashoffset:
                                    strokeDash - strokeDash * (animateMeter ? movieDesc.vote_average / 10 : 0)
                            }}
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export {MovieDescription};