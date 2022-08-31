//Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible


$('#b1').click(function() {
    $(".hideIt").hide();
    $(".toggle1").toggle();
});


//---------------------------------------------------------------------------

$('#b2').click(function() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/12",
        type: "GET", // CRUD operation, get means adding a data
        success: function(data) {
            console.log(data);
            document.getElementsByTagName("p")[2].innerText = data.title;
        }
    })
})

//-----------------------------------------------------------------------------






