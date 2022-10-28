import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Benifit from '../Benifit/Benifit';

const PricingOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='bg-white p-4 rounded-xl'>
            <h2 className='bg-indigo-300 text-2xl font-bold p-3 rounded-xl'>{name}</h2>
            <p><span className='text-4xl font-bold'>{price}</span>
                <span className='text-gray-500 text-xl font-bold'>/mo</span>
            </p>
            <div>
                <h3 className='font-bold text-xl text-left'>Benefits:</h3>
                {benefits.map(benefit => <Benifit benefit={benefit}></Benifit>)}
                <button className='flex items-center justify-center text-white font-bold bg-green-500 w-full mt-5 px-5 py-2 hover:text-green-700 rounded-md'>Bye now <ArrowSmallRightIcon className='w-6 ml-3'></ArrowSmallRightIcon></button>
            </div>
        </div>
    );
};

export default PricingOption;