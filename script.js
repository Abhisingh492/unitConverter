var convertFrom;
var convertTo;
// dynamic heading change in converter by clicking 

let con_div = document.getElementById("con_div");
var heading = document.createElement("h1");
// con_div.appendChild(heading);
heading.textContent = "Choose from NAV Menu";
let position = con_div.firstElementChild;
con_div.insertBefore(heading, position);

let len = document.getElementById("len");
let temp = document.getElementById("temp");
let tym = document.getElementById("tym");
let wt = document.getElementById("wt");
var counter = 0;

len.addEventListener('click', function () {
    if (counter != 1) {
        cleaning();
        headingOne(1);
        options(1);
    }
});
temp.addEventListener('click', function () {
    if (counter != 2) {
        cleaning();
        headingOne(2);
        options(2);
    }
});
tym.addEventListener('click', function () {
    if (counter != 3) {
        cleaning();
        headingOne(3);
        options(3);
    }
});
wt.addEventListener('click', function () {
    if (counter != 4) {
        cleaning();
        headingOne(4);
        options(4);
    }
});


function headingOne(select) {
    switch (select) {
        case 1: heading.textContent = "Length Converter";
            counter = 1;
            break;
        case 2: heading.textContent = "Temperature Converter";
            counter = 2;
            break;
        case 3: heading.textContent = "Time Converter";
            counter = 3;
            break;
        case 4: heading.textContent = "Weight Converter";
            counter = 4;
            break;
        default: heading.textContent = "Please select Option from NAV MENU";
    }
}


// labeling text area

let conv_box = document.getElementById("conv_box");

var label1 = document.createElement("label");
var label2 = document.createElement("label");

let position1 = conv_box.firstElementChild;
let position2 = conv_box.lastElementChild;

label1.setAttribute("for", "aName");
label2.setAttribute("for", "bName");

conv_box.insertBefore(label1, position1);
conv_box.insertBefore(label2, position2);

label1.textContent = "Choose From:";
label2.textContent = "Choose To:";

function label1func(labelf) {
    label1.textContent = labelf;
}


function label2func(labelt) {
    label2.textContent = labelt;
}

// assigning options 

function options(opt) {
    if (opt == 1) {
        lenFrom();
        lenTo();
        console.log("option one choosed");
    }
    else if (opt == 2) {
        tempFrom();
        tempTo();
        console.log("option two choosed");
    }
    else if (opt == 3) {
        tymFrom();
        tymTo();
        console.log("option three choosed");
    }
    else if (opt == 4) {
        wtFrom();
        wtTo();
        console.log("option four choosed");
    }
}

// functions for length converter

function lenFrom() {
    let ul_from = document.getElementById("ul_from");
    let li = document.createElement("li");
    ul_from.appendChild(li);
    li.textContent = "Milimeter";
    li.setAttribute('id', 'mmf');
    li.addEventListener('click', function () {
        label1func("Milimeter");
        convertFrom = "mmf";
    });

    let position = ul_from.firstElementChild;

    let li1 = document.createElement("li");
    ul_from.insertBefore(li1, position);
    li1.textContent = "Kilometer";
    li1.setAttribute('id', 'kmf');
    li1.addEventListener('click', function () {
        label1func("Kilometer");
        convertFrom = "kmf";
    });

    let li2 = document.createElement("li");
    ul_from.insertBefore(li2, position);
    li2.textContent = "Meter";
    li2.setAttribute('id', 'mf');
    li2.addEventListener('click', function () {
        label1func("Meter");
        convertFrom = "mf";
    });

    let li3 = document.createElement("li");
    ul_from.insertBefore(li3, position);
    li3.textContent = "Centimeter";
    li3.setAttribute('id', 'cmf');
    li3.addEventListener('click', function () {
        label1func("Centimeter");
        convertFrom = "cmf";
    });
}

