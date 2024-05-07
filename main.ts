cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x999999)
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        cuteBot.moveTime(cuteBot.Direction.backward, 15, 0.5)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x999999)
        cuteBot.moveTime(cuteBot.Direction.backward, 15, 0.5)
        cuteBot.moveTime(cuteBot.Direction.left, 20, 0.75)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x999999)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
        cuteBot.moveTime(cuteBot.Direction.backward, 15, 0.5)
        cuteBot.moveTime(cuteBot.Direction.right, 15, 0.75)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        cuteBot.motors(20, 20)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x999999)
    }
})
