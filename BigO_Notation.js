//Big O Notation is a way to denote the worst-case scenario
Constant O(1)
Linear O(n)
Quadratic O(n ^ 2) or O(n * m)
Factorial O(n!)
Logarithmic O(log n)
Analyze two functions that do the same thing.
Big O of Algorithm is measured by:

Time Complexity - the amount of time it takes the function to complete.It is measured in the number of steps an algorithm takes rather than measures of time, like seconds or minutes

Space complexity - the amount of memory(RAM) required for an algorithm to run.

Each complexity can be described with a notation of 0(n): Where n represents the number of elements


const artists = [
    {
        name: "Miles Davis",
        albums: [
            {
                title: "In a Silent Way",
                songs: ["Shhh/Peaceful", "In a Silent Way/It's About That Time"],
            },
            {
                title: "Milestones",
                songs: [
                    "Dr. Jekyl",
                    "Sid's Ahead",
                    ///...
                ],
            },
        ],
    },
    {
        name: "Dolly Parton",
        albums: [
            {
                title: "Jolene",
                songs: [
                    //...
                ],
            },
            {
                title: "9 to 5 and Other Odd Jobs",
                songs: [
                    // ...
                ],
            },
        ],
    },
];
//CONSTANT 0(1)
"Play the first song from The Star Wars Soundtrack."
const getFirstSongFromPlaylist = (album) => {
    console.log(album[0]);
};
//Big O complexity of constant always takes the SAME TIME and MEMORY to execute no matter the INPUT SIZE

//LINEAR 0(n)
"What songs are on the playlist of eponymous debuts?"
const printSongs = (album) => {
    for (let n = 0; n < album.length; n++) {
        console.log(album[n]);
    }
};

//For each added song to the Array, the amounf of time it takes to complete this is increased by 1 step.Algorithm
//If the Array(or playlist ) has 1 item, it will take 1 step complete

//Quadratic Complexity 0(n*m) or 0(n^2)
"List every song on all albums"
const PrintSongsWithinAlbums = (artist) => {
    for (let n = 0; n < artist.albums.length; n++) {
        for (let m = 0; m < artist.album.songs.length; m++) {
            console.log(artist.album[n].songs[m]);
        }
    }
};
//O(n) * O(m) = O(n*m)
//O(n) * O(n) O(n*n) = O(n^2)
//O(n)
for (let n = 0; n < artist.albums.length; n++) {
}
//O(m) 
for (let m = 0; m < artist.album.songs.length; m++) {
    console.log((artist.album[n].songs[m]));
}
//O(2n) -> O(n)
// artists.forEach(el => {
//     el.song.map(el => {
//         el
//     })
// })
// Still looping within a loop so it's O(n) time



//Quadratic Time: O(n ^ 2): run time increases exponentially based on the size of the input.Example: Nested loops, We perform operations within the inner loop, for every iteration of the outer loop


const PrintSongsWithinAlbumsByArtist = () => {
    //O(n)
    for (let n = 0; n < artists.length; n++) {
        //O(m)
        for (let m = 0; m < artists[n].albums.length; m++) {
            //O(k)
            for (let k = 0; k < artists[n].album[m].songs.length; k++) {
                console.log(artists[n].albums[m].songs[k]);
            }
        }
    }
    //O(n*m*k) -> O(n^3) O(n*n*n) 
};

// Alternative syntax to help with readability
for (let artist of artists) {
    for (let albums of artist.albums) {
        for (let songs of album.songs) {
            console.log(songs);
        }
    }
}

//FACTORIAL 
//O(n!)

"Play the album Hamilton, over and over again until I've heard every song in every order possible."

//Factorial means the product of all positive integers less than or equal to n.

//3 factorial is 3*2*1
//7 factorial is 7*6*5*4*3*2*1


function factorial(n) {
    if (n === 0 || n === 1) {

        return 1 //Base case: O! and 1! are both 1
    } else {

        return n * factorial(n - 1); //Recursive case: n! = n* (n-1)!

    }
}

//Logarithmic [Opening a phone book from the middle page]
//O(log(n))
//Input size will decrease (cutting input size in half every time)
function artistSearch(artists, artist, first = 0, last = null) {
    /*
    4 different parameters/arguments
    artists - ARRAY [list of artists] 
    artist  - TARGET VALUE
    first - STARTING INDEX -> It has a default value of 0
    last - ENDING INDEX -> It has a default value of null
    */

    if (!last)
        last = artists.length;
    //[1,2,3,4,5]
    /*
    (5-0)/2
    Math.floor(2,5) -> 2 + 0
     Midpoint = 2
    */
    let midpoint = Math.floor((last - first) / 2) + first;
    //Compares value in the array at the middle index position to out target artist value. If it matches, we return the middle index value.
    if (artists[midpoint] === artist) return midpoint;
    /*
    E artist[midpoint] -> Q
    a-e        q-z
    if artist at the midpoint is greater than my target artist, recursively call my function, and update my 'last' argument with the value of midpoint.
    */
    if (artists[midpoint] > artist)

        return artistSearch(artists, artist, first, midpoint);
    /*
    target = E    artist[midpoint] -> B
    b-z
    if artist at the midpoint is less than my target artist, recursively update starting (first) index to where the midpoint is
    */
    if (artists[midpoint] < artist)

        return artistSearch(artists, artist, midpoint, last);
}


// O(1)
let min = 0;
//O(1)
let max = 0;
//O(n)
for (let n of numbersArray) {
    // O(1)
    if (x < min) min = x;
    // O(1)
    if (x > max) max = x;
}
// 4* O(1) + O(n)
//O(1) + O(n)
//O(n)

//O(1)
let min = 0;
// O(1)
let max = 0;
// O(n)
for (let n of numbersArray) {
    // O(1)
    if (x < min) min = x;
}
// O(n)
for (let n of numbersArray) {
    // O(1)
    if (x > max) max = x;
}

// O(2n) -> (O(2*1 * n) -> O(n))


O(1)
let min = 0;
O(1)
let max = 0;
O(n)
for (let n of numbersArray) {
    O(1)
    if (x < min) min = x;
}
O(n)
for (let n of numbersArray) {
    O(1)
    if (x > max) max = x;
}

//Here is a nested with two steps:

const someNestedArray = []
// O(1)
let sum = 0
// O(n^2)
for (let a row of someNestedArray) {
    for (let item of row) {
        O(1)
        console.log(item, row)
        O(1)
        sum += item
    }
}

//Ambiguity
//We can't detect the run time
function first(array) {
    for (let item of array) {
        someFunc1(item);
    }
}

function second(array) {
    for (let item of array) {
        someFunc2(item);
    }
}