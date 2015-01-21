Motion Poem
===

This repository should be cloned or forked to start your own Motion Poem project.

To implement a motion poem, you need only to write your logic in the `motion-poem.js` located at `js/motion-poem.js`.

This JavaScript file represents an application state containing view object onto which we can draw shapes and other display list objects, like images (Bitmaps).

We're using the CreateJS Framework to provide an API for a Flash-like display-list (nested display objects, similarily implemented in Flash) and animation.

In the `motion-poem.js` file, you'll find:

1. a `view` property, available in the Class scope: you can write properties to this view object to access them from within any function/method in the `motion-poem.js` file.
2. a section marked for declaring variables for your motion poem, that is, any data or display objects you need to create.
2. an `enter()` method: Here you can initialize and or create more variables.
3. an `update()`, called 60 times per second by the CreateJS framework's Tick object.  This is essentially a pattern used in animation and games - ths method is called repetiously on a _framerate_ of 60 times per second, which means we can perform some calculations, making small, incremental changes to view-elements to simulate animation.

Have fun!

NOTE: Normally bower components would not be committed to a repository, but we've done so for ease of configuration.  For advanced users, you can always run `bower install` to re-install dependent JavaScript packages.