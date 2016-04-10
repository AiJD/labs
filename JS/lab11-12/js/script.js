$( document ).ready(function() {

    $('body').carousel();

    var html = $( '#template' ).html();
    var user = [
        {
            userName: 'Drozd Yuliia',
            userIcon: 'photo.jpg',
            userPosition: 'Front-end developer',
            userDescription: 'I am GoIT student learning JS.',
            userTel: '0509134567'
        }
    ];

    var content = tmpl( html, {
        data: user[0]
    });
    $('body').append( content );
});