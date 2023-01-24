import React from 'react'
import Customer from '../../components/Customer/Customer';
import Graph from '../../components/Graph/Graph';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Sources from '../../components/Sources/Sources';
import Transaction from '../../components/Transactions/Transaction';
import Widget from '../../components/Widget/Widget';
import './home.scss'


const Home = () => {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="sideContainer">
        <Sidebar />
        <div className="homeContainer">
          <div className="widget flex gap-5 justify-center">
            <Widget type="Today's Sale" />
            <Widget type="Total Sales" />
            <Widget type="Total Orders" />
            <Widget type="Total Customers" />
          </div>
          <div className="graphContainer flex mt-6 p-6">
            <div className="graph rounded-lg w-8/12">
              <Graph />
            </div>
            <div className="source rounded-lg w-4/12">
              <Sources />
            </div>
          </div>
          <div className="transContainer flex mt-6 p-6">
            <div className="trans rounded-lg w-8/12">
              <Transaction />
            </div>
            <div className="cust rounded-lg w-4/12">
              <Customer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home