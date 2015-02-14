(function(window, $) {
    'use strict';

    function Controller(view) {
        var self = this;
        self.view = view;

        self.view.bind('createDesigner', function(data) {
            self.view.render('createDesigner', data);
        });

        self.view.bind('createUI', function(data){
            self.view.render('createUI', data);
        });
    }

    window.app = window.app || {};
    window.app.Controller = Controller;
})(window, jQuery);