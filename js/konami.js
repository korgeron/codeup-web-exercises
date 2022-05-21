$(function () {
    "use strict";
    $('.text-alert').css('color', 'rgb(0,0,0,0)');
    let life = 0;
    let bucket = [];
    $('.life-class').html('LIFE: ' + (life + 1));
    $(document).keyup(function (event) {
        bucket.push(event.key);
        let str = bucket.toString();
        // console.log(str);
        if (str === 'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,a,b') {
            life += 30;
            $('body').css('background', 'lightgreen');
            $('#lives').html('LIFE: ' + life);
            $('#my-alert').css('color', 'black');
            $('#my-audio')[0].play();
            bucket = [];
            if ($('#my-alert').css('color', 'red')) {
                setTimeout(function () {
                    $('.text-alert').css('color', 'rgb(0,0,0,0)');
                }, 1500)
            }
        }
        if (str.length >= 81 && str !== 'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,a,b') {
            console.log('clearing bucket timer for wrong konami code event');
            return bucket = [];
        }
        if (life > 1) {
            setInterval(function () {
                console.log('take away life timer');
                life -= 1;
                $('.life-class').html('LIFE: ' + life);
            }, 1000)
        }


        console.log(bucket);
    });
});