(function() {
    function UserCtrl($cookies, $uibModalInstance) {
      var userCtrl = this;
      this.createUsername = function() {
          if(this.username) {
          $cookies.put('blocChatCurrentUser', this.username);
          $uibModalInstance.dismiss('cancel');
      } else {
          alert("You must create a username to send messages!");
      }
    };
  };

    angular
        .module('blocChat')
        .controller('UserCtrl', ['$cookies', '$uibModalInstance', UserCtrl]);
})();
