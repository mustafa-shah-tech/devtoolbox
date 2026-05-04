document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const output = document.getElementById('output');
    const outputArea = document.getElementById('outputArea');
    const copyBtn = document.getElementById('copyBtn');

    document.getElementById('btnEncode').addEventListener('click', () => {
        try {
            outputArea.classList.remove('error');
            const textArea = document.createElement('textarea');
            textArea.innerText = textInput.value;
            output.textContent = textArea.innerHTML;
        } catch (e) {
            outputArea.classList.add('error');
            output.textContent = "Error encoding HTML.";
        }
    });

    document.getElementById('btnDecode').addEventListener('click', () => {
        try {
            outputArea.classList.remove('error');
            const textArea = document.createElement('textarea');
            textArea.innerHTML = textInput.value;
            output.textContent = textArea.value;
        } catch (e) {
            outputArea.classList.add('error');
            output.textContent = "Error decoding HTML.";
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
