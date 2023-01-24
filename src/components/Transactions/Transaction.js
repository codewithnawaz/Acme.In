import React from 'react'
import { NavLink } from 'react-router-dom'
import './Transaction.scss'
import {useSelector} from 'react-redux'

const Transaction = () => {
    const posts = useSelector((state)=>state.posts);
    console.log(posts);
    return (
        <div className="tContainer p-5">
            <div className="top p-5 flex justify-between">
                <div className="title font-bold text-lg ">Transactions</div>
                <NavLink to="/transaction"><div className="link text-blue-700">See All Transactions ></div></NavLink>
            </div>
            <div className="bottom flex justify-between justify-center items-center mb-7">
                <div className="status ">Completed</div>
                <div className="card">
                    <div className="name font-bold">Visa card ****4831</div>
                    <div className="type text-zinc-500">Card payment</div>
                </div>
                <div className="Amounts">
                    <div className="amount font-bold">$182.94</div>
                    <div className="date text-zinc-500">jan 17,2022</div>
                </div>
                <div className="brand text-zinc-500">Amazon</div>
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-zinc-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>

            </div>
            <div className="bottom flex justify-between justify-center items-center mb-7">
                <div className="status">Completed</div>
                <div className="card">
                    <div className="name font-bold">Master card ****6444</div>
                    <div className="type text-zinc-500">Card payment</div>
                </div>
                <div className="Amounts">
                    <div className="amount font-bold">$99.00</div>
                    <div className="date text-zinc-500">jan 17,2022</div>
                </div>
                <div className="brand text-zinc-500">Facebook</div>
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-zinc-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>

            </div>
            <div className="bottom flex justify-between justify-center items-center mb-7">
                <div className="status">Pending</div>
                <div className="card">
                    <div className="name font-bold">Account ****822</div>
                    <div className="type text-zinc-500">Bank payment</div>
                </div>
                <div className="Amounts">
                    <div className="amount font-bold">$249.94</div>
                    <div className="date text-zinc-500">jan 17,2022</div>
                </div>
                <div className="brand text-zinc-500">Netflix</div>
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-zinc-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>

            </div>
            <div className="bottom flex justify-between justify-center items-center mb-7">
                <div className="status">completed</div>
                <div className="card">
                    <div className="name font-bold">Amex card ****4831</div>
                    <div className="type text-zinc-500">Card payment</div>
                </div>
                <div className="Amounts">
                    <div className="amount font-bold">$182.94</div>
                    <div className="date text-zinc-500">jan 17,2022</div>
                </div>
                <div className="brand text-zinc-500">Amazon</div>
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-zinc-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>

            </div>
        </div>
    )
}

export default Transaction
   