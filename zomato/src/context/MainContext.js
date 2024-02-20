import React, { createContext, useState } from 'react'
let dishContext=createContext()

export default function MainContext(props) {
    let [modalDish, setModalDish] = useState({
        dishname: "",
        dishprice: "",
        dishdescription: "",
        dishrating: "",
        image: ""
    })
    let [search, setSearch]=useState("")
  return (
    <dishContext.Provider value={
        {
            modalDish,
            setModalDish,
            search, 
            setSearch
        }
    }>
        {props.children}
    </dishContext.Provider>
  )
}
export {dishContext}