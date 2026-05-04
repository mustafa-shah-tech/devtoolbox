document.addEventListener('DOMContentLoaded', () => {
    const inputData = document.getElementById('input-data');
    const outputData = document.getElementById('output-data');
    const btnConvert = document.getElementById('btn-convert');
    const btnClear = document.getElementById('btn-clear');
    const btnCopy = document.getElementById('btn-copy');

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion'];

    function convertGroup(num) {
        let str = '';
        let hundreds = Math.floor(num / 100);
        let rem = num % 100;

        if (hundreds > 0) {
            str += ones[hundreds] + ' hundred ';
        }

        if (rem > 0) {
            if (rem < 10) {
                str += ones[rem] + ' ';
            } else if (rem < 20) {
                str += teens[rem - 10] + ' ';
            } else {
                let tenVal = Math.floor(rem / 10);
                let oneVal = rem % 10;
                str += tens[tenVal] + ' ';
                if (oneVal > 0) {
                    str += ones[oneVal] + ' ';
                }
            }
        }
        return str.trim();
    }

    function numberToWords(n) {
        if (n === 0) return 'zero';

        let isNegative = n < 0;
        n = Math.abs(n);

        let wordParts = [];
        let scaleIdx = 0;

        while (n > 0) {
            let chunk = n % 1000;
            if (chunk > 0) {
                let chunkStr = convertGroup(chunk);
                if (scales[scaleIdx]) {
                    chunkStr += ' ' + scales[scaleIdx];
                }
                wordParts.push(chunkStr);
            }
            n = Math.floor(n / 1000);
            scaleIdx++;
        }

        let result = wordParts.reverse().join(' ').trim();
        return isNegative ? 'negative ' + result : result;
    }

    btnConvert.addEventListener('click', () => {
        const val = inputData.value.trim();
        if (!val) {
            outputData.value = '';
            return;
        }

        const num = parseInt(val, 10);
        if (isNaN(num)) {
            outputData.value = 'Please enter a valid number.';
            return;
        }

        if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
            outputData.value = 'Number is too large to process safely.';
            return;
        }

        outputData.value = numberToWords(num);
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
