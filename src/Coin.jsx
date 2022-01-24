import React from 'react';

const coin = ({name,price,icon,symbol}) => {
  return <div className='coin'>
    <h1 > Name :{name}</h1>
    <img src={icon} alt="" />
    <h3>Price:{price}</h3>
    <h3>Symbol:{symbol}</h3>
  </div>;
};

export default coin;
