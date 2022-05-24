$(function () {
    $('#img-one').addClass('my-img-one');
    $('#img-two').addClass('my-img-two');
    $('#img-three').addClass('my-img-three');

//CLICK FUNCTION FOR FIRST CARD NEXT BUTTON
    $('#btn-nxt-card-1').click(function () {
        if ($('#img-three').hasClass('my-img-two')) {
            $('#img-one').removeClass('my-img-three').addClass('my-img-three');
        }
        if ($('#img-one').hasClass('my-img-one')) {
            $('#img-one').removeClass('my-img-one').addClass('my-img-two');
            $('#img-two').removeClass('my-img-two').addClass('my-img-one');
        }
        if ($('#img-two').hasClass('my-img-three')) {
            $('#img-one').removeClass('my-img-one').addClass('my-img-three');
            $('#img-two').removeClass('my-img-three').addClass('my-img-one');
        }
    });
//CLICK FUNCTION FOR SECOND CARD PREVIOUS BUTTON
    $('#btn-prv-card-2').click(function () {
        if ($('#img-two').hasClass('my-img-one')) {
            $('#img-two').removeClass('my-img-one').addClass('my-img-two');
            $('#img-one').removeClass('my-img-two').addClass('my-img-one');
        }
        if ($('#img-one').hasClass('my-img-three')) {
            $('#img-one').removeClass('my-img-three').addClass('my-img-one');
            $('#img-two').removeClass('my-img-one').addClass('my-img-three');
        }
    });
//CLICK FUNCTION FOR SECOND CARD NEXT BUTTON
    $('#btn-nxt-card-2').click(function () {
        if ($('#img-three').hasClass('my-img-three')) {
            $('#img-three').removeClass('my-img-three').addClass('my-img-two');
            $('#img-two').removeClass('my-img-two').addClass('my-img-three');
        }
    });
//CLICK FUNCTION FOR THIRD CARD PREVIOUS BUTTON
    $('#btn-prv-card-3').click(function () {
        if ($('#img-two').hasClass('my-img-three')) {
            $('#img-two').removeClass('my-img-three').addClass('my-img-two');
            $('#img-three').removeClass('my-img-two').addClass('my-img-three');
        }
    });
});