document.addEventListener('DOMContentLoaded', () => {
    const inputData = document.getElementById('input-data');
    const outputData = document.getElementById('output-data');
    const btnConvert = document.getElementById('btn-convert');
    const btnClear = document.getElementById('btn-clear');
    const btnCopy = document.getElementById('btn-copy');

    const romanToNum = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

    function intToRoman(num) {
        let result = '';
        for (const key in romanToNum) {
            while (num >= romanToNum[key]) {
                result += key;
                num -= romanToNum[key];
            }
        }
        return result;
    }

    function romanToInt(s) {
        let result = 0;
        for (let i = 0; i < s.length; i++) {
            const current = romanToNum[s[i]];
            const next = romanToNum[s[i + 1]];
            if (next && current < next) {
                result -= current;
            } else {
                result += current;
            }
        }
        return result;
    }

    btnConvert.addEventListener('click', () => {
        const val = inputData.value.trim().toUpperCase();
        if (!val) {
            outputData.value = '';
            return;
        }

        if (/^[0-9]+$/.test(val)) {
            const num = parseInt(val, 10);
            if (num > 0 && num < 4000) {
                outputData.value = intToRoman(num);
            } else {
                outputData.value = 'Please enter a number between 1 and 3999';
            }
        } else if (/^[MDCLXVImdclxvi]+$/i.test(val)) {
            const result = romanToInt(val);
            if (isNaN(result) || result === 0) {
                outputData.value = 'Invalid Roman Numeral';
            } else {
                outputData.value = result;
            }
        } else {
            outputData.value = 'Invalid input. Enter a number or Roman numeral.';
        }
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
