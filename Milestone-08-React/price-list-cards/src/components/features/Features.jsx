import React from 'react';
import { CheckCircleIcon } from "@heroicons/react/24/solid";
const Features = ({f}) => {
    return (
      <div className='flex ms-4 text-lg mt-5 text-blue-900 items-center'>
        <CheckCircleIcon className="h-6 w-6 text-blue-500" />
        <span>{f}</span>
      </div>
    );
};

export default Features;