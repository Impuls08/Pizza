import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({activeCategory, items, onClickCategory}) => {


  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Всi
        </li>
        {items &&
          items.map((name, index) => 
            <li 
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)} 
              key={`${name}_${index}`}>{name}
            </li> )
        }
      </ul>
    </div>
  );
});

Categories.propTypes = {
  // activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func
};

Categories.defaultProps = {activeCategory: 0, items: []}

export default Categories;