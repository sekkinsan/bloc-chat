(function() {
  function BlocChatCookies($cookies, $uibModal) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      if (!currentUser || currentUser === '') {
            //do something to allow users to set their username
          $uibModal.open({
            //Modal config object properties
              templateUrl: '/templates/username.html',
              size: 'sm',
              controller: 'UserCtrl',
              controllerAs: 'userctrl'
          })
      }
}

  angular
      .module('blocChat', ['ngCookies', 'ui.bootstrap'])
      .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
