import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phones = () => {
     const data = useLoaderData();
    //  console.log(data);
    return (
        <div>
            <h1>all-phones {data.length}</h1>
            {
                data.map(phone => <li key={phone.id}>
                    
                    <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
                    
                    </li>)
            }
        </div>
    );
};

export default Phones;