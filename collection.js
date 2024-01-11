$(document).ready(function(){
    $('#inp').on('keyup',function(){
        let value = $(this).val().toLowerCase();
        $('#bdy ').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1);

        });
    });





});