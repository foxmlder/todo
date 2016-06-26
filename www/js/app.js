// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('TodoController',function ($scope, $firebaseArray) {

  var config = {
    apiKey: "AIzaSyB6NtSRaT8dlQ3WtM0m3QXhoQMa-52exBg",
    authDomain: "todo-d6e39.firebaseapp.com",
    databaseURL: "https://todo-d6e39.firebaseio.com",
    storageBucket: "todo-d6e39.appspot.com",
  };
  firebase.initializeApp(config);

var ref = firebase.database().ref();
    var list = $firebaseArray(ref);

  $scope.todos = [];
  $scope.todoModel = {};
  $scope.todoModel.todo= '';

  $scope.todos=list;


  $scope.addTodo = function (){

    if ($scope.todoModel.todo) { // si la case n'est pas vide

 //   $scope.todos.push($scope.todoModel.todo);
// add an item
//    list.$add({ foo: "bar" }).then(...);
//  list.$add($scope.todoModel.todo).then(console.log($scope.todoModel.todo));

  list.$add($scope.todoModel.todo).then(function(ref) {
  var id = ref.key;
  console.log("added record with id " + id);
  list.$indexFor(id); // returns location in the array
});

    $scope.todoModel = {
                        todo: ''
                       };
  };
  };
  
  $scope.deleteTodo = function(index) {
 
 
var item = list[index];
list.$remove(item).then(function(ref) {
 // ref.$key() === item.$id; // true
 console.log("OK");
});
    //$scope.bucketListItems.splice(index,1);
  };

  $scope.afficheTodo = function(index) {
 
 
console.log(list[index]);

  };







})
