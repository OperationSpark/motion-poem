(function (window) {

    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;

    window.opspark.makeMain = function () {
        var view = new createjs.Container();
        stage.addChild(view);

        /*
         * DECLARE VARIABLES HERE
         * (EXAMPLE: Declaring a variable called shape)
         */
        var shape;


        var state = {
            enter: function() {
                /*
                 * INITIALIZE VARIABLES HERE
                 * (EXAMPLE: Drawing a circle and adding it to the view)
                 */
                shape = draw.circle(10, '#CCC');
                shape.x = shape.y = (canvas.width - shape.width) / 2;
                view.addChild(shape);
            },

            update: function () {
                /*
                 * UPDATE ANY VARIABLES HERE > NOTE: The update() method is called 60 times per second.
                 * (EXAMPLE: Move the shape on its x-axis 1 pixel to the right per frame, then check its position against the stage boundaries)
                 */
                shape.x += 1;

                if (shape.x > canvas.width + shape.radius) { shape.x = -(shape.radius); }
            },

            exit: function() {
                stage.removeChild(view);
            }
        }
        return state;
    }
}(window));