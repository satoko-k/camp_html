$(function () {
  //   alert(1);

  $("#btnStart").on("click", function () {
    location.reload();
    $("#field").hide().fadeIn(2000); //2秒は=2000
  });

  // min～maxまでランダムな整数を作る関数
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // let cards = [1, 1, 2, 2, 3, 3];

  // // シャッフルする
  // for (let i = cards.length - 1; i > 0; i--) {
  //   let r = rand(0, i);
  //   let tmp = cards[i];
  //   cards[i] = cards[r];
  //   cards[r] = tmp;
  // }

  // for (let i = 0; i < cards.length; i++) {
  //   let element = $("#field");
  // }

  // // div.card_onで確認した時　0以上6未満（＝6回繰り返す）
  // for (let i = 0; i < cards.length; i++) {
  //   let element = document.createElement("li");
  //   element.className = "card_on";
  //   element.innerHTML = cards[i];
  //   element.index = i;
  //   $("#field").append(element);
  // }

  // ポケモンの写真名の配列を作成する。
  let pokemon = [
    "fusigidane_2.png",
    "fusigidane.png",
    "hitokage.png",
    "hitokage_2.png",
    "pikachuu_2.png",
    "pikachuu.png",
  ];

  // シャッフルする
  for (let i = pokemon.length - 1; i > 0; i--) {
    let r = rand(0, i);
    let tmp = pokemon[i];
    pokemon[i] = pokemon[r];
    pokemon[r] = tmp;
  }

  for (let i = 0; i < pokemon.length; i++) {
    let element = $("#field");
  }

  // li.card_offを作る　0以上6未満（＝6回繰り返す）
  for (let i = 0; i < pokemon.length; i++) {
    // ポケモンの画像挿入用の変数を用意する。
    const img = `<img src="img/${pokemon[i]}" alt="ポケモン" height="60px" width="auto" />`;
    $("#field").append(`<li class="card">
         <div class="front">？？？</div>
         <div class="back">${img}</div>
        </li>`);
    $("li").attr("class", "card_off");
  }

  // // 表のカードの数字から画像に変更;
  // let cardNumber = $(".back").text();
  // console.log(cardNumber);
  // let cardImage = "";
  // if (cardNumber == "1") {
  //   cardImage = '<img src="../img/pikachuu.png">';
  // } else if (cardNumber == "2") {
  //   cardImage = '<img src="../img/hitokage.png">';
  // } else if (cardNumber == "3") {
  //   cardImage = '<img src="../img/fusigidane.png">';
  // }
  // $(".back").html(cardImage);

  // クリックした時のdiv.card_onを作る
  // カードをクリックした回数を記憶しておくための変数
  let counter = 0;
  // 一番最初にクリックしたカードの数字を記憶するための変数
  let firstItem;
  // ２番目にクリックしたカードの数字を記憶するための変数
  let secondItem;

  //   タイマーの設定
  let timer;

  // カードをクリックした時のクリックイベント
  $("li").on("click", function () {
    // クリックする度にcounter変数に +1 をたす
    counter++;
    // カードを裏返す
    $(this).attr("class", "card_on");
    if (counter === 1) {
      // 一番最初にクリックしたカードの数字をfirstItemに記憶させる。
      let imageName = $(this).find("img").attr("src");
      firstItem = imageName.slice(0, 5);
      $("#result").text("");
    } else if (counter === 2) {
      // ２番目にクリックしたカードの数字をsecondItemに記憶させる。
      let imageName = $(this).find("img").attr("src");
      secondItem = imageName.slice(0, 5);
    }
    console.log("firstItemは", firstItem);
    console.log("secondItemは", secondItem);
    // 2回クリックした後、結果を比較する。
    if (counter === 2) {
      timer = setTimeout(judge, 1000);
    }
  });
  //  0.5秒後に ジャッジする関数
  function judge() {
    if (firstItem === secondItem) {
      // 最初に裏返したカードと２番目に裏返したカードの結果が同じ時
      $("#result").text("あたり！");
    } else {
      // 違う時
      $("#result").text("はずれ！！もう一回！");
      $("li").attr("class", "card_off");
      // firstItem.className = "card_off";
    }
    firstItem = "";
    secondItem = "";
    counter = 0;
    timer = "";
  }

  // この下は消しちゃダメ
});
