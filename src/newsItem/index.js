

import React, {Component} from 'react';
import {StyleSheet, Text, View,Image,Button,} from 'react-native';
import moment from "moment";

export default class NewsItem extends Component {

  onPressLearnMore(url){
    window.location = url;
  }

  render() {
    const {
      data,
    } = this.props

    return (
      <View style={styles.block} >
        <Text style={styles.title} >
          {data.title}
        </Text>
        <View style={styles.contentBlock}>
          <View style={styles.imageWrapper}>
            <Image
                style={styles.urlToImage}
                source={{uri:`${data.urlToImage}`}}
              />
            <Text style={styles.author}>
              author: {data.author}
            </Text>
            <Text style={styles.published}>
               published: {moment(data.publishedAt).format('DD.MM.YYYY')}
            </Text>      
          </View>
        
          <Text style={styles.description} >
            {data.description}
          </Text>

        
        </View> 
          {/*  
          <Button
                onPress={()=>this.onPressLearnMore(data.url)}
                title="View More"
                color="#841584"
                accessibilityLabel="View more"
          />
          */}
      </View> 
    )
   }
}

const styles = StyleSheet.create({
  block: {
    color: '#333333',
    marginBottom: 5,
    height: 'auto',
    width: '100%',
    borderBottomWidth: 1,
    padding: 10, 
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    marginBottom: 5,
    width: '45%',
  },
  urlToImage: {
    width: '100%',
    height: 'auto',
    minHeight: 50,
    margin: 0,
    padding: 0,
  },
  contentBlock: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  imageWrapper:{
    width: '45%',
    height: 'auto',
    minHeight: 50,
    margin: 0,
    padding: 0,
  },
  author: {
    color: '#000000',
    marginBottom: 3,
    marginTop: 5,
  },
  published: {
    color: '#000000',
    marginBottom: 5,
    marginTop: 0,
  }
});
