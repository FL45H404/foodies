import React from 'react'
import { IMG_URL } from "../utils/constant"
import { Link } from 'react-router-dom'
const ResCard = ({resData}) => {
    const {id,name,avgRating,cuisines,cloudinaryImageId,costForTwo,sla}=resData?.info
    return (
        
        <div className="res-card">
        <Link to={'/restaurant/'+id}>
            <div className="res-image">
            <img className='resImage' 
            src={IMG_URL+cloudinaryImageId} 
            alt="" />
            </div>
            <div className='res-heading'>{name}</div>
            <div className='res-type'>{cuisines.join(',')}</div>
            <div className="res-bottom">
            <div className="rating">
            {avgRating}
            </div>
            <span className='divider'></span>
            <div className="timing">
            {sla?.slaString}
            </div>
            <span className='divider'></span>
            <div className="offercost">
            {costForTwo}
            </div>
            </div>
            </Link>
        </div>
    )
}

export default ResCard