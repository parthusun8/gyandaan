import React from 'react';
import './Home.css';
import Cover from "../assets/study.svg";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className='home'>
           <h1 className='title'>GyannDaan</h1>
           <br></br>
           <div className='main'>
           <p className='para'>GyaanDaan is special platform where student can get knowledge for free of cost is this platform will free mentorship and dicussion space for student and teacher. Question Answer Session with master with Zoom Class. Start Learn now....</p>
           <br></br>
           <img src={Cover} alt="cover" className='cover'/>
           </div>
           <span className='button'>
            <Link to={"/login"}>
                <button className='started'>
                    Get Started {'>>'}
                </button>
            </Link>
            </span>
        </div>
    )
}

export default Home;
