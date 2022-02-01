import React from 'react'
import { Switch, Route } from "react-router-dom";
import RecipeList from './RecipeList/RecipeList';
import './main-content.css'
import Edit from './Edit/Edit';
import Saved from './Saved/Saved';
import AddNew from './AddNew/AddNew';
import ViewRecipe from './ViewRecipe/ViewRecipe';

const MainContent = (props) =>  {
  return (
 
    <div className='main-content'>
        <Switch>
            <Route path="/" exact> 
                <RecipeList  header={props.header} recipeList={props.recipeList}/>
            </Route>
            <Route path="/edit" exact>
                <Edit header={props.header} recipeList={props.recipeList}/>
            </Route>
            <Route path="/edit/:id" exact>
            <AddNew recipe={props.recipe} setRecipe={props.setRecipe}
                    recipeList={props.recipeList} setRecipeList={props.setRecipeList}
                    header={props.header}/>
            </Route>
            <Route path="/saved" exact>
                <Saved header={props.header} recipeList={props.recipeList}/>
            </Route>
            <Route path="/add-new" exact>
                <AddNew recipe={props.recipe} setRecipe={props.setRecipe}
                    recipeList={props.recipeList} setRecipeList={props.setRecipeList}
                    header={props.header}/>
            </Route>
            <Route path="/view-recipe" exact>
                <ViewRecipe recipe={props.recipe} setRecipe={props.setRecipe}
                    recipeList={props.recipeList} setRecipeList={props.setRecipeList}/>
            </Route>
            <Route path="/view-recipe/:id" exact>
                <ViewRecipe recipe={props.recipe} setRecipe={props.setRecipe}
                    recipeList={props.recipeList} setRecipeList={props.setRecipeList}/>
            </Route>
        </Switch>
    </div>
    
  );
}
export default MainContent;