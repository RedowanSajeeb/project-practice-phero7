import React, { useEffect, useState } from 'react';
import { mUlSum } from '../../Utilities/calculator';

const Shows = () => {
    const [s,f,t] = [10,5,5]
    const summm = mUlSum(s,f,t)
    // const [summm,setNum] = useState(0)
    // useEffect(()=>{

        
    // },[])
    return (
      <div>
        <h1>Hey Shows-section</h1>
        <h3>sum{summm}</h3>
        <button>NO-Click</button>
        <hr />
      </div>
    );
};

export default Shows;