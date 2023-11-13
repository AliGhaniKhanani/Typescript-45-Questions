function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Creating album dictionaries using the make_album function
var album1 = make_album("Artist1", "Album Title 1");
var album2 = make_album("Artist2", "Album Title 2", 12); // Album with 12 tracks
var album3 = make_album("Artist3", "Album Title 3", 8); // Album with 8 tracks
// Printing the album information
console.log(album1);
console.log(album2);
console.log(album3);
