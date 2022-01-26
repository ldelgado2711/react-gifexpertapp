const getGifs = async (category) => {
  const API_KEY = "pDZHfO09JKjh0407zrr9yGLDMMadBbMd";
  const limite = 10;
  const URL = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=${limite}&api_key=${API_KEY}`;
  const resp = await fetch(URL);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};

export default getGifs;
