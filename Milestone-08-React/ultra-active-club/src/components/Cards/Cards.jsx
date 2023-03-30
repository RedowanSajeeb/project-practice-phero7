import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    const [cards,setCards] = useState([]);
    useEffect(()=>{
        fetch('fekedb.json')
	.then(response => response.json())
	.then(data => setCards(data));
    console.log(cards);
    },[])
    return (
        <div>
          {
            cards.map(card => <Card
            card ={card}
            ></Card>)
          }
        </div>
    );
};

export default Cards;