import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    const [cardss,setCards] = useState([]);
    useEffect(()=>{
        fetch('fekedb.json')
	.then(response => response.json())
	.then(data => setCards(data));
    console.log(cardss);
    },[])
    return (
        <div>
          {
            cardss.map(card => <Card
            card ={card}
            ></Card>)
          }
        </div>
    );
};

export default Cards;