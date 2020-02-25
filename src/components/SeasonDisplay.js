import React from "react"
function getSeasonType(lat,month){
    let season = '';
    if(month > 2 && month < 9){
        season = lat > 0? 'summer': 'winter';
    }else{
        season = lat < 0? 'winter': 'summer';

    }
    return season
}
let SeasonDisplay = (props, month) =>{
    const seasonConfig = {winter:"It so cold", summer:"Yaay, Lets go to the beach"}
    let season = getSeasonType(props, month);




    return <div> Season Display{seasonConfig[season]} </div>;
};





export default SeasonDisplay;