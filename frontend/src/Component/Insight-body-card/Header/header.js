import React from 'react'
import './header.css'
import Data from '../../../data/insight_data.json';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <>
    <nav>
      {
        Data.map((item , idx)=>{
          //console.log(item.source.logo)
          return(
            <div key={idx} className="header-area">
              <img src={item.source.logo} alt="" className='g-logo' />
              <div className='logo-content'>{item.header}</div>
              {/* <span className="breadcrumb-arrow">&gt;</span>
              <span>{item.header}</span> */}
            </div>
          )
        })
      }
      <span style={{float:"right", marginTop:"-50px", marginRight:"50px"}}>
        <div>
          <span style={{marginRight:"10px"}} className="arrow">&lt;</span>
          <Link to='/login'><span className='logout'>LOGOUT</span></Link>
        </div>
        </span>
    </nav>
    </>
  )
}
