import React from 'react';
import Improve from './Improve';
import Response from './Response';
import Approach from './Approach';
import Suggestion from './Suggestion';

const Improvement = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 '>
      <Improve></Improve>
      <Response></Response>
      <Approach></Approach>
      <Suggestion></Suggestion>
    </div>
  );
};

export default Improvement;