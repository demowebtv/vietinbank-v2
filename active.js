
function showSearchBox() {
    $('.search-left').addClass('hide');
    $('.search-full').removeClass('hide');
    $('.search').focus();
}

function showSearchOnLeave() {
    $('.search-left').removeClass('hide');
    $('.search-full').addClass('hide');
    $('.search-box').val('');
}
