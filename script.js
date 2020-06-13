const teamIT = [
    "Wildan",
    "Gerald",
    "Resha",
    "Juan",
    "Santi",
    "Ian",
    "Tri",
    "Sarah",
    "Miftah",
    "William",
  ];
  
  console.log(teamIT.join());
  
  const tim1 = teamIT.splice(0, 5);
  const tim2 = teamIT;
  
  
  addList = (noTim, idKetua, timName, idElement) => {
    document.getElementById(
      `${idKetua}`
    ).innerHTML = `Ketua Tim ${noTim}: ${timName.shift()}`;
    let timList = "";
    timName.forEach((arr) => {
      timList = timList.concat(`<li>${arr}</li>`);
    });
    document.getElementById(`${idElement}`).innerHTML = timList;
  };
  
  addList(1, "ketua1", tim1, "list-tim1");
  addList(2, "ketua2", tim2, "list-tim2");