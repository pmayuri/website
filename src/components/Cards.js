import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
          <h1>checkout latest epic destination</h1>  
          <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                   <CardItem
                  src='/images/download.jpeg'
                   text='xplore the hidden waterfall deep inside'
                  path='/page1'
                   />
                   <CardItem
                  src='/images/download.jpeg'
                   text='xplore the hidden waterfall deep inside'
                  path='/page1'
                   />
                  <CardItem
                  src='/images/download.jpeg'
                   text='xplore the hidden waterfall deep inside'
                  path='/page1'
                   />
                  <CardItem
                  src='/images/download.jpeg'
                   text='xplore the hidden waterfall deep inside'
                  path='/page1'
                   />


                </ul>
                </div>  
          </div>
        </div>
    )
}

export default Cards;
