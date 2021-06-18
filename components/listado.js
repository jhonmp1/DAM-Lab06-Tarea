import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { red100 } from 'react-native-paper/lib/typescript/styles/colors';

function Item({name, image, email, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <Image source={{uri:image}} style={{height: 60, width: 60, borderRadius: 400/ 2, }} />
        <View style={styles.Text}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.container1}> 
            <Text style={styles.email}>{email}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export class Listado extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      error: null,
    };
  }

  async componentDidMount() {
    await fetch('https://api.tretton37.com/ninjas/')
      .then(res => res.json())
      .then(
        result => {
          console.warn('result', result);
          this.setState({
              items:result,
          });
      },
        error => {
          this.setState({
            error: error,
          });
        },
      );
  }
  render() {
      
    const {navigate} = this.props.navigation;

    return (

        <View style={styles.container}>
            <FlatList
                data={this.state.items.length > 0 ? this.state.items:[]}
                renderItem={({item}) => {
                    return(
                        
                        <TouchableOpacity onPress={() => navigate('Detalle', {itemObject: item})}>
                            <Item name={item.name} email={item.email} image={item.imagePortraitUrl} navigation={this.props.navigation}/>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={item => item.id}
                navigation={this.props.navigation}
            />
        </View>
    );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 1,
    marginBottom: 5,
  },
  email:{
    color: 'red',

  },
  Text: {
    flex: 25,
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  image: {
    resizeMode: 'cover',
    height: 50,
    width: 150,
  },
  
  container1: {
    flexDirection: 'row',
  },

  
  item: {
    flexDirection:'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center'
},
});

export default Listado;
