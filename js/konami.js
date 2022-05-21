$(function () {
    "use strict";
    $('.text-alert').css('color', 'rgb(0,0,0,0)');
    let bucket = [];
    $(document).keyup(function (event) {
        bucket.push(event.key);
        let str = bucket.toString();
        console.log(str);
        if (str === 'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,a,b') {
            $('body').css('background', 'lightgreen');
            $('#lives').html('LIFE: 30');
            $('#my-alert').css('color', 'black');
            $('#my-audio')[0].play();
            bucket = [];
            if ($('#my-alert').css('color', 'red')) {
                setTimeout(function () {
                    $('.text-alert').css('color', 'rgb(0,0,0,0)');
                }, 1500)
            }
        }

        setTimeout(function () {
            if (str !== 'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,a,b') {
                return bucket = [];
            }
        }, 5000);




        console.log(bucket);
    });
});