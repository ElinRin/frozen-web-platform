import React from "react";

import "./ThreeStageToggle.css";

export const ThreeStageToggle = ({index}) => {
    return (
        <>
            <div className="grid-container">
                <div className="label">
                    <p className="label-text">Label</p>
                </div>
                <div key={index}
                     className='switcher'>
                    <label className='switcher-label switcher-off' htmlFor={`off${index}`}>off</label>
                    <input id={`off${index}`}
                           className='switcher-radio-off'
                           type='radio'
                           name={`value${index}`}
                           value='off'/>

                    <label className='switcher-label switcher-neutral'
                           htmlFor={`neutral${index}`}>neutral</label>
                    <input id={`neutral${index}`}
                           className='switcher-radio-neutral'
                           type='radio'
                           name={`value${index}`}
                           value='neutral'
                           checked/>

                    <label className='switcher-label switcher-on'
                           htmlFor={`on${index}`}>on</label>
                    <input id={`on${index}`}
                           className='switcher-radio-on'
                           type='radio'
                           name={`value${index}`}
                           value='on'/>

                    <div className='switcher-slider'></div>
                </div>
            </div>
        </>
    )
};
