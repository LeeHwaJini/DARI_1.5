$(document).ready(function () {
  $("a.btn-pop").on("click", function () {
    $(".pop-rules").addClass("active");
    console.log($(this).parents(".check").text().replace("보기", ""));
    $(".pop-rules h2").text(
      $(this).parents(".check").text().replace("보기", "")
    );

    $(".rules-wrap").html(
      $(this).parents(".agreeArea").find(".contents").html()
    );
  });
  $(".pop-close, .layer-wrap .bg, .btn.confirm").on("click", function () {
    $(this).parents(".layer-popup").removeClass("active");
    $("body, #wrap").css("height", "auto");
    $("body, #wrap").css("overflow", "visible");
  });

  //   $(".member-corporate-area").hide();

  //   const activeTab = $(".tab li.active");

  //   const activeTabText = activeTab.text();
  //   $(".title").text(activeTabText);

  //   $(".tab li").click(function () {
  //     $(".tab li").removeClass("active");
  //     $(this).addClass("active");

  //     const isIndividual = $(this).hasClass("individual");
  //     const selectedTabText = $(this).text();
  //     console.log(isIndividual);
  //     $(".title").text(selectedTabText);

  //     $(".member-individual-area").toggle(isIndividual);
  //     $(".member-corporate-area").toggle(!isIndividual);
  //   });

  $(".member-corporate-area").hide();

  if ($(".tab li.active").hasClass("individual")) {
    $(".member-corporate-area").hide();
    $(".member-individual-area").show();
  } else {
    $(".member-individual-area").hide();
    $(".member-corporate-area").show();
  }

  $(".tab li").click(function () {
    $(".tab li").removeClass("active");
    $(this).addClass("active");

    const isIndividual = $(this).hasClass("individual");
    if (isIndividual) {
      $(".member-corporate-area").hide();
      $(".member-individual-area").show();
    } else {
      $(".member-individual-area").hide();
      $(".member-corporate-area").show();
    }
  });
});

var popClose = function (e) {
  $(".layer-popup").removeClass("active");
  $("body, #wrap").css("height", "auto");
  $("body, #wrap").css("overflow", "visible");
};
