import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import RocketItem from './RocketItem';
import RocketPage from './RocketPage';
import RocketTest from './rocketsReducer';

const rocket = {
  id: '2',
  name: 'Falcon 2',
  description: 'Good rocket!',
  flickr_images: 'hi',
  reserved: false,
};

jest.mock('axios');
describe('Rockets must pass the test', () => {
  test('added Rockets must return data', () => {
    expect(RocketTest.addedRockets()).toBeDefined();
  });
  test('added Rockets return value length must be 4', () => {
    expect(RocketTest.addedRockets()).toHaveLength(3);
  });
  test('added Rockets must return name t', () => {
    expect(RocketTest.addedRockets()[2].description).toBe('Amazing rocket!');
  });
});

describe('Rockets component', () => {
  it('renders Rockets component', () => {
    const rendering = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <RocketPage />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(rendering).toMatchSnapshot();
  });
  it('renders Rocket component', () => {
    const itemMock = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <RocketItem
            id={rocket.id}
            name={rocket.name}
            description={rocket.description}
            Image={rocket.flickr_images}
            reserved={rocket.reserved}
          />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(itemMock).toMatchSnapshot();
  });
});
