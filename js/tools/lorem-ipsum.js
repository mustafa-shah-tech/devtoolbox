document.addEventListener('DOMContentLoaded', () => {
    const numParagraphs = document.getElementById('num-paragraphs');
    const textFormat = document.getElementById('text-format');
    const outputData = document.getElementById('output-data');
    const btnGenerate = document.getElementById('btn-generate');
    const btnCopy = document.getElementById('btn-copy');

    const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    
    // We can generate variations by shifting sentences or words, but a simple repetition is standard for basic tools.
    // Let's create a slightly varied version.
    const sentences = loremIpsumText.split('. ').map(s => s.trim() + (s.endsWith('.') ? '' : '.'));

    function generateParagraph() {
        let p = [];
        // randomly pick 4-7 sentences for a paragraph
        let count = Math.floor(Math.random() * 4) + 4;
        for (let i = 0; i < count; i++) {
            let index = Math.floor(Math.random() * sentences.length);
            p.push(sentences[index]);
        }
        return p.join(' ');
    }

    function generateLorem() {
        let count = parseInt(numParagraphs.value, 10);
        if (isNaN(count) || count < 1) count = 1;
        if (count > 100) count = 100;
        
        let paragraphs = [];
        // Make the first paragraph always start with "Lorem ipsum..."
        let firstP = generateParagraph();
        if (!firstP.startsWith("Lorem ipsum")) {
            firstP = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " + firstP;
        }
        paragraphs.push(firstP);

        for (let i = 1; i < count; i++) {
            paragraphs.push(generateParagraph());
        }

        if (textFormat.value === 'html') {
            outputData.value = paragraphs.map(p => `<p>${p}</p>`).join('\n\n');
        } else {
            outputData.value = paragraphs.join('\n\n');
        }
    }

    btnGenerate.addEventListener('click', generateLorem);

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

    // Initial generate
    generateLorem();
});
