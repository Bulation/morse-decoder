const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let i = 0;
    let j = 10;
    let word = '';
    for (let k = 0; k < expr.length / 10; k++) {
        let letter = "";
        let str = expr.slice(i, j);
        for (let l = 0; l < str.length; l = l + 2) {
          let substr = str.slice(l, l + 2);
          if (substr == "10") {
            letter += ".";
          }
          if (substr == "11") {
            letter += "-";
          }
        }
        if (letter) {
            word += MORSE_TABLE[letter];
        }
        else {
            word += ' ';
        }
        i += 10;
        j += 10;
    }
    return word;
}

module.exports = {
    decode
}