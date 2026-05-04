document.addEventListener('DOMContentLoaded', () => {
    const inputData = document.getElementById('input-data');
    const btnCount = document.getElementById('btn-count');
    const btnClear = document.getElementById('btn-clear');
    const ignoreCase = document.getElementById('ignore-case');
    const ignoreSpaces = document.getElementById('ignore-spaces');
    const resultContainer = document.getElementById('result-container');
    const freqBody = document.getElementById('freq-body');

    function analyzeFrequencies() {
        let text = inputData.value;
        if (!text) {
            resultContainer.style.display = 'none';
            return;
        }

        if (ignoreCase.checked) {
            text = text.toLowerCase();
        }

        const counts = {};
        let totalValidChars = 0;

        // Iterate characters properly to handle surrogate pairs (emojis)
        for (const char of text) {
            if (ignoreSpaces.checked && (char === ' ' || char === '\n' || char === '\r' || char === '\t')) {
                continue;
            }
            counts[char] = (counts[char] || 0) + 1;
            totalValidChars++;
        }

        if (totalValidChars === 0) {
            resultContainer.style.display = 'none';
            return;
        }

        // Sort by count descending
        const sortedChars = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

        const maxCount = counts[sortedChars[0]];

        freqBody.innerHTML = '';
        
        sortedChars.forEach(char => {
            const tr = document.createElement('tr');
            
            const tdChar = document.createElement('td');
            // Display friendly name for whitespace if not ignored
            if (char === ' ') tdChar.innerHTML = '<em>[Space]</em>';
            else if (char === '\n') tdChar.innerHTML = '<em>[Newline]</em>';
            else if (char === '\r') tdChar.innerHTML = '<em>[Return]</em>';
            else if (char === '\t') tdChar.innerHTML = '<em>[Tab]</em>';
            else tdChar.textContent = char;

            const tdCount = document.createElement('td');
            tdCount.textContent = counts[char];

            const tdBar = document.createElement('td');
            const percentOfMax = (counts[char] / maxCount) * 100;
            const percentOfTotal = ((counts[char] / totalValidChars) * 100).toFixed(1);
            
            tdBar.innerHTML = `
                <div style="font-size: 0.85em; margin-bottom: 2px;">${percentOfTotal}%</div>
                <div class="freq-bar-container">
                    <div class="freq-bar" style="width: ${percentOfMax}%"></div>
                </div>
            `;

            tr.appendChild(tdChar);
            tr.appendChild(tdCount);
            tr.appendChild(tdBar);
            freqBody.appendChild(tr);
        });

        resultContainer.style.display = 'block';
    }

    btnCount.addEventListener('click', analyzeFrequencies);

    btnClear.addEventListener('click', () => {
        inputData.value = '';
        resultContainer.style.display = 'none';
    });
});
