import React from 'react';
import {
    View,
    Button
} from 'react-native';
import {
    Container,
    Header,
    Item,
    Input,
    Icon,
    Text,
    Left
} from 'native-base';

export default Roulette = () => {
    // export default class HeaderMenu extends Component{    
    // check the testroulette folder
    function createSlots(ring) {

        var slotAngle = 360 / SLOTS_PER_REEL;

        var seed = getSeed();
        console.log("This is " + seed);
        for (var i = 0; i < SLOTS_PER_REEL; i++) {
            var slot = document.createElement('div');
            console.log("But " + seed);
            slot.className = 'slot';

            // compute and assign the transform for this slot
            var transform = 'rotateX(' + (slotAngle * i) + 'deg) translateZ(' + REEL_RADIUS + 'px)';

            slot.style.transform = transform;

            // setup the number to show inside the slots
            // the position is randomized to 

            var content = $(slot).append('<p>' + ((seed + i) % 12) + '</p>');

            // add the poster to the row
            ring.append(slot);
        }
    }

    function getSeed() {
        // generate random number smaller than 13 then floor it to settle between 0 and 12 inclusive
        // return Math.floor(Math.random() * (SLOTS_PER_REEL));
        var wordRoulette = new Array("hello", "how", "are", "you", "am", "Well", "Up", "Down", "Cloudy", "Sunny", "Well");
        return wordRoulette[Math.floor(Math.random() * wordRoulette.length)];

    }

    function spin(timer) {
        //var txt = 'seeds: ';
        for (var i = 1; i < 6; i++) {
            var oldSeed = -1;
            /*
            checking that the old seed from the previous iteration is not the same as the current iteration;
            if this happens then the reel will not spin at all
            */
            var oldClass = $('#ring' + i).attr('class');
            if (oldClass.length > 4) {
                // was parseInt
                oldSeed = parseInt(oldClass.slice(10));
                console.log(oldSeed);
            }
            var seed = getSeed();
            while (oldSeed == seed) {
                console.log("Fingers crossed " + seed);

                seed = getSeed();
            }
            console.log("That's " + seed);

            $('#ring' + i)
                .css('animation', 'back-spin 1s, spin-' + seed + ' ' + (timer + i * 0.5) + 's')
                .attr('class', 'ring spin-' + seed);
        }

        console.log('=====');
    }
    $(document).ready(function () {

        // initiate slots
        // if going to uncomment remember to float: left on .ring 
        createSlots($('#ring1'));


        // hook start button
        $('.go').on('click', function () {
            var timer = 2;
            spin(timer);
        })
    });
}
