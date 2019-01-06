// Application
var rawData = {};
var app = {
  init: function() {
    let buildHTML = "";
    $.getJSON("http://jsonplaceholder.typicode.com/users", function(data){
    data.forEach((x, index) => {
      buildHTML += (`<div class="entry"><span class="name"><a href="mailto:${x.email}">${x.name}</a></span>, Entreprise : ${x.company.name} <button class="full" id="user${index}">Profil</button></div>`)
    })
    $("#users").html(buildHTML);
    for (var i = 0; i < data.length; i++){
      $("#"+i).on("click", $("#profile").text(i))
      console.log(i)
    }
    })
  },
};

// quand le DOM est prêt, on lance app.init
$(app.init);
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("load").addEventListener("click", app.init);
});
