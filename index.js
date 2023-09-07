
function updateCurrentDay() {
  const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  
  if (currentDayElement) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const currentDay = daysOfWeek[now.getUTCDay()]; // Get the current day as a string
  
    // Update the content of the element
    currentDayElement.textContent = `${currentDay}`;
  }
}

// Call the updateCurrentDay function to set the initial day and update it periodically
updateCurrentDay();
setInterval(updateCurrentDay, 1000); // Update every second (1000 milliseconds)


function updateCurrentUTCTime() {
  const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
  
  if (currentUTCTimeElement) {
    const now = new Date();
    const formattedUTCTime = now.toUTCString(); // Get UTC time as a string
  
    // Update the content of the element
    currentUTCTimeElement.textContent = `${formattedUTCTime}`;
  }
}

// Call the updateCurrentUTCTime function to set the initial time and update it periodically
updateCurrentUTCTime();
setInterval(updateCurrentUTCTime, 1000); // Update every second (1000 milliseconds)
