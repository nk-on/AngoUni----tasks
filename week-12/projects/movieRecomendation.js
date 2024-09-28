function displayData(data){
    const movie = data.results[0];
    console.log(`Title: ${movie.title}`)
    console.log(`Year: ${new Date(movie.release_date).getFullYear()}`);
    const moviePopularity = movie.popularity;
    if(moviePopularity >= 80){
      console.log("You should watch this movie !")
    }else if(moviePopularity <= 50){
      console.log("You should avoid watching this movie !")
    }
};
async function fetchData() {
  const movie = 'The Lord of the Rings: The Fellowship of the Ring'
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjE3YjljZDQyMWNlNWVhY2VlM2I2NWMxMzk2YzY2MyIsIm5iZiI6MTcyNzIwMzEzNi42NjgwNjEsInN1YiI6IjY2ZjMwNTlmNTgzYzU2Y2RiMTI2N2U2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iygBXMXh8z9DLIA2ahi-322jOAkTl_VkWB2fjqbV9lQ",
    },
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
    options
  );
  const data = await res.json();
  displayData(data);
};
fetchData();