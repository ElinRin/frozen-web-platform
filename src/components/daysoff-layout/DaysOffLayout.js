import React from "react";

import { ModalTimeOff } from "../modal-timeoff/ModalTimeOff";

const items = [
  { typeLabel: "Vacation", daysLabel: "25 days" },
  { typeLabel: "Every year vacation", daysLabel: "25 days" },
  { typeLabel: "Sick leave", daysLabel: "13 days" },
  { typeLabel: "Remote work", daysLabel: "16 days" },
  { typeLabel: "Conference", daysLabel: "0 days" }
];

export const DaysOffLayout = () => (
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
);
