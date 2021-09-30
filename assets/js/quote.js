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

    //commercial calcul works

    function calcCom(value){
        var elevatorsNeeded;
        elevatorsNeeded = value;

        document.getElementById("elevator-amount-f").value = elevatorsNeeded;

    }

    //residential calcul manque à faire x2 elevatorneededres chaque fois qu'il y a un column+1

    function  calcRes() {


        var numberApartmentsRes = document.getElementById("n-apartments-res").value; 
        console.log(numberApartmentsRes, "nombre de apts res");

        var numberFloorsRes = document.getElementById("n-floors-res").value;
        console.log(numberFloorsRes, "nombre de floors res");

        var elevatorsNeededRes = document.getElementById("elevator-amount-f").value = Math.ceil((numberApartmentsRes / numberFloorsRes) / 6);
        console.log(elevatorsNeededRes);

        var columnRes;
        columnRes = Math.ceil(numberFloorsRes / 20);
        console.log(columnRes, 'nombre de column res');
    }

    //calcul corporate *works*
    function calcCor() {

        var numberFloorsCor = document.getElementById("n-floors-cor").value;
        console.log(numberFloorsCor, "nombre de floors cor");

        var numberBasementCor = document.getElementById("n-basement-cor").value;
        console.log(numberBasementCor, "nombre basement cor");

        var maxOccupancyCor = document.getElementById("max-occupancy-cor").value;
        console.log(maxOccupancyCor, "max occupancy cor");

        var floorBasement = +numberFloorsCor + +numberBasementCor; // floor + basement
        console.log(floorBasement, "floor + basement");

        var totalOccupants = maxOccupancyCor * floorBasement; // n total d'occupants
        console.log(totalOccupants, "n total occupants");

        var elevatorsNeededCor = totalOccupants / 1000; // elevator needed
        console.log(elevatorsNeededCor, "elevator needed");

        var elevatorColumnsCor = Math.ceil(floorBasement / 20); // nombre de column d'elevator
        console.log(elevatorColumnsCor, "nombre de column d'elevator");

        var elevatorPerColumnCor = Math.ceil(elevatorsNeededCor / elevatorColumnsCor); // nombre de elevator par column
        console.log(elevatorPerColumnCor, "nombre de elevator par column");

        var totalElevatorsNeededCor = Math.ceil(elevatorPerColumnCor * elevatorColumnsCor); //total elevator (champ Amount of elevators needed)
        console.log(totalElevatorsNeededCor, "nombre total de elevators needed");

        document.getElementById("elevator-amount-f").value = totalElevatorsNeededCor;

    }

    //hybrid
    function calcHyb() {

        var numberFloorsHyb = document.getElementById("n-floors-hyb").value;
        console.log(numberFloorsHyb, "nombre de floors hyb");

        var numberBasementHyb = document.getElementById("n-basement-hyb").value;
        console.log(numberBasementHyb, "nombre basement hyb");

        var maxOccupancyHyb = document.getElementById("n-max-occupancy-hyb").value;
        console.log(maxOccupancyHyb, "max occupancy hyb");

        var floorBasement = +numberFloorsHyb + +numberBasementHyb; // floor + basement
        console.log(floorBasement, "floor + basement");

        var totalOccupants = maxOccupancyHyb * floorBasement; // n total d'occupants
        console.log(totalOccupants, "n total occupants");

        var elevatorsNeededHyb = totalOccupants / 1000; // elevator needed
        console.log(elevatorsNeededHyb, "elevator needed");

        var elevatorColumns = Math.ceil(floorBasement / 20); // nombre de column d'elevator
        console.log(elevatorColumns, "nombre de column d'elevator");

        var elevatorPerColumn = Math.ceil(elevatorsNeededHyb / elevatorColumns); // nombre de elevator par column
        console.log(elevatorPerColumn, "nombre de elevator par column");

        var totalElevatorsNeededHyb = Math.ceil(elevatorPerColumn * elevatorColumns); //total elevator (champ Amount of elevators needed)
        console.log(totalElevatorsNeededHyb, "nombre total de elevators needed");

        document.getElementById("elevator-amount-f").value = totalElevatorsNeededHyb;

    }

    // number of occupants X number of floors, basements to obtain total number of occupants OK

    // total number occupants / 1000 = elevators required OK

    // floors, basement / 20 = columns

    // number of elevators / columns = elevator per column

    // total elevator = elevators per column * number of culomns 



    


