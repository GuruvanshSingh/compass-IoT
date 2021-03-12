let Degrees = 0
basic.forever(function () {
    Degrees = input.compassHeading()
    if (Degrees > 340 || Degrees < 20) {
        music.playTone(277, music.beat(BeatFraction.Whole))
        basic.showString("N")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (Degrees > 70 && Degrees < 110) {
        basic.showString("E")
    } else if (Degrees > 160 && Degrees < 200) {
        basic.showString("S")
    } else if (Degrees > 250 && Degrees < 290) {
        basic.showString("W")
    } else {
        basic.clearScreen()
    }
})
