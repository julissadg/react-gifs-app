import React, { useEffect, useState} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrind=  ({category}) => {


    const {data:images,loading} = useFetchGifs(category);

    return (
        <>
        <h3>{category}</h3>
        {loading && <p className = "animate__flash">'Cargando...'</p> }
        <div className = "caja">
                {images.map(img => 
                    <GifGridItem 
                    key= {img.id}
                    {...img }/>
                )}
        </div>
        </>
    )
}
