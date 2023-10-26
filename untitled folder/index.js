{
  function press() {
    const nameTextElement = document.getElementById("firstName");
    console.log(nameTextElement);
    console.log("hello");
    let dun = 0,
      huuhed,
      studentName,
      tell = "";

    studentName = nameTextElement.value;

    console.log(studentName, "songogdson huuhed");

    if (studentName == "bataa") {
      huuhed = 68;
      console.log("bataa");
    } else if (studentName == "ochir") {
      huuhed = 59;
      console.log("ochir");
    } else if (studentName == "ider") {
      huuhed = 79;
      console.log("ochir");
    } else if (studentName == "jargal") {
      huuhed = 88;
      console.log("ochir");
    } else if (studentName == "bumaa") {
      huuhed = 100;
      console.log("ochir");
    }

    if (huuhed < 60) {
      dun = 0;
      dun = 1;
    } else if (huuhed <= 70) {
      dun = 0;
      dun = 2;
    } else if (huuhed <= 80) {
      dun = 0;
      dun = 3;
    } else if (huuhed <= 90) {
      dun = 0;
      dun = 4;
    } else if (huuhed <= 100) {
      dun = 0;
      dun = 5;
    }
    switch (dun) {
      case 1:
        tell = "mash sain huuhed muu avsan bna ";
        break;
      case 2:
        tell = "ireeduid amjiltand hureh huuhed bna ";
        break;
      case 3:
        tell = "ajiliin amjilt husiii";
        break;
      case 4:
        tell = "bitgii biyee toogood bai ";
        break;
      case 5:
        tell = " olimpiadad orhuu ??";
        break;
    }
    document.getElementById("result").value = tell;
  }
}
