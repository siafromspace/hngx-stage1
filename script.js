document.addEventListener("DOMContentLoaded", function () {
    function getCurrentDayOfWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
        return dayOfWeek;
    }

    function getCurrentUTCTime() {
        const currentDate = new Date();
        return currentDate.getTime();
    }

    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = getCurrentDayOfWeek();
    document.querySelector("[data-testid='currentUTCTime']").textContent = getCurrentUTCTime();
});






