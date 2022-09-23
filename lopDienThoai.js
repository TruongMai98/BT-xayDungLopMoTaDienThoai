let Mobile = function (battery, composeMemory, inboxMemory, sentMemory, status) {
    this.battery = battery;
    this.composeMemory = composeMemory;
    this.inboxMemory = inboxMemory;
    this.sentMemory = sentMemory;
    this.status = status;

    this.isOn = function () {
        return this.status ? true : false;
    }

    this.turnOn = function () {
        if (!this.isOn()) {
            if (this.battery > 0 && this.battery <= 100) {
                this.battery--;
                this.status = true;
            }
        }
    }

    this.turnOff = function () {
        if (this.isOn()) {
            if (this.battery > 0 && this.battery <= 100) {
                this.battery--;
                this.status = false;
            }
        }
    }


    this.chargeBattery = function () {
        if (this.battery < 100) {
            this.battery++;
        }
    }

    this.composeMessage = function (message) {
        if (this.isOn()) {
            if (this.battery > 0) {
                this.battery--;
                this.composeMemory = message;
            }
        }

    }

    this.sendMessage = function (toMobile) {
        if (this.isOn()) {
            this.battery--;
            this.sentMemory = this.composeMemory;
            toMobile.inboxMemory = this.composeMemory;
        }
    }

    this.receiveMessage = function () {
        if (this.isOn()) {
            this.battery--;
            return "You have a message";
        }
    }

    this.readMessage = function () {
        if (this.isOn()) {
            this.battery--;
            return this.inboxMemory;
        }
    }
}

function main() {
    let nokia = new Mobile(80, "", "", "", true);
    let iphone = new Mobile(80, "", "", "", true);

    let composingMessage = prompt("enter your message");
    nokia.composeMessage(composingMessage);
    nokia.sendMessage(iphone);

    let isCheck = iphone.receiveMessage();
    if (isCheck != "") {
        alert("message is: " + iphone.readMessage());
    }
}

main();