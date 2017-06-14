import React,{Component} from 'react';
import {CardItem,Left,Text,Title,Thumbnail,Body} from 'native-base';
import {Image,View} from 'react-native';
import Card from './Card';

export default class CardsLayout extends Component{

  render()
  {
    const imgPath='ars';
    return(
      <Card style={{elevation:3}}>
      <CardItem>
      <Left>
          <Thumbnail source={{uri:imgPath}} />
      </Left>
      </CardItem>
      </Card>
    );
  }
}
