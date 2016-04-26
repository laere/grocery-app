import React, { Component, PropTypes } from 'react';

const GroceryList = ({ items, deleteItem, completeItem }) => {
    return (
        <div>
            {Object.keys(items).map(id => {
                const item = items[id],
                      key = id;
                return (
                    <div key={item.id} className="groceryListItem">
                        <div className="groceryListItem-Data">
                            <span className={item.isComplete ? 'complete' : 'incomplete'}>{item.text}</span>
                            <span>{item.date}</span>
                        </div>
                        <button onClick={() => completeItem(key, item.id)} className="btn completeBtn">
                            <i className="fa fa-check fa-lg"></i>
                        </button>
                        <button onClick={() => deleteItem(key, item.id)} className="btn removeBtn">
                            <i className="fa fa-times fa-lg"></i>
                        </button>
                    </div>
                );
            }
        )}
        </div>
    );
}

GroceryList.propTypes = {
    items: PropTypes.object.isRequired,
    deleteItem: PropTypes.func.isRequired,
    completeItem: PropTypes.func.isRequired
}

export default GroceryList;
