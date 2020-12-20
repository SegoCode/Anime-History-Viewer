function loadTable() {
  var axios = window.axios;
  var table = document.getElementById("dataTable");
  var lines = document.getElementById("animeListArea").value.split("\n");
  for (var line = 0; line < lines.length; line++) {
    axios.get('https://api.jikan.moe/v3/search/anime?q=' + lines[line])
      .then(function(response) {
        console.log(response.data.results[0]);
        var newRow = table.insertRow(table.length);
        newRow.insertCell(0).innerHTML = "<img src='" + response.data.results[0].image_url + "'/>";
        newRow.insertCell(1).innerHTML = response.data.results[0].title;
        newRow.insertCell(2).innerHTML = response.data.results[0].score;
        newRow.insertCell(3).innerHTML = "<a target='_blank' href='" + response.data.results[0].url + "'>Show in MyAnimeList</a>";
      })
      .catch(function(error) {
        console.log(error);
      });

  }
}
