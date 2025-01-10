import React from 'react';
import GraphAccuracy from './GraphAccuracy';
import TimeTaken from './TimeTaken';

const Graph = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
      <GraphAccuracy></GraphAccuracy>
      <TimeTaken></TimeTaken>
    </div>
  );
};

export default Graph;