import React, {Component} from 'react';
import {View, AsyncStorage, ScrollView, FlatList,Alert,Text,Modal,WebView} from 'react-native';
import {Spinner,List,ListItem,Container,Content,Button,Icon,Left,Right,Body,Header,Title} from 'native-base';


export default class Viewer extends Component{

  state={
    items:[],
    loading:false,
    modalVisible:false,
    url:''
};

refresh()
{
  let items=[];
  this.setState({loading:true});
  AsyncStorage.getAllKeys((err, keys) => {
     AsyncStorage.multiGet(keys, (err, stores) => { stores.map((result, i, store) => {  // get at each store's key/value so you can work with it
let key = store[i][0];
let value =store[i][1];

items.push({title:key,url:value});
this.setState({items:items,loading:false});
}); });
});
}


  componentWillMount()
  {
    let items=[];
    this.setState({loading:true});
    AsyncStorage.getAllKeys((err, keys) => {
       AsyncStorage.multiGet(keys, (err, stores) => { stores.map((result, i, store) => {  // get at each store's key/value so you can work with it
  let key = store[i][0];
  let value =store[i][1];

  items.push({title:key,url:value});
  this.setState({items:items,loading:false});
  }); });
  });


}



showOrNot()
{
  if(this.state.loading===true)
  return(<Spinner color='red'/>);
  else {
      return this.state.items.map((item)=>{
        return(
           <ListItem key={item.title}>
           <Body>
            <Text> {item.title} </Text>
            </Body>
            <Right>
            <Button iconLeft block success onPress={()=>this.setState({modalVisible:true,url:item.url})}>
              <Icon name="eye" size={10} />
            </Button>
            <Button iconLeft block danger onPress={()=>this.removeIt(item.title)}>
              <Icon name="trash" size={11} />
            </Button>
            </Right>
           </ListItem>
      );
});
}
}

removeIt(title)
{
  AsyncStorage.removeItem(title);
  Alert.alert('Bookmark removed! Please refresh.');
}


render()
{


  return(

    <View style={{flex:1, flexDirection:'column'}}>
    <Header>
    <Left>
      <Text>
      </Text>
    </Left>
               <Body>
                   <Title>Bookmarks</Title>
               </Body>
               <Right>
                   <Button warning onPress={()=>this.refresh()} >
                      <Icon name="refresh"/>
                    </Button>
               </Right>
    </Header>
    <Container>
              <Content>
                  <List>
                  {this.showOrNot()}
                  </List>
              </Content>

    </Container>
    <Modal animationType={"slide"} transparent={false} visible={this.state.modalVisible} onRequestClose={() => {this.setState({modalVisible:false})}} >

      <WebView source={{uri:this.state.url}} />
    </Modal>
    </View>

  );
}


}
