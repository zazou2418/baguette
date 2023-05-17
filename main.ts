servos.P2.setAngle(30)
let strip = neopixel.create(DigitalPin.P1, 31, NeoPixelMode.RGB)
basic.forever(function () {
    if (hackbit.buttonState(DigitalPin.P0, true)) {
        servos.P2.setAngle(30)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (hackbit.buttonState(DigitalPin.P14, true)) {
        servos.P2.setAngle(120)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
