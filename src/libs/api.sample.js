export const API_KEY = 'YOUR_API_KEY';
export const API_SECRET = 'YOUR_SECRET_KEY';

export const getRequestUrl = searchTerm =>
  `https://api.flickr.com/services/rest/?api_key=${API_KEY}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=25&page=1&text=${searchTerm}`;

export const getImageUrl = (image) => {
  if (image.id && image.farm && image.server && image.secret) {
    return `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
  }
  throw new Error('Image object is missing properties');
};
