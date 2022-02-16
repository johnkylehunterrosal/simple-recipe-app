import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import './view-recipe.css';
import '../../../Helper.css';

const ViewRecipe = (props) =>  {
    const useParamsHolder = useParams().id;
    console.log("params" + useParamsHolder)
    useEffect(() => {
        if (useParamsHolder) { 
            const viewRecipe = props.recipeList.filter(({ id }) => id == useParamsHolder);
             props.setRecipe(viewRecipe[0]);
            console.log("hi" + viewRecipe)
        }          
    },[]);
  return (
    <div className='pad-top-30 pad-left-30'>
        <div className='d-flex-col d-flex-start'>
            <div>
                <h5 className='color-dark-gold font-style1'>{props.recipe.recipeName}</h5>
            </div>
            <div>
                <Rating/>
            </div>
            <div className='img-holder'>
                <img src={props.recipe.imageUrl} className='width-100per height-100per'></img>
            </div>
            <div>
                <div>
                    <h5 className='color-dark-gold font-style1'>Desciption:</h5>
                </div>
                <div>
                    <p> {props.recipe.shortDescription} </p>
                </div>
            </div>
            <div className='list-holder'>
                <div>
                    <h5 className='color-dark-gold font-style1'>Ingredients:</h5>
                </div>
                <div class="col s12">
                    <ul class="collection">
                        {props.recipe.ingredientsList.map((ingredientsLists) => {
                             return (
                                <>
                                    <li class="collection-item d-flex-start">{ingredientsLists.name}</li>
                                </>
                            )
                        })}
                     </ul>
                </div>
            </div>
            <div className='list-holder'>
                <div>
                    <h5 className='color-dark-gold font-style1'>Instructions:</h5>
                </div>
                <div class="col s12">
                    <ul class="collection">
                        {props.recipe.instructionsList.map((instructionsLists) => {
                             return (
                                <>
                                    <li class="collection-item d-flex-start">{instructionsLists.name}</li>
                                </>
                            )
                        })}
                     </ul>
                </div>
            </div>
        </div>       
    </div>
  );
}
export default ViewRecipe;