import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const QZone = () => {
    return (
      <div className='mt-4 bg-secondary bg-opacity-10 py-4 px-3 rounded'>
        <h1>Q-Zone</h1>
        <div>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
        </div>
      </div>
    );
};

export default QZone;