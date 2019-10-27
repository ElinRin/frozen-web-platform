import React, { useContext, useEffect } from "react";
import { fetchParkingList, reserveParking } from "../../actions/parking";
import { ParkingInfoContext } from "../../app/Context";
import { firebaseTools } from "../../utils/firebase";
import "./ParkingWidget.css";

export const ParkingWidget = () => {
  const [parking, parkingDispatch] = useContext(ParkingInfoContext);
  const NAVALNY = '0qryX4FCS7XRZ2tRq10AHt9xVUB2';

  console.log(firebaseTools.currentUser());

  useEffect(() => {
    async function fetchData() {
      await fetchParkingList(parkingDispatch);
    }
    if (!parking.data) {
      fetchData();
    }
  }, [parkingDispatch, parking]);

  let places =
    parking &&
    parking.data &&
    parking.data.length &&
    parking.data.reduce((places, item) => {
      let place;
      if (item.userId === firebaseTools.currentUser() && firebaseTools.currentUser() !== NAVALNY) {
        place = (
          <div
            className="park-place"
            onClick={() => {
              if (firebaseTools.currentUser() !== NAVALNY) {
                reserveParking(item.id, parkingDispatch);
                fetchParkingList(parkingDispatch);
              }
            }}
            key={item.num}
          >
            {item.num}
            <div className="icon">✓</div>
          </div>
        );
      } else if (item.userId === undefined) {
        place = (
          <div
            className="park-place"
            onClick={() => {
              if (firebaseTools.currentUser() !== NAVALNY) {
                reserveParking(item.id, parkingDispatch);
                fetchParkingList(parkingDispatch);
              }
            }}
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

  return (
    <div className="parking-widget">
      <div className="parking-widget-container">
        <div className="p-row">{places}</div>
      </div>
    </div>
  );
};
