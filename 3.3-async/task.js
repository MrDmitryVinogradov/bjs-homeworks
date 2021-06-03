class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = undefined;
    }

    addClock(time, func, id) {
        if (id === undefined) {
            throw new Error("error text");
        }
        if (this.alarmCollection.find(element => element.id === id)) {
            console.error();
            return null
        }
        this.alarmCollection.push({
            time: time,
            id: id,
            callback: func
        }
        )
    }
    removeClock(id) {
        let removedClock = this.alarmCollection.find(element => element.id === id);
        this.alarmCollection.splice(this.alarmCollection.indexOf(removedClock), 1);
    }

    getCurrentFormattedTime() {
        let now = new Date();
        let hours = now.getHours();
        if (hours < 10) {
            hours = `0${hours}`
        }
        let minutes = now.getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        return `${hours}:${minutes}`
    }

    start() {
        const checkClock = () => {
            if (this.time == this.getCurrentFormattedTime()) {
                return this.callback();
            }
        }
        if (!this.timerId) {
            this.timerId = setInterval = () => {
                this.alarmCollection.map(element => checkClock(element));
            }
        }
    }
    stop() {
        let clearInterval = () => {
            this.timerID = null;
        }
        if (this.timerId) {
            clearInterval()
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(element => console.log(`${element.id}    ${element.time}`))
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}