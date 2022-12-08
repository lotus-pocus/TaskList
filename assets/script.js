//create variables

var submit = $("#submitButton");

var addTask = document.querySelector('#submitButton');

//add event listener for submit button
//save text entered in textbox to local storage


submit.click(function (event) {
    event.preventDefault();
    var jobs = $("#taskEntry").val();
    $('ul').append('<li>'+jobs+'</li>');
}
);

$(document).on('dblclick', 'li', function(){
    $(this).toggleClass('strike').fadeOut('slow')
});

