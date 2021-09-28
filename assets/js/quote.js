$("#select-select").hide();

function showDiv(value) {
    if (value=="residential") {
            document.getElementById("residential-f").style.display="block";
            document.getElementById("commercial-f").style.display="none";
            document.getElementById("corporate-f").style.display="none";
            document.getElementById("hybrid-f").style.display="none";
    }
    if (value=="commercial") {
        document.getElementById("residential-f").style.display="none";
        document.getElementById("commercial-f").style.display="block";
        document.getElementById("corporate-f").style.display="none";
        document.getElementById("hybrid-f").style.display="none";
    }
    if (value=="corporate") {
        document.getElementById("residential-f").style.display="none";
        document.getElementById("commercial-f").style.display="none";
        document.getElementById("corporate-f").style.display="block";
        document.getElementById("hybrid-f").style.display="none";
    }
    if (value=="hybrid") {
        document.getElementById("residential-f").style.display="none";
        document.getElementById("commercial-f").style.display="none";
        document.getElementById("corporate-f").style.display="none";
        document.getElementById("hybrid-f").style.display="block";
    }

}

    //commercial calcul

    function calcCom(value){
        var elevatorsNeeded;
        elevatorsNeeded = value;

        document.getElementById("elevator-amount-com").value = elevatorsNeeded;

    }



    