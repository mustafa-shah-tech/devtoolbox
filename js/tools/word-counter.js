document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const wordCountEl = document.getElementById('wordCount');
    const charCountEl = document.getElementById('charCount');
    const sentenceCountEl = document.getElementById('sentenceCount');
    const readTimeEl = document.getElementById('readTime');

    textInput.addEventListener('input', () => {
        const text = textInput.value;
        
        // Character count
        charCountEl.textContent = text.length;

        // Word count
        const words = text.match(/\b\w+\b/g);
        const wordCount = words ? words.length : 0;
        wordCountEl.textContent = wordCount;

        // Sentence count
        const sentences = text.match(/[^.!?]+[.!?]+/g);
        const sentenceCount = sentences ? sentences.length : (text.trim() === '' ? 0 : 1);
        sentenceCountEl.textContent = text.trim() === '' ? 0 : sentenceCount;

        // Reading time (approx 200 words per minute)
        const minutes = Math.ceil(wordCount / 200);
        readTimeEl.textContent = minutes + 'm';
    });
});
