import React from 'react';
import {render, screen} from '@testing-library/react';
import {HeaderComponent} from './header.component';

test('renders page title', () => {
  render(<HeaderComponent title="Zooosh"/>);
  const titleElement = screen.getByText(/Zooosh/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders tabs correctly', () => {
  render(<HeaderComponent title="My Title" tabs={[{render: () => <div/>, label: "My link", path: "/"}]}/>);
  const titleElement = screen.getByText(/My Title/i);
  const linkElement = screen.getByText("My link")
  expect(titleElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
