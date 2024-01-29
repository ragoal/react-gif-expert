import getGifs from '../src/helpers/getGifs';

describe('getGifs', () => {
  it('should return an array of gifs', async () => {
    const category = 'cats';
    const gifs = await getGifs(category);
    expect(gifs).toBeInstanceOf(Array);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toHaveProperty('id');
    expect(gifs[0]).toHaveProperty('title');
    expect(gifs[0]).toHaveProperty('url');
    expect(gifs[0]).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String)
        
    })
  });

  it('should return an empty array when no gifs are found', async () => {
    const category = 'nonexistentcategory';
    const gifs = await getGifs(category);
    expect(gifs).toBeInstanceOf(Array);
    expect(gifs.length).toBe(0);
  });
});