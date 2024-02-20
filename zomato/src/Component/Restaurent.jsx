import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../Common/Header';
import { dishContext } from '../context/MainContext';


export default function Restaurent() {
    let [restaurentdata, setRestaurentdata] = useState([]);
    let {search}=useContext(dishContext)

    let finalRestaurant=restaurentdata.map((ritems, index) => {
        return <Restaurents key={index} rdata={ritems} />
    })

    let getproducts = () => {
        axios.get('http://localhost:5100/restaurent')
            .then((res) => {
                return res.data
            })
            .then((finalres) => {
                if(search==""){
                    setRestaurentdata(finalres.data)
                }
                else{
                    let restFinalData=finalres.data.filter((ritems) => {
                        return ritems.name.toLowerCase().startsWith(search.toLowerCase());
                    })
                    setRestaurentdata(restFinalData)
                }
            })
    }
    useEffect(() => {
        getproducts();
    }, [search])
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row gy-2">
                        <h2 >Top Restaurents in Jodhpur</h2>
                        {
                            restaurentdata.length >= 1
                                ?
                                finalRestaurant
                                :
                                <img src='https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif' />
                        }
                    </div>
                </div>
            </div>
        </>
    )

}

function Restaurents({ rdata }) {
    return (
        <div className='col-lg-4 col-md-6 '>
            <div className='p-3 box-shadow rounded-4'>
                <Link to={`/restaurent-detail/${rdata.id}`} className='text-decoration-none text-black'>
                    <div className='resimg'><img className='img-fluid rounded-4 w-100 h-100' src={rdata.image} alt="" /></div>
                    <div className='p-1'>
                        <div className='d-flex justify-content-between mb-1'>
                            <span className='fw-bold'>{rdata.name + 'Restaurent'}</span>
                            <span className='bg-success fw-bold  px-2 rounded-2 text-white '>{rdata.rating}<FontAwesomeIcon icon="fa-solid fa-star" /></span>
                        </div>
                        <div className='d-flex justify-content-between  mb-1'>
                            <span className='fs-6  fw-light'> {rdata.dish} </span>
                            <span className='fw-light' > {rdata.price} </span>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <span className='fw-lighter'> {rdata.location} </span>
                            <span className='fw-bold'> {rdata.distance} </span>
                        </div>
                    </div>
                </Link>
            </div>
            <hr />
        </div>
    )
}
