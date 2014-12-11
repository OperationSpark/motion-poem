(function (window) {

    window.index = window.index || {}

    function App() {
        this.initialize();
    }

    var p = App.prototype;
    
    var view;

    p.initialize = function () {
        canvas = document.getElementById('canvas');
        stage = new createjs.Stage(canvas);
        createjs.Ticker.setFPS(60);
        createjs.Ticker.on('tick', this.onTick, this);

        view = new index.View();
        stage.addChild(view);
    }

    p.onTick = function (e) {
        view.update();
        stage.update();
    }

    window.index.App = App;
}(window));