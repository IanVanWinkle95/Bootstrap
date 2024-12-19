import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    return (
        <div className='AboutPage'>
            <Link to="/About">
                <button className='AboutButton'>About</button>
            </Link>
        </div>
    )
}