$(function () {
    "use strict";
    $('.text-alert').css('color', 'rgb(0,0,0,0)');
    let life = 0;
    let bucket = [];
    $('.life-class').html('LIFE: ' + (life + 1));

    $(document).keyup(function (event) {
        bucket.push(event.key);
        let str = bucket.toString();
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
                    $('body').css('background', 'white');
                }, 1500)
            }
        }
        if (str.length >= 81 && str !== 'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,a,b') {
            $('#audio-recharge')[0].play();
            return bucket = [];
        }
        if (life > 1) {
            let subtractLife = setInterval(function () {
                console.log('take away life timer');
                life -= 1;
                $('.life-class').html('LIFE: ' + life);
                if (life < 0) {
                    $('document').off(event);
                    clearInterval(subtractLife);
                    let sayDead = 'DEAD'
                    $('.life-class').css('color', 'red').html('LIFE: ' + sayDead);
                    $('#audio-game-over')[0].play();
                    setTimeout(function () {
                        $('window').html(location.reload());
                    }, 3000)
                }
            }, 1000)
        }
        $('.my-keys').html(event.key);
    });
});