import React from 'react';
import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('GifExpertApp', () => {
  test('renders the app title correctly', () => {
    render(<GifExpertApp />);
    const titleElement = screen.getByText('GifExpertApp');
    expect(titleElement).toBeTruthy();
  });

//   test('renders the AddCategory component', () => {
//     render(<GifExpertApp />);
//     const addCategoryElement = screen.getByTestId('add-category');
//     expect(addCategoryElement).toBeInTheDocument();
//   });

//   test('renders the GifGrid component for each category', () => {
//     const categories = ['One Punch', 'Dragon Ball'];
//     render(<GifExpertApp />);
//     screen.debug();
//     categories.forEach((category) => {
//       const gifGridElement = screen.getByText(category);
//       expect(gifGridElement).toBeTruthy();
//     });
//     });
}
);

