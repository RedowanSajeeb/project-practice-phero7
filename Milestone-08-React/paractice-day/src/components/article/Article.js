import React from 'react';
import './Article.css'

const objStyle = {
  backgroundColor: "gainsboro",
  padding: '10px',
  marginBottom: '30px'
};
const Article = () => {
    return (
      <div>
        <article className="blog">
          <h1 style={objStyle}>hey bloge</h1> <hr /> Whether you want to start a
          blog, or you’ve already got one, it’s always good to peer over the
          fence to see what your fellow bloggers are doing. Seeing other blog
          examples can spark inspiration for your own blog. Plus, you can see
          what you’re up against! For this article, we spent way too long
          scouring the internet to bring you 43 of the best blog examples from
          many different niches and built using a range of platforms. We hope
          this inspires you to see what it’s possible to do with your own blog.
          Eat your heart out!
        </article>
      </div>
    );
};

export default Article;