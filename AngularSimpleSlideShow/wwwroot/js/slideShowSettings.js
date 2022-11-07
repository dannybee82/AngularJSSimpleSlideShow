app.directive('slideShowSettings', function () {
    return {
        restrict: 'A',
        controller: function ($scope) {

            /*
             * Default settings 
             * 
             */
            
            $scope.slideShowPlay = true;
            
            $scope.slideShowIntervalInMilliseconds = 3000;     

            /**
             * Start Slide Show.
             * 
             */

            if ($scope.slideShowPlay) {
                $scope.startSlideShow();
            }       

        }
    };
});