import React from 'react'
import {Link} from 'react-router-dom';
import './edit.css'
import '../../../Helper.css';
import Card from '../Card/Card';
const Edit = (props) =>  {
  return (
    <div>
        <div className='header-holder d-flex-row'>
            <div className='width-50per d-flex-row'>
                <div className='width-600'>
                    <h1 className='container pad-top-25 color-dark-blue'>
                        {props.header.edit}
                    </h1>
                </div>
                <div>
                    <i class="medium material-icons pad-top-25">edit</i>
                </div>
            </div>
            <div className='width-50per d-flex-end pad-top-25'>
                <form class="col s6">
                    <div class="row">
                        <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea"></textarea>
                            <label for="textarea1">Search</label>
                         </div>
                    </div>
                </form>
            </div>
        </div>
            <div className='card-holder d-flex-center d-flex-wrap'>
                    {props.recipeList.map ((recipeLists) => {
                        return (
                            <>
                                <Card recipeLists={recipeLists}/>
                            </>
                        )
                    })} 
            </div>   
    </div>
  );
}
export default Edit;