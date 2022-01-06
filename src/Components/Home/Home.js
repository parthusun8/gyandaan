import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className='home'>
            <div className="title">
            GyaanDaan
            </div>
            <div className="overview">
                <p className='para'>
                    GyaanDaan is special platform where student can get knowledge for free of cost is this platform will free mentorship and dicussion space for student and teacher. Question Answer Session with master with Zoom Class. Start Learn now....
                </p>
                <img src="https://anionstech.com/images/data/data%20file.png" alt="image here" className='image'/>
            </div>
            <Link to={"/login"}>
                <button className="started">
                    Get Started
                </button>
            </Link>
        </div>
    )
}

export default Home;
