import React from 'react';
import {Alert, Button, Text, View } from 'react-native';
import WebView from 'react-native-webview';

/*
var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth() + 1; //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year
var hours = new Date().getHours(); //To get the Current Hours
var min = new Date().getMinutes(); //To get the Current Minutes
var sec = new Date().getSeconds(); //To get the Current Seconds

https://nchmf.gov.vn/Kttvsite/vi-VN/1/ha-noi-w28.html
https://www.accuweather.com/vi/vn/bac-ninh/352118/weather-forecast/352118
https://www.accuweather.com/vi/vn/hanoi/353412/daily-weather-forecast/353412


https://thoitiet.edu.vn/ha-noi
https://thoitiet.edu.vn/bac-ninh
https://thoitiet.edu.vn/ho-chi-minh

*/

//*
function a(){
  alert('abc');
}
//*/
function abc(props){
    alert('url là: ' + props.url);
    <WebView
      source={{uri: props.url}}
    />
}

export default function Weather(props){
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
            Click vao day de xem thoi tiet
        </Text>
        <Button title="Weather" onPress={() => {abc(props)}}/>
    </View>
  );
}