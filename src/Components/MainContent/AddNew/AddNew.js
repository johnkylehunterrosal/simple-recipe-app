import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom';
import './add-new.css';
import '../../../Helper.css';

const AddNew = (props) =>  {
    const [ingredientsHolder, setIngredientsHolder] = useState({
        id : 0,
        name : ""
    });
    const [instructionsHolder, setInstructionsHolder] = useState({
        id : 0,
        name : ""
    });
    
    // ONCHANGE
    const handleRecipeName = (e) => props.setRecipe(prevState => {
        return {...prevState,recipeName : e.target.value}   
    });
    const handleImageUrl = (e) => props.setRecipe(prevState => {
        return {...prevState,imageUrl : e.target.value}   
    });
    const handleShortDescription = (e) => props.setRecipe(prevState => {
        return {...prevState,shortDescription : e.target.value}   
    });
    const handleIngredients = (e) => {
        setIngredientsHolder(prevState => {
            return {...prevState, name : e.target.value}
       });
    }
    const handleInstructions = (e) => {
        setInstructionsHolder(prevState => {
            return {...prevState, name : e.target.value}
       });
    }

    // ONCLICK
    const clickAddIngredients = (e) => {
        e.preventDefault();
        props.setRecipe(prevState => {
            ingredientsHolder.id = Math.floor(Math.random()*90000) + 10000;
            return{...prevState, ingredientsList: prevState.ingredientsList.concat(ingredientsHolder)}; 
        })
        setIngredientsHolder(prevState => {
            return{...prevState, name : "", id : ""};
        })
    }
    const clickDelIngredients = (ingredientsID) => {
        props.setRecipe(prevState => {
            const ingList =  prevState.ingredientsList.filter(({ id }) => id !== ingredientsID);
            return {...prevState, ingredientsList : ingList};
        })
        setIngredientsHolder(prevState => {
            return{...prevState, name : "", id : ""};
        })
    }  
    const clickAddInstructions = (e) => {
        e.preventDefault();
        props.setRecipe(prevState => {
            instructionsHolder.id = Math.floor(Math.random()*90000) + 10000;
            return{...prevState, instructionsList: prevState.instructionsList.concat(instructionsHolder)}; 
        })
        setInstructionsHolder(prevState => {
            return{...prevState, name : "", id : ""};
        })
    }
    const clickDelInstructions = (ingredientsID) => {
        props.setRecipe(prevState => {
            const ingList =  prevState.instructionsList.filter(({ id }) => id !== ingredientsID);
            return {...prevState, instructionsList : ingList};
        })
        setInstructionsHolder(prevState => {
            return{...prevState, name : ""};
        })
    }
    const clickSaveRecipe = () => { 
        props.setRecipeList(prevState => { 
            props.recipe.id = Math.floor(Math.random()*90000) + 10000;;
            return [...prevState, props.recipe];
        })  
        props.setRecipe(prevState => {
            return {...prevState, recipeName : "", imageUrl : "", shortDescription : "", id : "", ingredientsList : [], instructionsList : []};
        });
       alert("Your Recipe has been Saved!!!!!!!!"); 
    }
    const useParamsHolder = useParams().id;
    console.log("params" + useParamsHolder)
    useEffect(() => {
        if (useParamsHolder) { 
            const editHolder = props.recipeList.filter(({ id }) => id == useParamsHolder);
             props.setRecipe(editHolder[0]);
            console.log("hi" + editHolder)
        }          
    },[]);
    const clickUpdateRecipe = () => {
        const updatedRecipe = props.recipeList.map((recipe) => { 
            if (recipe.id == useParamsHolder) {
                recipe = props.recipe;
            }
            return recipe;
        });
        props.setRecipeList(updatedRecipe);
        console.log("hello" + updatedRecipe)
        alert("Data Updated ")
        }
  return (
    <div>

        <div className='container header-holder'>
            <div className='width-100per d-flex-center'>
                <h1 className='pad-top-25 color-dark-blue'>
                    {useParams().id ? props.header.edit :  props.header.addNew}
                 </h1>
            </div>
        </div>
        <div className='container'>
           <div className='content-holder pad-top-10'>
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="first_name2" type="text" class="validate" onChange={handleRecipeName} value={props.recipe.recipeName} ></input>
                                <label class="active" for="first_name2">Recipe Name</label>
                        </div>
                        <div class="input-field col s12">
                            <input id="first_name2" type="text" class="validate" onChange={handleImageUrl} value={props.recipe.imageUrl} ></input>
                                <label class="active" for="first_name2">Image URL</label>
                        </div>
                        <div class="input-field col s12">
                            <input id="first_name2" type="text" class="validate" onChange={handleShortDescription} value={props.recipe.shortDescription} ></input>
                                <label class="active" for="first_name2">Short Description</label>
                        </div>
                        <div class="input-field col s12 d-flex-row">
                            <input id="first_name2" type="text" class="validate" onChange={handleIngredients} value={ingredientsHolder.name} ></input>
                                <label class="active" for="first_name2">Add Ingredients</label>
                            <div>
                                <button class="btn waves-effect waves-light" name="action" onClick={clickAddIngredients}>Add Ingredients</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12">
                                <ul class="collection">
                                {props.recipe.ingredientsList.map((ingredientsLists) => {
                                    return (
                                        <>
                                           <li class="collection-item "><div>{ingredientsLists.name}<a href="#!" class="secondary-content"><i class="material-icons hand-hover" onClick={() => clickDelIngredients(ingredientsLists.id)}> onclclose</i></a></div></li>
                                        </>
                                    )
                                })}
                            </ul>
                            </div>
                        </div>
                        <div class="input-field col s12 d-flex-row">
                            <input id="first_name2" type="text" class="validate" onChange={handleInstructions} value={instructionsHolder.name} ></input>
                                <label class="active" for="first_name2">Add Ingredients</label>
                            <div>
                                <button class="btn waves-effect waves-light" name="action" onClick={clickAddInstructions}>Add Ingredients</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12">
                            <ul class="collection">
                                {props.recipe.instructionsList.map((instructionsLists) => {
                                    return (
                                        <>
                                           <li class="collection-item" value={props.recipe.instructionsList}><div>{instructionsLists.name}<a href="#!" class="secondary-content"><i class="material-icons hand-hover" onClick={() => clickDelInstructions(instructionsLists.id)}>close</i></a></div></li>
                                        </>
                                    )
                                })}
                            </ul>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='container header-holder'>
                <div className='width-100per d-flex-center row'>
                   <div class="cols s4">
                       <Link to="/">
                           { useParams().id
                            ?
                            <button class="btn waves-effect waves-light" name="action" onClick={clickUpdateRecipe}>Update Recipe</button>
                            :
                            <button class="btn waves-effect waves-light" name="action" onClick={clickSaveRecipe}>Save Recipe</button>
                           }
                        </Link>
                    </div>
                </div>
            </div>
           </div>
        </div>
    </div>
  );
}
export default AddNew;