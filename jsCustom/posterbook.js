
$(document).ready(function(){

    // 툴바 버튼
    let $btns = $('.toolbar .btn');
    $('.toolbar .btn:first-child').addClass('active');

    $('.toolbar .btn').on('click',function(){
        let index = $(this).index();
        $btns.removeClass('active');
        $(this).addClass('active');
    });

    // 소제목
    let $userName = "왓플릭스";
    $('.contents-banner span').html($userName+" 님이 보고 싶은 영화");


    // 영화 추천 버튼
    let $markCount = $('.marked').length;

    $('.comment').html("<h3>"+$userName+" 님,<br>더 많은 영화를<br>찾아보세요.</h3><br>보고싶어요 표시한 영화 <b>"+$markCount+"</b>개");

    // 북마크 팝업
    let $moviePoster = $('.marked');
    let $img = $('.movieItem img');
    let $movieInfo = $('.movieItem .movieInfo');
    
    // 요소 랜덤으로 나오기
    let movieItem = $(".movieItem:not(:first-child)");

    for(let i = 0; i < movieItem.length; i++){
        let idx = Math.floor(Math.random() * movieItem.length -1) + 1;
        let idx2 = Math.floor(Math.random() * movieItem.length -1) + 1;
        movieItem.eq(idx).before(movieItem.eq(idx2));

};

    $moviePoster.each(function(index){
        let img = $img.eq(index);
        let movieInfo = $movieInfo.eq(index);
        $(this).on('mouseover',function(){
            img.css('opacity',0.4);
            movieInfo.fadeTo(300,1);;
            $(this).css('box-shadow','0 3px 5 black');
        });
        $(this).on('mouseout',function(){
            img.css('opacity',1);
            movieInfo.css('opacity',0);
        });
        $(this).on('click',function(){
            $(this).removeClass('marked');
            $(this).addClass('noMark');
            $(this).fadeTo(500,0);
            $markCount = $('.marked').length;
            $('.comment').html("<h3>"+$userName+" 님,<br>더 많은 영화를<br>찾아보세요.</h3><br>보고싶어요 표시한 영화 <b>"+$markCount+"</b>개");
        });
    });
    

});


