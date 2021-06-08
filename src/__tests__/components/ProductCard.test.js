
import { shallow } from 'enzyme';

import ProductCard from 'components/ProductCard/ProductCard';
import { item } from '__mocks__';

describe('ProductCard', () => {
  it('should render correctly', () => {
    const component = shallow( <ProductCard {...item} />);
  
    expect(component).toMatchSnapshot();
  });
});
