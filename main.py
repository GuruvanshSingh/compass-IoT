Degrees = 0

def on_forever():
    global Degrees
    Degrees = input.compass_heading()
    if Degrees > 340 or Degrees < 20:
        basic.show_string("N")
        basic.show_leds("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            """)
        music.play_tone(277, music.beat(BeatFraction.WHOLE))
    elif Degrees > 70 and Degrees < 110:
        basic.show_string("E")
    elif Degrees > 160 and Degrees < 200:
        basic.show_string("S")
    elif Degrees > 250 and Degrees < 290:
        basic.show_string("W")
    else:
        basic.clear_screen()
basic.forever(on_forever)
