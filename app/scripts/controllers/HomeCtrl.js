(function() {
    function HomeCtrl(Room) {
      //assign Room array retrieved by all method to $scope variable
        this.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
