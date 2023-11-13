interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title
    };
    
    if (tracks) {
        album.tracks = tracks;
    }
    
    return album;
}

// Creating album dictionaries using the make_album function
const album1: Album = make_album("Artist1", "Album Title 1");
const album2: Album = make_album("Artist2", "Album Title 2", 12); // Album with 12 tracks
const album3: Album = make_album("Artist3", "Album Title 3", 8); // Album with 8 tracks

// Printing the album information
console.log(album1);
console.log(album2);
console.log(album3);