import React from 'react'
import Content from './Content-header/content'
import BarChart from '../Insight-body-card/Chart/BarChart'
import { Header } from './Header/header'
import TableCard from './Insight-table/table'

const Body = () => {
  return (
    <div>
      <Header/>
      <Content/>
      
      <TableCard/>
      <BarChart/>
    </div>
  )
}

export default Body