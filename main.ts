let reading = 0
basic.forever(function () {
    reading = input.temperature()
    datalogger.log(datalogger.createCV("temp", input.temperature()))
    basic.pause(3000)
})
