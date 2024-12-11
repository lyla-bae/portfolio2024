
$(document).ready(function(){
    
    //모바일에서 검색바를 누르면 검색필터가 나오게
    $('.search_bar').click(function(){
        $('nav').slideDown(200);
        $('body').addClass('active');
    });

    //뒤로가기를 누르면 검색필터가 닫히게
    $('.ic_back').click(function(){
        $('nav').slideUp(200);
        $('body').removeClass('active');
    });

    //검색창에서 작성하면 텍스트삭제되게
    var clearInput = function(obj) {
        obj.parentNode.querySelector('input').value = ""
    }
    
});