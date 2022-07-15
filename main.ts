input.onButtonPressed(Button.A, function () {
    modus = 1
    startzeit = input.runningTime()
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    modus = 0
})
let dauer = 0
let startzeit = 0
let modus = 0
modus = 0
edubitTrafficLightBit.setLed(LedColor.All, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
basic.forever(function () {
	
})
basic.forever(function () {
    if (modus == 0) {
        dauer = Math.round(pins.map(
        edubitPotentioBit.readPotValue(),
        0,
        1023,
        0,
        60
        ))
        basic.showString("" + (dauer))
    } else if (modus == 1) {
        if (input.runningTime() - startzeit > dauer * 60000) {
            music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
            modus = 2
        }
    } else {
        basic.showIcon(IconNames.Sad)
    }
    if (modus == 1) {
        if (input.runningTime() - startzeit > dauer * 60000 / 2) {
            if (input.runningTime() - startzeit > dauer * 60000 / 1.5) {
                edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
                edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
            } else {
                edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
                edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
            }
        }
    }
})
