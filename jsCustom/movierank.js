$(function() {
    let y = new Date();
    y.setDate(y.getDate()-1);
    let str = y.getFullYear() + "-"
    + ("0" + (y.getMonth() + 1)).slice(-2) + "-"
    + ("0" + y.getDate()).slice(-2);
    $("#date").attr("max",str);

    
    $("#mybtn").click(function() {
        let d = $("#date").val();
        const regex = /-/g;
        let d_str = d.replace(regex,"")

        let url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt="+d_str

         $.getJSON(url, function(data) {
             let movieList = data.boxOfficeResult.dailyBoxOfficeList;
             $("#boxoffice").empty();
             $("#boxoffice").append(d+" 박스 오피스 순위<br>").css("color","#D7E1E1");
             for(let i in movieList){
                 $("#boxoffice").append("<div class='movie-item' id="+movieList[i].movieCd+">"+(parseInt(i)+1)+". "+movieList[i].movieNm+" / "+movieList[i].audiAcc+"명</div><hr>");
                 console.log(movieList[i].movieCd);
             }
            });
    });
   
    $("#boxoffice").on("click",".movie-item", function(){
        let d = $(this);
        let movieCd = d.attr("id");
        let url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd="+movieCd;
        $.getJSON(url,function(res){
            let movie = res.movieInfoResult.movieInfo;
            d.append("<hr>");
            d.append("개봉일 : "+movie.openDt+"<br>");
            d.append("감독 : "+movie.directors[0].peopleNm+"<br>");
            d.append("주연 : "+movie.actors[0].peopleNm+", "+movie.actors[1].peopleNm+", "+movie.actors[2].peopleNm);
            d.append("<hr>");
        })
    })
});




