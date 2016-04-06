/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

/*var photos = [  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9", "10", "11",
               "12", "13", "14", "15", "16", "17", "18", "19", "20", "21",
               "22", "23" ];*/


function galeriaLoad() {
    var minHeigth = 1000000;
    $("#galeria > div > a > img").each(function () {
        if ($(this).height() < minHeigth) {
            minHeigth = $(this).height();
        }
    });
    $(".img-responsive").css({ height: minHeigth });
}

$(window).resize(function () {
    var minHeigth = 1000000;
    $("#galeria > div > a > img").each(function () {
        $(".img-responsive").css("height", "");
        if ($(this).height() < minHeigth) {
            minHeigth = $(this).height();
        }
    });
    $(".img-responsive").css({ height: minHeigth });
});

$(window).load(function () {
    /*$('img').on('click', function () {
        var sr = $(this).attr('src');
        $('#galleryModalImage').attr('src', sr);
        $('#galleryModalImage').css({ width: '600px' });
        $('#galleryModal').modal('show');
    } );*/
});

$(function () {
    $("#galeria").load("/global/gallery1.html");
});
