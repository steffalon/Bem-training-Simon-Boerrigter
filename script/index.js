var photoArray = [
    'cartek.png',
    'flex.png',
    'steffgram.png',
    'login.png',
    'payment.png'
];

var count = 0;

loopPhotos();

function loopPhotos() {
    $('.projects__foto__modifier').attr("src", 'img/photoList/' + photoArray[count]).fadeIn(2500).delay(3000).fadeOut(2500).promise().done(function() {
        count++;
        if (count >= photoArray.length) {
            count = 0;
        }
        loopPhotos();
    });
}
