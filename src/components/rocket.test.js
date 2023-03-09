import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import RocketPage from './RocketPage';
// import { fetchMissions, leaveMission, reserveMission } from '../redux/missions/missionsSlice';
import { getRocketItems, reserveRocket } from '../redux/rockets/rocketsSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../redux/missions/rocketSlice', () => ({
  getRocketItems: jest.fn(),
  reserveRocket: jest.fn(),
}));

describe('Rocket Page', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockImplementation((selectorFn) => selectorFn({
      missions: {
        Rockets: [
          {
            id: '1',
            name: 'Falcon 1',
            description: 'Bad Rocket!',
            flickr_images: 'hello',
            reserved: false,
          },
          {
            id: '2',
            name: 'Falcon 2',
            description: 'Good rocket!',
            flickr_images: 'hi',
            reserved: false,
          },
        ],
      },
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('component matches snapshot', () => {
    const { asFragment } = render(<RocketPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('dispatches fetchMissions action if missions array is empty', () => {
    useSelector.mockImplementation((selectorFn) => selectorFn({
      missions: {
        missions: [],
      },
    }));

    render(<RocketPage />);

    expect(getRocketItems).toHaveBeenCalledTimes(1);
  });

  it('dispatches reserveMission when Join Mission button is clicked', () => {
    render(<RocketPage />);

    const joinMissionButton = screen.getByText('Join Mission');
    fireEvent.click(joinMissionButton);

    expect(reserveRocket).toHaveBeenCalledTimes(1);
    expect(reserveRocket).toHaveBeenCalledWith('1'); // assuming mission_id is '1'
  });

  it('dispatches leaveMission when Leave Mission button is clicked', () => {
    render(<RocketPage />);

    const leaveMissionButton = screen.getByText('Leave Mission');
    fireEvent.click(leaveMissionButton);

    expect(reserveRocket).toHaveBeenCalledTimes(1);
    expect(reserveRocket).toHaveBeenCalledWith('2'); // assuming mission_id is '2'
  });
});
