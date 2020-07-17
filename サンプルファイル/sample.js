var roulette;
function start(){
    var result = document.getElementById("result");
    var omikuji = ["　 　アイカツフレンズ！　　～かがやきのジュエル～", "　アイドルマスターシンデ  　レラガールズ劇場　　CLIMAX SEASON",
    "あはれ！名作くん（シーズン4）","　　　　洗い屋さん！　　　～俺とアイツが女湯で!?～","異世界かるてっと","ULTRAMAN","機動戦士ガンダム THE ORIGIN 前夜 赤い彗星",
    "鬼滅の刃","キャロル＆チューズデイ","キラッとプリ☆チャン シーズン2","　　KING OF PRISM 　　-Shiny Seven Stars-","群青のマグメル","けだまのゴンじろー",
    "賢者の孫","この音とまれ！","この世の果てで恋を唄う少女YU-NO","さらざんまい","消滅都市","進撃の巨人Season3（Part.2）","ジモトがジャパン","女子かう生","　ストライクウィッチーズ 　501部隊発進しますっ！",
    "7SEEDS","世話やきキツネの仙狐さん","川柳少女","続・終物語","ダイヤのA actII","超可動ガール1/6","なむあみだ仏っ！-蓮台 UTENA-","なんでここに先生が!?",
    "猫のニャッホ","ノブナガ先生の幼な妻","八月のシンデレラナイン","叛逆性ミリオンアーサー（第2シーズン）","爆丸バトルプラネット","BAKUMATSUクライシス","ひとりぼっちの○○生活",
    "Bラッパーズ ストリート","Fairy gone フェアリーゴーン","フリージ","フルーツバスケット","文豪ストレイドッグス（第3シーズン）","ベイブレードバースト ガチ","ほら、耳がみえてるよ！-畏，看見耳朶拉- シーズン2",
    "ぼくたちは勉強ができない","真夜中のオカルト公務員","みだらな青ちゃんは勉強ができない","MIX","みるタイツ","八十亀ちゃんかんさつにっき","妖怪ウォッチ！（2019新シリーズ）","リラックマとカオルさん",
    "RobiHachi","四月一日さん家の（わたぬきさんちの）","ワンパンマン（第2期）"];
    roulette = setInterval(function(){
        var random = Math.round(Math.random() * (omikuji.length - 1));
        result.innerHTML = omikuji[random];
    }, 5);
}

function stop(){
    clearInterval(roulette);
    //STOPボタンを押した時の処理を書く
}

function getValue(idname){
  // value値を取得する
  var result = document.getElementById(idname).value;
 
  // Alertで表示する
  alert("value値は「" + result + "」です");
}