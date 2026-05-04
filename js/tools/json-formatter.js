document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const output = document.getElementById('output');
    const outputArea = document.getElementById('outputArea');
    const copyBtn = document.getElementById('copyBtn');

    function processJSON(minify = false) {
        const text = textInput.value.trim();
        if (!text) {
            output.textContent = '';
            outputArea.classList.remove('error');
            return;
        }

        try {
            const parsed = JSON.parse(text);
            outputArea.classList.remove('error');
            output.textContent = minify ? JSON.stringify(parsed) : JSON.stringify(parsed, null, 4);
        } catch (e) {
            outputArea.classList.add('error');
            output.textContent = "Invalid JSON:\n" + e.message;
        }
    }

    document.getElementById('btnFormat').addEventListener('click', () => processJSON(false));
    document.getElementById('btnMinify').addEventListener('click', () => processJSON(true));

    copyBtn.addEventListener('click', () => {
        if (!output.textContent || outputArea.classList.contains('error')) return;
        navigator.clipboard.writeText(output.textContent).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        });
    });
});
