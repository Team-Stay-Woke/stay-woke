function addEvent() {
  var table = document.getElementById('tabEv');
  var row = table.insertRow(1);
  var cell_evname = row.insertCell(0);
  var cell_evtime = row.insertCell(1);
  var cell_evloc = row.insertCell(2);
  var cell_evcause = row.insertCell(3);
  cell_evname.innerHTML = document.getElementById('EvName').value;
  cell_evtime.innerHTML = document.getElementById('EvTime').value;
  cell_evloc.innerHTML = document.getElementById('EvLoc').value;
  for (c = 0; c < 13; c++) {
    var pickchoice = document.getElementById(c).checked;
    console.log(pickchoice)
    if (pickchoice == true) {
      cell_evcause.innerHTML += document.getElementById(c).value + ", ";
    }
  }
  var newEvent = {};
  newEvent.name = document.getElementById('EvName').value;
  newEvent.time = document.getElementById('EvTime').value;
  newEvent.place = document.getElementById('EvLoc').value;
  newEvent.causes = cell_evcause.innerHTML;
  console.log(newEvent);
  console.log(newEvent.name);
  eventInfo = localStorage.getItem('eventInfo') ?
    JSON.parse(localStorage.getItem('eventInfo')) : [];
  eventInfo.push(newEvent);
  localStorage.setItem('eventInfo', JSON.stringify(eventInfo));
  console.log(localStorage.eventInfo);
}

function buildTable() {
  console.log(localStorage.eventInfo);
  var newev = JSON.parse(localStorage.getItem('eventInfo'));
  console.log(newev);
  for (x = 0; x<newev.length; x++) {
    console.log(newev[x].name);
    console.log(newev[x].time);
    console.log(newev[x].place);
    console.log(newev[x].causes);
    var table = document.getElementById('tabEv');
    var row = table.insertRow(1);
    var cell_evname = row.insertCell(0);
    var cell_evtime = row.insertCell(1);
    var cell_evloc = row.insertCell(2);
    var cell_evcause = row.insertCell(3);
    cell_evname.innerHTML = newev[x].name;
    cell_evtime.innerHTML = newev[x].time;
    cell_evloc.innerHTML = newev[x].place;
    cell_evcause.innerHTML = newev[x].causes;
  }
}


function clearLS() {
  //try the one where the table gets rebuilt so when u clear events the table also clears ???
  localStorage.clear();
  console.log(localStorage.allEntriesTest);
}

window.onload = buildTable();
