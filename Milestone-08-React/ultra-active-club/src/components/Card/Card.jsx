import React from 'react';
import Cards from '../Cards/Cards';

const Card = () => {
       const [cardss,setCards] = useState([]);
    useEffect(()=>{
        fetch('fekedb.json')
	.then(response => response.json())
	.then(data => setCards(data));
    console.log(cardss);
    },[])
    console.log(props.card);
    
    return (
        <div>{
            
            cardss.map(card => <Card
            card ={card}
            ></Card>)
            
            }
            <h5>Lorem ipsum dolor sit amet.</h5>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary mx-auto">Button</button>
      <button className="btn btn-xs mt-7">Tiny</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;