import React, { Component, PropTypes } from 'react';

const GroceryList = ({ items, deleteItem, completeItem }) => {
    return (
        <div>
            {console.log(items)}
            {Object.keys(items).map(id => {
                const item = items[id]
                return (
                    <div key={id}>
                        <span className={item.isComplete ? 'complete' : 'incomplete'}>{item.text}</span>
                        {' '}
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
