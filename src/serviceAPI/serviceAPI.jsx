const URL = 'https://pixabay.com/api/';
const KEY = '32696912-4a05c8f7f735a3dd0164dcd85';

export default function fetchAPI(query, page = 1) {
  return fetch(
    `${URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    return response.json();
  });
}
