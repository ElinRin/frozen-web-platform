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
  const [listToDisplay, setListDisplay] = useState(
    workPlaceInfo.workPlaceList || []
  );

  useEffect(() => {
    async function fetchData() {
      await fetchWorkPlaceListByFloor(0, workPlaceInfoDispatch);
    }
    fetchData();
  }, [workPlaceInfoDispatch]);

  useEffect(() => {
    setListDisplay(workPlaceInfo.workPlaceList || []);
  }, [workPlaceInfo]);

  return (
    <div>
      <div className="workplace-vertical-divs">
        <WorkplaceSearch setListDisplay={setListDisplay} />
      </div>
      <div className="workplace-vertical-divs workplace-down-row">
        <div className="workplace-left-column">
          <WorkplaceFilter
            setListDisplay={setListDisplay}
            workPlaceList={workPlaceInfo.workPlaceList || []}
          />
        </div>
        <div className="workplace-right-column">
          <WorkplaceMap listToDisplay={listToDisplay} />
        </div>
      </div>
    </div>
  );
};
