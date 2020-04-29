import React from "react"
import './SeasonDisplay.css'
function getSeasonType(lat,month){
    let season = '';
    console.log(month, lat);
    if(month > 2 && month < 9){
        season = lat > 0? 'summer': 'winter';
    }else{
        season = lat < 0? 'winter': 'summer';

    }
    return season
}
let SeasonDisplay = (props) =>{
    let season = getSeasonType(props.lat, new Date().getMonth());

    const seasonConfig = {
        winter:{
            text: "Bur'r,It so cold",
            iconName: "snowflake"
        },
        summer:{
            text: "Yaay, Lets go to the beach",
            iconName: "sun"
        },
    };

    const {text, iconName}  = seasonConfig[season];





    return (
            <div className={` col-lg-12 season-display ${season}`}>
                <i className={` icon-left massive ${iconName} icon`} />
                <h1>{text} hiuhihklm</h1>
                <i className={`icon-right massive ${iconName} icon`} />
            </div>
           )
};





export default SeasonDisplay;