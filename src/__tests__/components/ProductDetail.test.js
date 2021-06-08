
import { shallow } from 'enzyme';

import ProductDetail from 'components/ProductDetail/ProductDetail';
import { item } from '__mocks__';

describe('ProductDetail', () => {
  it('should render correctly', () => {
    const component = shallow(<ProductDetail {...item} />);
  
    expect(component).toMatchSnapshot();
  });
});
