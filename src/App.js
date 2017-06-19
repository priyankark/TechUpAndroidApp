import React,{Component} from 'react';
import {WebView,Modal,View, Text,DrawerLayoutAndroid,Alert,Image,ScrollView,AsyncStorage} from 'react-native';
import Header from './Components/Header';
import ButtonCustom from './Components/Button';
import {Toast,Icon,Container,Content,Thumbnail,Left,Right,Body,Spinner,DeckSwiper,Card,CardItem,Footer,FooterTab,Button} from 'native-base';
import Viewer from './Components/Viewer';

export default class App extends Component {
  state={
   source:'Tech Crunch',
   url:'https://newsapi.org/v1/articles?source=techcrunch&apiKey=3f798ce8be64406496a05d8b04b83c2a',
   data:[],
   imgOfSource:'tc',
   loading:true,
   webModal:false,
   articleUrl:'',
   saveIcon:'bookmark',
   viewerModal:false
 }
 componentWillMount()
 {
   fetch(this.state.url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
     //const obj_response=JSON.parse(response);

     this.setState({data:response.articles,loading:false});
   });
 }

 Save= async (title,url)=>
 {
   try {
  await AsyncStorage.setItem(title,url);
  Alert.alert('Bookmark Saved!')
} catch (error) {
  // Error saving data
  alert(error)
}
this.setState({saveIcon:'bookmark'});
 }

 onShare(title,url,description) {
   Share.open({
     share_text:description,
     share_URL:url,
     title:title
   },function(e) {
     console.log(e);
   });
 }

 ShowWebModal()
 {
   return(
     <Modal animationType={"slide"} transparent={false} visible={this.state.webModal} onRequestClose={() => {this.setState({webModal:false})}} >
           <Header headerText="Powered By NewsAPI" />
           <WebView source={{uri:this.state.articleUrl}} style={{marginTop: 20}} />
     </Modal>
   );

 }

 ViewerModal()
 {
   return(
     <Modal animationType={"slide"} transparent={false} visible={this.state.viewerModal} onRequestClose={() => {this.setState({viewerModal:false})}} >
        <Viewer />
     </Modal>
   );

 }

 show(){

  if(this.state.loading===true)
  return(<Spinner color="red"/>)
  else {

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
                                <ScrollView>

                                    <Text>{item.description}</Text>
                                </ScrollView>
                                </CardItem>
                                <CardItem>
                                <Container>
                                  <Footer >
                                    <FooterTab>
                                  <Button success onPress={()=>this.setState({webModal:true,articleUrl:item.url})}>
                                    <Icon name='eye' />
                                  </Button>

                                <Button danger onPress={()=>this.Save(item.title,item.url)}>
                                  <Icon name={this.state.saveIcon} />
                                </Button>
                          </FooterTab>
                        </Footer>
                      </Container>

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
                  <ButtonCustom onPress={()=>this.setState({viewerModal:true})}>
                  <Text style={{alignSelf: 'center',
                  color: '#007aff',
                  fontSize: 16,
                  fontWeight: '600',
                  paddingTop: 10,
                  paddingBottom: 10}}>
                    Bookmarks
                  </Text>


                  </ButtonCustom>

                   <ButtonCustom onPress={()=>{
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

                    </ButtonCustom>

                    <ButtonCustom onPress={()=>{
                    const url="https://newsapi.org/v1/articles?source=techcrunch&apiKey=3f798ce8be64406496a05d8b04b83c2a"
                          this.setState({loading:true});
                          fetch(url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
                            //const obj_response=JSON.parse(response);
                            this.setState({
                            source:'Tech Crunch',
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

                     </ButtonCustom>

                     <ButtonCustom onPress={()=>{
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

                      </ButtonCustom>
                      <ButtonCustom onPress={()=>{
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

                       </ButtonCustom>
                       <ButtonCustom onPress={()=>{
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

                        </ButtonCustom>
                        <ButtonCustom onPress={
                          ()=>{
                            url="https://newsapi.org/v1/articles?source=mashable&apiKey=3f798ce8be64406496a05d8b04b83c2a"
                                  this.setState({loading:true});
                                  fetch(url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
                                    //const obj_response=JSON.parse(response);
                                    this.setState({
                                    source:'Mashable',
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

                         </ButtonCustom>



                          <ButtonCustom onPress={
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

                           </ButtonCustom>

                           <ButtonCustom onPress={
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

                            </ButtonCustom>

                            <ButtonCustom onPress={
                              ()=>{
                                const url="https://newsapi.org/v1/articles?source=techradar&apiKey=3f798ce8be64406496a05d8b04b83c2a"
                                         this.setState({loading:true});
                                         fetch(url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
                                           //const obj_response=JSON.parse(response);
                                           this.setState({
                                           source:'TechRadar',
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

                             </ButtonCustom>

                             <ButtonCustom onPress={
                               ()=>{
                            const url="https://newsapi.org/v1/articles?source=the-verge&apiKey=3f798ce8be64406496a05d8b04b83c2a"
                                            this.setState({loading:true});
                                            fetch(url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
                                              //const obj_response=JSON.parse(response);
                                              this.setState({
                                              source:'The Verge',
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

                              </ButtonCustom>

                              <ButtonCustom onPress={
                                ()=>{
                                const url="https://newsapi.org/v1/articles?source=wired-de&apiKey=3f798ce8be64406496a05d8b04b83c2a"
                                             this.setState({loading:true});
                                             fetch(url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
                                               //const obj_response=JSON.parse(response);
                                               this.setState({
                                               source:'Wired',
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

                               </ButtonCustom>

                               <ButtonCustom onPress={
                                 ()=>{
                                  const url="https://newsapi.org/v1/articles?source=the-next-web&apiKey=3f798ce8be64406496a05d8b04b83c2a"
                                                 this.setState({loading:true});
                                                 fetch(url,{method:'GET'}).then((response)=>response.json()) .catch((error)=>alert("There was an error. ")).then((response)=>{
                                                   //const obj_response=JSON.parse(response);
                                                   this.setState({
                                                   source:'The Next Web',
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

                                </ButtonCustom>



                   </Content>
                </Container>

      </View>
    );

      return ( <DrawerLayoutAndroid drawerWidth={250} drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={{flex: 1}}>

            <Header headerText="<tech/>UP!" />

            <ScrollView>
            {this.show()}
            {this.ShowWebModal()}
            {this.ViewerModal()}
            </ScrollView>
           </View>
          </DrawerLayoutAndroid> );
}

}
