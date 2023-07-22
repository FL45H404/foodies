import React, { useEffect, useState } from 'react'
import ResCard from "./ResCard"
import DummyCard from './DummyCard'
const Body = () => {
const [data,setData]=useState([])
const [listData,setListData]=useState(data)
const [searchText,setSearchText]=useState('')

useEffect(()=>{
    fetchData()
},[])

const fetchData=async()=>{
    const data=await fetch('https://www.swiggy.com/dapi/homepage/getCards?lat=12.9715987&lng=77.5945627')
    const json=await data.json()
    setData(json.data?.success?.cards[0].favourite?.cards)
    setListData(json.data?.success?.cards[0].favourite?.cards)
    // console.log(json.data?.success?.cards[0].favourite?.cards[0])
}

if (listData.length===0) return <DummyCard/>
    return (
        
        <div className="body">
            <div className='filter'>
                <div className='searchBox'>
                    <input className='search' type='text' 
                    placeholder='Search Restaurant..'
                    value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button className='btn btn-search' 
                    onClick={()=>{
                        let filterList=data.filter(
                        (item)=>item.data.name.toLowerCase().includes(searchText.toLowerCase()))
                        setListData(filterList)
                    }}>Search</button>
                </div>
        <button
        className='btn btn-all'
        onClick={()=>{
                setListData(data)
            }}>Show All</button>

        <button 
        className=' btn btn-rate'
        onClick={()=>{
               const filterList=data.filter(
                (item)=> item.data.avgRating > 4
                )
                setListData(filterList)
            }}>Top Rated Restaurant</button>

            <button 
        className='btn btn-veg'
        onClick={()=>{
               const filterList=data.filter(
                (item)=> item.data.veg ===true
                )
                setListData(filterList)
            }}>Veg Restaurant</button>

            <button 
        className='btn btn-nonveg'
        onClick={()=>{
               const filterList=data.filter(
                (item)=> item.data.veg !==true
                )
                setListData(filterList)
            }}>Non Veg Restaurant</button>

            
        </div>
            
            <div className="res-container">
            {
                listData.map((res,index)=>{
                  return  <ResCard key={res.data.id} resData={res}/>
                })
            }
            </div>
        </div>

    )
}

export default Body