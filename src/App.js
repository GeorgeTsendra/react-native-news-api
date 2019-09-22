

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView} from 'react-native';
import NewsItem from './newsItem'



export default class App extends Component {
  state={
    newsArray: null,
    url: 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-13&sortBy=publishedAt&apiKey=6ca45e0d30ee43899ec7adb26dfe9cc4'
  }

  componentDidMount(){
    const {
      url
    } = this.state
    this.queryRequest(url)
  }

  renderNewsItem = (articles)=>{
 
    return (
      <ScrollView style={styles.contentWrapper}>
          {articles.map((value,index)=>{
            return (
              <NewsItem 
                data = {value}
                key={index}
              />
            )
          })}
       </ScrollView> 
    )
  }

  queryRequest=(url)=>{
        
    fetch(url)
    .then(res => res.json())
    .then((res)=>{
      this.setState({
        newsArray: res,
      })
      
    })
    .catch(err=>{
      console.log(err);
      
    })
  }


  render() {
    const {
      newsArray,
    } = this.state
    
    const welcomeStyle = Platform.select({
      ios: styles.welcomeIOS,
      android: styles.welcomeAndroid,
    })

    if(!newsArray) return null
  
    return (
      <View>
        <View style={styles.container}>
          <Text style={welcomeStyle}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>Test application by News API </Text>
          <Text > https://newsapi.org/ </Text>   
        </View>
        {this.renderNewsItem(newsArray.articles)}
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '15%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom: 0,
    borderBottomWidth: 1,
  },
  welcomeAndroid: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  welcomeIOS: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 35,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  contentWrapper: {
    height: '85%',
    width: '100%',
    backgroundColor: '#F5FCFF',
    margin: 0,
    
  }
});
