$(function() {
  //---- 修改球員資訊 ----//
  var currentIndex = 0;

  var $bgfront = $(".player_bg_front")
  var $bg = $(".player_bg")
  var $player =$(".player")

  var $title_name=$(".title_name")
  var $profile_name = $(".profile_name")

  var $profile = $(".profile");

  var $age = $(".age");
  var $birth =$(".birth");
  var $pheight =$(".pheight");
  var $goal = $(".goal");
  var $pos = $(".pos")

  var $News1 = $(".news_box");
  var $News2 = $(".news_2");
  var $News3 = $(".news_3");
  var $News4 = $(".news_4");
  var $News5 = $(".news_5");




  var playerbg =[{
    front: [
      "./images/player1/player1_bg_front.png",
      "./images/player2/player2_bg_front.png",
      "./images/player3/player3_bg_front.png",
      "./images/player4/player4_bg_front.png",
      "./images/player5/player5_bg_front.png"],
    player:[
      "./images/player1/player1.png",
      "./images/player2/player2.png",
      "./images/player3/player3.png",
      "./images/player4/player4.png",
      "./images/player5/player5.png"],
    back:[
      "./images/player1/player1_bg_back.png",
      "./images/player2/player2_bg_back.png",
      "./images/player3/player3_bg_back.png",
      "./images/player4/player4_bg_back.png",
      "./images/player5/player5_bg_back.png"]
  }]

  var player_name=[
    "Igor AKINFEEV",
    "Aleksandr GOLOVIN",
    "Ilya KUTEPOV",
    "Iury GAZINSKY",
    "Artem DZYUBA"]

  var player_profile =[
    './images/player1/player1_profile.jpg',
    './images/player2/player2_profile.jpg',
    './images/player3/player3_profile.jpg',
    './images/player4/player4_profile.jpg',
    './images/player5/player5_profile.jpg' ]

  var player_info= [{
    age: ["32", "23","25","29","30"],
    birth:["08 Apri 1986","30 MAY 1996","29 JULY 1993","20 JULY 1989","22 AUGUST 1988"],
    pheight:["186.0CM","178.0 CM","190.0 CM","191.0 CM"],
    goal:["111", "3","12","10","28"],
    pos:["Goalkeeper","Midfielder","Defender","Midfielder","Forward"]
  }]

  var player_news=[{
    news1: ["./images/player1/player1_news_1.jpg", "./images/player2/player2_news_1.jpg", "./images/player3/player3_news_1.jpg", "./images/player4/player4_news_1.jpg", "./images/player5/player5_news_1.jpg"],
    news2: ["./images/player1/player1_news_2.jpg", "./images/player2/player2_news_2.jpg", "./images/player3/player3_news_2.jpg", "./images/player4/player4_news_2.jpg", "./images/player5/player5_news_2.jpg"],
    news3: ["./images/player1/player1_news_3.jpg", "./images/player2/player2_news_3.jpg", "./images/player3/player3_news_3.jpg", "./images/player4/player4_news_3.jpg", "./images/player5/player5_news_3.jpg"],
    news4: ["./images/player1/player1_news_4.jpg", "./images/player2/player2_news_4.jpg", "./images/player3/player3_news_4.jpg", "./images/player4/player4_news_4.jpg", "./images/player5/player5_news_4.jpg"],
    news5: ["./images/player1/player1_news_5.jpg", "./images/player2/player2_news_5.jpg", "./images/player3/player3_news_5.jpg", "./images/player4/player4_news_5.jpg", "./images/player5/player5_news_5.jpg"]
  }]

  var player_news_title=[{
    newst1: ["Akinfeev retires from Russia duty","Russian midfielder Golovin leaves CSKA","Ilya Kutepov: Russia’s World Cup success has become ‘a kind of addiction’","Russia’s Yury Gazinsky scores opening goal of tournament","Russia still gripped by Dzyuba-mania"],
    newst2: ["Akinfeev: Ambassador role a massive honour","FUT 18: Annunced Golovin Man of The Match","Clinical Russia tops Egypt to likely reach knockout rounds","FC Tosno Saint Petersburg vs FC Krasnodar - Russian Premier League","How Artem Dzyuba's dreams came true"],
    newst3: ["Igor Akinfeev: Russia's hero against Spain","ManvsMachine: Nike \"Born Mercurial\"","Outstanding Spain display shows why West Ham reportedly want Ilya Kutepov","Gazinsky heads in first World Cup goal against Saudi Arabia","Putin calls Russia coach after they prove doubters wrong - for now"],
    newst4: ["Why Akinfeev never became a superstar","Aleksandr Golovin, Russia's new shining star"," Ilya Kutepov shows off foot injury suffered during defeat by Croatia","FIFA World Cup: Russia blow away Saudi in opener... ","Artem Dzyuba – Will the Dominoes Fall in his Favour?"],
    newst5: ["SWC hero Akinfeev says Russia were aiming for penalties","Aleksandr Golovin joins Monaco on five-year deal","Training session of the Russian national football team","Russia get off to a flying start at 2018 FIFA World Cup","Russian Striker Dzyuba Asks 'Whole Country' to Support Team"]
  }]




  if (currentIndex = 0) {
    changePlayer();
  }else{
    changePlayer();
  }


  //---- 修改球員資訊 ----//

  $(".fa-chevron-right").click(function(event) {
    if (currentIndex<4) {
      currentIndex++
      changePlayer();
    } else {
      currentIndex = 0
      changePlayer();
    }
  });

  $(".fa-chevron-left").click(function(event) {
    if (currentIndex>0) {
      currentIndex--
      changePlayer();
    } else {
      currentIndex =4
      changePlayer();
    }
  });


  $(".showbox button").click(function(event) {
    $(".showbox").hide(1000)
  });

  $(".gallery .photo").click(function(event) {
    var photoURL = $(this).css('background-image');
    $(".showbox").show(1000)
    $(".thephoto").css("background-image", photoURL);
  });



  //---- 修改球員資訊 ----//

  //---- 移動背景 ----//
  var windowWidth = $(window).width();
  $(".player_bg").mousemove(function(event){

    var moveX = (($(window).width()/2) -event.pageX) *0.05;
    var moveY = (($(window).height()/2) -event.pageY) *0.05;
    $(".player").css("margin-left", moveX+"px");
    $(".player").css("margin-top", moveY+"px");
  });
  //---- 移動背景 ----//


  //---- 回到最上方 ----//
  $(window).scroll(function(event) {
    var offset = $("html,body").scrollTop();
    if (offset >= 345){
      $(".backtoTop").show(1000);
    }else{
      $(".backtoTop").hide(1000);
    }
  });

  //---- 回到最上方 ----//



  function changePlayer(){

    $bgfront.css({
      "background" : "url("+playerbg[0].front[currentIndex]+")no-repeat center center",
      "background-size" : 'cover'
    })

    $player.css({
      "background" : "url("+playerbg[0].player[currentIndex]+")no-repeat center center",
      "background-size" : '100%'
    })

    $bg.css({
      "background" : "url("+playerbg[0].back[currentIndex]+")no-repeat center center",
      "background-size" : 'cover'
    })

    $title_name.html(player_name[currentIndex])
    $profile_name.html(player_name[currentIndex])

    $profile.attr('src', player_profile[currentIndex]);


    $age.html(player_info[0].age[currentIndex])
    $birth.html(player_info[0].birth[currentIndex])
    $pheight.html(player_info[0].pheight[currentIndex])
    $goal.html(player_info[0].goal[currentIndex])
    $pos.text(player_info[0].pos[currentIndex])


    $News1.css({
      "background" : "url("+player_news[0].news1[currentIndex]+")",
      "background-size" : 'cover'
    })
    $News1.find(".news1_title").text(player_news_title[0].newst1[currentIndex])


    $News2.css({
      "background" : "url("+player_news[0].news2[currentIndex]+")",
      "background-size" : 'cover'
    })
    $News2.find(".news2_title").text(player_news_title[0].newst2[currentIndex])

    $News3.css({
      "background" : "url("+player_news[0].news3[currentIndex]+")",
      "background-size" : 'cover'
    })
    $News3.find(".news3_title").text(player_news_title[0].newst3[currentIndex])

    $News4.css({
      "background" : "url("+player_news[0].news4[currentIndex]+")",
      "background-size" : 'cover'
    })
    $News4.find(".news4_title").text(player_news_title[0].newst4[currentIndex])

    $News5.css({
      "background" : "url("+player_news[0].news5[currentIndex]+")",
      "background-size" : 'cover'
    })
    $News5.find(".news5_title").text(player_news_title[0].newst5[currentIndex])

  }

});
