(function() {
  angular.module('app', []).controller('CommentsCtrl', function($scope) {
      $scope.like = function() {
          var like = 0;
          console.log(like);
      }
    $scope.comments = [
      {
        name: 'This is my Dog.',
        text: 'hello world',
      }, {
        name: 'I love my doge!',
        text: 'lorem ipsum',
      }, {
        name: 'My dog is 5 months old!',
        text: 'lorem ipsum',
      }
    ];
    $scope.submit = function() {
      $scope.comments.unshift({
        name: $scope.name,
        text: $scope.text,
      });
      $scope.name = '';
      return $scope.text = '';
    };
    return $scope.drop = function(comment) {
      return $scope.comments.splice($scope.comments.indexOf(comment), 1);
    };
  });

}).call(this);

function readURL(input)
{
    document.getElementById("bannerImg").style.display = "block";

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('bannerImg').src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}
