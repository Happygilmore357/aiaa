var labStatus = null;
getStatus();
setInterval(getStatus, 5000);

function getStatus(){
  getData('/lab/status', function(response){
    updatePage(response);
  });
}

function updatePage(newStatus){
  if(newStatus.open){
    document.getElementById('isOpen').innerHTML = 'OPEN';
    $('#isOpen').removeClass('text-danger');
    $('#isOpen').addClass('text-success');
  }else{
    document.getElementById('isOpen').innerHTML = 'CLOSED';
    $('#isOpen').removeClass('text-success');
    $('#isOpen').addClass('text-danger');
  }
  var newList = '';
  console.log(newStatus.memebers);
  for(index in newStatus.members){
    newList += "<li class=\"list-group-item\">" + newStatus.members[index] + '</li>';
  }
  labStatus = newStatus;
  document.getElementById('who').innerHTML = newList;
}

function login(){
  window.location.replace('/manage');
}
