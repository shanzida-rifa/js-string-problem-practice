const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki. boshontokale tomay bolte parini.kala kala shada shada. rong jomeche shada kala';

// split
const parts = lyrics.split(' ');
const sentence = lyrics.split('.');

console.log(lyrics);
console.log(parts);
console.log(sentence);

// slice
const partial = lyrics.slice(5, 8);
const partial2 = lyrics.substring(5, 8);
console.log(partial);
console.log(partial2);


const lines = [
    'Tumi bondhu kala Pakhi ami jeno ki',
    'boshontokale tomay bolte parini',
    'kala kala shada shada',
    'rong jomeche shada kala'
];
const newSong = lines.join('. ');
console.log(newSong);
