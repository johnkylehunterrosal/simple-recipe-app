import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Rating } from 'react-simple-star-rating'
import '../../../Helper.css';
import './card.css'

const Card = (props) =>  { 
    const pageParam = useLocation().pathname == "/edit" ? "/edit" : "/view-recipe";
    console.log('useLocation', useLocation());
  return (
    <div className='card-container'>
        <div className=''>
                    <div class="card" key={props.recipeLists.id}>
                        <div class="card-image">
                        <Link to={`${pageParam}/${props.recipeLists.id}`}>
                            <img src={props.recipeLists.imageUrl} className='width-100per height-100per'></img>
                                    <span class="card-title color-white font-style1">
                                        {props.recipeLists.recipeName}
                                    </span>
                        </Link>
                        </div>
                        <div class="card-content">
                            <Link to={`${pageParam}/${props.recipeLists.id}`}>
                                <div className='description d-flex-start'>
                                     <p className='color-dark-blue'>
                                        {props.recipeLists.shortDescription}
                                    </p>
                                </div>
                            </Link>
                            <div className='d-flex-row rating'>
                                <div className='width-50per d-flex-start'>
                                    <Rating />
                                </div>
                                <div className='width-50per d-flex-end color-dark-gold'>
                                    <i class="medium material-icons">bookmark_border</i>
                                    {/* <i class="medium material-icons">bookmark</i> */}
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    </div>   
  );
}
export default Card;