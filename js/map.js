// transform: "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)",
// horizontal line

var linesArrObj = [];

var getRooms = function (callback) {
    $.getJSON('http://localhost/rooms.json', function(data) {
        linesArrObj = data;
        callback();
    });
}

$(function () {

    window.objArr = [];
    window.objModel = null;
    getRooms(function () {
        initTables(linesArrObj);


        setTimeout(function () {

            imageInit(initObjFromImg);

            $(window).resize(function () {
                imageInit(initObjFromImg);
            });

        }, 2000);
    })




});


var makeDivByObject = function (obj, index) {

    var $newObj = $("<div class='free-table'></div>")
    $newObj.width(parseInt(obj.width));
    $newObj.height(parseInt(obj.height));
    $newObj.height(obj.height);
    $newObj.css("left", obj.left);
    $newObj.css("right", obj.right);
    $newObj.css("top", obj.top);
    $newObj.css("-webkit-transform-style", "preserve-3d");
    $newObj.css("-moz-transform-style", "preserve-3d");
    $newObj.css("transform-style", "preserve-3d");
    $newObj.css("-ms-transform-style", "preserve-3d");
    $newObj.css("-o-transform-style", "preserve-3d");
    $newObj.css('transform-origin', "50% 50%");
    $newObj.css('-moz-transform-origin', "50% 50%");
    $newObj.css('-ms-transform-origin', "50% 50%");
    $newObj.css('-o-transform-origin', "50% 50%");
    $newObj.css('-webkit-transform-origin', "50% 50%");
    $newObj.css('transform', obj.transform);
    $newObj.css('-moz-transform', obj.transform);
    $newObj.css('-ms-transform', obj.transform);
    $newObj.css('-o-transform', obj.transform);
    $newObj.css('-webkit-transform', obj.transform);
    $newObj.css("background-color", obj.color);
    $newObj.attr("data-id", obj.id);
    $newObj.attr("data-index", index);
    $newObj.attr("data-name", obj.name);
    $newObj.attr("data-room", obj.room);
    //safari !!
    $newObj.css('cursor', 'pointer');

    $roomText = $('<div><span class="room-text">'+obj.room+'</span></div>');

    $newObj.append($roomText);

    return $newObj;

}


var initTables = function (data) {

    // window.objArr = [];

    window.tablesArr = data;

    for (var i = 0; i < data.length; i++) {
        window.objArr.push(makeDivByObject(data[i], i));
    }
}

var initObjFromImg = function () {

    $(".free-table").remove();

    var $addedDiv = $('#img-construct');

    for (var i = 0; i < window.objArr.length; i++) {

        $addedDiv.append(window.objArr[i]);
    }
}

var imageInit = function (callback) {
    var src = '/img/1floor.png';

    var img = new Image();

    img.onload = function () {

        var $addedDiv = $('<div id="img-construct"></div>');
        $addedDiv.css("-webkit-transform-style", "preserve-3d");
        $addedDiv.css("-webkit-transform-style", "preserve-3d");
        $addedDiv.css("-moz-transform-style", "preserve-3d");
        $addedDiv.css("transform-style", "preserve-3d");
        $addedDiv.css("-ms-transform-style", "preserve-3d");
        $addedDiv.css("-o-transform-style", "preserve-3d");

        var img = new Image();
        img.src = src;


        $addedDiv.width(img.width);
        $addedDiv.height(img.height);

        $addedDiv.css({
            "background-image": "url(" + src + ")",
            "background-repeat": "no-repeat",
            "background-position": "center center",
            "background-attachment": "scroll",
            "background-size": "100% 100%"
        });

        $('#img-container').width($(window).width());
        $('#img-container').height($(window).height());
        $('#img-container').html($addedDiv);

        var options = {
            'top': '0', // zoom target container top position in pixel
            'left': '0', // zoom target container left position in pixel
            'width': '100%', // zoom target container width in pixel or in percent
            'height': '100%', // zoom target container height in pixel or in percent
            'mouseEnabled': true,
            'moveCursorEnabled': false,
            'touchEnabled': true,
            'scrollEnabled': true, // enable plugin mouse wheel behviour
            'dblClickEnabled': true, // enable plugin mouse doubleClick behviour
            'mouseMoveEnabled': true, // enable plugin target drag behviour
            'dblTapEnabled': true, // enable plugin double tap behaviour
            'pinchEnabled': true, // enable zoom when user pinch on target
            'touchMoveEnabled': true, // enable target move via touch
            // 'easing' : 'smartZoomEasing',
            'maxScale': 2.3, // the max scale that will be applied on the zoom target
            'dblClickMaxScale': 1.2, // the max scale that will be applied on the zoom target on double click
            'containerBackground': '#FFFFFF', // zoom target container background color (if containerClass is not set)
            'containerClass': 'bg-pattern'
        };


        $('#img-construct').smartZoom(options);


        if (typeof callback == "function") {
            callback();
        }


    };

    img.src = src;
}
