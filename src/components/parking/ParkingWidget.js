import React, { useState, useContext, useEffect } from "react";
import "./ParkingWidget.css";
import { fetchParkingList } from "../../actions/parking";
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

function freePlace(index) {}

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
      if (item.uid === "me") {
        place = (
          <div className="park-place" key={item.num}>
            {item.num}
            <div className="icon" onClick={() => freePlace(item.num)}>
              ✓
            </div>
          </div>
        );
      } else if (!item.uid) {
        place = (
          <div
            className="park-place"
            onClick={() => setMyPlace(item.num)}
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
