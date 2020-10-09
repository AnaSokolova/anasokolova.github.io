'use strict';

function fneb() {
  var bnum = document.getElementById("enterbinary").value;
  var spl = bnum.split("");
  var result = spl[0] * 2 ** 4 + spl[1] * 2 ** 3 + spl[2] * 2 ** 2 + spl[3] * 2 ** 1 + spl[4] * 2 ** 0;
  console.log(result);

  document.getElementById("bsum").innerHTML = result;

  document.getElementById("cardnum16").innerHTML = spl[0];
  document.getElementById("cardnum8").innerHTML = spl[1];
  document.getElementById("cardnum4").innerHTML = spl[2];
  document.getElementById("cardnum2").innerHTML = spl[3];
  document.getElementById("cardnum1").innerHTML = spl[4];

  if (spl[0]==0) {
    document.getElementById("img16").style.visibility = 'hidden';
  } else {
    document.getElementById("img16").style.visibility = 'visible';
  }

  if (spl[1]==0) {
    document.getElementById("img8").style.visibility = 'hidden';
  } else {
    document.getElementById("img8").style.visibility = 'visible';
  }

  if (spl[2]==0) {
    document.getElementById("img4").style.visibility = 'hidden';
  } else {
    document.getElementById("img4").style.visibility = 'visible';
  }

  if (spl[3]==0) {
    document.getElementById("img2").style.visibility = 'hidden';
  } else {
    document.getElementById("img2").style.visibility = 'visible';
  }

  if (spl[4]==0) {
    document.getElementById("img1").style.visibility = 'hidden';
  } else {
    document.getElementById("img1").style.visibility = 'visible';
  }
  change();
}

function fned() {
  var dnum = document.getElementById("enterdecimal").value;
  var rest = [
    Math.trunc(dnum%2),
    Math.trunc(dnum/2%2),
    Math.trunc(dnum/4%2),
    Math.trunc(dnum/8%2),
    Math.trunc(dnum/16%2)];
  rest.reverse();
  console.log(rest);

  document.getElementById("bsum").innerHTML = dnum;

  document.getElementById("cardnum16").innerHTML = rest[0];
  document.getElementById("cardnum8").innerHTML = rest[1];
  document.getElementById("cardnum4").innerHTML = rest[2];
  document.getElementById("cardnum2").innerHTML = rest[3];
  document.getElementById("cardnum1").innerHTML = rest[4];

  if (rest[0]==0) {
    document.getElementById("img16").style.visibility = 'hidden';
  } else {
    document.getElementById("img16").style.visibility = 'visible';
  }

  if (rest[1]==0) {
    document.getElementById("img8").style.visibility = 'hidden';
  } else {
    document.getElementById("img8").style.visibility = 'visible';
  }

  if (rest[2]==0) {
    document.getElementById("img4").style.visibility = 'hidden';
  } else {
    document.getElementById("img4").style.visibility = 'visible';
  }

  if (rest[3]==0) {
    document.getElementById("img2").style.visibility = 'hidden';
  } else {
    document.getElementById("img2").style.visibility = 'visible';
  }

  if (rest[4]==0) {
    document.getElementById("img1").style.visibility = 'hidden';
  } else {
    document.getElementById("img1").style.visibility = 'visible';
  }
  change();
}

function calcar() {
  document.getElementById("bsum").innerHTML =
  document.getElementById("cardnum16").innerHTML * 2 ** 4 +
  document.getElementById("cardnum8").innerHTML * 2 ** 3 +
  document.getElementById("cardnum4").innerHTML * 2 ** 2 +
  document.getElementById("cardnum2").innerHTML * 2 ** 1 +
  document.getElementById("cardnum1").innerHTML * 2 ** 0;
}
calcar();

function change() {
  var binum = document.getElementById("cardnum16").innerHTML +
  document.getElementById("cardnum8").innerHTML +
  document.getElementById("cardnum4").innerHTML +
  document.getElementById("cardnum2").innerHTML +
  document.getElementById("cardnum1").innerHTML;
  document.getElementById("tdsum").innerHTML = document.getElementById("bsum").innerHTML;
  document.getElementById("tbsum").innerHTML = binum;
}
change();

function maxLengthCheck(object) {
  if (object.value.length > object.maxLength)
  object.value = object.value.slice(0, object.maxLength)
}

//Funktionen zum anzeigen/verstecken der Karten bei Klick
function show16(show16) {
  if(document.getElementById) {
    var mydiv16 = document.getElementById(show16);
    mydiv16.style.visibility = (mydiv16.style.visibility=='hidden'?'visible':'hidden');
    if (mydiv16.style.visibility=='hidden') {
      document.getElementById("cardnum16").innerHTML = 0;
    } else {
      document.getElementById("cardnum16").innerHTML = 1;
    }
  }
  calcar();
  change();
}

function show8(show8) {
  if(document.getElementById) {
    var mydiv8 = document.getElementById(show8);
    mydiv8.style.visibility = (mydiv8.style.visibility=='hidden'?'visible':'hidden');
    if (mydiv8.style.visibility=='hidden') {
      document.getElementById("cardnum8").innerHTML = 0;
    } else {
      document.getElementById("cardnum8").innerHTML = 1;
    }
  }
  calcar();
  change();
}

function show4(show4) {
  if(document.getElementById) {
    var mydiv4 = document.getElementById(show4);
    mydiv4.style.visibility = (mydiv4.style.visibility=='hidden'?'visible':'hidden');
    if (mydiv4.style.visibility=='hidden') {
      document.getElementById("cardnum4").innerHTML = 0;
    } else {
      document.getElementById("cardnum4").innerHTML = 1;
    }
  }
  calcar();
  change();
}

function show2(show2) {
  if(document.getElementById) {
    var mydiv2 = document.getElementById(show2);
    mydiv2.style.visibility = (mydiv2.style.visibility=='hidden'?'visible':'hidden');
    if (mydiv2.style.visibility=='hidden') {
      document.getElementById("cardnum2").innerHTML = 0;
    } else {
      document.getElementById("cardnum2").innerHTML = 1;
    }
  }
  calcar();
  change();
}

function show1(show1) {
  if(document.getElementById) {
    var mydiv1 = document.getElementById(show1);
    mydiv1.style.visibility = (mydiv1.style.visibility=='hidden'?'visible':'hidden');
    if (mydiv1.style.visibility=='hidden') {
      document.getElementById("cardnum1").innerHTML = 0;
    } else {
      document.getElementById("cardnum1").innerHTML = 1;
    }
  }
  calcar();
  change();
}
