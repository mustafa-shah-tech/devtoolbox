document.addEventListener('DOMContentLoaded', () => {
    const dobInput = document.getElementById('dob');
    const targetInput = document.getElementById('targetDate');
    
    // Set target date to today by default
    const today = new Date();
    targetInput.value = today.toISOString().split('T')[0];

    document.getElementById('btnCalc').addEventListener('click', () => {
        const dobVal = dobInput.value;
        const targetVal = targetInput.value;

        if (!dobVal || !targetVal) {
            alert('Please select both dates.');
            return;
        }

        const dob = new Date(dobVal);
        const target = new Date(targetVal);

        if (dob > target) {
            alert('Date of birth cannot be after the target date.');
            return;
        }

        let years = target.getFullYear() - dob.getFullYear();
        let months = target.getMonth() - dob.getMonth();
        let days = target.getDate() - dob.getDate();

        if (days < 0) {
            months--;
            // Get days in previous month
            const prevMonth = new Date(target.getFullYear(), target.getMonth(), 0);
            days += prevMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        document.getElementById('resYears').textContent = years;
        document.getElementById('resMonths').textContent = months;
        document.getElementById('resDays').textContent = days;

        document.getElementById('resultContainer').classList.remove('hidden');
    });
});
