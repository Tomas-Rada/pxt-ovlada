
radio.setGroup(234)
radio.setFrequencyBand(54)
radio.setTransmitSerialNumber(true)






const hodnoty = []
let x: number = 0
let y: number = 0
let x_l: number = 0
let y_l: number = 0
// Hodnoty souřadnic z gyroskopu
//to do
input.onButtonPressed(Button.A, function() {
    radio.sendValue("njimok@<>", control.deviceSerialNumber() )
})
basic.forever(function () {
    x =input.acceleration(Dimension.X)
    y =input.acceleration(Dimension.Y)


    // Kontrola osy X
    if (x > 100) {
        x_l = 3

    } 
    else if (x > 60) {
        x_l= 2

    } 
    else if (x > 30) {
        x_l = 1

    }
    //to do 
    else if (x > 0 && x < 0) {
        x_l = 0
    } 
    else if (x < -100) {
        x_l = -3
    } 
    else if (x < -60) {
        x_l = -2
    } 
    else if (x < -30) {
        x_l = -1
    }


    // Kontrola osy Y
    if (y > 100) {
        x_l = 3
    }
    else if (y > 60) {
        x_l = 2
    }
    else if (y > 30) {
        x_l = 1 
    }
    //to do
    else if (y > 0 && y<0) {
        x_l = 0
    }
    else if (y < -100) {
        x_l = -3
    }
    else if (y < -60) {
        x_l = -2
    }
    else if (y < -30) {
        x_l = -1
    }
    hodnoty.push([x_l, y_l])
    basic.pause(20)

})