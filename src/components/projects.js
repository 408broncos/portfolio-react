import React from 'react';
import '../App.css';
import '../portfolio.css';

function RepoCards(props) {
    return (
        <div className={`grid repo--${props.id}`}>
            <img src={props.image} alt={props.name}
                className="repo-img" />
            <div className="desc">
                <h5>{props.name}</h5>
            </div>

            <div className='depo-links'>
                <a href={props.github} target="_blank"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repo" id="project" /></a>
                <a href={props.deploy} target="_blank"><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed APP" id="project" /></a>
            </div>
        </div>
    );
}

export default RepoCards;