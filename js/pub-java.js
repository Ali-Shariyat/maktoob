/*box-resize*/
equalheight = function (container, el) {

    var currentTallest = 0,
         currentRowStart = 0,
         rowDivs = new Array(),
         $el,
         topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height() + 30) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}
$(window).load(function () {
    equalheight('.news > li .text-news');
    equalheight('.part-two > li');
});
$(window).resize(function () {
    equalheight('.part-two > li');
    equalheight('.news > li .text-news');
});


/*box-resize end*/




$(".black-click").click(function () {
    $(".search-box").animate({
        "left": "-110%"
    }, 500)
    $(".menu-xs").animate({
        right: "-250px"
    })
    $(".black-click").fadeOut()
})
$(".menu-s-icon").click(function () {
    $(".menu-xs").animate({ "right": "0" }, 500)
    $(".black-click").fadeIn();
})

$(".parent-close-icon svg").click(function () {
    $(".menu-xs").animate({ "right": -$(".menu-xs").outerWidth() }, 500);
    $(".black-click").fadeOut();
})
$(".search-xs-icon i").click(function () {
    $(".search-box").animate({
        "left": 0
    }, 500)
    $(".black-click").fadeIn();
})
$(".menu-drop > div").children(".plus-xs").click(function () {
    var tro = $(this).attr("data-status")
    if (tro == 1) {
        $(this).addClass("plus-up")
        $(this).closest(".menu-drop").children(".menu-down-xs").stop().slideDown()
        $(this).attr("data-status", 2);

    } else if (tro == 2) {
        $(this).removeClass("plus-up")
        $(this).closest(".menu-drop").children(".menu-down-xs").stop().slideUp()
        $(this).attr("data-status", 1)
    }
});

$(function () {
    window.responsive = function responsive() {
        if ($(window).width() >= 600) {
            $(window).load(function () {
                equalheight('.news > li .text-news');
            });
            $(window).resize(function () {
                equalheight('.news > li .text-news');
            });
        }
        if ($(".biog")[0]) {
            if ($(window).width() >= 980) {
                /*effect-animation*/
                setTimeout(function () {
                    $(".background-part-one").fadeIn();
                    $(".part-one").css("opacity", "1")
                }, 100);
                setTimeout(function () {
                    $(".part-one .container p").addClass("fadeInUp animated").css("opacity", "1");
                }, 400);
                setTimeout(function () {
                    $(".part-one .container span").addClass("fadeInUp animated").css("opacity", "1");
                }, 1000);

                $(window).scroll(function () {
                    var re = $(window).scrollTop();
                    if (re >= $("header").height()) {
                        $(".to-top").fadeIn()
                    } else {
                        $(".to-top").fadeOut()
                    }
                    if (re >= $(".part-two").parents(".container").offset().top - $(".part-two").parents(".container").height()) {
                        $(".part-two li").addClass("fadeInUp animated").css("opacity", "1");
                    }
                    if (re >= $(".biog").offset().top - $(".biog").height() - 300) {
                        $(".biog .img-biog").addClass("fadeInRightBig animated").css("opacity", "1");
                        $(".biog").css("opacity", "1");
                        $(".biog .text-biog").addClass("fadeInLeftBig animated").css("opacity", "1");
                    }
                    if (re >= $(".news").offset().top - $(".news").height()) {
                        setTimeout(function () {
                            $(".news li:nth-child(1)").addClass("fadeIn animated");
                        }, 0);
                        setTimeout(function () {
                            $(".news li:nth-child(2)").addClass("fadeIn animated");
                        }, 250);
                        setTimeout(function () {
                            $(".news li:nth-child(3)").addClass("fadeIn animated");
                        }, 500);

                        setTimeout(function () {
                            $(".archive-news").addClass("zoomIn animated").css("opacity", "1");
                        }, 600);
                    }
                    if (re >= $(".back-comments ul").offset().top - $(".back-comments ul").height() - 400) {
                        $(".back-comments ul > li").addClass("zoomIn animated").css("opacity", "1");
                    }
                    if (re >= $(".slick-slider").offset().top - $(".slick-slider").height() - 300) {
                        $(".slick-slider > div").addClass("fadeInUp animated").css("opacity", "1");

                    }
                })
            }
        }
        if ($(".child-sidebar-shop").height() >= $(".shop").height()) {
            $(".child-sidebar-shop").css({
                top: "0",
                "height": "auto"
            })
        }
        else {
            $(".sidebar-shop").height($(".shop").height());
        }
        if ($(window).width() >= 1280) {
            $(".side-bar-inter-page").height($(".inter-page-contect").outerHeight()+40);
            if ($(".side-bar-inter-page")[0]) {
                $(".side-bar-inter-page > div").sidebarFix({
                    frame: $('.side-bar-inter-page'),
                    topBuffer: $(".fix-menu-l").height() + 10
                });
            }
            if ($(".child-sidebar-shop")[0]) {
                $(".child-sidebar-shop").sidebarFix({
                    frame: $('.sidebar-shop'),
                    topBuffer: $(".fix-menu-l").height() + 5
                });
            }

        }
        if ($(window).width() <= 1280) {
            $(".side-bar-inter-page").height($(".inter-page-contect").outerHeight());
            if ($(".side-bar-inter-page")[0]) {
                $(".side-bar-inter-page > div").sidebarFix({
                    frame: $('.side-bar-inter-page'),
                    topBuffer: 40
                });
            }
            if ($(".child-sidebar-shop")[0]) {
                $(".child-sidebar-shop").sidebarFix({
                    frame: $('.sidebar-shop'),
                    topBuffer: 50
                });
            }

        }
    }
});
//Call the function on load and resize
$(window).on('ready load resize orientationchange', function () { responsive(); });

