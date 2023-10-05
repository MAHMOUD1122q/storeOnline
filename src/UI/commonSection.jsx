import React from 'react';
import "../styles/common.css"

const CommonSection = ({title}) => {
  return (
    <>
      <section className='common'>
        <div className="container">
          <h1>{title}</h1>
        </div>
      </section>
    </>
  );
}

export default CommonSection;
