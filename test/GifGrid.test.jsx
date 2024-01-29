import React from 'react';
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../src/components/GifGrid';
import {useFetchGifs} from '../src/hooks/useFetchGifs';

jest.mock('../src/hooks/useFetchGifs'); // Mock the useFetchGifs hook


describe('GifGrid', () => {
  const category = 'Test Category';


  test('renders the category correctly', () => {
    useFetchGifs.mockReturnValue({ images: [], isLoading: true });
    render(<GifGrid category={category} />);
    const categoryElement = screen.getByText(category);
    expect(categoryElement).toBeTruthy();
  });

  test('renders loading message when isLoading is true', () => {
    useFetchGifs.mockReturnValue({ images: [], isLoading: true });
    render(<GifGrid category={category} />);
    const loadingElement = screen.getByText('Loading...');
    expect(loadingElement).toBeTruthy();
  });

  test('renders GifItem components for each image',  () => { // Make the test asynchronous
    
    const images = [
      { id: 1, title: 'Image 1', url: 'https://example.com/image1.jpg' },
      { id: 2, title: 'Image 2', url: 'https://example.com/image2.jpg' },
      { id: 3, title: 'Image 3', url: 'https://example.com/image3.jpg' },
    ];
    useFetchGifs.mockReturnValue({ images: images, isLoading: false }); // Mock the hook return value
    render(<GifGrid category={category} images={images} />);
    screen.findByTestId('gif-item'); // Wait for the gif item elements to be rendered
    const gifItemElements = screen.getAllByRole('img');
    
    expect(gifItemElements.length).toBe(images.length);
  });
});