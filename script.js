$(document).ready(function(){
    arr = []
    cardBtn = []
    let res = 0
    // $(".win-con").hide()
    $(".rest").click(function(){
        location.reload();
    })
    while (arr.length < 7) {
        a = Math.floor(Math.random() * 25);
        if (arr.includes(a) == false){arr.push(a)}}

    
    $(".card").click(function(){
      if (arr.includes($(this).index())){
        $(this).children().show()
        $(this).css("background",'red');
        $(".db").show()
      }
      else{
        cardBtn.push($(this).index())
        $(this).css("background",'green');
        res += 1
        $(".res").text(res)
      }
    });
  });