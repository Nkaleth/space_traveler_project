import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import MissionsPage from './Missions';
import { fetchMissions, leaveMission, reserveMission } from '../redux/missions/missionsSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../redux/missions/missionsSlice', () => ({
  fetchMissions: jest.fn(),
  leaveMission: jest.fn(),
  reserveMission: jest.fn(),
}));

describe('Missions Page', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockImplementation((selectorFn) => selectorFn({
      missions: {
        missions: [
          {
            mission_id: '1',
            mission_name: 'Mission 1',
            description: 'Mission 1 description',
            reserved: false,
          },
          {
            mission_id: '2',
            mission_name: 'Mission 2',
            description: 'Mission 2 description',
            reserved: true,
          },
        ],
      },
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('component matches snapshot', () => {
    const { asFragment } = render(<MissionsPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('dispatches fetchMissions action if missions array is empty', () => {
    useSelector.mockImplementation((selectorFn) => selectorFn({
      missions: {
        missions: [],
      },
    }));

    render(<MissionsPage />);

    expect(fetchMissions).toHaveBeenCalledTimes(1);
  });

  it('dispatches reserveMission when Join Mission button is clicked', () => {
    render(<MissionsPage />);

    const joinMissionButton = screen.getByText('Join Mission');
    fireEvent.click(joinMissionButton);

    expect(reserveMission).toHaveBeenCalledTimes(1);
    expect(reserveMission).toHaveBeenCalledWith('1'); // assuming mission_id is '1'
  });

  it('dispatches leaveMission when Leave Mission button is clicked', () => {
    render(<MissionsPage />);

    const leaveMissionButton = screen.getByText('Leave Mission');
    fireEvent.click(leaveMissionButton);

    expect(leaveMission).toHaveBeenCalledTimes(1);
    expect(leaveMission).toHaveBeenCalledWith('2'); // assuming mission_id is '2'
  });
});
