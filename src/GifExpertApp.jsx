import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';

const GifExpertApp = () => {

    // const categories = ['one punch', 'samurai x','dragon ball'];

    const [categories, setCategories] = useState(['one punch', 'samurai x','dragon ball']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'nuevo']);
    // }

    return(
    <>
    <h1>GifExpertApp</h1>
    <AddCategory> </AddCategory>
    <hr></hr>

    
    <ol>
        {
            categories.map( category =>{
                return <li key= {category} > {category} </li>
            })
        }
    </ol>
    </>
    )
};


export default GifExpertApp;