(function (window) {

    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;

    window.opspark.makeMotionPoem = function () {
        var view = new createjs.Container();
        stage.addChild(view);

        // TODO : DELETE ALL EXAMPLE CODE AND DECLARE, INIT AND UPDATE YOUR OWN MOTION POEM ASSETS //

        /*
         * DECLARE VARIABLES HERE
         * (EXAMPLE: Declaring a variable called shape)
         */
        var shape;


        var _motionPoem = {
            init: function() {
                /*
                 * INITIALIZE VARIABLES HERE
                 * (EXAMPLE: Drawing a grey circle with a radius of 10 and adding it to the view)
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
            }
        }
        return _motionPoem;
    }
}(window));