window.onload = function () {
    var searchInput = document.getElementById('index_search_input');
    searchInput.onblur = function () {
        searchInput.style.display = 'none';
        document.getElementById('index_search_icon').style.display = 'block';
    }
}

function searchIcon() {
    document.getElementById('index_search_input').style.display = 'block';
    document.getElementById('index_search_input').focus();
    document.getElementById('index_search_icon').style.display = 'none';
}