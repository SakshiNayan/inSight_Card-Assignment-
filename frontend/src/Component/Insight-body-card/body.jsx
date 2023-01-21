import React from 'react'
import Content from './Content-header/content'
//import BarChart from './BarChart'
import { Header } from './Header/header'
import TableCard from './Insight-table/table'

const Body = () => {
  return (
    <div>
      <Header/>
      <Content/>
      {/* <BarChart/> */}
      <TableCard/>
    </div>
  )
}

export default Body