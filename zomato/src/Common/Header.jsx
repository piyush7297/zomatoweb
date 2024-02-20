
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { dishContext } from '../context/MainContext'



export default function Header() {
    let {search, setSearch}=useContext(dishContext)
    return (
        <>
            <div className="container-fluid">
                <div className="container ">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" width={170} />
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <Link to={'/'} className='text-decoration-none text-black ms-4'>Home</Link>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle mx-3 " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <FontAwesomeIcon className='mx-2' icon="fa-solid fa-location-dot" style={{color: "#ffad1f",}} />
                                                Jodhpur
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li ><a className="dropdown-item text-danger px-5 " href="#">
                                                <FontAwesomeIcon className='mx-2' icon="fa-solid fa-location-crosshairs" style={{color: "#ea8a8a",}} />
                                                    Use your current location</a></li>
                                            </ul>
                                        </li>
                                        <form className="d-flex border border-secondary rounded-2 border-2 p-1">
                                        <FontAwesomeIcon className='mt-1 pt-1 ms-1' icon="fa-solid fa-magnifying-glass" style={{color: "#766f6f",}} />
                                            <input  className="  me-2 border-0 search ps-2" type="search" placeholder=" Search Restaurents.. " aria-label="Search" value={search} onChange={(event)=>setSearch(event.target.value)} />
                                        </form>
                                    </ul>
                                    <div className=''>
                                    <Link to={'/login'}>
                                    <button className=' btn  border-0 bg-transparent fw-light'>LOGIN</button>  
                                    </Link>
                                    <Link to={'/signup'}>
                                    <button className=' btn  border-0 bg-transparent fw-light'>SIGN UP</button>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    )
}
