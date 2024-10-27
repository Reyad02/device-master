import React from 'react';
import { Link } from 'react-router-dom';

const Cancel = () => {
    return (
        <div className="max-w-7xl mx-auto py-20 flex justify-center h-1/2">
            <div className='w-80 py-12 shadow-xl text-center'>
                <p>Your order is canceled automatically...</p>
                <Link className='text-blue-500 font-semibold' to={"/"}>Go to Home</Link>
            </div>
        </div>
    );
};

export default Cancel;