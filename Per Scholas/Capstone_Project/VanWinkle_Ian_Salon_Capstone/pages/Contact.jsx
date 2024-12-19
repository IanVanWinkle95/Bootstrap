import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
    return (
        <div className='ContactPage'>
            <Link to="/Contact">
                <button className='ContactButton'>Contact</button>
            </Link>
        </div>
    )
}