function lenTo() {
    let ul_to = document.getElementById("ul_to");
    let li = document.createElement("li");
    ul_to.appendChild(li);
    li.textContent = "Milimeter";
    li.setAttribute('id', 'mmt');
    li.addEventListener('click', function () {
        label2func("Milimeter");
        convertTo = "mmt";
        convertNow(convertFrom, convertTo);
    });

    let position = ul_to.firstElementChild;

    let li1 = document.createElement("li");
    ul_to.insertBefore(li1, position);
    li1.textContent = "Kilometer";
    li1.setAttribute('id', 'kmt');
    li1.addEventListener('click', function () {
        label2func("Kilometer");
        convertTo = "kmt";
        convertNow(convertFrom, convertTo);
    });

    let li2 = document.createElement("li");
    ul_to.insertBefore(li2, position);
    li2.textContent = "Meter";
    li2.setAttribute('id', 'mt');
    li2.addEventListener('click', function () {
        label2func("Meter");
        convertTo = "mt";
        convertNow(convertFrom, convertTo);
    });

    let li3 = document.createElement("li");
    ul_to.insertBefore(li3, position);
    li3.textContent = "Centimeter";
    li3.setAttribute('id', 'cmt');
    li3.addEventListener('click', function () {
        label2func("Centimeter");
        convertTo = "cmt";
        convertNow(convertFrom, convertTo);
    });
}

// functions of temperature converter

function tempFrom() {
    let ul_from = document.getElementById("ul_from");
    let li = document.createElement("li");
    ul_from.appendChild(li);
    li.textContent = "Celcius";
    li.setAttribute('id', 'cf');
    li.addEventListener('click', function () {
        label1func("Celcius");
        convertFrom = "cf";
    });

    let position = ul_from.firstElementChild;

    let li1 = document.createElement("li");
    ul_from.insertBefore(li1, position);
    li1.textContent = "Fahrenhiet";
    li1.setAttribute('id', 'ff');
    li1.addEventListener('click', function () {
        label1func("Fahrenhiet");
        convertFrom = "ff";
    });

    let li2 = document.createElement("li");
    ul_from.insertBefore(li2, position);
    li2.textContent = "kelvin";
    li2.setAttribute('id', 'kf');
    li2.addEventListener('click', function () {
        label1func("Kelvin");
        convertFrom = "kf"
    });

}

function tempTo() {
    let ul_to = document.getElementById("ul_to");
    let li = document.createElement("li");
    ul_to.appendChild(li);
    li.textContent = "Celcius";
    li.setAttribute('id', 'ct');
    li.addEventListener('click', function () {
        label2func("Celcius");
        convertTo = "ct";
        convertNow(convertFrom, convertTo);
    });

    let position = ul_to.firstElementChild;

    let li1 = document.createElement("li");
    ul_to.insertBefore(li1, position);
    li1.textContent = "Fahrenhiet";
    li1.setAttribute('id', 'ft');
    li1.addEventListener('click', function () {
        label2func("Fahrenhiet");
        convertTo = "ft";
        convertNow(convertFrom, convertTo);
    });

    let li2 = document.createElement("li");
    ul_to.insertBefore(li2, position);
    li2.textContent = "Kelvin";
    li2.setAttribute('id', 'kt');
    li2.addEventListener('click', function () {
        label2func("Kelvin");
        convertTo = "kt";
        convertNow(convertFrom, convertTo);
    });
}

// functions for Time Convereter

function tymFrom() {
    let ul_from = document.getElementById("ul_from");
    let li = document.createElement("li");
    ul_from.appendChild(li);
    li.textContent = "Hour";
    li.setAttribute('id', 'hf');
    li.addEventListener('click', function () {
        label1func("Hour");
        convertFrom = "hf";
    });

    let position = ul_from.firstElementChild;

    let li1 = document.createElement("li");
    ul_from.insertBefore(li1, position);
    li1.textContent = "Minute";
    li1.setAttribute('id', 'mnf');
    li1.addEventListener('click', function () {
        label1func("Minute");
        convertFrom = "mnf";
    });

    let li2 = document.createElement("li");
    ul_from.insertBefore(li2, position);
    li2.textContent = "Second";
    li2.setAttribute('id', 'sf');
    li2.addEventListener('click', function () {
        label1func("Second");
        convertFrom = "sf";
    });

    let li3 = document.createElement("li");
    ul_from.insertBefore(li3, position);
    li3.textContent = "MilliSecond";
    li3.setAttribute('id', 'msf');
    li3.addEventListener('click', function () {
        label1func("Millisecond");
        convertFrom = "msf";
    });
}

