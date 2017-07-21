(function() {
    function Message($firebaseArray) {
        var Message = {};

        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);


        Message.getByRoomId = function(roomId) {
            //Filter the messages by room ID
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };

  /*      Message.send = function(newMessage) {
            messages.$add({ content: newMessage}).then(function(ref) {
                var id = ref.key;
                console.log("added new message with id" + id);
                messages.$indexFor(id);
            });
        }

  */
        Message.send = function(newMessage, roomId) {
          console.log("test" + roomId );
          messages.$add({ content: newMessage, roomId: roomId})
        }




        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
