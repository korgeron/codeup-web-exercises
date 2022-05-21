$(function () {
    "use strict";
    // $('#my-alert').css('display','none');
    let bucket = [];
    $(document).keyup(function (event) {
        bucket.push(event.key);
        let str = bucket.toString();
        console.log(str);
        if (str === 'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,a,b') {
            $('body').css('background','lightgreen');
            $('#lives').html('LIFE: 30');
            // $('#my-alert').css('display','block');
            $('#my-audio')[0].play();
            bucket = [];
        }
    });
});