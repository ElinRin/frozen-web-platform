import React, { useEffect, useState } from "react";

import { ModalTimeOff } from "../modal-timeoff/ModalTimeOff";
import { firebaseTools } from "../../utils/firebase";


export const DaysOffLayout = () => {

  const [daysOff, setDaysOff] = useState({
    everyYearVacation: 0,
    leaveWithoutPay: 0,
    sickLeave: 0,
    remoteWork: 0,
    conference: 0
  });

  useEffect(() => {
    firebaseTools.daysOff().then(a => {setDaysOff(a)});
  }, []);

  const items = [
    {typeLabel: "everyYearVacation", daysLabel: daysOff.everyYearVacation},
    {typeLabel: "leaveWithoutPay", daysLabel: daysOff.leaveWithoutPay},
    {typeLabel: "sickLeave", daysLabel: daysOff.sickLeave},
    {typeLabel: "remoteWork", daysLabel: daysOff.remoteWork},
    {typeLabel: "conference", daysLabel: daysOff.conference}
  ];

  return (
    <div>
      {items.map((item, idx) => {
        return (
          <ModalTimeOff
            key={idx}
            typeLabel={item["typeLabel"]}
            daysLabel={item["daysLabel"]}
          />
        );
      })}
    </div>
  )
};


