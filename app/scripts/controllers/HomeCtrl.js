(function() {
    function HomeCtrl(Room, $uibModal) {
      //assign Room array retrieved by all method to $scope variable
        this.rooms = Room.all;
        this.addRoom = function() {
              $uibModal.open({
                  templateUrl: '/templates/modal.html',
                  size: 'sm',
                  controller: 'ModalCtrl as modal'
              });
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
