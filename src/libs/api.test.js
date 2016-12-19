import { getRequestUrl, getImageUrl } from '../../src/libs/api';

test('getRequestUrl returns a valid URL string', () => {
  const startApiKey = '1';
  const startSearchTerm = 'dogs';

  const finUrl = getRequestUrl(startSearchTerm, startApiKey);

  expect(finUrl).toBe(
    'https://api.flickr.com/services/rest/?api_key=1&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=24&page=1&text=dogs',
  );
});

test('getImageUrl returns a valid URL string', () => {
  const startImage = {
    farm: 1,
    id: '1',
    secret: '1',
    server: '1',
  };

  const finUrl = getImageUrl(startImage);

  expect(finUrl).toBe(
    'https://farm1.staticflickr.com/1/1_1_b.jpg',
  );
});
