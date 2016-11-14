// INIT
function initContext(context) {
  sketch = context.api(),
    doc = context.document,
        plugin = context.plugin,
        command = context.command,
        page = doc.currentPage(),
        pages = doc.pages(),
        artboard = page.currentArtboard(),
        selection = context.selection,
        selectionCount = selection.count()

    }


// COMMANDS
function rotateNegativeNinety(context) {
  initContext(context)
  rotatorProcessor(90)
};
function rotateNinety(context) {
  initContext(context)
  rotatorProcessor(90)
};
function rotateAmount(context) {
  initContext(context)
  var units = [[doc askForUserInput:"Rotation" ofType:1 initialValue:"-90"] integerValue]
  rotatorProcessor(units)
};


// PROCESSOR
function rotatorProcessor(units) {
    var doc = context.document
    var selection = context.selection

    if (selection.count() == 0) {
        doc.showMessage("Please select a layer.")
        return

    } else if (selection.count() == 1) {
        var layer = selection[0]
        var rotation = layer.rotation()
        var units = 90
        var newRotation = rotation + units
        layer.setRotation(newRotation)

    } else if (selection.count() > 1) {
        doc.showMessage("Please select one layer.")
        return
    }
};
