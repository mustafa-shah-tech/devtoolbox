document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const output = document.getElementById('output');
    const outputArea = document.getElementById('outputArea');
    const copyBtn = document.getElementById('copyBtn');

    document.getElementById('btnEncode').addEventListener('click', () => {
        try {
            outputArea.classList.remove('error');
            output.textContent = encodeURIComponent(textInput.value);
        } catch (e) {
            outputArea.classList.add('error');
            output.textContent = "Error encoding URL.";
        }
    });

    document.getElementById('btnDecode').addEventListener('click', () => {
        try {
            outputArea.classList.remove('error');
            output.textContent = decodeURIComponent(textInput.value);
        } catch (e) {
            outputArea.classList.add('error');
            output.textContent = "Invalid URL encoded string.";
        }
    });

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
