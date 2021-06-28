function toggleTab(tab){
    console.log(tab.value);
    if(tab.value == "activity"){
      document.getElementById('follow-request').classList.toggle("d-none");
      document.getElementById('activity').classList.toggle("d-none");
    } else {
      document.getElementById('follow-request').classList.toggle("d-none");
      document.getElementById('activity').classList.toggle("d-none");
    }
}

/*function toggleTab(tab){
    console.log(tab.value);
    if(tab.value == "calls"){
      document.getElementById('chats').classList.toggle("d-none");
      document.getElementById('calls').classList.toggle("d-none");
    } else {
      document.getElementById('chats').classList.toggle("d-none");
      document.getElementById('calls').classList.toggle("d-none");
    }
}*/