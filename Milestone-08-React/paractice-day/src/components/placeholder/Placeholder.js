import React, { useEffect, useState } from 'react';

const Placeholder = () => {
    const [typicode,setTypicode] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setTypicode(data));
    }, []);

    return (
      <div>
        {typicode.map((typi) => (
          <UiShowe title={typi.title} completed={typi.completed}>
            {" "}
          </UiShowe>
        ))}
      </div>
    );
};
const UiShowe =(prop)=>{
    // console.log(sting);
    // const sting = json.sting(prop.completed);
    return (
      <div>
        <h4>{prop.title}</h4>
        <h6>{prop.completed}</h6>
      </div>
    );


}
export default Placeholder;