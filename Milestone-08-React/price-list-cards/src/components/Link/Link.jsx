import React from 'react';
import { BeakerIcon } from "@heroicons/react/24/solid";

const Link = ({route }) => {
  return (
    <li>
        
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;