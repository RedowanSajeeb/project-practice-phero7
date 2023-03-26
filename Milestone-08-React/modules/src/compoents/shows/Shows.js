import React from 'react';
import { mUlSum } from '../../Utilities/calculator';

const Shows = () => {
    const [s,f,t] = [10,5,5]
    const summm = mUlSum(s,f,t)
    return (
        <div>
            <h1>Hey Shows-section</h1>
            <h3>sum{summm}</h3>
        </div>
    );
};

export default Shows;