function tymTo() {
    let ul_to = document.getElementById("ul_to");
    let li = document.createElement("li");
    ul_to.appendChild(li);
    li.textContent = "Hour";
    li.setAttribute('id', 'ht');
    li.addEventListener('click', function () {
        label2func("Hour");
        convertTo = "ht";
        convertNow(convertFrom, convertTo);
    });

    let position = ul_to.firstElementChild;

    let li1 = document.createElement("li");
    ul_to.insertBefore(li1, position);
    li1.textContent = "Minute";
    li1.setAttribute('id', 'mnt');
    li1.addEventListener('click', function () {
        label2func("Minute");
        convertTo = "mnt";
        convertNow(convertFrom, convertTo);
    });

    let li2 = document.createElement("li");
    ul_to.insertBefore(li2, position);
    li2.textContent = "Second";
    li2.setAttribute('id', 'st');
    li2.addEventListener('click', function () {
        label2func("Second");
        convertTo = "st";
        convertNow(convertFrom, convertTo);
    });

    let li3 = document.createElement("li");
    ul_to.insertBefore(li3, position);
    li3.textContent = "Millisecond";
    li3.setAttribute('id', 'mst');
    li3.addEventListener('click', function () {
        label2func("Millisecond");
        convertTo = "mst";
        convertNow(convertFrom, convertTo);
    });
}

// functions of weight conversion

function wtFrom() {
    let ul_from = document.getElementById("ul_from");
    let li = document.createElement("li");
    ul_from.appendChild(li);
    li.textContent = "Kilogram";
    li.setAttribute('id', 'kgf');
    li.addEventListener('click', function () {
        label1func("Kilogram");
        convertFrom = "kgf";
    });

    let position = ul_from.firstElementChild;

    let li1 = document.createElement("li");
    ul_from.insertBefore(li1, position);
    li1.textContent = "Gram";
    li1.setAttribute('id', 'gf');
    li1.addEventListener('click', function () {
        label1func("Gram");
        convertFrom = "gf";
    });

    let li2 = document.createElement("li");
    ul_from.insertBefore(li2, position);
    li2.textContent = "Milligram";
    li2.setAttribute('id', 'mgf');
    li2.addEventListener('click', function () {
        label1func("Milligram");
        convertFrom = "mgf";
    });
}

function wtTo() {
    let ul_to = document.getElementById("ul_to");
    let li = document.createElement("li");
    ul_to.appendChild(li);
    li.textContent = "Kilogram";
    li.setAttribute('id', 'kgt');
    li.addEventListener('click', function () {
        label2func("Kilogram");
        convertTo = "kgt";
        convertNow(convertFrom, convertTo);
    });

    let position = ul_to.firstElementChild;

    let li1 = document.createElement("li");
    ul_to.insertBefore(li1, position);
    li1.textContent = "Gram";
    li1.setAttribute('id', 'gt');
    li1.addEventListener('click', function () {
        label2func("Gram");
        convertTo = "gt";
        convertNow(convertFrom, convertTo);
    });

    let li2 = document.createElement("li");
    ul_to.insertBefore(li2, position);
    li2.textContent = "Milligram";
    li2.setAttribute('id', 'mgt');
    li2.addEventListener('click', function () {
        label2func("Milligram");
        convertTo = "mgt";
        convertNow(convertFrom, convertTo);
    });
}


function cleaning() {
    let parent = document.getElementById("ul_from");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    let parent1 = document.getElementById("ul_to");
    while (parent1.firstChild) {
        parent1.removeChild(parent1.firstChild);
    }

    label1.textContent = "Choose From:";
    label2.textContent = "Choose To:";
}

