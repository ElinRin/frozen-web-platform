import React, {useEffect, useState, useContext} from "react";

import {WorkplaceSearch, WorkplaceFilter, WorkplaceMap} from "../../components";
import {WorkPlaceInfoContext} from "../../app/Context";
import {fetchWorkPlaceListByFloor} from "../../actions/workPlace";

export const Workplace = () => {

  const [workPlaceInfo, workPlaceInfoDispatch] = useContext(WorkPlaceInfoContext);
  useEffect(async () => {
    await fetchWorkPlaceListByFloor(0, workPlaceInfoDispatch)
  }, []);

  const workPlaceList = workPlaceInfo.workPlaceList || [];
  const [listToDisplay, setListDisplay] = useState(workPlaceList);
  // console.log(workPlaceInfo);

  return (
    <div className="home-container">
      <WorkplaceSearch setListDisplay={setListDisplay}/>
      <WorkplaceFilter setListDisplay={setListDisplay} workPlaceList={workPlaceList}/>
      <WorkplaceMap listToDisplay={listToDisplay}/>
    </div>
  )
};
