import React,{Component} from 'react';
import {View, Text,DrawerLayoutAndroid,Alert,Image} from 'react-native';
import Header from './Components/Header';
import Button from './Components/Button';
import {Container,Content,Thumbnail,Left,Right,Body,Spinner,DeckSwiper,Card,CardItem} from 'native-base';
import Cardslayout from './Components/CardsLayout';

export default class App extends Component {
  state={
   source:'Tech Crunch',
   url:'https://newsapi.org/v1/articles?source=techcrunch&apiKey=3f798ce8be64406496a05d8b04b83c2a',
   data:[],
   imgOfSource:'tc',
   loading:true
 }
 componentWillMount()
 {
   fetch(this.state.url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
     //const obj_response=JSON.parse(response);

     this.setState({data:response.articles,loading:false});
   });
 }

 show(){

  if(this.state.loading===true)
  return(<Spinner color="red"/>)
  else {
    Alert.alert(this.state.data.toString());
    return(

      <Container>
                <View>
                    <DeckSwiper
                        dataSource={this.state.data}
                        renderItem={item =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={{uri:this.state.imgOfSource}} />
                                        <Body>
                                            <Text>{this.state.source}</Text>
                                            <Text>>{item.title}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image style={{ resizeMode: 'cover', width: 500,height:300 }} source={{uri:item.urlToImage}} />
                                </CardItem>
                                <CardItem>

                                    <Text>{item.description}</Text>
                                </CardItem>
                                <CardItem>

                                </CardItem>
                            </Card>
                        }
                    />
                </View>
            </Container>

    );
  }

}

  render()
  {
     var navigationView = ( <View style={{flex: 1, backgroundColor: '#d3d3d3'}}>
            <Header headerText="Select News Source"/>
                <Container>
                  <Content>
                   <Button onPress={()=>{
                    const url="https://newsapi.org/v1/articles?source=ars-technica&apiKey=3f798ce8be64406496a05d8b04b83c2a"
                         this.setState({loading:true});
                         fetch(url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
                           //const obj_response=JSON.parse(response);
                           this.setState({
                           source:'Ars Technica',
                           url:url,
                           data:response.articles,
                           imgOfSource:'ars',
                           loading:false });
                         });

                   }}>
                   <Left>
                    <Thumbnail source={{uri:'ars'}} size={20}/>
                   </Left>

                      <Text style={{alignSelf: 'center',
                      color: '#007aff',
                      fontSize: 16,
                      fontWeight: '600',
                      paddingTop: 10,
                      paddingBottom: 10}}>
                        Ars Technica
                      </Text>

                    </Button>

                    <Button onPress={()=>{
                    const url="https://newsapi.org/v1/articles?source=techcrunch&apiKey=3f798ce8be64406496a05d8b04b83c2a"
                          this.setState({loading:true});
                          fetch(url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
                            //const obj_response=JSON.parse(response);
                            this.setState({
                            source:'Ars Technica',
                            url:url,
                            data:response.articles,
                            imgOfSource:'tc',
                            loading:false });
                          });

                    }} >
                    <Left>
                     <Thumbnail source={{uri:'tc'}} size={20}/>
                    </Left>

                       <Text style={{alignSelf: 'center',
                       color: '#007aff',
                       fontSize: 16,
                       fontWeight: '600',
                       paddingTop: 10,
                       paddingBottom: 10}}>
                         Tech Crunch
                       </Text>

                     </Button>

                     <Button onPress={()=>{
                      const url="https://newsapi.org/v1/articles?source=business-insider&apiKey=3f798ce8be64406496a05d8b04b83c2a"
                            this.setState({loading:true});
                            fetch(url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
                              //const obj_response=JSON.parse(response);
                              this.setState({
                              source:'Business Insider',
                              url:url,
                              data:response.articles,
                              imgOfSource:'bi',
                              loading:false });
                            });

                     }} >
                     <Left>
                      <Thumbnail source={{uri:'bi'}} size={20}/>
                     </Left>

                        <Text style={{alignSelf: 'center',
                        color: '#007aff',
                        fontSize: 16,
                        fontWeight: '600',
                        paddingTop: 10,
                        paddingBottom: 10}}>
                          Business Insider
                        </Text>

                      </Button>
                      <Button onPress={()=>{
                        const url="https://newsapi.org/v1/articles?source=engadget&apiKey=3f798ce8be64406496a05d8b04b83c2a"
                              this.setState({loading:true});
                              fetch(url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
                                //const obj_response=JSON.parse(response);
                                this.setState({
                                source:'Engadget',
                                url:url,
                                data:response.articles,
                                imgOfSource:'eng',
                                loading:false });
                              });

                      }} >
                      <Left>
                       <Thumbnail source={{uri:'eng'}} size={20}/>
                      </Left>

                         <Text style={{alignSelf: 'center',
                         color: '#007aff',
                         fontSize: 16,
                         fontWeight: '600',
                         paddingTop: 10,
                         paddingBottom: 10}}>
                           Engadget
                         </Text>

                       </Button>
                       <Button onPress={()=>{
                         const url="https://newsapi.org/v1/articles?source=hacker-news&apiKey=3f798ce8be64406496a05d8b04b83c2a"
                               this.setState({loading:true});
                               fetch(url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
                                 //const obj_response=JSON.parse(response);
                                 this.setState({
                                 source:'Hacker News',
                                 url:url,
                                 data:response.articles,
                                 imgOfSource:'hn',
                                 loading:false });
                               });


                       }} >
                       <Left>
                        <Thumbnail source={{uri:'hn'}} size={20}/>
                       </Left>

                          <Text style={{alignSelf: 'center',
                          color: '#007aff',
                          fontSize: 16,
                          fontWeight: '600',
                          paddingTop: 10,
                          paddingBottom: 10}}>
                            Hacker News
                          </Text>

                        </Button>
                        <Button onPress={
                          ()=>{
                            url="https://newsapi.org/v1/articles?source=mashable&apiKey=3f798ce8be64406496a05d8b04b83c2a"
                                  this.setState({loading:true});
                                  fetch(url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
                                    //const obj_response=JSON.parse(response);
                                    this.setState({
                                    source:'Ars Technica',
                                    url:url,
                                    data:response.articles,
                                    imgOfSource:'mashable',
                                    loading:false });
                                  });

                          }} >
                        <Left>
                         <Thumbnail source={{uri:'mashable'}} size={20}/>
                        </Left>

                           <Text style={{alignSelf: 'center',
                           color: '#007aff',
                           fontSize: 16,
                           fontWeight: '600',
                           paddingTop: 10,
                           paddingBottom: 10}}>
                             Mashable
                           </Text>

                         </Button>



                          <Button onPress={
                            ()=>{
                            const url="https://newsapi.org/v1/articles?source=recode&apiKey=3f798ce8be64406496a05d8b04b83c2a"
                                      this.setState({loading:true});
                                      fetch(url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
                                        //const obj_response=JSON.parse(response);
                                        this.setState({
                                        source:'Recode',
                                        url:url,
                                        data:response.articles,
                                        imgOfSource:'recode',
                                        loading:false });
                                      });


                            } } >
                          <Left>
                           <Thumbnail source={{uri:'recode'}} size={20}/>
                          </Left>

                             <Text style={{alignSelf: 'center',
                             color: '#007aff',
                             fontSize: 16,
                             fontWeight: '600',
                             paddingTop: 10,
                             paddingBottom: 10}}>
                               Recode
                             </Text>

                           </Button>

                           <Button onPress={
                             ()=>{
                              const url="https://newsapi.org/v1/articles?source=reddit-r-all&apiKey=3f798ce8be64406496a05d8b04b83c2a"
                                     this.setState({loading:true});
                                     fetch(url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
                                       //const obj_response=JSON.parse(response);
                                       this.setState({
                                       source:'Reddit-r-all',
                                       url:url,
                                       data:response.articles,
                                       imgOfSource:'reddit',
                                       loading:false });
                                     });


                             }
                           } >
                           <Left>
                            <Thumbnail source={{uri:'reddit'}} size={20}/>
                           </Left>

                              <Text style={{alignSelf: 'center',
                              color: '#007aff',
                              fontSize: 16,
                              fontWeight: '600',
                              paddingTop: 10,
                              paddingBottom: 10}}>
                                Reddit-r-all
                              </Text>

                            </Button>

                            <Button onPress={
                              ()=>{
                                const url="https://newsapi.org/v1/articles?source=tech-radar&apiKey=3f798ce8be64406496a05d8b04b83c2a"
                                         this.setState({loading:true});
                                         fetch(url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
                                           //const obj_response=JSON.parse(response);
                                           this.setState({
                                           source:'Recode',
                                           url:url,
                                           data:response.articles,
                                           imgOfSource:'TechRadar',
                                           loading:false });
                                         });


                              }} >
                            <Left>
                             <Thumbnail source={{uri:'techradar'}} size={20}/>
                            </Left>

                               <Text style={{alignSelf: 'center',
                               color: '#007aff',
                               fontSize: 16,
                               fontWeight: '600',
                               paddingTop: 10,
                               paddingBottom: 10}}>
                                 TechRadar
                               </Text>

                             </Button>

                             <Button onPress={
                               ()=>{
                            const url="https://newsapi.org/v1/articles?source=the-verge&apiKey=3f798ce8be64406496a05d8b04b83c2a"
                                            this.setState({loading:true});
                                            fetch(url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
                                              //const obj_response=JSON.parse(response);
                                              this.setState({
                                              source:'Recode',
                                              url:url,
                                              data:response.articles,
                                              imgOfSource:'theVerge',
                                              loading:false });
                                            });

                               } } >
                             <Left>
                              <Thumbnail source={{uri:'theverge'}} size={20}/>
                             </Left>

                                <Text style={{alignSelf: 'center',
                                color: '#007aff',
                                fontSize: 16,
                                fontWeight: '600',
                                paddingTop: 10,
                                paddingBottom: 10}}>
                                  The Verge
                                </Text>

                              </Button>

                              <Button onPress={
                                ()=>{
                                const url="https://newsapi.org/v1/articles?source=wired-de&apiKey=3f798ce8be64406496a05d8b04b83c2a"
                                             this.setState({loading:true});
                                             fetch(url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
                                               //const obj_response=JSON.parse(response);
                                               this.setState({
                                               source:'Recode',
                                               url:url,
                                               data:response.articles,
                                               imgOfSource:'wired',
                                               loading:false });
                                             });

                                }
                              } >
                              <Left>
                               <Thumbnail source={{uri:'wired'}} size={20}/>
                              </Left>

                                 <Text style={{alignSelf: 'center',
                                 color: '#007aff',
                                 fontSize: 16,
                                 fontWeight: '600',
                                 paddingTop: 10,
                                 paddingBottom: 10}}>
                                   Wired.de
                                 </Text>

                               </Button>

                               <Button onPress={
                                 ()=>{
                                  const url="https://newsapi.org/v1/articles?source=the-next-web&apiKey=3f798ce8be64406496a05d8b04b83c2a"
                                                 this.setState({loading:true});
                                                 fetch(url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
                                                   //const obj_response=JSON.parse(response);
                                                   this.setState({
                                                   source:'Recode',
                                                   url:url,
                                                   data:response.articles,
                                                   imgOfSource:'tnw',
                                                   loading:false });
                                                 });

                                 }} >
                               <Left>
                                <Thumbnail source={{uri:'tnw'}} size={20}/>
                               </Left>

                                  <Text style={{alignSelf: 'center',
                                  color: '#007aff',
                                  fontSize: 16,
                                  fontWeight: '600',
                                  paddingTop: 10,
                                  paddingBottom: 10}}>
                                    The Next Web
                                  </Text>

                                </Button>



                   </Content>
                </Container>

      </View>
    );

      return ( <DrawerLayoutAndroid drawerWidth={250} drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={{flex: 1}}>
            <Header headerText="devUPDATE!" />

            {this.show()}
           </View>
          </DrawerLayoutAndroid> );
}

}
