(function() {
  function BlocChatCookies($cookies, $uibModal) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      if (!currentUser || currentUser === '') {
            //do something to allow users to set their username
          $uibModal.open({
            //Modal config object properties
              templateUrl: '/templates/username.html',
              size: 'sm',
              controller: 'ModalCtrl as modal'
              keyboard: false,
              backdrop: 'static'
          });
      }
}

  angular
      .module('blocChat')
      .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
