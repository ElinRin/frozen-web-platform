import React, { useState, useContext, useEffect } from "react";
import "./ParkingWidget.css";
import { fetchParkingList, reserveParking } from "../../actions/parking";
import { ParkingInfoContext } from "../../app/Context";
import { firebaseTools } from "../../utils/firebase";


export const ParkingWidget = () => {
  const [parking, parkingDispatch] = useContext(ParkingInfoContext);

  useEffect(() => {
    async function fetchData() {
      await fetchParkingList(parkingDispatch);
    }
    if (!parking.data) {
      console.log({ parking });
      fetchData();
    }
  }, [parkingDispatch, parking]);

  let places =
    parking &&
    parking.data &&
    parking.data.length &&
    parking.data.reduce((places, item) => {
      let place;
      if (item.userId === firebaseTools.currentUser()) {
        place = (
          <div className="park-place"
            onClick={ () => {
              reserveParking(item.id, parkingDispatch)
              fetchParkingList(parkingDispatch);
            } }
            key={item.num}>
            {item.num}
            <div className="icon">
              ✓
            </div>
          </div>
        );
      } else if (item.userId === undefined) {
        place = (
          <div
            className="park-place"
            onClick={ () => {
              reserveParking(item.id, parkingDispatch)
              fetchParkingList(parkingDispatch);
            } }
            key={item.num}
          >
            {item.num}
            <div className="icon">+</div>
          </div>
        );
      } else {
        place = (
          <div className="park-place" key={item.num}>
            {item.num}
          </div>
        );
      }
      return [...places, place];
    }, []);

  console.log({ places, parking });

  return (
    <div className="parking-widget">
      <div className="parking-widget-container">
        <div className="p-row">{places}</div>
      </div>
    </div>
  );
};
