const sessions = ['1pm - 2pm', '3pm - 4pm'];

//set session options
sessions.forEach((opt) => {
  const select = document.getElementById('sessionOption');
  let option = document.createElement("option");
  // set the value of the option
  option.setAttribute("value", opt);

  // set the text that displays for the option
  option.innerHTML = opt;

// add the option to your select dropdown
select.appendChild(option);
});

//set Number of persons options
for(let i=1; i <= 5; i++){
  const select = document.getElementById('noOfPersonOption');
  let option = document.createElement("option");
  // set the value of the option
  option.setAttribute("value", i);

  // set the text that displays for the option
  option.innerHTML = i;

// add the option to your select dropdown
select.appendChild(option);
}


//Create Reservation
let Reservations = [
  {
    activityName: 'Activity1',
    noOfPersonOption: 0,
  },
  {
    activityName: 'Activity2',
    noOfPersonOption: 0,
  },
  {
    activityName: 'Activity3',
    noOfPersonOption: 0,
  },
  {
    activityName: 'Activity4',
    noOfPersonOption: 0,
  },
  {
    activityName: 'Activity5',
    noOfPersonOption: 0,
  },

];



// set activity options
setACtivityNameOptions = (Res) => {
  //clear select options
  let e = document.querySelector("#activityOption"); 
    let first = e.firstElementChild; 
    while (first) { 
        first.remove(); 
        first = e.firstElementChild;
      }
  Res.map((opt) => {
    select = document.getElementById('activityOption');
    let option = document.createElement("option");
    // set the value of the option
    option.setAttribute("value", opt.activityName);
  
    // set the text that displays for the option
    option.innerHTML = opt.activityName;
  
  // add the option to your select dropdown
  select.appendChild(option);
  });
}
setACtivityNameOptions(Reservations);

//Display Reservations

//set session options

setReservation = () => {
  //clear table data
  let e = document.querySelector("#table-data"); 
  let first = e.firstElementChild; 
  while (first) { 
      first.remove(); 
      first = e.firstElementChild;
    }
  Reservations.forEach((opt) => {
    const tableBody = document.getElementById('table-data');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    // set the value of the table
    td1.setAttribute("value", opt.activityName);
    td2.setAttribute("value", opt.noOfPersonOption);
  
    // set the text that displays for the table
    td1.innerHTML = opt.activityName;
    td2.innerHTML = `${opt.noOfPersonOption} people have reserved`;
  
  // add the option to your select dropdown
  tr.appendChild(td1)
  tr.appendChild(td2)
  tableBody.appendChild(tr);
  
  });
}
setReservation();


// Create Activity
createActivity = () => {

  //check if number of persons is more than 10 and delete if it is
  let delObj = Reservations.find((o) => o.noOfPersonOption >= 10);
  if(delObj){
    const foundDelActivityIndex = Reservations.findIndex((item) => item.activityName === delObj.activityName);
    Reservations.splice(foundDelActivityIndex, 1);
    setACtivityNameOptions(Reservations);
    
  }

  //create activity object and update no of persons
  const activityName = document.getElementById('activityOption').value;
  const noOfPersonOption = Number(document.getElementById('noOfPersonOption').value);
  let foundActivity = Reservations.find(o => o.activityName === activityName);
  if(foundActivity){
    let noOfPerson = foundActivity.noOfPersonOption + noOfPersonOption;
    foundActivity = {...foundActivity, activityName, noOfPersonOption: noOfPerson };
    const foundActivityIndex = Reservations.findIndex((item) => item.activityName === foundActivity.activityName);
    Reservations.splice(foundActivityIndex, 1, foundActivity)
  }
  
  setReservation();

}


makeReservation = () => {
  createActivity();
}

