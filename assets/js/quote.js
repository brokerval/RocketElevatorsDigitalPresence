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

        document.getElementById("elevator-amount-f").value = elevatorsNeeded;

    }

    //residential calcul

    function  calcRes() {


        var numberApartmentsRes = document.getElementById("n-apartments-res").value; 
        console.log(numberApartmentsRes, "nombre de apts res");

        var numberFloorsRes = document.getElementById("n-floors-res").value;
        console.log(numberFloorsRes, "nombre de floors res");

        // var elevatorsNeededRes = document.getElementById("elevator-amount-f").value = (numberApartmentsRes / numberFloorsRes) / 6;
        var elevatorsNeededRes = document.getElementById("elevator-amount-f").value = Math.ceil((numberApartmentsRes / numberFloorsRes) / 6);
        // elevatorsNeededRes = Math.ceil((numberApartmentsRes / numberFloorsRes) / 6);
        console.log(elevatorsNeededRes);

        var columnRes = Math.ceil(numberFloorsRes / 20);
        console.log(columnRes, "nombre de columns res");

    }

    //elevatorneededres *2 chaque fois qu'il y a une column

    //corporate hybrid calcul

    function calcCorHyb() {

        var numberFloorsCor = document.getElementById("n-floors-cor").value;
        console.log(numberFloorsCor, "nombre de floors cor");

        var numberBasementCor = document.getElementById("n-basement-cor").value;
        console.log(numberBasementCor, "nombre basement cor");

        var maxOccupancyCor = document.getElementById("max-occupancy-cor").value;
        console.log(maxOccupancyCor, "max occupancy cor");

        maxOccupancyCor * numberFloorsCor, numberBasementCor;

        var elevatorsNeededCor = document.getElementById("elevator-amount-f").value = Math.ceil(maxOccupancyCor / 1000);
        console.log(elevatorsNeededCor, "nombre elevator needed");
    }

    // number of occupants X number of floors, basements to obtain total number of occupants OK

    // total number occupants / 1000 = elevators required OK

    // floors, basement / 20 = columns

    // number of elevators / columns = elevator per column

    // total elevator = elevators per column * number of culomns 



    


