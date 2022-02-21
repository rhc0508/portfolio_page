$(document).ready(function(){

    // #contact 메일 
    $(".thnx_msg").hide();

    $("#contact .btn_area button").on("click", () => {
        check_input();
    });


    $(".close_btn").on("click", () => {
        $(".thnx_msg").hide();
        return false;
    });


});