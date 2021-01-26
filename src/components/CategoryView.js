import React, { useEffect, useState } from 'react';

const CatergoryView = ({ category, children }) => {
  return (
    <div
      key={category._id}
      style={{ margin: '20px', border: 'solid 1px grey', padding: '2%' }}
    >
      {category.name}
      <div>
        <div>{category.description}</div>
        {children}
      </div>
    </div>
  );
};

export default CatergoryView;
