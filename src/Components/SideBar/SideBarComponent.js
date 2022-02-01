import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
import '../../Helper.css'

const SideBar = (props) =>  {
  const [icons] = useState([
    {
      iconName : "list", labelName : "MENU", pathName : "/"
    },
    {
      iconName : "edit", labelName : "EDIT", pathName : "/edit"
    },
    {
      iconName : "bookmark", labelName : "SAVED", pathName : "/saved"
    },
    {
      iconName : "add_circle", labelName : "ADD NEW", pathName : "/add-new"
    }
  ]);
  const refreshData = () => {
    props.setRecipe(prevState => {
      return {...prevState, recipeName : "", imageUrl : "", shortDescription : "", id : "", ingredientsList : [], instructionsList : []};
  });
  }  
   return (
      <div className="container-fluid">
        <div className='logo'>
          <div>
            <Link to="/">
              <i class="medium material-icons logo">restaurant_menu</i>
            </Link>
          </div>
        </div>
        <div className='line pad-bot-20'>
          <hr></hr>
        </div>
        <div className='buttons'>
          {icons.map( (icon) => {
            return (
              <>
                <Link to={icon.pathName} onClick={refreshData}>
                  <div className='pad-bot-20'>
                  <a class="btn-floating btn-large pulse"><i class="material-icons medium color-light-red">{icon.iconName}</i></a>
                  </div>
                  <div className='pad-bot-20 color-white'>
                    {icon.labelName}
                  </div>
                  </Link>
            </>
            )
          })}
        </div>
      </div>
    );
  }
  export default SideBar;