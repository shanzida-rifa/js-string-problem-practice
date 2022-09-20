const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki. boshontokale tomay bolte parini.kala kala shada shada. rong jomeche shada kala';
const searchString = 'paKhi'
// const lyricsLowercase = lyrics.toLowerCase();
// const searchStringLowerCase = searchString.toLowerCase();
// const doesExist = lyricsLowercase.includes(searchStringLowerCase);

const doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);
// ------------------------------------------------------------
// indexof

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('Tumi'));
if (lyrics.indexOf('sada') !== -1) {
    console.log('exists inside the string');
}
else {
    console.log('cannot find it');
}

// ------------------------------------------------------
// startsWith
console.log(lyrics.startsWith('Tumi'));

// -----------------------------------------------------------------
// endswith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

console.log(fileName.endsWith('.pdf'));