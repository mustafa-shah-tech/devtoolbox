document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('copyBtn');
    const btnRemove = document.getElementById('btnRemove');
    const caseSensitive = document.getElementById('caseSensitive');
    const stats = document.getElementById('stats');

    btnRemove.addEventListener('click', () => {
        const text = textInput.value;
        if (!text) {
            output.textContent = '';
            stats.textContent = '';
            return;
        }

        const lines = text.split(/\r?\n/);
        let uniqueLines = [];
        
        if (caseSensitive.checked) {
            uniqueLines = [...new Set(lines)];
        } else {
            const seen = new Set();
            uniqueLines = lines.filter(line => {
                const lower = line.toLowerCase();
                if (seen.has(lower)) return false;
                seen.add(lower);
                return true;
            });
        }

        output.textContent = uniqueLines.join('\n');
        
        const removed = lines.length - uniqueLines.length;
        stats.textContent = `(${removed} duplicate${removed === 1 ? '' : 's'} removed)`;
    });

    copyBtn.addEventListener('click', () => {
        if (!output.textContent) return;
        navigator.clipboard.writeText(output.textContent).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        });
    });
});
