// script.js

document.addEventListener('DOMContentLoaded', () => {
    const moodButtons = document.querySelectorAll('.mood-btn');
    const moodTracker = document.querySelector('.mood-tracker');
    const historyList = document.querySelector('.history-list');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');

    let moods = [];

    function updateMoodHistory() {
        historyList.innerHTML = '';
        moods.forEach(mood => {
            const li = document.createElement('li');
            li.textContent = `${mood.mood} - ${new Date(mood.timestamp).toLocaleString()}`;
            historyList.appendChild(li);
        });
    }

    moodButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mood = button.dataset.mood;
            moodTracker.className = `mood-tracker ${mood}`;
            moods.push({ mood: mood, timestamp: Date.now() });
            updateMoodHistory();
        });
    });

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        moodTracker.classList.toggle('dark-mode');
        moodButtons.forEach(button => button.classList.toggle('dark-mode'));
        darkModeToggle.classList.toggle('dark-mode');
    });
});