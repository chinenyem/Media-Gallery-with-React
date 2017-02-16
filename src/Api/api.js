const FLICKR_API_KEY ='97d3e4d84d4c60207a72ee5f4717a5e7';
//const SHUTTER_CLIENT_ID = '353ad2850c4ece6f28d2';
//const SHUTTER_CLIENT_SECRET = '335b033675ad11468ddcee9f82012d8354bb4066';

// Basic Authentication for accessing Shutterstock API

const basicAuth = () => 'Basic MzUzYWQyODUwYzRlY2U2ZjI4ZDI6MzM1YjAzMzY3NWFkMTE0NjhkZGNlZTlmODIwMTJkODM1NGJiNDA2Ng=='
let loader = true;
//.concat(window.btoa(`${SHUTTER_CLIENT_ID}: ${SHUTTER_CLIENT_SECRET}`));
const authParameters = {
  headers: {
    Authorization: basicAuth()
  }
};

//Description [Access Shutterstock search endpoint for short videos]
// @params { String } searchQuery
// @return { Array }

export const shutterStockVideos = (searchQuery) => {

        const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/videos/search?query=${searchQuery}&page=1&per_page=10`;

          setTimeout(function(){
             loader = true;
           }, 20);
            //loader = false;
              return fetch(SHUTTERSTOCK_API_ENDPOINT, authParameters)
              .then(response => {
                return response.json();
              })
              .then(json => {
                loader = false;
                for(var key in json.data) {
                    json.data[key]['loaded'] = true;
                }
                return json.data.map(({loaded, id, assets, description}) => ({
                  id,
                  mediaUrl: assets.preview_mp4.url,
                  description,
                  loaded
                }));
              })
              .catch(function() {
                    console.log("error with shutterstock api");
              });
};

export const flickrImages = (searchQuery) => {
  const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=${searchQuery}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`;

  return fetch(FLICKR_API_ENDPOINT)
  .then(response => {
    return response.json()
  })
  .then(json => {
    return json.photos.photo.map(({farm, server, id, secret, title}) => ({
      id,
      title,
      mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
    }));
  })
  .catch(function() {
        console.log("error with flickr api");

  });
};
