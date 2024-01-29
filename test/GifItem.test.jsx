import React from 'react';
import { render, screen } from '@testing-library/react';
import { GifItem } from '../src/components/GifItem';


describe('GifItem', () => {


    test('debe hacer match con snapshot', () => {

        const title = 'Test Title';
        const url = 'https://example.com/image.jpg';
        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    });


  test('renders the title and image correctly', () => {
    const title = 'Test Title';
    const url = 'https://example.com/image.jpg';

    const { getByAltText, getByText } = render(<GifItem title={title} url={url} />);
    const imageElement = getByAltText(title);
    const titleElement = getByText(title);

    expect(imageElement).toBeTruthy;
    expect(imageElement.src).toBe(url);
    expect(titleElement).toBeTruthy;
  });

  
});