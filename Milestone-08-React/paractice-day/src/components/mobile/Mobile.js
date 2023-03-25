import React, { useState } from 'react';

const Mobile = () => {
const [batterydown, setBatterydown] = useState(100);
const Batterydown =()=>{
    if(batterydown === 0){
        return
    }
    else{
        setBatterydown(batterydown - 10);
    }
     

}
    return (
      <div>
        <h1>{batterydown}%</h1>
        <button onClick={Batterydown}>battery down</button>
      </div>
    );
};

export default Mobile;