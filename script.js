// Add your answer here

$('.lesson').hover(
    function() {
        $(this).find('.text-contents').css('display', 'inline-block');
    },
    function() {
        $(this).find('.text-contents').css('display', 'none');
    },
    function() {
        $(this).find('.text-contents').css('display', 'inline');
    }
);
