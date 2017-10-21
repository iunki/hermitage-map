// transform: "matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)",
// horizontal line

var linesArrObj = [];

var getRooms = function (callback) {
    /*$.getJSON('http://localhost/rooms.json', function(data) {
        linesArrObj = data;
        callback();
    });*/
    linesArrObj = [
        {

            "id": 165,
            "top": "1031px",
            "left": "137px",
            "color": "rgb(244, 231, 106)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "34px",
            "height": "31px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "room": 15,

            "id": 142,
            "top": "163px",
            "left": "20px",
            "color": "rgb(255, 188, 250)",
            "template_id": 28,
            "transform": "matrix(1, 0, 0, 1, 0, 0)",
            "z_index": null,
            "width": "72px",
            "height": "54px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "room": 17,

            "id": 144,
            "top": "278px",
            "left": "19px",
            "color": "rgb(255, 188, 250)",
            "template_id": 28,
            "transform": "matrix(1, 0, 0, 1, 0, 0)",
            "z_index": null,
            "width": "133px",
            "height": "34px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 160,
            "top": "880px",
            "left": "280px",
            "color": "rgb(225, 81, 234)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "67px",
            "height": "32px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 158,
            "top": "786px",
            "left": "280px",
            "color": "rgb(225, 81, 234)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "65px",
            "height": "27px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "room": 24,
            "id": 153,
            "top": "281px",
            "left": "249px",
            "color": "rgb(255, 188, 250)",
            "template_id": 28,
            "transform": "matrix(1, 0, 0, 1, 0, 0)",
            "z_index": null,
            "width": "26px",
            "height": "323px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 159,
            "top": "819px",
            "left": "280px",
            "color": "rgb(225, 81, 234)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "65px",
            "height": "56px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "room": 27,
            "id": 155,
            "top": "602px",
            "left": "249px",
            "color": "rgb(255, 188, 250)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "27px",
            "height": "83px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "room": 18,

            "id": 145,
            "top": "280.739px",
            "left": "157.997px",
            "color": "rgb(255, 188, 250)",
            "template_id": 28,
            "transform": "matrix(1, 0, 0, 1, 0, 0)",
            "z_index": null,
            "width": "45px",
            "height": "28px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "room": 19,

            "id": 146,
            "top": "313.736px",
            "left": "157.997px",
            "color": "rgb(255, 188, 250)",
            "template_id": 28,
            "transform": "matrix(1, 0, 0, 1, 0, 0)",
            "z_index": null,
            "width": "45px",
            "height": "17px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 151,
            "top": "1226px",
            "left": "655px",
            "color": "rgb(210, 210, 210)",
            "template_id": 31,
            "transform": "none",
            "z_index": null,
            "width": "60px",
            "height": "60px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 31,
                "json": "{\"selector\":[\"floor floor3\"],\"arrayObj\":[{\"selector\":\"main-color\"},{\"selector\":\"floor-bg\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "room": 20,

            "id": 147,
            "top": "334.73px",
            "left": "157.997px",
            "color": "rgb(255, 188, 250)",
            "template_id": 28,
            "transform": "matrix(1, 0, 0, 1, 0, 0)",
            "z_index": null,
            "width": "44px",
            "height": "44px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "room": 21,

            "id": 148,
            "top": "382.727px",
            "left": "142.997px",
            "color": "rgb(255, 188, 250)",
            "template_id": 28,
            "transform": "matrix(1, 0, 0, 1, 0, 0)",
            "z_index": null,
            "width": "60px",
            "height": "44px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "room": 33,
            "id": 161,
            "top": "684px",
            "left": "247px",
            "color": "rgb(255, 188, 250)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "29px",
            "height": "295px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 168,
            "top": "1010px",
            "left": "17px",
            "color": "rgb(244, 231, 106)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "47px",
            "height": "54px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 166,
            "top": "982px",
            "left": "90px",
            "color": "rgb(244, 231, 106)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "42px",
            "height": "23px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 163,
            "top": "960px",
            "left": "158px",
            "color": "rgb(244, 231, 106)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "52px",
            "height": "20px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 152,
            "top": "683px",
            "left": "2454px",
            "color": "rgb(210, 210, 210)",
            "template_id": 31,
            "transform": "none",
            "z_index": null,
            "width": "60px",
            "height": "60px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 31,
                "json": "{\"selector\":[\"floor floor3\"],\"arrayObj\":[{\"selector\":\"main-color\"},{\"selector\":\"floor-bg\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "room": 22,

            "id": 149,
            "top": "431.733px",
            "left": "143.991px",
            "color": "rgb(255, 188, 250)",
            "template_id": 28,
            "transform": "matrix(1, 0, 0, 1, 0, 0)",
            "z_index": null,
            "width": "57px",
            "height": "56px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 164,
            "top": "983px",
            "left": "136px",
            "color": "rgb(244, 231, 106)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "58px",
            "height": "44px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 154,
            "top": "489px",
            "left": "280px",
            "color": "rgb(225, 81, 234)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "65px",
            "height": "195px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "room": 23,

            "id": 150,
            "top": "431px",
            "left": "205px",
            "color": "rgb(255, 188, 250)",
            "template_id": 28,
            "transform": "matrix(1, 0, 0, 1, 0, 0)",
            "z_index": null,
            "width": "40px",
            "height": "58px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "room": 12,
            "id": 139,
            "top": "94.7301px",
            "left": "165px",
            "color": "rgb(255, 188, 250)",
            "template_id": 28,
            "transform": "matrix(1, 0, 0, 1, 0, 0)",
            "z_index": null,
            "width": "114px",
            "height": "67px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "room": 11,
            "id": 138,
            "top": "92.7273px",
            "left": "282.997px",
            "color": "rgb(255, 188, 250)",
            "template_id": 28,
            "transform": "matrix(1, 0, 0, 1, 0, 0)",
            "z_index": null,
            "width": "30px",
            "height": "116px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 156,
            "top": "690px",
            "left": "280px",
            "color": "rgb(225, 81, 234)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "65px",
            "height": "61px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 157,
            "top": "756px",
            "left": "278px",
            "color": "rgb(225, 81, 234)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "67px",
            "height": "26px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "room": 13,
            "id": 140,
            "top": "93.7358px",
            "left": "93.9915px",
            "color": "rgb(255, 188, 250)",
            "template_id": 28,
            "transform": "matrix(1, 0, 0, 1, 0, 0)",
            "z_index": null,
            "width": "68px",
            "height": "69px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "room": 14,

            "id": 141,
            "top": "93.7358px",
            "left": "18.9915px",
            "color": "rgb(255, 188, 250)",
            "template_id": 28,
            "transform": "matrix(1, 0, 0, 1, 0, 0)",
            "z_index": null,
            "width": "72px",
            "height": "66px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 167,
            "top": "982px",
            "left": "16px",
            "color": "rgb(244, 231, 106)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "71px",
            "height": "23px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "room": 16,

            "id": 143,
            "top": "222px",
            "left": "19px",
            "color": "rgb(255, 188, 250)",
            "template_id": 28,
            "transform": "matrix(1, 0, 0, 1, 0, 0)",
            "z_index": null,
            "width": "73px",
            "height": "53px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 169,
            "top": "1068px",
            "left": "17px",
            "color": "rgb(244, 231, 106)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "89px",
            "height": "60px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 170,
            "top": "1135px",
            "left": "18px",
            "color": "rgb(244, 231, 106)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "28px",
            "height": "44px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 171,
            "top": "1133px",
            "left": "50px",
            "color": "rgb(244, 231, 106)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "55px",
            "height": "47px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 162,
            "top": "918px",
            "left": "157px",
            "color": "rgb(244, 231, 106)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "87px",
            "height": "40px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 173,
            "top": "1159px",
            "left": "143px",
            "color": "rgb(244, 231, 106)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "36px",
            "height": "50px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 174,
            "top": "1157px",
            "left": "184px",
            "color": "rgb(244, 231, 106)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "33px",
            "height": "53px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 176,
            "top": "915px",
            "left": "323px",
            "color": "rgb(240, 171, 76)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "67px",
            "height": "63px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 172,
            "top": "1158px",
            "left": "111px",
            "color": "rgb(244, 231, 106)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "29px",
            "height": "52px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 175,
            "top": "917px",
            "left": "281px",
            "color": "rgb(240, 171, 76)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "39px",
            "height": "61px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 177,
            "top": "939px",
            "left": "395px",
            "color": "rgb(240, 171, 76)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "21px",
            "height": "148px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 178,
            "top": "916px",
            "left": "420px",
            "color": "rgb(240, 171, 76)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "23px",
            "height": "72px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 179,
            "top": "992px",
            "left": "419px",
            "color": "rgb(240, 171, 76)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "26px",
            "height": "44px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 180,
            "top": "1040px",
            "left": "420px",
            "color": "rgb(240, 171, 76)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "24px",
            "height": "45px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 181,
            "top": "1091px",
            "left": "390px",
            "color": "rgb(240, 171, 76)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "52px",
            "height": "91px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 182,
            "top": "1098px",
            "left": "447px",
            "color": "rgb(240, 171, 76)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "61px",
            "height": "37px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 184,
            "top": "1068px",
            "left": "248px",
            "color": "rgb(240, 171, 76)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "23px",
            "height": "63px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 185,
            "top": "1134px",
            "left": "221px",
            "color": "rgb(240, 171, 76)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "52px",
            "height": "35px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        },
        {
            "id": 183,
            "top": "1097px",
            "left": "511px",
            "color": "rgb(240, 171, 76)",
            "template_id": 28,
            "transform": "none",
            "z_index": null,
            "width": "42px",
            "height": "63px",
            "project_id": 4,
            "type_id": 1,
            "name": null,
            "type": {
                "id": 1,
                "type": "object"
            },
            "template": {
                "id": 28,
                "json": "{\"selector\":[\"floor\"],\"arrayObj\":[{\"selector\":\"main-color\"}]}",
                "category_id": 5,
                "type_id": 1,
                "template_category": {
                    "id": 5,
                    "icon": "\/img\/wall.svg"
                }
            }
        }
    ];
    callback();
};

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
