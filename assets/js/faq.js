/*=================================================
# FAQ
==================================================*/
$(document).ready(function () {

    $("#faq .answer").hide();
    $("#faq .fa-angle-up").hide();

    // Question 1
    $(".question_1 .fa-angle-down").click(function () {
        $(".answer_1").slideDown("slow");
        $(".question_1 .fa-angle-down").hide();
        $(".question_1 .fa-angle-up").show();
    });

    $(".question_1 .fa-angle-up").click(function () {
        $(".answer_1").slideUp("slow");
        $(".question_1 .fa-angle-down").show();
        $(".question_1 .fa-angle-up").hide();
    });

    // Question 2
    $(".question_2 .fa-angle-down").click(function () {
        $(".answer_2").slideDown("slow");
        $(".question_2 .fa-angle-down").hide();
        $(".question_2 .fa-angle-up").show();
    });

    $(".question_2 .fa-angle-up").click(function () {
        $(".answer_2").slideUp("slow");
        $(".question_2 .fa-angle-down").show();
        $(".question_2 .fa-angle-up").hide();
    });

    // Question 3
    $(".question_3 .fa-angle-down").click(function () {
        $(".answer_3").slideDown("slow");
        $(".question_3 .fa-angle-down").hide();
        $(".question_3 .fa-angle-up").show();
    });

    $(".question_3 .fa-angle-up").click(function () {
        $(".answer_3").slideUp("slow");
        $(".question_3 .fa-angle-down").show();
        $(".question_3 .fa-angle-up").hide();
    });

    // Question 4
    $(".question_4 .fa-angle-down").click(function () {
        $(".answer_4").slideDown("slow");
        $(".question_4 .fa-angle-down").hide();
        $(".question_4 .fa-angle-up").show();
    });

    $(".question_4 .fa-angle-up").click(function () {
        $(".answer_4").slideUp("slow");
        $(".question_4 .fa-angle-down").show();
        $(".question_4 .fa-angle-up").hide();
    });

    // Question 5
    $(".question_5 .fa-angle-down").click(function () {
        $(".answer_5").slideDown("slow");
        $(".question_5 .fa-angle-down").hide();
        $(".question_5 .fa-angle-up").show();
    });

    $(".question_5 .fa-angle-up").click(function () {
        $(".answer_5").slideUp("slow");
        $(".question_5 .fa-angle-down").show();
        $(".question_5 .fa-angle-up").hide();
    });

    // Question 6
    $(".question_6 .fa-angle-down").click(function () {
        $(".answer_6").slideDown("slow");
        $(".question_6 .fa-angle-down").hide();
        $(".question_6 .fa-angle-up").show();
    });

    $(".question_6 .fa-angle-up").click(function () {
        $(".answer_6").slideUp("slow");
        $(".question_6 .fa-angle-down").show();
        $(".question_6 .fa-angle-up").hide();
    });
});