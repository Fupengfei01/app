app.controller("nominatecontroller", function($http, $timeout) {
    var that = this;
    $http({
        url: "../json/f-nominate.json",
        method: "GET",
        params: {
            id: "1"
        }
    }).success(function(data) {
        console.log(data);
        that.bannerList = data.bannerList;
        that.sermons = data.sermons;
        that.courses = data.courses;
        that.lives = data.lives;
        that.playshow = true;
        $timeout(function() {
            swiper();
            var _urlmp3 = $(".listen .content li").eq(0).attr('mpssrc');
            that.playresult = false;
            that.playmp3 = function() {
                this.playresult = !this.playresult;
                if (this.playresult) {
                    that.ww = _urlmp3;
                    $timeout(function() {
                        $(".listen .btn audio")[0].play();
                        that.playshow = false;
                    }, 0);
                } else {
                    $(".listen .btn audio")[0].pause();
                    that.playshow = true;
                }
            }
            that.playchange = function(event) {
                _urlmp3 = $(event.target).attr("mpssrc");
                that.ww = _urlmp3;
                that.playresult = false;
                that.playmp3();
            }
        }, 0);
    });
     $http({
        url: "../json/z-course.json",
        method: "GET",
        params: {
            id: "1"
        }
    }).success(function(data){
        var flag=0;
        that._imgurl=data[flag].bannerPic;
        that._ID=data[flag]._id;
        that.changes=function() {
             flag++;
            that._imgurl=data[flag].bannerPic;
            that._ID=data[flag]._id;
        };
    })
});
function swiper() {
    var myswiper = new Swiper(".banner", {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        autoplay: 3000,
        loop: true,
    });
}