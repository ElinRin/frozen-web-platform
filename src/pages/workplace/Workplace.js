import React, { useEffect, useState, useContext } from "react";

import { WorkplaceFilter, WorkplaceMap, Loader } from "../../components";
import { WorkPlaceInfoContext } from "../../app/Context";
import { fetchWorkPlaceListByFloor } from "../../actions/workPlace";
import { ProfileContext } from "../../app/Context";

import "./Workplace.css";

export const Workplace = () => {
  const [profile] = useContext(ProfileContext);
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

  return profile.userId ? (
    <div>
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
  ) : (
    <Loader />
  );
};
