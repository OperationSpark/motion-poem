(function (window) {

    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;

    window.opspark.makeApp = function () {
        var _state;

        var _app = {
            onTick: function(e) {
                _state.update();
                stage.update();
            },

            setState: function(state) {
                if (_state) {
                    _state.exit();
                }
                state.enter();
                _state = state;
                return _app;
            }
        }

        canvas = document.getElementById('canvas');
        stage = new createjs.Stage(canvas);

        stage.addChild(draw.rect(canvas.width, canvas.height, null, '#4F5661', 1));
        _app.setState(opspark.makeMain());

        createjs.Ticker.setFPS(60);
        createjs.Ticker.on('tick', _app.onTick, _app);
        
        return _app;
    }
}(window));