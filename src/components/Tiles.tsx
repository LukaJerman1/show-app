import React from 'react';

interface TilesProps{
    id: number;
    name: string;
    picture?: HTMLInputElement | string;
}

function TilesFn(props:TilesProps){
    return(
    <div className="boxTiles">
    <img src={String(props.picture)} height="200px" width="200px"/> <br />
    {props.name}
    </div>
    )
}

export default TilesFn;