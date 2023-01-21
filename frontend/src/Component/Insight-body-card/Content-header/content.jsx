import React from 'react'
import Data from '../../../data/insight_data.json'
import './content.css'

function Content() {
  return (
    <div className='content-area'>
        {
            Data.map((item,idx )=>{
                return(
                    <div key={idx}>
                        <div className='cont-data'>
                            <div><p>granola_bar_sales</p></div>
                            <div className='text-cont'>{item.content}</div>
                        </div>
                        <div className='cont-data'>
                            <div><p> some_dimension</p></div>
                            <div className='text-cont'>with anomaly score of {item.score}</div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Content