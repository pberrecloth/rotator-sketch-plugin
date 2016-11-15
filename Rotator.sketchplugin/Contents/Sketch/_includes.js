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
