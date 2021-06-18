function shout(string) {
    return string.toUpperCase();
} 

function whisper(string) {
    return string.toLowerCase();
} 

function logShout(string) {
    string = string.toUpperCase();
    return console.log(string);   
} 

function logWhisper(string) {
    string = string.toLowerCase();
    return console.log(string);   
} 

function sayHiToGrandma(string) {

    if (string === 'I love you, Grandma.'){
      return string = 'I love you, too.';
    } else if (string === string.toUpperCase()) {
      return string = 'YES INDEED!';
    } else if (string === string.toLowerCase()) {
      return string = 'I can\'t hear you!';
    }
}
    

    