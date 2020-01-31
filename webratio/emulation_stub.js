function createStubs() {

    function log() {
        var args = [].slice.call(arguments, 0);
        args.unshift("[CDVIonicKeyboard]");
        console.log.apply(console, args);
    }

    return {
        CDVIonicKeyboard: {
			init: function(){
				log("Init keyboard as hidden");
				return "H";
			},
            hideKeyboardAccessoryBar: function(hide) {
                log("Hide Keyboard Accessory Bar", hide);
            },
            close: function() {
                log("Close");
            },
            show: function() {
                log("Show");
            },
            disableScroll: function(disable) {
                log("Disable Scroll", disable);
            }
        }
    };
};