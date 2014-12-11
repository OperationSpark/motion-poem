Motion Poem
===

This repository should be forked to start your own Motion Poem project.

To implement a motion poem, you need only to write your logic in the `view.js` located at `js/view.js`.

This JavaScript file represents a View Class, and will be instantiated by the application and added to the stage.

Our Motion Poem series uses the CreateJS Framework to provide an API for a Flash-like display-list (nested display objects, similarily implemented in Flash) and animation.

The View Class itself (at `js/view.js`) inherits from the CreateJS Container Class (see: http://www.createjs.com/Docs/EaselJS/classes/Container.html), and we have included:

1. a `view` property, available in the Class scope: you can write properties to this view object to access them from within any function/method in the View Class.
2. an `initialize()` method: Classed from the Contructor of the View Class, you'll want to add any view initialization in this method, or list and invoke sub-initialization methods from within this method.
3. an `update()`, called 60 times per second by the CreateJS framework's Tick object.  This is essentially a pattern used in animation and games - ths method is called repetiously on a _framerate_ of 60 times per second, which means we can perform some calculations, making small, incremental changes to view-elements to simulate animation.

Have fun!