// functions for conversion

var inputValue;

var result;

let input1 = document.getElementById("a_box");
input1.addEventListener('input', function () {
    inputValue = input1.value;
    console.log(inputValue);
});
function convertNow(unit_from, unit_to) {
    console.log(convertFrom + " " + convertTo);

    if (unit_from == "kmf") {
        if (unit_to == "mt") {
            result = inputValue * 1000;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "cmt") {
            result = inputValue * 1000 * 100;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "mmt") {
            result = inputValue * 1000 * 100 * 10;
            document.getElementById("b_box").value = result;
        }
    } else if (unit_from == "mf") {
        if (unit_to == "kmt") {
            result = inputValue / 1000;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "cmt") {
            result = inputValue * 100;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "mmt") {
            result = inputValue * 100 * 10;
            document.getElementById("b_box").value = result;
        }
    }
    else if (unit_from == "cmf") {
        if (unit_to == "mt") {
            result = inputValue / 100;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "kmt") {
            result = inputValue / 100000;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "mmt") {
            result = inputValue * 10;
            document.getElementById("b_box").value = result;
        }
    }
    else if (unit_from == "mmf") {
        if (unit_to == "mt") {
            result = inputValue / 1000;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "cmt") {
            result = inputValue / 10;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "kmt") {
            result = inputValue / 1000000;
            document.getElementById("b_box").value = result;
        }
    }
    else if (unit_from == "cf") {
        if (unit_to == "ft") {
            result = (inputValue * 9/5) + 32;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "kt") {
            result = +inputValue + +273.15;
            document.getElementById("b_box").value = result;
        }
    }
    else if (unit_from == "ff") {
        if (unit_to == "ct") {
            result = (inputValue - 32) * 5/9;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "kt") {
            result = ((inputValue - 32) * 5/9) + 273.15;
            document.getElementById("b_box").value = result;
        }
    }

    else if (unit_from == "kf") {
        if (unit_to == "ct") {
            result = 273.15 - inputValue;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "ft") {
            result = ((inputValue - 273.15) *9/5) + 32;
            document.getElementById("b_box").value = result;
        }
    }

    else if (unit_from == "hf") {
        if (unit_to == "mnt") {
            result = inputValue * 60;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "st") {
            result = inputValue * 3600;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "mst") {
            result = inputValue * 3600000 ;
            document.getElementById("b_box").value = result;
        }
    }

    else if (unit_from == "mnf") {
        if (unit_to == "ht") {
            result = inputValue / 60;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "st") {
            result = inputValue * 60;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "mst") {
            result = inputValue * 60000 ;
            document.getElementById("b_box").value = result;
        }
    }

    else if (unit_from == "sf") {
        if (unit_to == "ht") {
            result = inputValue / 3600;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "st") {
            result = inputValue / 60;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "mst") {
            result = inputValue * 1000 ;
            document.getElementById("b_box").value = result;
        }
    }

    else if (unit_from == "msf") {
        if (unit_to == "ht") {
            result = inputValue / 3600000;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "mnt") {
            result = inputValue / 60000;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "st") {
            result = inputValue / 1000 ;
            document.getElementById("b_box").value = result;
        }
    }

    else if (unit_from == "kgf") {
        if (unit_to == "gt") {
            result = inputValue*1000;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "mgt") {
            result = inputValue *1000*100;
            document.getElementById("b_box").value = result;
        }
    }

    else if (unit_from == "gf") {
        if (unit_to == "kgt") {
            result = inputValue/1000;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "mgt") {
            result = inputValue*100;
            document.getElementById("b_box").value = result;
        }
    }

    else if (unit_from == "mgf") {
        if (unit_to == "kgt") {
            result = inputValue/100000;
            document.getElementById("b_box").value = result;
        }
        else if (unit_to == "gt") {
            result = inputValue/100;
            document.getElementById("b_box").value = result;
        }
    }
    

}