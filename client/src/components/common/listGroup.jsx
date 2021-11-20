import React from 'react'
//props listed below //
const ListGroup = ({ items, textProperty, valueProperty, selectedItem, onItemSelect }) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={item === selectedItem ? 'list-group-item active' : 'list-group-item'}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  )
}

//Here are the default props from list group ///

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
}

export default ListGroup

// Customizable List Group
