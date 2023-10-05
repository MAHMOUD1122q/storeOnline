import React from 'react';
import serviceData from "../assets/data/serviceData"
import "./Services.css"

const Services = () => {
  return (
    <>
      <section className='services'>
      <div className="container">
        {
          serviceData.map((item,index)=>(
            <div className="box" key={index} style={{backgroundColor:`${item.bg}`}}>
              <span><i className={item.icon}></i></span>
              <div className="text">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))
        }
      </div>
      </section>
    </>
  );
}

export default Services;
