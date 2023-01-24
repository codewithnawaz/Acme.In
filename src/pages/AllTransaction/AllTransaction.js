import React,{ useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './AllTransaction.scss';
import {useDispatch} from 'react';
import { getPosts } from '../../redux/action/posts';


const AllTransaction = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//   dispatch(getPosts());
//   }, [dispatch]);
  
    return (
        <>
            <div className="nav">
                <Navbar />
            </div>
            <div className="sideContainer">
                <Sidebar />
                <div className="trancContainer">
                    <div className="tContainer p-4">
                        <div className="Top p-5 text-slate-400  flex justify-center items-center mb-5">
                            <div className="title font-bold text-2xl ">Transactions</div>
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
                </div>
            </div>
        </>
    )
}

export default AllTransaction