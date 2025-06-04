import React from 'react'
import './mywork.css'
import workData from '../../assets/My-workdata'

const Mywork = () => {
  return (
    <div className='mywork'>
      <div className="mywork-title">
        <h1 className='high'>My Latest work</h1>
        <div className="my-workcontainer">
          {workData.map((work) => (
            <div key={work.id} className="work-item">
              <a href={work.link} target="_blank" rel="noopener noreferrer">
                <img src={work.image} alt={work.name} className="work-image" />
                <h3>{work.name}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Mywork