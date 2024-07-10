import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [lugares, setLugares] = useState(travelPlansData);

  return (
    <div>
      {lugares.map((eachLugar) => {
        return (
          <div className="travel-card"> 
          <img src={eachLugar.image} alt="" />
            <h3>
              {eachLugar.destination}{" "}
              <span>
                {"("}
                {eachLugar.days} Days
                {")"}
              </span>
            </h3>
            <p>{eachLugar.description}</p>
            <p>{eachLugar.totalCost} €</p>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
