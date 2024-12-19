import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className='HomePage'>
            <Link to="/Home">
                <button className='HomeButton'>Home</button>
            </Link>
        </div>
    )
}