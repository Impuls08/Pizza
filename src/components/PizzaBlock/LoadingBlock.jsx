import React from 'react';
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
  return (
    <ContentLoader 
    className='pizza-block'
    speed={2}
    width={280}
    height={560}
    viewBox="0 0 280 560"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="142" cy="133" r="127" /> 
    <rect x="0" y="284" rx="6" ry="6" width="280" height="26" /> 
    <rect x="0" y="330" rx="6" ry="6" width="280" height="84" /> 
    <rect x="0" y="430" rx="6" ry="6" width="91" height="45" /> 
    <rect x="125" y="430" rx="20" ry="20" width="153" height="45" />
  </ContentLoader>
  )
};

export default LoadingBlock;