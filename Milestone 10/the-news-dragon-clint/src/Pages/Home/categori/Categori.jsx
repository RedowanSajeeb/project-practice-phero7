import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Newscard from '../NewsCard/Newscard';

const Categori = () => {
  const categoriNewsdata = useLoaderData()
  console.log(categoriNewsdata);
    const {id} = useParams()
    return (
      <div className="mt-3">
        {id && (
          <h4>
            This is Category has news:{" "}
            <small className="text-danger ">{categoriNewsdata.length}</small>
          </h4>
        )}
        {categoriNewsdata.map((news) => (
          <Newscard key={news._id} news={news}></Newscard>
        ))}
      </div>
    );
};

export default Categori;