import React from 'react';
import { render } from '@testing-library/react';
import ActivityCard from './ActivityCard';

test('renders Card with activity', () => {
    const { getByText } = render(<ActivityCard activity="Play ball"/>);

    const activityElement = getByText("Play ball");

    expect(activityElement).toBeInTheDocument();
})
