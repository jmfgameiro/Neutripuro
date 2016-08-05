/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/
var photos = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11"
                , "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"
                , "22", "23"];
var minWidth = 300;
var maxRows = 3;
var maxPhoto = 9;
var numPages = 0;
var minWidthLG = 1200;
var minWidtgMG = 992;
/***** *****/
$(window).resize(function () {
    imgRefactoring(false);
    $('.modal:visible').each(function () {
        var modal = $(this)
            , dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');
        dialog.css('margin-top', Math.max(0, ($(window).height() - dialog.height()) / 2));
        $('.modalButtonsDiv').width($('.modalButtonsDiv').parent().width());
        $('.modalButtonsDiv').height($('.modalButtonsDiv').parent().height());
        $('.modalButtonsDivBottom').css('margin-top', Math.max(0, $('.modalButtonsDivBottom').parent().height() - $('.modalButtonsDivBottom').height()));
    });
});
$(window).load(function () {
    imgRefactoring(true);
});
$(document).ready(function () {
    $('#galeriaModalImage').on('load', function () {
        var maxHeight;
        if (this.width < this.height) {
            maxHeight = $('#galeriaModalImage').css('maxHeight').replace('px', '');
            $('.modal-dialog').css('height', '');
            $('.modal-dialog').width(Math.ceil((this.width * maxHeight) / this.height) + 30);
        }
        else {
            var maxWidth = $('#galeriaModalImage').css('maxWidth').replace('px', '');
            maxHeight = Math.ceil((this.height * maxWidth) / this.width) + 30;
            $('.modal-dialog').height(maxHeight);
            $('.modal-dialog').css('width', '');
        }
        $('.modal').css('display', 'block');
        $('.modal-dialog').css('margin-top', Math.max(0, ($(window).height() - maxHeight) / 2));
        $('.modalButtonsDiv').width($('.modalButtonsDiv').parent().width());
        $('.modalButtonsDiv').height($('.modalButtonsDiv').parent().height());
        $('.modalButtonsDivBottom').css('margin-top', Math.max(0, $('.modalButtonsDivBottom').parent().height() - $('.modalButtonsDivBottom').height()));
    });
    $('#modalButtonPrevious').click(function () {
        var sr = $('#galeriaModalImage').attr('src');
        var oldPhoto = sr.replace('/images/galeria/', '').replace('.jpg', '');
        for (i = 0; i < photos.length; i++) {
            var photo = photos[i];
            if (photo == oldPhoto) {
                if (i == 0) break;
                updateModalButtons(i - 1);
                sr = sr.replace(photo, photos[i - 1]);
                $('#galeriaModalImage').attr('src', sr);
                break;
            }
        }
    });
    $('#modalButtonNext').click(function () {
        var sr = $('#galeriaModalImage').attr('src');
        var oldPhoto = sr.replace('/images/galeria/', '').replace('.jpg', '');
        for (i = 0; i < photos.length; i++) {
            var photo = photos[i];
            if (photo == oldPhoto) {
                if (i == photos.length - 1) break;
                updateModalButtons(i + 1);
                sr = sr.replace(photo, photos[i + 1]);
                $('#galeriaModalImage').attr('src', sr);
                break;
            }
        }
    });
});
/***** *****/
function imgRefactoring(createImg) {
    var w = window.innerWidth;
    var numPhotos = 2;
    if (w > minWidthLG) numPhotos = 4;
    else if (w > minWidtgMG) numPhotos = 3;
    maxPhoto = maxRows * numPhotos;
    var minHeight = 1000000;
    if (createImg) {
        for (i = 0; i < photos.length; i++) {
            var newDiv = document.createElement('div');
            newDiv.setAttribute('id', 'galeriaImage' + i);
            newDiv.setAttribute('class', 'col-lg-3 col-md-4 col-xs-6' + (i >= maxPhoto ? ' img-hidden' : ''));
            var newLink = document.createElement('a');
            newLink.setAttribute('class', 'thumbnail');
            newLink.setAttribute('href', '#');
            var newImg = document.createElement('img');
            newImg.setAttribute('class', 'img-responsive');
            newImg.setAttribute('src', '/images/galeria/minimal/' + photos[i] + '.jpg');
            newImg.onload = function () {
                if (this.height < minHeight) {
                    minHeight = this.height;
                    $(".img-responsive").height(minHeight);
                }
            }
            newImg.onclick = clickImage;
            newLink.appendChild(newImg);
            newDiv.appendChild(newLink);
            $("#galeria").append(newDiv);
        }
        numPages = Math.ceil(photos.length / maxPhoto);
        var pager = $('#galeriaPager');
        if (numPages > 1) {
            // Previous Button
            var previousButton = document.createElement('li');
            previousButton.setAttribute('id', 'galeriaButtonContainerPrevious');
            previousButton.setAttribute('class', 'disabled');
            var previousLink = document.createElement('a');
            previousLink.setAttribute('href', '#');
            previousLink.setAttribute('aria-label', 'Anterior');
            previousLink.onclick = clickButton;
            var previousSpan = document.createElement('span');
            previousSpan.setAttribute('aria-hidden', 'true');
            previousSpan.innerHTML = '&laquo;';
            previousLink.appendChild(previousSpan);
            previousButton.appendChild(previousLink);
            pager.append(previousButton);
            // Pagination Numbers
            for (i = 0; i < numPages; i++) {
                var newButton = document.createElement('li');
                newButton.setAttribute('id', 'galeriaButtonContainer' + (i + 1));
                if (i == 0) newButton.setAttribute('class', 'active');
                var newLink = document.createElement('a');
                newLink.setAttribute('href', '#');
                newLink.setAttribute('aria-label', i + 1);
                newLink.onclick = clickButton;
                var newSpan = document.createElement('span');
                newSpan.setAttribute('aria-hidden', 'true');
                newSpan.innerHTML = i + 1;
                newLink.appendChild(newSpan);
                newButton.appendChild(newLink);
                pager.append(newButton);
            }
            // Next Button
            var nextButton = document.createElement('li');
            nextButton.setAttribute('id', 'galeriaButtonContainerNext');
            var nextLink = document.createElement('a');
            nextLink.setAttribute('href', '#');
            nextLink.setAttribute('aria-label', 'Seguinte');
            nextLink.onclick = clickButton;
            var nextSpan = document.createElement('span');
            nextSpan.setAttribute('aria-hidden', 'true');
            nextSpan.innerHTML = '&raquo;';
            nextLink.appendChild(nextSpan);
            nextButton.appendChild(nextLink);
            pager.append(nextButton);
        }
    }
    else {
        // TODO image resizing
        $("#galeria > div > a > img").each(function () {
            if (this.height < minHeight) {
                minHeight = $(this).height();
                $(".img-responsive").height(minHeight);
            }
        });
    }
}
/***** *****/
function clickButton(event) {
    var label = $(this).attr('aria-label');
    // Update Paginator
    var currPage = Number($('#galeriaPager .active a').attr('aria-label'));
    var nextPage = 1;
    if (isNaN(label)) {
        if (label === 'Seguinte') nextPage = currPage + 1;
        else nextPage = currPage - 1;
    }
    else nextPage = Number(label);
    if (nextPage > numPages || nextPage < 1) return;
    if (nextPage == 1) $('#galeriaButtonContainerPrevious').addClass('disabled');
    else if (nextPage > 1 && nextPage < numPages) {
        $('#galeriaButtonContainerPrevious').removeClass('disabled');
        $('#galeriaButtonContainerNext').removeClass('disabled');
    }
    else $('#galeriaButtonContainerNext').addClass('disabled');
    $('#galeriaButtonContainer' + currPage).removeClass('active');
    $('#galeriaButtonContainer' + nextPage).addClass('active');
    // Update Visible Images
    var nextMinPhoto = maxPhoto * (nextPage - 1)
        , nextMaxPhoto = maxPhoto * nextPage;
    for (i = 0; i < photos.length; i++) {
        if (i < nextMinPhoto || i >= nextMaxPhoto) $('#galeriaImage' + i).hide();
        else $('#galeriaImage' + i).show(600, 'swing');
    }
}

function clickImage(event) {
    var sr = $(this).attr('src');
    sr = sr.replace('/minimal', '');
    $('#galeriaModalImage').attr('src', sr);
    var newPhoto = sr.replace('/images/galeria/', '').replace('.jpg', '');
    for (i = 0; i < photos.length; i++) {
        var photo = photos[i];
        if (photo == newPhoto) {
            updateModalButtons(i);
            break;
        }
    }
    $('#galeriaModal').modal('show');
}

function updateModalButtons(index) {
    if (index == 0) {
        $('#modalButtonPrevious').attr('disabled', true);
        $('#modalButtonNext').attr('disabled', false);
    }
    else if (index == photos.length - 1) {
        $('#modalButtonPrevious').attr('disabled', false);
        $('#modalButtonNext').attr('disabled', true);
    }
    else {
        $('#modalButtonPrevious').attr('disabled', false);
        $('#modalButtonNext').attr('disabled', false);
    }
}