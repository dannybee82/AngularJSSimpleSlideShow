app.directive('slideShowImages', function () {
    return {
        restrict: 'A',
        controller: function ($scope) {

            /*
             * Add images in array below.
             * 
             */

            $scope.slideshowImages = [
                '/images/test_001.jpg',
                '/images/test_002.jpg',
                '/images/test_003.jpg',
                '/images/test_004.jpg',
                '/images/test_005.jpg'
            ];
               
        }
    };
});