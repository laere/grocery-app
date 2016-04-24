import React, { Component, PropTypes } from 'react';


const GroceryList = ({ items, deleteItem, completeItem }) => {
    return (
        <div>
            {items.map((item, index) => {
                return (
                    <div key={index}>
                        <span className={item.isComplete ? 'complete' : 'incomplete'}>{item.text}</span>
                        <span>{item.date}</span>
                        <button onClick={() => completeItem(id)}>
                            <i className="fa fa-check fa-lg"></i>
                        </button>
                        <button onClick={() => deleteItem(id)}>
                            <i className="fa fa-times fa-lg"></i>
                        </button>
                    </div>
                );
            }
        )}
        </div>
    );
}

export default GroceryList;
