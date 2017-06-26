import React from 'react';
import {View, Dimensions, Image, Text} from 'react-native';
import {Button} from 'native-base';

var myBackground = require('../assets/icons/landing.jpg');
var {height, width} = Dimensions.get('window');

class Landing extends React.Component{
	render(){
		return(
			<View style={{flex: 1}}>
				<Image source={myBackground} style={styles.backgroundImage}>
					<View style={styles.viewStyle}>
						<Text style={styles.titleStyle}>
							Welcome to PokeSearch!
						</Text>
						<Button 
							block 
							style={styles.buttonStyle}
							onPress={()=>this.props.switchScreen("search")}
						>
	                        <Text style={styles.buttonText}>Start Searching</Text>
	                    </Button>
					</View>
				</Image>
			</View>
		)
	}
}

const styles = {
	viewStyle: {
		flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
	},
	backgroundImage: {
	    flex: 1,
	    resizeMode: 'cover',
	    width: width,
	    height: height
	},
	titleStyle: {
		fontSize: 30,
		color: "blue",
		alignItems: 'center'
	},
	buttonStyle: {
		margin: 10
	},
	buttonText: {
		color: 'white'
	}
}

export default Landing;