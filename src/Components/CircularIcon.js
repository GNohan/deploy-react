import React from 'react';

function CircularIcon(props){
    return(
        <div className="circular">
            <h1>{props.title}</h1>
            <p>{props.subtext}</p>
            <img src={props.backgroundURl} alt="Empty"></img>
        </div>
    );
}

export default CircularIcon;