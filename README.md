# Anime History Viewer
<img src="https://github.com/SegoCode/Anime-History-Viewer/blob/main/media/demo.png">

Simple web that allows you to share your anime history with others without the need for an account on a service like [MyAnimeList](https://myanimelist.net/) or [anilist](https://anilist.co/). This is useful if you want to share your anime history with a friend or group and don't want to create an account on one of these services just for that purpose.

To use the app, you will need a ``animesCompleted.txt`` file containing a list of the anime you have completed. Simply copy and paste the contents of this file into the app, and it will retrieve information about each anime from the Jikan API and display it in a visually appealing way.

There are a few things to keep in mind when using this app:

- The app has a rate limit of 60 requests per minute, which may cause the anime to load slowly depending on the size of your list.
- The app does not have a backend, so all information is stored in the URL. We recommend using a link shortener to share your anime history with others.
- The app uses the anime titles registered on Myanimelist, so your entries must match the titles on that platform in order for the app to work properly.

To access the app, simply visit https://segocode.github.io/Anime-History-Viewer/ From there, you can paste your "animes completed list" and share your anime history with others.
