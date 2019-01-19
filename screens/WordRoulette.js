import React, { Component } from 'react'
import { Image, Linking } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { NavigationActions } from "react-navigation";

export default class WordRoulette extends Component {
  // static navigationOptions = {
  //   header: null,
	// };
	goToRoulette = (userObj) => {
		const navigateAction = NavigationActions.navigate({
			routeName: "Home",
			params: { data: userObj }
		});
		this.props.navigation.dispatch(navigateAction);
		// this.props.navigation.goBack();
	}
  reeler(){
    const SLOTS_PER_REEL = 12;
// radius = Math.round( ( panelWidth / 2) / Math.tan( Math.PI / SLOTS_PER_REEL ) ); 
// current settings give a value of 149, rounded to 150
const REEL_RADIUS = 150;

createSlots  = (ring) => {
	
	var slotAngle = 360 / SLOTS_PER_REEL;

	var seed = getSeed();

	for (var i = 0; i < SLOTS_PER_REEL; i ++) {
		var slot = document.createElement('div');
		
		slot.className = 'slot';

		// compute and assign the transform for this slot
		var transform = 'rotateX(' + (slotAngle * i) + 'deg) translateZ(' + REEL_RADIUS + 'px)';

		slot.style.transform = transform;

		// setup the number to show inside the slots
		// the position is randomized to 

		var content = $(slot).append('<p>' + ((seed + i)%12)+ '</p>');

		// add the poster to the row
		ring.append(slot);
	}
}

getSeed = () => {
	// generate random number smaller than 13 then floor it to settle between 0 and 12 inclusive
	return Math.floor(Math.random()*(SLOTS_PER_REEL));
}

 spin = (timer) => {
	//var txt = 'seeds: ';
	for(var i = 1; i < 6; i ++) {
		var oldSeed = -1;
		/*
		checking that the old seed from the previous iteration is not the same as the current iteration;
		if this happens then the reel will not spin at all
		*/
		var oldClass = $('#ring'+i).attr('class');
		if(oldClass.length > 4) {
			oldSeed = parseInt(oldClass.slice(10));
			console.log(oldSeed);
		}
		var seed = getSeed();
		while(oldSeed == seed) {
			seed = getSeed();
		}

		$('#ring'+i)
			.css('animation','back-spin 1s, spin-' + seed + ' ' + (timer + i*0.5) + 's')
			.attr('class','ring spin-' + seed);
	}

	console.log('=====');
}

$(document).ready(function() {

	// initiate slots 
 	createSlots($('#ring1'));
 	createSlots($('#ring2'));
 	createSlots($('#ring3'));
 	createSlots($('#ring4'));
 	createSlots($('#ring5'));

 	// hook start button
 	$('.go').on('click',function(){
 		var timer = 2;
 		spin(timer);
 	})

 	// hook xray checkbox
 	$('#xray').on('click',function(){
 		//var isChecked = $('#xray:checked');
 		var tilt = 'tiltout';
 		
    if($(this).is(':checked')) {
 			tilt = 'tiltin';
 			$('.slot').addClass('backface-on');
 			$('#rotate').css('animation',tilt + ' 2s 1');

			setTimeout(function(){
			  $('#rotate').toggleClass('tilted');
			},2000);
 		} else {
      tilt = 'tiltout';
 			$('#rotate').css({'animation':tilt + ' 2s 1'});

			setTimeout(function(){
	 			$('#rotate').toggleClass('tilted');
	 			$('.slot').removeClass('backface-on');
	 		},1900);
 		}
 	})

 	// hook perspective
 	$('#perspective').on('click',function(){
 		$('#stage').toggleClass('perspective-on perspective-off');
 	})	
    });
};
  render() {
    const { title, infoLink, description, imageLinks, subtitle } = this.props.navigation.state.params.data
    // console.log(this.props.navigation.state.params.data)

    return (
        <Container>
        <Content>
          <Card style={{flex: 1}}>
            <CardItem>
                {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
                <Body>
                  <Text style={{fontSize: 24}}>{title}</Text>
                  <Text note style={{fontSize: 24}}>{subtitle}</Text>
                </Body>
              <Right>
                <Icon name="heart" />
              </Right> 
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: imageLinks.thumbnail}} resizeMode='contain' resizeMethod='scale' style={{flex: 1, width: '100%', height: 250}} />
                <Text style={{marginTop: '4%'}}>
                  Synposis: {description}
                </Text>
              </Body>
              
            </CardItem>
            <CardItem>
                <Button 
                    transparent 
                    textStyle={{color: '#87838B'}}
                    onPress={() => {
                        Linking.openURL(infoLink).then(() => {
                            console.log('Opening link')
                          }).catch(err => console.error('An error occurred', err));
                    }}>
                  <Icon name="navigate" />
                  <Text>More Info</Text>
                </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}