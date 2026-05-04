document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('copyBtn');

    textInput.addEventListener('input', () => {
        const text = textInput.value;
        output.textContent = text.split('').reverse().join('');
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
