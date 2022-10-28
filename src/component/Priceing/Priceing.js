import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {

    const pricingOption = [
        { id: 1, name: 'Free', price: 0, benefits: ['lifetime free', 'unlimited service', 'localized deals', 'creazy deals'] },
        { id: 2, name: 'Regular', price: 300, benefits: ['lifetime regular', 'unlimited service', 'localized deals', 'creazy deals'] },
        { id: 3, name: 'Premium', price: 500, benefits: ['lifetime premium', 'unlimited service', 'localized deals', 'creazy deals'] }
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className="text-6xl font-mono text-white">Best Deal of the Town</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur asperiores, commodi non voluptate culpa tempore!</p>
            <div className="grid md:grid-cols-3 gap-3 mt-8">
                {
                    pricingOption.map(price => <PricingOption option={price} key={price.id}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;