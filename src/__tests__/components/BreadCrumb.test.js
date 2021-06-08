
import { shallow } from 'enzyme';

import { categories } from '__mocks__';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';

describe('Breadcrumb', () => {
  const spyFunction = jest.fn();
  it('should render correctly', () => {
    const component = shallow(
      <Breadcrumb
        onClick={spyFunction}
        categories={categories}
      />);
  
    expect(component).toMatchSnapshot();
  });
  it('should render categories', () => {
    const component = shallow(
      <Breadcrumb
        onClick={spyFunction}
        categories={categories}
      />);
      const length = component.find('.category').length;
      expect(length).toEqual(categories.length);
  });  
  it('on click function', () => {
    const component = shallow(
      <Breadcrumb
        onClick={spyFunction}
        categories={categories}
      />);
      component.find('.category').at(0).simulate('click');
      expect(spyFunction).toHaveBeenCalled();
  });
});
