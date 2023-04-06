import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

export default function New() {
  const [text, setTextInput] = useState('');

  return (
    <View style={styles.pageContainer}>
      <TextInput></TextInput>
      <Text>New!!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'rgb(205,205,205)',
    height: '100%',
    fontFamily: 'NotoSerifHebrew-Medium',
    padding: 5,
  },
});
