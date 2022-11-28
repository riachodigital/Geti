

$('nav a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href')
    targertOffset = $(id).offset().top;
    console.log(targertOffset)
});