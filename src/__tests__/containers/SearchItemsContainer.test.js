import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';

import defaultTheme from 'styles/themes';
import { item, categories, initialState } from '__mocks__';
import SearchItemsContainer from 'containers/SearchItemsContainer';

const middleware = [thunk]

const mockStore = configureStore(middleware);

describe('SearchItemsContainer', () => {
  let store;
  // mock fetch api
  global.fetch = jest.fn(() =>
  Promise.resolve({
      json: () => Promise.resolve({}),
    })
  );

  beforeEach(() => {
    store = mockStore(initialState);
  });
  // This component is connected with redux store
  it('should render correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <SearchItemsContainer
          product={item}
          categories={categories}
          />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should execute fetch data function', () => {

    // We need to load the styled component theme to render
    // we need to mount the component to test the fetchData function in the use effect
    const component = mount(
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <SearchItemsContainer
            product={item}
            categories={categories}
            query={'test'}
          />
        </ThemeProvider>
      </Provider>
    );
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
