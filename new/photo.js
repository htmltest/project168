$(document).ready(function() {

    var img = new Image();
    var imgWidth  = 0;
    var imgHeight = 0;
    var TO_RADIANS = Math.PI/180;
    
    var logos = [
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAqCAYAAAAj6gIfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQxRjFFRTk1MTlCRTExRUJBQzQxRkM1QjA3NzMwMjUxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQxRjFFRTk2MTlCRTExRUJBQzQxRkM1QjA3NzMwMjUxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDFGMUVFOTMxOUJFMTFFQkFDNDFGQzVCMDc3MzAyNTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDFGMUVFOTQxOUJFMTFFQkFDNDFGQzVCMDc3MzAyNTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mdc+iAAAOg0lEQVR42tRZ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',
        'data:image/png;base64,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'
    ];

    $('.photo-logo-step-1-file input').on('change', function(e) {
        var file = this.files[0];
        var reader = new FileReader;
        reader.onload = function(event) {
            if (file.type.match("image.*")) {
                var dataUri = event.target.result;
                var canvas = document.getElementById('photo-logo-step-2-img-editor');
                var context = canvas.getContext('2d');
                img.onload = function() {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    imgWidth  = img.width;
                    imgHeight = img.height;
                    var newWidth  = canvas.width;
                    var newHeight = canvas.height;
                    var newX = -canvas.width / 2;
                    var newY = -canvas.height / 2;
                    if (imgWidth > imgHeight) {
                        var diffHeight = newHeight / imgHeight;
                        newWidth = imgWidth * diffHeight;
                        newX = -(newWidth - canvas.width) / 2 - canvas.width / 2;
                    } else {
                        var diffWidth = newWidth / imgWidth;
                        newHeight = imgHeight * diffWidth;
                        newY = -(newHeight - canvas.height) / 2 - canvas.height / 2;
                    }
                    context.save();
                    context.translate(canvas.width / 2, canvas.height / 2);
                    context.drawImage(img, newX, newY, newWidth, newHeight);
                    context.restore();

                    var logoID = $('.photo-logo-step-2-select-item').index($('.photo-logo-step-2-select-item.active'));
                    var logoImg = new Image();
                    logoImg.onload = function() {
                        context.drawImage(logoImg, 322, 415, 47, 42);
                        var imageDownload = canvas.toDataURL('image/jpeg');
                        $('.photo-logo-step-2-download a').attr('href', imageDownload);
                    };
                    logoImg.src = logos[logoID];

                    $('.photo-logo-step-1').hide();
                    $('.photo-logo-step-2').show();
                };
                img.src = dataUri;
            }
        }
        reader.readAsDataURL(file);
    });

    $('.photo-logo-step-2-select-item a').click(function(e) {
        var curItem = $(this).parent();
        if (!curItem.hasClass('active')) {
            $('.photo-logo-step-2-select-item.active').removeClass('active');
            curItem.addClass('active');
            $('.photo-logo-step-1-file input').trigger('change');
        }
        e.preventDefault();
    });
    
    $('.photo-logo-step-2-other a').click(function(e) {
        $('.photo-logo-step-1-file input').trigger('click');
        e.preventDefault();
    });

});