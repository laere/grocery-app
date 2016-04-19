import React, { Component, PropTypes } from 'react';
import Button from './Button';

const GroceryList = ({ items }) => {
    return (
        <div>
            {items.map(item =>
                <div key={item.id}>
                    <span>{item.text}</span>
                    <span>{item.date}</span>
                    <Button icon="fa fa-check fa-lg"/>
                    <Button icon="fa fa-times fa-lg"/>
                </div>
            )}
        </div>
    );
}

export default GroceryList;
