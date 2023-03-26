import React from 'react';
import { multi } from '../../Utilities/calculator';

import Shows from '../shows/Shows';

const Cosmatis = () => {
    const first = 5
    const first2 = 5
    const first3 = 5
    const sum = multi(first,first2,first3)


    return (
        <div>
            <h1>Hey My Cosmatics Store!!</h1>
            <hr />
            <h3>Multi Sum:{sum}</h3>
           <Shows></Shows>
        </div>
    );
};

export default Cosmatis;