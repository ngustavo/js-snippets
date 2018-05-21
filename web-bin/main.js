function updateOutput(){
    var css = '<style>' + $('#cssTab').val() + '</style>';
    var htm = '<body>' + $('#htmlTab').val() + '</body>';

    $('#output').contents().find('head').html(css);
    $('#output').contents().find('body').html(htm);

    document.getElementById('output').contentWindow.eval($('#jsTab').val());
}

$('.nav__btn').click(function(){
    $(this).toggleClass('nav__btn--active');
    var btn = $(this).attr('id');
    var tab = btn.substr(0, btn.length - 3) + 'Tab';
    console.log(tab);
    $('#' + tab).toggle();
});

$('.tab').on('change keyup paste', function(){
    updateOutput();
});
updateOutput();
