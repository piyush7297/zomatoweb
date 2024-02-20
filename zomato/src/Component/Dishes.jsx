import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { dishContext } from '../context/MainContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Dishes() {
    let id = useParams().id
    const [dish, setdish] = useState([]);
    let { modalDish, setModalDish } = useContext(dishContext)

    let getdishes = () => {
        axios.get(`http://localhost:5100/restaurent-detail/${id}`)
            .then((res) => {
                return res.data
            })
            .then((finalres) => {
                console.log(finalres)
                setdish(finalres.dishes)
            })
    }
    useEffect(() => {
        getdishes();
    }, [])
    console.log(dish)
    return (
        <>
            {
                modalDish != "" && modalDish != undefined
                    ?
                    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalToggleLabel">OUR SPECIAL <FontAwesomeIcon icon="fa-solid fa-utensils" style={{ color: "#48464e", }} /></h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className='imgheight mx-auto' ><img className='img-fluid rounded-4 h-100 w-100 ' src={modalDish.image} alt=" " /></div>
                                    <div className='p-1'>
                                        <div className='d-flex justify-content-between mb-1'>
                                            <span className='fw-bold'>{modalDish.dishname}</span>
                                            <button className='bg-success fw-bold  px-2 rounded-2 text-white'>Add +</button>
                                        </div>
                                        <div className='d-flex justify-content-between  mb-1'>
                                            <span className='fs-6  fw-light'>
                                                <span className='bg-warning fw-bold  p-1 rounded-2 me-2'>{modalDish.dishrating} <FontAwesomeIcon icon="fa-solid fa-star" /></span>155 ratings
                                            </span>

                                            <span className='fw-bold' >{modalDish.dishprice} <FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" /></span>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <span className='fw-light'>{modalDish.dishdescription}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    "no data found"

            }
            <div className="container-fluid">
                <div className="container">
                    <div className="row gy-5">
                        <h2>Our Dishes</h2>
                        {
                            dish.length >= 1
                                ?
                                dish.map((ditems, index) => {
                                    return <Dishdata key={index} ddata={ditems} />
                                })
                                :
                                'No Data Found'
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

function Dishdata({ ddata }) {
    let { modalDish, setModalDish } = useContext(dishContext)
    return (
        <div className='col-lg-4 col-md-6'>
            <a class="text-decoration-none text-black" data-bs-toggle="modal" href="#exampleModalToggle" role="" onClick={() => setModalDish(ddata)}>
                <div className='imgheight'><img className='img-fluid rounded-4 h-100 w-100' src={ddata.image} alt="" /></div>
                <div className='p-1'>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='fw-bold'>{ddata.dishname}</span>
                        <button className='bg-success fw-bold  px-2 rounded-2 text-white'> ADD+ </button>
                    </div>
                    <div className='d-flex justify-content-between  mb-1 text-center'>
                        <span className='fs-6  fw-light'>
                            <span className='bg-warning fw-bold  p-1 rounded-2 me-2'>{ddata.dishrating}  <FontAwesomeIcon icon="fa-solid fa-star" /><br />
                            </span>155 ratings
                        </span>

                        <span className='fw-bold' >{ddata.dishprice} <FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" /></span>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <span className='fw-light mx-auto fw-bold mt-2'>{ddata.dishdescription}</span>
                    </div>
                </div>
            </a>
            <hr />
        </div>
    )

}