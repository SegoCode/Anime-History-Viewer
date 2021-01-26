async function loadTable() {

  var url = new URL(window.location);
  var shareList = url.searchParams.get("share");
  if (!shareList || 0 === shareList.length) {
    document.getElementById("shareButton").style.display = "";
  }

  var axios = window.axios;
  var table = document.getElementById("dataTable");
  var footerText = document.getElementById("footerText");
  var lines = document.getElementById("animeListArea").value.split("\n");
  for (var line = 0; line < lines.length; line++) {
    //Bypass "Too Many request"?
    await new Promise(r => setTimeout(r, 300));

    axios.get('https://api.jikan.moe/v3/search/anime?q=' + lines[line])
      .then(function(response) {
        //console.log(response.data.results[0]);
        var newRow = table.insertRow(table.length);
        newRow.insertCell(0).innerHTML = "<img src='" + response.data.results[0].image_url + "'/>";
        newRow.insertCell(1).innerHTML = response.data.results[0].title;
        newRow.insertCell(2).innerHTML = response.data.results[0].score;
        newRow.insertCell(3).innerHTML = "<a target='_blank' href='" + response.data.results[0].url + "'>Show in MyAnimeList</a>";

        footerText.innerHTML = "Animes: " + (table.rows.length) + "  (。O⁄ ⁄ω⁄ ⁄ O。)";
      })
      .catch(function(error) {
        console.log(error);
      });
  }

}

function loadView() {
  var url = new URL(window.location);
  var shareList = url.searchParams.get("share");
  if (!(!shareList || 0 === shareList.length)) {
    var animeListArea = document.getElementById("animeListArea");
    animeListArea.value = b64_to_utf8(shareList);

    animeListArea.style.display = "none";
    document.getElementById("loadButton").style.display = "none";
    document.getElementById("shareButton").style.display = "none";

    loadTable();
  }
}

function share() {
  const tmpObj = document.createElement('textarea');
  var urlShare = "https://"+ window.location.hostname + window.location.pathname + "?share=" + utf8_to_b64(GetCellValues());
  tmpObj.value = urlShare;
  document.body.appendChild(tmpObj);
  tmpObj.select();
  document.execCommand('copy');
  document.body.removeChild(tmpObj);
  document.getElementById('shareButton').innerHTML = "Copied";
}

function GetCellValues() {
  var dataLoaded = "";
  var table = document.getElementById("dataTable");
  for (var r = 0, n = table.rows.length; r < n; r++) {
    dataLoaded = dataLoaded + table.rows[r].cells[1].innerHTML + "\n";
  }
  return dataLoaded;
}


function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}
