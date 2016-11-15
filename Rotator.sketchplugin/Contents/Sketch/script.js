@import "_includes.js";

// COMMANDS
function rotateFortyFive (context){
  rotatorProcessor(context, 45)
}
function rotateMinusFortyFive (context){
  rotatorProcessor(context, -45)
}
function rotateNinety (context){
  rotatorProcessor(context, 90)
}
function rotateMinusNinety (context){
  rotatorProcessor(context, -90)
}
function rotateOneEighty (context){
  rotatorProcessor(context, 180)
}
function rotateMinusOneEighty (context){
  rotatorProcessor(context, -180)
}
function rotateAmount (context){
  var doc = context.document
  var units = [[doc askForUserInput:"Rotation" ofType:1 initialValue:"-90"] integerValue]
  rotatorProcessor(context, units)
}

// PROCESSOR
function rotatorProcessor(context, units) {
    var doc = context.document
    var selection = context.selection
    var selectionCount = selection.count()

    if (selectionCount == 0) {
        doc.showMessage("Please select a layer.")
        return

    } else if (selectionCount >= 1) {

      for (i=0;i<=selectionCount;i++){
        var layer = selection[i]
        var rotation = layer.rotation()
        var newRotation = rotation - units
        layer.setRotation(newRotation)
      }
    }
};
