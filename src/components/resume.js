import React from 'react';
import bootstrap from '../assets/images/bootstrap.png';
import MERN from '../assets/images/MERN.jpeg';
import HCJ from '../assets/images/HCJ.png';
import JQ from '../assets/images/JQ.png';
import Redux from '../assets/images/Redux.png';
import handlebars from '../assets/images/handlebars.png';
import Mongo from '../assets/images/Mongo.png';
import SQL from '../assets/images/SQL.png';
import Node from '../assets/images/Node.png';

import '../App.css';
import '../portfolio.css';

const Resume = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className="header">
                                <h3>View Resume: <a href="https://github.com/408broncos/portfolio-react/raw/master/src/assets/My-Resume.pdf">Jordan</a>
                                </h3>
                            </div>

                            <div className="modal-footer" />

                            <div className="header">
                                <h3>Skills</h3>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>CS Basics</div>
                                </div>
                                <div className='grid-cont-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='about'>Computer Organization</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='about'>Data Structures and Algorithms</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='about'>Programming Languages</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='about'>Operating Systems</p>
                                    </div>
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Technology Skills</div>
                                </div>

                                <div className='grid-cont-skills'>
                                    <div className='grid-item-skills'>
                                        <img src={HCJ} className='img-skills' alt='HCJ' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={MERN} className='img-skills' alt='MERN' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={Redux} className='img-skills' alt='Redux' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={JQ} className='img-skills' alt='JQ' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={bootstrap} className='img-skills' alt='Bootstrap' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={handlebars} className='img-skills' alt='Handlebars' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={SQL} className='img-skills' alt='SQL' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={Mongo} className='img-skills' alt='MongoDB' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={Node} className='img-skills' alt='Node.js' />
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

export default Resume;
