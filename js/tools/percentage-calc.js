document.addEventListener('DOMContentLoaded', () => {
    // Calc 1: X% of Y
    document.getElementById('calc1-btn').addEventListener('click', () => {
        const x = parseFloat(document.getElementById('calc1-x').value);
        const y = parseFloat(document.getElementById('calc1-y').value);
        const res = document.getElementById('calc1-res');
        
        if (isNaN(x) || isNaN(y)) {
            res.textContent = "Invalid input";
        } else {
            res.textContent = ((x / 100) * y).toLocaleString(undefined, {maximumFractionDigits: 4});
        }
    });

    // Calc 2: X is what % of Y
    document.getElementById('calc2-btn').addEventListener('click', () => {
        const x = parseFloat(document.getElementById('calc2-x').value);
        const y = parseFloat(document.getElementById('calc2-y').value);
        const res = document.getElementById('calc2-res');
        
        if (isNaN(x) || isNaN(y) || y === 0) {
            res.textContent = "Invalid input";
        } else {
            res.textContent = ((x / y) * 100).toLocaleString(undefined, {maximumFractionDigits: 4}) + "%";
        }
    });

    // Calc 3: % increase/decrease from X to Y
    document.getElementById('calc3-btn').addEventListener('click', () => {
        const x = parseFloat(document.getElementById('calc3-x').value);
        const y = parseFloat(document.getElementById('calc3-y').value);
        const res = document.getElementById('calc3-res');
        
        if (isNaN(x) || isNaN(y) || x === 0) {
            res.textContent = "Invalid input";
        } else {
            const diff = y - x;
            const percent = (diff / Math.abs(x)) * 100;
            const prefix = percent > 0 ? "Increase of " : (percent < 0 ? "Decrease of " : "No change ");
            res.textContent = prefix + Math.abs(percent).toLocaleString(undefined, {maximumFractionDigits: 4}) + "%";
        }
    });
});
