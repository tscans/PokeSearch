import React from 'react';
import {View,Text} from 'react-native';
import {Container,Header, Item,Icon,Input,Button} from 'native-base';
import SearchBody from './SearchBody';
import PokeLoader from './PokeLoader';
import axios from 'axios';

class Search extends React.Component{
	state = {
		onCall: true,
		pokeSearch: "",
		data: {}
	}
	flipCall = () =>{
		this.setState({onCall: !this.state.onCall});
	}
	renderBody = () =>{
		if(this.state.onCall){
			return(
				<PokeLoader/>
			)
		}
		else{
			return(
				<SearchBody flipCall={this.flipCall} data={this.state.data}/>
			)
		}
	}
	searchPoke = () =>{
		this.setState({onCall: true});
		var self = this;
		axios.get('http://pokeapi.co/api/v2/pokemon/'+this.state.pokeSearch.toLowerCase())
		  .then(function (response) {
		  	console.log(response.data)
		    self.setState({data: response.data});
		    self.setState({onCall:false});
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
	render(){
		return(
			<View style={styles.viewStyle}>
				<Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" onPress={this.searchPoke}/>
                        <Input 
                        	value={this.state.pokeSearch}
                        	placeholder="Search Pokemon"
                        	onChangeText={(pokeSearch) => this.setState({pokeSearch})}
                        />
                    </Item>
                    <Button transparent onPress={this.searchPoke}>
                        <Text>Search</Text>
                    </Button>
                </Header>
                {this.renderBody()}
			 </View>
		)
	}
}

const styles = {
	viewStyle: {
		flex: 1
	}
}

export default Search;