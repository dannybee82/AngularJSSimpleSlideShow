app.controller('slideshowController', function ($scope, $interval) {    

    /*
     * Variables, etc. 
     * 
     */

    var runningSlideshow; 

    $scope.slideshowIndex = 0;

    $scope.slideShowButton = '/images/pause.png';

    /*
     * Methods.
     * 
     */

    $scope.startSlideShow = function () {
        runningSlideshow = $interval(function () {
            $scope.UpdateSlideShowIndex(true);   
        }, $scope.slideShowIntervalInMilliseconds);
    }

    $scope.stopSlideShow = function () {
        $interval.cancel(runningSlideshow);
    }

    $scope.playOrPause = function () {
        $scope.slideShowPlay = !$scope.slideShowPlay;
        $scope.UpdateSlideShowState();   
        $scope.UpdateButton();
    }

    $scope.previousImage = function () {
        $scope.slideShowPlay = false;
        $scope.UpdateSlideShowIndex(false);
        $scope.UpdateSlideShowState();
        $scope.UpdateButton();
    }

    $scope.nextImage = function () {
        $scope.slideShowPlay = false;
        $scope.UpdateSlideShowIndex(true);
        $scope.UpdateSlideShowState();
        $scope.UpdateButton();
    }

    $scope.UpdateSlideShowIndex = function (isNext) {
        if (isNext) {
            $scope.slideshowIndex = ($scope.slideshowIndex + 1 > $scope.slideshowImages.length - 1) ? 0 : ($scope.slideshowIndex + 1);
        } else {
            $scope.slideshowIndex = ($scope.slideshowIndex - 1 < 0) ? $scope.slideshowImages.length - 1 : ($scope.slideshowIndex - 1);
        }
    }

    $scope.UpdateSlideShowState = function() {
        if ($scope.slideShowPlay) {
            $scope.startSlideShow();
        } else {
            $scope.stopSlideShow();
        }        
    }

    $scope.UpdateButton = function () {
        $scope.slideShowButton = ($scope.slideShowPlay) ? '/images/pause.png' : '/images/play.png';
    }    
    
});