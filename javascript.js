lapItem.innerHTML = `
            <span class="lap-number">Lap ${lapCount}</span>
            <span class="lap-time">${timeToString(elapsedTime)}</span>
        `;
        {
        // Add new laps to the top of the list
        lapsList.prepend(lapItem);
    }


// --- Event Listeners ---
document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("pauseBtn").addEventListener("click", pause);
document.getElementById("resetBtn").addEventListener("click", reset);
document.getElementById("lapBtn").addEventListener("click", lap);
