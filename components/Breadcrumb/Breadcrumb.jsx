
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  CategoryName,
  BreadcrumbContainer
} from './Breadcrumb.styled';


const Breadcrumb = ({ categories, onClick }) => {

  const renderCategories = useMemo(() => (
    categories?.map((category) =>
      <CategoryName
        key={category.id}
        onClick={() => onClick(category.name)}
      >
        {category.name}
      </CategoryName>)
  ), [categories]);

  return (
    <BreadcrumbContainer>
      {renderCategories}
    </BreadcrumbContainer>
  );
};

Breadcrumb.propTypes = {
  onClick: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

Breadcrumb.defaultProps = {
  categories: []
};

export default Breadcrumb;