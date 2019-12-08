// let activityOptions = ['Activity1', 'Activity2', 'Activity3', 'Activity4', 'Activity5'];
const sessions = ['1pm - 2pm', '3pm - 4pm'];

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
  Res.map((opt) => {
    const select = document.getElementById('activityOption');
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


// Create Activity
createActivity = () => {

  let delobj = Reservations.find((o) => o.noOfPersonOption >= 10);
  if(delobj){
    const founddelActivityIndex = Reservations.findIndex((item) => item.activityName === delobj.activityName);
    Reservations.splice(founddelActivityIndex, 1);
    setACtivityNameOptions(Reservations);
    // reload();
    
  }


  const activityName = document.getElementById('activityOption').value;
  const noOfPersonOption = Number(document.getElementById('noOfPersonOption').value);
  let foundActivity = Reservations.find(o => o.activityName === activityName);
  if(foundActivity){
    let noOfPerson = foundActivity.noOfPersonOption + noOfPersonOption;
    foundActivity = {...foundActivity, activityName, noOfPersonOption: noOfPerson };
    const foundActivityIndex = Reservations.findIndex((item) => item.activityName === foundActivity.activityName);
    Reservations.splice(foundActivityIndex, 1, foundActivity)
  }



  console.log(Reservations, '==reservation');
}

// //Delete Activity

// deleteActivity = () => {
//   let obj = Reservations.find((o) => o.noOfPersonOption >= 10);
//   const foundActivityIndex = Reservations.findIndex((item) => item.activityName === obj.activityName);
//   Reservations.splice(foundActivityIndex, 1);
//   activityOptions.splice(foundActivityIndex, 1)
// }

makeReservation = () => {
  createActivity();
}

//Display Reservations

//set session options
Reservations.forEach((opt) => {
  const tableBody = document.getElementById('table-data');
  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  // set the value of the option
  td1.setAttribute("value", opt.activityName);
  td2.setAttribute("value", opt.noOfPersonOption);

  // set the text that displays for the option
  td1.innerHTML = opt.activityName;
  td2.innerHTML = opt.noOfPersonOption;

// add the option to your select dropdown
tableBody.appendChild(tr);
tr.appendChild(td1, td2)
});

