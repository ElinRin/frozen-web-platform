import React from "react";

import { ModalButton } from "../modal-button/ModalButton";

const items = [
  {'typeLabel': 'Vacation', 'daysLabel': '25 days'},
  {'typeLabel': 'Every year vacation', 'daysLabel': '25 days'},
  {'typeLabel': 'Sick leave', 'daysLabel': '13 days'},
  {'typeLabel': 'Remote work', 'daysLabel': '16 days'},
  {'typeLabel': 'Conference', 'daysLabel': '0 days'}
];

export const DaysOffLayout = () => (
  <div>
    {
      items.map(item => {
        return (<ModalButton
          typeLabel={item['typeLabel']}
          daysLabel={item['daysLabel']}
        />)
      })
    }
  </div>
);
