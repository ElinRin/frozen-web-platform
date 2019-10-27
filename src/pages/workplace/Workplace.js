import React, { useEffect, useState, useContext } from "react";

import {
  WorkplaceSearch,
  WorkplaceFilter,
  WorkplaceMap
} from "../../components";
import { WorkPlaceInfoContext } from "../../app/Context";
import { fetchWorkPlaceListByFloor } from "../../actions/workPlace";

import "./Workplace.css";

export const Workplace = () => {
  const [workPlaceInfo, workPlaceInfoDispatch] = useContext(
    WorkPlaceInfoContext
  );
  useEffect(() => {
    async function fetchData() {
      await fetchWorkPlaceListByFloor(0, workPlaceInfoDispatch);
    }
    fetchData();
  }, [workPlaceInfoDispatch]);

  const workPlaceList = workPlaceInfo.workPlaceList || [];
  const [listToDisplay, setListDisplay] = useState(workPlaceList);

  return (
    <div>
      <div className="workplace-vertical-divs">
        <WorkplaceSearch setListDisplay={setListDisplay} />
      </div>
      <div className="workplace-vertical-divs workplace-down-row">
        <div className="workplace-left-column">
          <WorkplaceFilter
            setListDisplay={setListDisplay}
            workPlaceList={workPlaceList}
          />
        </div>
        <div className="workplace-right-column">
          <WorkplaceMap listToDisplay={listToDisplay} />
        </div>
      </div>
    </div>
  );
};
