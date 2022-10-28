import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Benifit = (props) => {
    return (
        <div>
            <p className='flex items-center'><CheckCircleIcon className='w-4 mr-2 text-green-400'></CheckCircleIcon>
                {props.benefit}</p>
        </div>
    );
};

export default Benifit;