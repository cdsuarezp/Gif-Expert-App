import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['one punch', 'samurai x','dragon ball'];

    const [categories, setCategories] = useState(['one punch']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'nuevo']);
    // }

    return(
    <>
    <h1>GifExpertApp</h1>
    <AddCategory setCategories = {setCategories}> </AddCategory>
    <hr></hr>

    
    <ol>
        {
            categories.map( category => 
            <GifGrid
            key={category}
            category={category}
            />
            )
        }
    </ol>
    </>
    )
};


export default GifExpertApp;