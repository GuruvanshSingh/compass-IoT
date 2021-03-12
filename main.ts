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
    } else {
        basic.clearScreen()
    }
})
