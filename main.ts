input.onButtonPressed(Button.A, function () {
    x += 1
    if (x > 4) {
        x = 4
    }
    basic.clearScreen()
    led.plot(x, y)
    radio.sendValue("x", x)
})
input.onButtonPressed(Button.B, function () {
    x += -1
    if (x < 0) {
        x = 0
    }
    basic.clearScreen()
    led.plot(x, y)
    radio.sendValue("x", x)
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x = value
    } else if (name == "y") {
        y = value
    } else {
    	
    }
    basic.clearScreen()
    led.plot(x, y)
})
let y = 0
let x = 0
radio.setGroup(1)
