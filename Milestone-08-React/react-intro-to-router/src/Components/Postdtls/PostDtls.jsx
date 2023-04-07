import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDtls = () => {
    const pd = useLoaderData()
    console.log(pd);

    const navigate = useNavigate();
    const go = () => {
      navigate(-1);
    };


    return (
      <div>
        <h3>body:{pd.body}</h3>
     <button onClick={go}>Go</button>
      </div>
    );
};

export default PostDtls;