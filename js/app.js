// Application
var rawData = {};
var app = {
  init: function() {
    let buildHTML = "";
    $.getJSON("http://jsonplaceholder.typicode.com/users", function(data){
    data.forEach((x, index) => {
      buildHTML += (`<div class="entry"><span class="name"><a href="mailto:${x.email}">${x.name}</a></span>, Entreprise : ${x.company.name} <button class="full" id="${index}">Profil</button></div>`)
    })
    $("#users").html(buildHTML);
    $(".full").each(x => $("#"+x).on("click", function(){
      $("#profile").html(`<p><span class="label">Nom</span> : ${data[x].name} </p>
      <p><span class="label">Entreprise</span> : ${data[x].company.name}, ${data[x].company.catchPhrase} </p>
      <p><span class="label">Adresse</span> : ${data[x].address.street}, ${data[x].address.suite}, ${data[x].address.city}, ${data[x].address.zipcode}</p>
      <p><span class="label">Numero</span> : ${data[x].phone} </p>
      <p><span class="label">Website</span> : <a target="_blank" href="http://${data[x].website}">${data[x].website}</a></p>`)
    }))
    })
  },
};

// quand le DOM est prêt, on lance app.init
$(app.init);
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("load").addEventListener("click", app.init);
});
