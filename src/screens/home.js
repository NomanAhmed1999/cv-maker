import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';




const Home = () => {
    return (
        <div className='home-container'>

            <h2 className='home-main-heading'>create an attractive and professional CV and be ready for your dream job</h2>
            <Link to="/templates"><Button variant="primary" className="mx-2 blue-bg-color">Create CV</Button></Link>
        </div>
    )
}


export default Home;