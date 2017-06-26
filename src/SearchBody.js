import React from 'react';
import {View,Image,Text, ScrollView,Dimensions} from 'react-native';
import {ListItem,List} from 'native-base';
import axios from 'axios';

var {height, width} = Dimensions.get('window');

class SearchBody extends React.Component{
	render(){
		var pokemon = this.props.data;
		if(!pokemon){
			return<View/>
		}
		console.log(pokemon.name)
		return(
			<Image style={styles.backgroundImage} source={{uri: "http://pokemongolive.com/img/posts/raids_loading.png"}}>
			<ScrollView style={{flex: 1}}>
				<Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
				<View style={styles.viewStyle}>
					<Image source={{uri: pokemon.sprites.front_default}} style={styles.img}/>
				</View>
				<View style={styles.info}>
					<ListItem itemDivider>
	                    <Text style={{fontWeight: 'bold'}}>Size</Text>
	                </ListItem>
					<ListItem>
						<Text>Weight - {pokemon.weight}</Text>
					</ListItem>
					<ListItem>
						<Text>Height - {pokemon.height}</Text>
					</ListItem>
					<ListItem itemDivider>
	                    <Text style={{fontWeight: 'bold'}}>Abilities</Text>
	                </ListItem>
					<List dataArray={pokemon.abilities}
	                    renderRow={(item) =>
	                        <ListItem>
	                            <Text>{item.ability.name}</Text>
	                        </ListItem>
	                    }>
	                </List>
                </View>
			</ScrollView>
			</Image>
		)
	}
}

const styles = {
	img: {
		height: 200,
		width: 200,
		justifyContent: 'center',
		alignItems: 'center'
	},
	viewStyle: {
		justifyContent: 'center',
	    alignItems: 'center',
	    flex: 1
	},
	header: {
		fontSize: 30,
		color: 'red',
		textAlign: 'center'
	},
	backgroundImage: {
		flex: 1,
	    resizeMode: 'cover',
	    width: width,
	    height: height,
	    opacity: 0.9
	},
	info:{
		flex: 1,
		backgroundColor: 'white',
		opacity: 0.8
	}
}

export default SearchBody;