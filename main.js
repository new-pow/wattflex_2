var rec_movies = [
    {"name" : "그린북" , "director" : "피터 패럴리", "actor" : "비고 모텐슨, 마허샬라 알리", "comment": "두 남자의 특별한 우정이 시작된다!", "imgsrc" : "https://movie-phinf.pstatic.net/20190115_228/1547528180168jgEP7_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "가버나움" , "director" : "나딘 라바키", "actor" : "자인 알 라피아", "comment": "12살 소년 '자인'으로부터", "imgsrc" : "https://movie-phinf.pstatic.net/20190109_149/1546998123676c6LjJ_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "원더" , "director" : "스티븐 크보스키", "actor" : "제이콥 트렘블레이", "comment": "'어기', 세상 밖으로 나오다!", "imgsrc" : "https://movie-phinf.pstatic.net/20210201_56/16121602734716k8oV_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "쉰들러 리스트" , "director" : "스티븐 스필버그", "actor" : "리암 니슨", "comment": "시대와 맞선 위대한 용기", "imgsrc" : "https://movie-phinf.pstatic.net/20190122_81/1548118455965SCCSW_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "매트릭스" , "director" : "워쇼스키 형제", "actor" : "키아누 리브스", "comment": "서기 2199년, 인류는 지배당했다.", "imgsrc" : "https://movie-phinf.pstatic.net/20211210_72/1639104921350Pk5gh_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "쇼생크 탈출" , "director" : "프랭크 다라본트", "actor" : "팀 로빈스", "comment": "두려움은 죄수로 가두고 희망은 자유롭게 하리라 ", "imgsrc" : "https://movie-phinf.pstatic.net/20160119_278/14531650465287bcuk_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "클래식" , "director" : "곽재용", "actor" : "손예진 조승우", "comment": "잊혀진 약속이 깨어났다.", "imgsrc" : "https://movie-phinf.pstatic.net/20111222_233/1324486884038nu8Xk_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "백 투 더 퓨처" , "director" : "로버트 저메키스", "actor" : "마이클 J.폭스", "comment": "Nobody calls me chicken", "imgsrc" : "https://movie-phinf.pstatic.net/20150924_194/1443056454769VJKkL_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "죽은 시인들의 사회" , "director" : "피터 위어", "actor" : "로빈 윌리엄스", "comment": "“오 캡틴, 나의 캡틴”", "imgsrc" : "https://movie-phinf.pstatic.net/20210315_143/1615793538419tIM2B_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "살인의 추억" , "director" : "봉준호", "actor" : "송강호 김상경", "comment": "밥은 먹고 다니냐?", "imgsrc" : "https://movie-phinf.pstatic.net/20111222_166/1324548172003mpyIa_JPEG/movie_image.jpg?type=m203_290_2"}

]

var on_movie = [
    {"name" : "마녀" , "director" : "박훈정", "actor" : "신시아 박은빈", "comment": "통제 불가능한 존재가 세상 밖으로 나왔다!", "imgsrc" : "https://movie-phinf.pstatic.net/20220615_63/1655270906406BGdFF_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "범죄도시2" , "director" : "이상용", "actor" : "마동석 손석구", "comment": '“느낌 오지? 이 놈 잡아야 하는 거”', "imgsrc" : "https://movie-phinf.pstatic.net/20220516_144/1652665409592Chvey_JPEG/movie_image.jpg?type=m77_110_2"},
    {"name" : "브로커" , "director" : "고레에다 히로카즈", "actor" : "송강호 강동원", "comment": '"소영아, 너도 태어나줘서 고마워"', "imgsrc" : "https://movie-phinf.pstatic.net/20220511_189/1652251073330PXNoG_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "쥬라기 월드:도미니언" , "director" : "콜린 트레보로우", "actor" : "크리스 프랫", "comment": "지상 최대 블록버스터의 압도적 피날레!", "imgsrc" : "https://movie-phinf.pstatic.net/20220516_144/1652687286550mcE4G_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "탑건:매버릭" , "director" : "조셉 코신스키", "actor" : "톰 크루즈  마일즈 텔러", "comment": "가장 압도적인 비행이 시작된다!", "imgsrc" : "https://movie-phinf.pstatic.net/20220509_176/1652081912471yhg3N_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "씽2게더" , "director" : "가스 제닝스", "actor" : "매튜 맥커너히", "comment": "전 세계가 주목한 스테이지!", "imgsrc" : "https://movie-phinf.pstatic.net/20211231_136/1640927037740RqKuo_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "모어" , "director" : "이일하", "actor" : "모지민", "comment": "진짜 튀는 무대를 보여줄게", "imgsrc" : "https://movie-phinf.pstatic.net/20220607_79/1654593346304cTwrD_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "실종" , "director" : "가타야마 신조", "actor" : "사토 지로 이토 아오이", "comment": "아빠가 사라진 그곳에 그 놈이 나타났다!", "imgsrc" : "https://movie-phinf.pstatic.net/20220520_113/1653016295848sqpsY_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "니 얼굴", "director": "서동일", "actor" : "정은혜", "comment": "“예쁘게 그려주세요”", "imgsrc" : "https://movie-phinf.pstatic.net/20220523_118/1653272228021DOt1t_JPEG/movie_image.jpg?type=m203_290_2"},
    {"name" : "룸 쉐어링", "director": "이순성", "actor" : "나문희 최우성", "comment": "물러설 수 없는 동거가 시작된다!", "imgsrc" : "https://movie-phinf.pstatic.net/20220608_157/1654654613441kSez5_JPEG/movie_image.jpg?type=m203_290_2"}
]

const bm = document.eve

function bookmark(clicked_id){
    var elem = document.getElementById(clicked_id);
    if (elem.innerHTML === "bookmarks"){
        elem.innerText = "bookmark_remove";
    }else{
        elem.innerText = "bookmarks";
    }
}


// const contents = document.getElementById("contents-scroll");

// let new_movie = document.createElement('a');
// new_movie.setAttribute('class', 'movie');
// let new_img = document.createElement('img');
// let new_info = document.createElement('div');
// new_info.setAttribute('id', 'movie-info')
// let new_info_div = document.createElement('div');
// let comment = document.createElement('p');
// let title = document.createElement('p');
// // let bookmark = document.createElement('span');
// // bookmark.setAttribute('class', 'material-symbols-outlined');

// new_info_div.appendChild(comment);
// new_info_div.appendChild(title);
// new_info.appendChild(new_info_div);
// // new_info.appendChild(bookmark);
// new_movie.appendChild(new_img);
// new_movie.appendChild(new_info);

// contents.appendChild(new_movie);

// for (rec in rec_movies){
//     console.log(rec_movies[rec]);
// }

