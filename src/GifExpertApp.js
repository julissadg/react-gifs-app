import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrind } from './components/GifGrind';
const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Flash']);
    
    // const handleAdd = () =>{
    //     setCategories((cats=>([...cats,'Crepuesculo'])));
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr/>

            <ol>
                {
                    categories.map(category =>
                           <GifGrind 
                           key={category}
                           category = {category}/>)
                }
            </ol>
        </>
    );
}

export default GifExpertApp;