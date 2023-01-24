import React, { useState } from 'react'
import './Register.scss'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useDispatch } from 'react-redux'
import { createPosts } from '../../redux/action/posts'

const Register = () => {
    //const [file, setFile] = useState("");
    const [postData, setPostData] = useState({
        name: '', email: '', phone: '', city: ''
    });
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPosts(postData));
    }

    return (
        <>
            <div className="RContianer">
                <Navbar />
            </div>
            <div className="sideCon">
                <Sidebar />
                <div className="RegisterContainer">
                    <div className="Top">
                        <h1 className="title">Add new User</h1>
                    </div>
                    <div className="Bottom">
                        <div className="left">
                        {/* import {useSelector} from 'react-redux' */}
                            <img src= "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
                        </div>
                        <div className="right">
                            <form onSubmit={handleSubmit}>
                                <div className="formInput">
                                    <label htmlFor='file'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mt-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                        </svg>
                                    </label>
                                    {/* <input type="file"
                                        id='file'
                                        onChange={e => setFile(e.target.files[0])}
                                        style={{ display: "none" }} /> */}
                                </div>

                                <div className="formInput">
                                    <label>name</label>
                                    <input type="text" placeholder='Jane deo' name='name'
                                        value={postData.name}
                                        onChange={(e) => setPostData({ ...postData, name: e.target.value })}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Email</label>
                                    <input type="email" placeholder='Janedeo@admin.com' name='email'
                                        value={postData.email}
                                        onChange={(e) => setPostData({ ...postData, email: e.target.value })}
                                    />
                                </div>
                                <div className="formInput">
                                    <label>Phone</label>
                                    <input type="text" placeholder='+123' name='phone'
                                        value={postData.phone}
                                        onChange={(e) => setPostData({ ...postData, phone: e.target.value })}
                                    />
                                </div>

                                <div className="formInput">
                                    <label>City</label>
                                    <input type="text" placeholder='California U.S.A' name='city'
                                        value={postData.city}
                                        onChange={(e) => setPostData({ ...postData, city: e.target.value })}
                                    />
                                </div>
                                <button className="btn" type='submit'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Register