document.addEventListener('DOMContentLoaded', () => {
    const inputData = document.getElementById('input-data');
    const outputData = document.getElementById('output-data');
    const btnEncode = document.getElementById('btn-encode');
    const btnDecode = document.getElementById('btn-decode');
    const btnClear = document.getElementById('btn-clear');
    const btnCopy = document.getElementById('btn-copy');

    const morseDict = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
        'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
        'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
        'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
        '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
        '9': '----.', '0': '-----', '.': '.-.-.-', ',': '--..--', '?': '..--..',
        '\'': '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-',
        '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.',
        '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
    };

    const reverseMorseDict = {};
    for (const key in morseDict) {
        reverseMorseDict[morseDict[key]] = key;
    }

    btnEncode.addEventListener('click', () => {
        const text = inputData.value.toUpperCase();
        let result = [];
        
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (char === ' ' || char === '\n') {
                result.push('/');
            } else if (morseDict[char]) {
                result.push(morseDict[char]);
            }
        }
        
        outputData.value = result.join(' ');
    });

    btnDecode.addEventListener('click', () => {
        const text = inputData.value.trim().split(' ');
        let result = '';
        
        for (let i = 0; i < text.length; i++) {
            const code = text[i];
            if (code === '/' || code === '') {
                if (result.slice(-1) !== ' ' && result.slice(-1) !== '\n') {
                    result += ' ';
                }
            } else if (reverseMorseDict[code]) {
                result += reverseMorseDict[code];
            } else {
                result += '?'; // Unknown code
            }
        }
        
        outputData.value = result;
    });

    btnClear.addEventListener('click', () => {
        inputData.value = '';
        outputData.value = '';
    });

    btnCopy.addEventListener('click', () => {
        if (!outputData.value) return;
        navigator.clipboard.writeText(outputData.value).then(() => {
            const originalText = btnCopy.textContent;
            btnCopy.textContent = 'Copied!';
            setTimeout(() => {
                btnCopy.textContent = originalText;
            }, 2000);
        });
    });
});
