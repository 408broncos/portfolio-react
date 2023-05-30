import React from 'react';
import Portrait from '../assets/images/Portrait.jpeg';
import '../App.css';

const About = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className="row abstract-back ">
                                    <img className='portrait' src={Portrait} />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='about'>
                                        Aspiring full-stack developer currently enrolled in a coding program with a strong foundation in both front-end and back-end development.
                                        Skilled in HTML, CSS, JavaScript, React, Node.js, and database design.
                                        I have a passion for problem-solving and am always looking for new ways to challenge myself.
                                        Seeking opportunities to gain hands-on experience and contribute to innovative projects.
                                        Excited to continue growing and developing my skills in the field of software development.
                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <h2 className='edu'>Education</h2>
                                <br />

                                <div className='grid-cont-prof'>
                                    <div className='grid-item'>
                                        <div className='uni'>University Of California, Berkeley</div>
                                        <div className='field'>Full Stack Development</div>
                                    </div>

                                    <div className="grid-item">
                                        <div className='uni'>Santa Barbara City College</div>
                                        <div className='field'>Business Administration</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;