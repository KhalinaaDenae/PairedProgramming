// Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage.


// Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage.


//calculate your gas mileage -vdivide the number of miles traveled by the number of gallons of gas your vehicle took to refill.
let totalMiles 
let car = {
    make : " Audi", 
    model: "A3",
    year: 2019, 
    color: "white",
    milage: 2000,
    driveToWork : function commute(miles,gallon){
           let commuteMiles = miles / gallon
              totalMiles = commuteMiles + car.milage
                console.log(`new milage: ${totalMiles} , old milage: ${car.milage}`)
    }, 
    driveAroundTheWorld : function travel(miles,gallon){
        let travelMiles = miles / gallon
            totalMiles = travelMiles + car.milage
       console.log(`new milage: ${totalMiles} , old milage: ${car.milage}`)
    }, 
    
    runErrands : function errands(miles,gallon){
        let errandmiles = miles / gallon
          totalMiles = errandMiles + car.milage
         console.log(`new milage: ${totalMiles} , old milage: ${car.milage}`)
    }
}

console.log(car.driveToWork(53,500))