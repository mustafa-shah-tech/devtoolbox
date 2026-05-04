document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('copyBtn');

    document.getElementById('btnUpper').addEventListener('click', () => {
        output.textContent = textInput.value.toUpperCase();
    });

    document.getElementById('btnLower').addEventListener('click', () => {
        output.textContent = textInput.value.toLowerCase();
    });

    document.getElementById('btnTitle').addEventListener('click', () => {
        const text = textInput.value;
        output.textContent = text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
    });

    document.getElementById('btnSentence').addEventListener('click', () => {
        const text = textInput.value;
        output.textContent = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, char => char.toUpperCase());
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
