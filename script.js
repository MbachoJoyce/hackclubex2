function onMouseMove(event) {
  var path = new Path.Circle({
    center: event.middlePoint,
    radius: 5
  })
  path.fillColor = {
    hue: event.count * 5,
    saturation: 1,
    brightness: 1
  }
}