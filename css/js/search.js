document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const toolCards = document.querySelectorAll('.tool-card');
    const categories = document.querySelectorAll('.category-section');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        toolCards.forEach(card => {
            const name = card.dataset.name.toLowerCase();
            const desc = card.querySelector('.tool-desc').textContent.toLowerCase();
            
            if (name.includes(query) || desc.includes(query)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });

        // Hide empty categories
        categories.forEach(category => {
            const visibleCards = category.querySelectorAll('.tool-card:not(.hidden)');
            if (visibleCards.length === 0) {
                category.classList.add('hidden');
            } else {
                category.classList.remove('hidden');
            }
        });
    });
});
