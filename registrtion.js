
  function generateUserId() {

   

    var userId = (Math.pow(10,8));

   

   

    userid=Math.trunc(parseInt(userId)*Math.random());

   

   

    document.getElementById("userId1").value =userid;

  }
  window.onload=generateUserId