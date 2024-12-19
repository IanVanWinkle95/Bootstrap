import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
    return (
        <div className='ServicesPage'>
            <Link to="/Services">
                <button className='ServicesButton'>Services</button>
            </Link>
        </div>
    )
}