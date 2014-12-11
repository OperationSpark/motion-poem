(function (window) {

    window.index = window.index || {}

    /*
     * view : A variable that holds a reference to "this" within the context of the View object.
     */
    var view;

    /*
     * View : The Constructor of our View Class, we make this method "visible" to 
     * the application so that our View can be constructed, that is, created.
     */
    function View() {
        view = this;
        view.Container_initialize();
        view.initialize();
    }

    /*
     * Our View Class will inherit its properties and behaviours from the CreateJS 
     * Container Class. See http://www.createjs.com/Docs/EaselJS/classes/Container.html
     */
    var p = View.prototype = new createjs.Container();
    p.Container_initialize = p.initialize;

    /*
     * initialize: This method initializes our View, calling in a particular order 
     * all the of the methods/functions that represent the steps necessary to setup 
     * and render our View.  We often execute initialization in a list like this to 
     * clearly outline and order the required steps.
     */
    p.initialize = function () {
        // Implement initialization logic here //
        // For better oranization, create separate initialization functions below and invoke them in order here //
    }

    /*
     * update: This is a public method, and the workhorse of our View Class. The update method is 
     * called 60 times per second by the Tick object of the CreateJS framework - this allows us to 
     * make small changes to the view elements to simulate motion, otherwise known as animation.
     */
    p.update = function () {
        // Implement view update logic here //

    }


    /*
     * Expose our View Class on our index object, so the View can be instantiated in our app.
     */
    window.index.View = View;
}(window));