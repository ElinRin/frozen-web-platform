import React, { useState, useContext, useEffect } from "react";
import "./ParkingWidget.css";
import { fetchParkingList } from '../../actions/parking';
import { ParkingInfoContext } from "../../app/Context";

let state = [
    { num: 1, uid: "me" },
    { num: 2, uid: "hello" },
    { num: 3, uid: "hello" },
    { num: 4 }
];

function setMyPlace(index) {
  console.log(index);
}

function freePlace(index) {

}

export const ParkingWidget = () => {
  const [parking, parkingDispatch] = useContext(ParkingInfoContext);
  useEffect(() => {
    async function fetchData() {
      console.log("parking");
      let data = await fetchParkingList(parkingDispatch);
      console.log(parking);
    }
    if (!parking.length) {
      fetchData();
    }
  }, [parkingDispatch, parking]);
  console.log(parking);
  let places = parking && parking.length && parking.forEach((item) => {
    let place;
    if (item.uid === 'me') {
      place =
      <div className="park-place" key={item.num}>{item.num}
         <div className="icon" onClick={()=>freePlace(item.num)}>✓</div>
      </div>
    } else if (!item.uid) {
      place =
      <div className="park-place" onClick={()=>setMyPlace(item.num)} key={item.num}>{item.num}
        <div className="icon">+</div>
      </div>
    } else {
      place = <div className="park-place" key={item.num}>{item.num}</div>
    }
    places.push(place);
  });

  return  (
    <div className="parking-widget">
      <div className="parking-widget-container">
        <div className="p-row">
          { places }
        </div>
      </div>
    </div>
  )
};
