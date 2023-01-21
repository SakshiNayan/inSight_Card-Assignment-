import React from 'react'
import TopData from '../../../data/insight_data.json'
import "./table.css"

function TableCard() {
  return (
    <div className='App-table'>
        <table style={{width:"850px", height:"180px"}}>
            <thead>
                <tr>
                    <th>Top Drivers</th>
                    <th>Change</th>
                    <th>Absolute Change</th>
                    <th>Effective Change</th>
                </tr>
            </thead>
            <tbody id='tbody'>
                {
                    TopData.map((record , idx)=>{
                        //console.log(record.stats.topDrivers[1])
                        return(
                            <tr key={idx} style={{textAlign:"center"}}>
                                <td>
                                    {record.stats.topDrivers.map(data =>{
                                        //console.log(data[2])
                                        return(
                                            <div key={idx}  style={{marginBottom:"15px", paddingBottom:"15px"}} className="usertype">{data[2].userType}</div>
                                        )
                                    })}
                                </td>
                                <td>
                                    {record.stats.topDrivers.map(data =>{
                                        return(
                                            <div key={idx} style={{marginBottom:"15px", paddingBottom:"15px"}}>{data[2].change}</div>
                                        )
                                    })}
                                </td>
                                <td>
                                    {record.stats.topDrivers.map(data =>{
                                        return(
                                            <div key={idx} style={{marginBottom:"15px", paddingBottom:"15px"}}>{data[2].absoluteChange}</div>
                                        )
                                    })}
                                </td>
                                <td>
                                    {record.stats.topDrivers.map(data =>{
                                        return(
                                            <div key={idx} style={{marginBottom:"15px", paddingBottom:"15px"}}>{data[2].effectiveChange}</div>
                                        )
                                    })}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    </div>
  )
}

export default TableCard