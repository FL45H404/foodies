import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DummyCard from './DummyCard'
import Menu from './Menu';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const RestaurantMenu=()=>{

    const [data,setData]=useState([])
    const {id}=useParams()

    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        const res=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&submitAction=ENTER`)
        const json=await res.json();
        console.log(json?.data?.cards)
        setData(json?.data?.cards)
    }
    const datalength=data.length-1
    if (data.length===0) return <DummyCard/>
    const {name,cuisines,areaName,avgRating,totalRatingsString,sla,costForTwoMessage}=data[0]?.card?.card?.info
    const {cards}=data[datalength]?.groupedCard?.cardGroupMap?.REGULAR
    const menuCard=cards.filter((item)=>item.card.card.title==="Recommended")
    console.log(menuCard[0].card.card)
    return (
        <div className='menu'>
            <div className="restaurantdetails">
                <div className="restaurantname">
                    <div className="res-name">
                        {name}
                    </div>
                    <div className="res-address">
                        <div className='res-cuisine'>
                            {cuisines.join(',')} <br/>
                            {areaName} {sla.lastMileTravelString}
                        </div>
                    </div>
                </div>
                <div className="restarauntrating">
                    <div className="ratenum">
                        <div className="starRate"><StarIcon/></div>
                        <div className="starNum">{avgRating}</div>
                    </div>
                    <div className="ratetext">
                        {totalRatingsString}
                    </div>
                </div>
            </div>
            <div className="res-details">
                <div className="res-time">{sla.slaString}</div>
                <div className="res-price"> {costForTwoMessage}</div>
             
            </div>
            <div className='res-menu'>
            {
                menuCard[0]?.card?.card?.itemCards.map(
                    (item)=><Menu key={item?.card?.info?.id} data={item?.card?.info} />
                    )
            }
            </div>
        </div>
    )
}

export default RestaurantMenu