import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
    return (
        <div className='AboutPage'>
            <h1>Contact Me</h1>
            <p>This is the contact page.</p>
            <Link to="/Home">Back to Home</Link>
        </div>
    )
}