import { renderHook, waitFor} from '@testing-library/react';
import { useFetchGifs } from '../src/hooks/useFetchGifs';

describe('useFetchGifs', () => {
  it('should return initial state', () => {
    const { result } = renderHook(() => useFetchGifs('cats'));
    expect(result.current.images).toEqual([]);
    expect(result.current.isLoading).toBe(true);
  });

  it('should update state after fetching gifs', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('cats'));
    await waitFor(
        () => {
            expect(result.current.images).toEqual(expect.any(Array));
            expect(result.current.images.length).toBeGreaterThan(0);
            expect(result.current.isLoading).toBe(false);
        },
        { timeout: 3000 }
        );
    
    
  });

  it('should return empty array when no gifs are found', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('nonexistentcategory'));
    await waitFor(
        () => {
            expect(result.current.images).toEqual([]);
            expect(result.current.isLoading).toBe(false);
        },
        { timeout: 3000 }
        
    );
    
  });
});