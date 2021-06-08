
import { shallow } from 'enzyme';

import { item, categories } from '__mocks__';
import ItemDetailContainer from 'containers/ItemDetailContainer';

describe('ItemDetailContainer', () => {
  it('should render correctly', () => {
    const component = shallow(
      <ItemDetailContainer
        product={item}
        categories={categories}
    />);
    expect(component).toMatchSnapshot();
  });
});
