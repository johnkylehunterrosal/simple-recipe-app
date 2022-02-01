import React, {useState} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import './Helper.css'
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import SideBar from './Components/SideBar/SideBarComponent';
import MainContent from './Components/MainContent/MainContent';

const App = (props) =>  {
  const [header] = useState({
    recipeList : "Recipe Lists",
    edit : "Edit Recipe",
    saved : "Saved Recipe",
    addNew: "Add New Recipe"
  })

  const [recipe, setRecipe] = useState({
    id : 0,
    recipeName : "",
    imageUrl : "",
    shortDescription : "",
    ingredientsList : [],
    instructionsList : []
  })
  const [recipeList, setRecipeList] = useState([
    {
      id : 123,
      recipeName : "Adobo",
      imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Chicken_adobo.jpg/1200px-Chicken_adobo.jpg",
      shortDescription : "Adobo refers to a method of marinating and stewing for any cut of meat or fish in a briny mixture of vinegar, soy sauce, and spices. ",
      ingredientsList : [{name : "Garlic",id: 1},{ name : "Onion", id : 0},{ name : "Pork or Chicken", id : 2}],
      instructionsList : [{ name : "Stir-Fried Garlic and Onion", id : 12312}, { name : "Boil Chicken or Pork", id : 22312}]
    },
    {
      id : 456,
      recipeName : "Sinigang",
      imageUrl : "https://www.kawalingpinoy.com/wp-content/uploads/2013/01/sinigang-baboy-7.jpg",
      shortDescription : "The reason why it is called “sinigang” is that it was a translation to the English word, “stew” which is true because of its method of cooking. ",
      ingredientsList : [{name : "Garlic",id: 1},{ name : "Onion", id : 0},{ name : "Pork", id : 2}],
      instructionsList : [{ name : "Stir-Fried Garlic and Onion", id : 12312}, { name : "Boil Chicken", id : 22312}]
    },
    {
      id : 789,
      recipeName : "Chicken Curry",
      imageUrl : "https://images.aws.nestle.recipes/resized/219e8594dcd0b80a157994baf7197eb1_Chicken_Curry_Main_944_531.jpg",
      shortDescription : "Filipino Style Chicken Curry is a type of chicken curry cooked with potatoes, carrots and capsicum in coconut milk with mild curry powder.",
      ingredientsList : [{name : "Garlic",id: 1},{ name : "Onion", id : 0},{ name : "Chicken", id : 2}],
      instructionsList : [{ name : "Sauteed Garlic and Onion", id : 12312}, { name : "Boil Chicken", id : 22312}]
    }
  ]);
 
  return (
    <Router>
    <div class="row container-fluid mar-bot-0">
        <div class="col s1 side-bar">
          <SideBar setRecipe={setRecipe}/>
        </div>
        <div class="col s11 main-content">
          <MainContent recipe={recipe} setRecipe={setRecipe}
            recipeList={recipeList} setRecipeList={setRecipeList}
            header={header}
          />
        </div>
    </div>
    </Router>
  );
}
export default App;
