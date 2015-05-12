angular
    .module('guacamoleApp')
    .controller('GuacamoleController', GuacamoleController);

    function GuacamoleController(){
        var self = this;
        
        // sets initial score at zero
        self.score = 0
        
        // sets holes as an array
        self.holes = [ {hasMole: false},
                       {hasMole: false},
                       {hasMole: false},
                       {hasMole: false},
                       {hasMole: true},
                       {hasMole: false},
                       {hasMole: false},
                       {hasMole: false},
                       {hasMole: false}
                     ];
        
        // attaches whackMole function to controller
        self.whackMole = whackMole;

        // defines what happens when the mole is whacked
        function whackMole(index) {
            if (self.holes[index].hasMole === true) {
                self.holes[index].hasMole = false;
                self.score++;
                self.holes[randomNumber()].hasMole = true;
            }
        }

        // attaches randomNumber function to the controller
        self.randomNumber = randomNumber;

        // randomizes the space where the mole goes
        function randomNumber() {
            return Math.floor(Math.random() * 9);
        }

        // 3 - You might need a variable called self.score that starts at 0

        // 4 - You might also need an array called self.holes, which contains 9 hole objects. Each hole object could have a property that says if it contains the mole or not.

        // 7 - You could then write a whackMole function, that runs whenever a hole is clicked (but only if that hole contains the mole!). Remember to write the function and then link it to your controller using self.whackMole = whackMole;
        //     a) The whackMole function should increment the score
        //     b) ...and make the mole pop up in another random hole (you can use Math.random() just like in the plain JS version of this app)


    }