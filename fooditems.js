import React , {Component } from 'react';
import data from '../constants/messages'

const items = data.menulist;
const content = items.map((recipe) =>
<div key={recipe.id} className="items-sec">
  <h3 className="recipe-name">{recipe.id}) {recipe.title}</h3>
  <p className="recipe-desc">{recipe.content}</p>
</div>
);
const FoodItems = () => {
    return (
      <div id="items-div">
        <h3 className="choose-item">{data.timings.selectHead}</h3>
        {content}   
      </div>
    )
  }
  
  export default FoodItems