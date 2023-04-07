import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Single.css'
const SinglePosr = ({postt}) => {
    const {id,title,body} = postt
    // console.log(postt);
const navigate = useNavigate();
    const onclickbutton = ()=>{
        navigate(`/postLink/${id}`);
    }
    return (
      <div className="post">
        
        <h3>id:{id}</h3>
        <h3>title:{title}</h3>
        {/* <h6>body;{body}</h6> */}
        <Link to={`/postLink/${id}`}>Link</Link>
        <button onClick={onclickbutton}>Show Post Navigate</button>

        {/* <Link to={`/postLink/${id}`}>
          <button>Show Post dtls</button>
        </Link> */}
      </div>
    );
};

export default SinglePosr;