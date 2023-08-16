import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DummyCard from "./DummyCard";
import Menu from "./Menu";
import StarIcon from "@mui/icons-material/Star";
import ForwardIcon from "@mui/icons-material/Forward";
import { IMG_URL } from "../utils/constant";
const RestaurantMenu = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  function handleClick() {
    navigate("/");
  }
  const fetchData = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}`
    );
    const json = await res.json();
    console.log(json?.data?.cards);
    setData(json?.data?.cards);
  };
  const datalength = data.length - 1;
  if (data.length === 0) return <DummyCard />;
  const {
    name,
    cuisines,
    areaName,
    avgRating,
    totalRatingsString,
    sla,
    costForTwoMessage,
    cloudinaryImageId
  } = data[0]?.card?.card?.info;
  const { cards } = data[datalength]?.groupedCard?.cardGroupMap?.REGULAR;
  const menuCard = cards.filter(
    (item) => item.card.card.title === "Recommended"
  );
  // console.log(menuCard[0].card.card)
  return (
    <div className="menu">
      <div className="backbtn" onClick={handleClick}>
        <ForwardIcon className="backbutton" /> BACK
      </div>

      <div
        className="restaurantdetails"
        style={{
          backgroundImage: `url(${IMG_URL}${cloudinaryImageId})`,
          height: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition:"center",
        }}
      >
        <div className="restaurantname">
          <div className="res-name">{name}</div>
          <div className="res-address">
            <div className="res-cuisine">
              {cuisines.join(",")} <br />
              {areaName} {sla.lastMileTravelString}
            </div>
          </div>
        </div>
        <div className="restarauntrating">
          <div className="ratenum">
            <div className="starRate">
              <StarIcon />
            </div>
            <div className="starNum">{avgRating}</div>
          </div>
          <div className="ratetext">{totalRatingsString}</div>
        </div>
      </div>
      <div className="res-details">
        <div className="res-time">{sla.slaString}</div>
        <div className="res-price"> {costForTwoMessage}</div>
      </div>
      <div className="res-menu">
        {menuCard[0]?.card?.card?.itemCards.map((item) => (
          <Menu key={item?.card?.info?.id} data={item?.card?.info} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
