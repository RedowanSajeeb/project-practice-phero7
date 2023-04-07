import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Dtlsid = () => {
    const pd = useLoaderData()
    const { title } = pd;
    return (
      <div>
        <h1>dtls{pd.length}</h1>
        <h1>{title}</h1>
      </div>
    );
};

export default Dtlsid;