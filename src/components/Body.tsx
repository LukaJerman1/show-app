import React from 'react';

import { Link } from 'react-router-dom';
import { ElementFlags } from 'typescript';

import TilesFn from './Tiles';

interface TilesFn{
    id: number;
    name: string;
    picture?: string;
}

interface BodyProps{
    elements: TilesFn[];
}

function Body(props: BodyProps){

    const {elements} = props;

    return(
        <div className="container">
            {elements.map((el) => (
                <Link key={el.name} to={`/${el.name}`}>
                    <TilesFn id={el.id} name={el.name} picture={el.picture}></TilesFn>
                </Link>
                        
            ))}
        </div>
    )
}

export default Body;
