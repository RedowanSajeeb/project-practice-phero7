import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePosr from '../SinglaePost/SinglePosr';

const Post = () => {
    const post = useLoaderData()
    // console.log(post);
    return (
      <div>
        <h1>Hlw! Post!!{post.length}</h1>
        {/* <h4>title:{post.title}</h4> */}
      <div>
        {

                post.map(post => <SinglePosr
                
                
                key={post.id}
                postt={post}
                ></SinglePosr>)
        }
      </div>
      </div>
    );
};

export default Post;