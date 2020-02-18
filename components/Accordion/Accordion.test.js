import React from 'react';
import { render } from '@testing-library/react';
import Accordion from '.';

test('render Accordion with title', () => {
    const { getByText } = render(<Accordion title="title">Hello</Accordion>);

    const titleElement = getByText("title");
    const childrenElement = getByText("Hello");

    expect(childrenElement).toBeInTheDocument();
})

test('render Accordion with children', () => {
    const { getByText } = render(<Accordion title="title">Child</Accordion>);

    const childElement = getByText("Child");

    expect(childElement).toBeInTheDocument();
})
