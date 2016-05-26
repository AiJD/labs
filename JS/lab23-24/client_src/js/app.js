requirejs.config({
    paths: {
        'jquery': 'http://code.jquery.com/jquery-2.2.4.min',
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        }
    }
});

require(
    [
        'tmpl',
        'jquery',
        'Model',
        'View',
        'Controller'
    ],
    function (tmpl, $, Model, View, Controller) {
        $(function() {
            var data = ['Потести мой ToDo список!'];
            var model = new Model(data);
            var view = new View(model);
            var controller = new Controller(model, view);
        });
    }
);

