(function(window, $){
    'use strict';

    function Config(config){
        this.container = config.container;
        this.disabledStyles = config.disabledStyles;
        this.targetSelector = config.targetSelector;
    }

    window.app = window.app || {};
    window.app.Config = Config;
})(window, jQuery);