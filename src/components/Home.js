import React from 'react'
import './Home.css';
import '../App.css'
import { Button } from './Button';

function Home() {
    return (
        <div className="home-container">
            <h1>Hello! Welcome to</h1>
            <h2>TITLE</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
        <div className='home-btns'>
            <Button
            className='btns'
buttonStyle='btn--outline'
buttonSize='btn--large'
>
    GET STARTED
</Button>


        </div>
        
        
        
        
        
        </div>
    )
}

export default Home
