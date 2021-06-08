
import { shallow } from 'enzyme';

import TopBar from 'components/TopBar/TopBar';

describe('TopBar', () => {
  const spyFunction = jest.fn();
  it('should render correctly', () => {
    const component = shallow(
      <TopBar onClick={spyFunction} />);
  
    expect(component).toMatchSnapshot();
  });
  it('on click function', () => {
    const component = shallow(
      <TopBar onClick={spyFunction} />);
      component.find('.search').at(0).simulate('click');
      expect(spyFunction).toHaveBeenCalled();
  });
});
