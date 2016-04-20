import React, { Component, PropTypes } from 'react';
import Button from './Button';

const GroceryList = ({ items, deleteItem }) => {
    return (
        <div>
            {items.map(item =>
                <div key={item.id}>
                    <span>{item.text}</span>
                    <span>{item.date}</span>
                    <button>
                        <i className="fa fa-check fa-lg"></i>
                    </button>
                    <button onClick={deleteItem}>
                        <i className="fa fa-times fa-lg"></i>
                    </button>
                </div>
            )}
        </div>
    );
}

export default GroceryList;
