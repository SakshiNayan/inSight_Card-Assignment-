import React from 'react'
import Content from './Content-header/content'
import BarChart from '../Insight-body-card/Chart/BarChart'
import { Header } from './Header/header'
import TableCard from './Insight-table/table'
import CopyRight from '../Footer/footer'

const Body = () => {
  return (
    <div>
      <Header/>
      <Content/>
      
      <TableCard/>
      <BarChart/>
      <CopyRight/>
    </div>
  )
}

export default Body