$(".slider ul").slick({
    dots: true,
    customPaging: function (slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<div class="dots-slider"></div>';
    },
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 3,
    rtl: true,
    prevArrow: "",
    nextArrow: "",
    responsive: [
{
    breakpoint: 1200,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 2
    }
},
{
    breakpoint: 600,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2
    }
}
    ]
});


$(window).load(function () {
    setTimeout(function () {
        $(".loader-page").fadeOut();
    }, 800)
});

$(window).scroll(function () {
    var $scroll_window = $(window).scrollTop();
    if ($(".back-comments")[0]) {
        $(".back-comments").css("background-position-y", ($scroll_window - $(".back-comments").offset().top) / 6)
    }
})
$(".fix-menu-par").height($(".fix-menu-l").height())
$(".fix-menu-par").height($(".fix-menu-par").height())
var $header_parent = $(".fix-menu-par").outerHeight();
var i = 0;
$(window).scroll(function () {
    var re = $(window).scrollTop();
    if (re > $(".fix-menu-par").offset().top + $header_parent) {
        $(".fix-menu-l").addClass("add-class-fixed-menu").css("top", "0")
        if (re > i) {
            $(".fix-menu-l").css({
                top: -$header_parent
            });
        }
        i = re;
    }
    if (re <= $(".one-header-part").height()) {
        $(".to-top").fadeOut()
        $(".fix-menu-l").removeClass("add-class-fixed-menu").removeAttr("style");
        $(".header-l").removeAttr("style");
        i = 0;
    }
    //if (re > $(".fix-menu-par").offset().top) {
    //    $(".fix-menu-l").css({
    //        position: "fixed",
    //        width: "100%",
    //        top: 0,
    //        "z-index": "9999"
    //    });
    //} else {
    //    $(".fix-menu-l").removeAttr("style")
    //}

});
$(document).ready(function () {
    $("body,html").animate({
        scrollTop: 0,
    }, 0);
})
$(".to-top").click(function () {
    $("body,html").stop().animate({
        scrollTop: 0,
    }, 1000);
});


var $information = $(".information > li")
var $information_tab = $(".information-tab li")
function activing_two(i) {
    $information.removeClass("parent-sub-block").eq(i).addClass("parent-sub-block");
    $information_tab.removeClass("line-tab").eq(i).addClass("line-tab");
}
$(".information-tab li").click(function () {
    activing_two($(this).index());
    $(".sidebar-courses").height($(".content-courses").outerHeight());
});

if ($(".fix-side").height() >= $(".content-st").height()) {
    $(".fix-side").css({
        top: "0",
        "height": "auto"
    })
}
else {
    $(".fix-side").height($(".content-st").height()+10);
    $(window).scroll(function () {
        $(".fix-side").height($(".content-st").height()+10);
    });
}

if ($(".sticky-side")[0]) {
    $(".sticky-side").sidebarFix({
        frame: $('.fix-side'),
        topBuffer: 150
    });
}

$("#range_24").ionRangeSlider({
    type: "double",
    min: 1,
    max: 999,
    from: 10,
    to: 999,
    hide_min_max: false,
    hide_from_to: false,
    grid: true,
    prefix: ""
});
$(".check").click(function () {
    $(this).addClass("check-add").siblings().removeClass("check-add")
});

