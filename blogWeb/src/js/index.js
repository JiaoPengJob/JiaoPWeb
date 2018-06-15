window.onload = function () {
    var searchInput = document.getElementById('index_search_input');
    searchInput.onblur = function () {
        searchInput.style.display = 'none';
        document.getElementById('index_search_icon').style.display = 'block';
    }

}

/**
 * 点击搜索icon
 */
function searchIcon() {
    document.getElementById('index_search_input').style.display = 'block';
    document.getElementById('index_search_input').focus();
    document.getElementById('index_search_icon').style.display = 'none';
}

/**
 * 显示第一个菜单横线
 */
function showFirstMenuLine() {
    document.getElementById('index_menu_line1').style.visibility = 'visible';
    document.getElementById('index_menu_line2').style.visibility = 'hidden';
    document.getElementById('index_menu_line3').style.visibility = 'hidden';
    document.getElementById('index_menu_line4').style.visibility = 'hidden';
    document.getElementById('index_menu_line5').style.visibility = 'hidden';
}

/**
 * 显示第二个菜单横线
 */
function showSecondMenuLine() {
    document.getElementById('index_menu_line1').style.visibility = 'hidden';
    document.getElementById('index_menu_line2').style.visibility = 'visible';
    document.getElementById('index_menu_line3').style.visibility = 'hidden';
    document.getElementById('index_menu_line4').style.visibility = 'hidden';
    document.getElementById('index_menu_line5').style.visibility = 'hidden';
}

/**
 * 显示第三个菜单横线
 */
function showThirdMenuLine() {
    document.getElementById('index_menu_line1').style.visibility = 'hidden';
    document.getElementById('index_menu_line2').style.visibility = 'hidden';
    document.getElementById('index_menu_line3').style.visibility = 'visible';
    document.getElementById('index_menu_line4').style.visibility = 'hidden';
    document.getElementById('index_menu_line5').style.visibility = 'hidden';
}

/**
 * 显示第四个菜单横线
 */
function showFourthMenuLine() {
    document.getElementById('index_menu_line1').style.visibility = 'hidden';
    document.getElementById('index_menu_line2').style.visibility = 'hidden';
    document.getElementById('index_menu_line3').style.visibility = 'hidden';
    document.getElementById('index_menu_line4').style.visibility = 'visible';
    document.getElementById('index_menu_line5').style.visibility = 'hidden';
}

/**
 * 显示第五个菜单横线
 */
function showFifthMenuLine() {
    document.getElementById('index_menu_line1').style.visibility = 'hidden';
    document.getElementById('index_menu_line2').style.visibility = 'hidden';
    document.getElementById('index_menu_line3').style.visibility = 'hidden';
    document.getElementById('index_menu_line4').style.visibility = 'hidden';
    document.getElementById('index_menu_line5').style.visibility = 'visible';
}