import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {HomeDrawerScreenProps} from '../../navigation/types';

export default function ({navigation}: HomeDrawerScreenProps<'home'>) {
  return (
    <View style={styles.pageContainer}>
      <TouchableOpacity
        style={styles.btnCont}
        onPress={() => {
          navigation.navigate('Notes');
        }}>
        <Text style={styles.btn}>Notes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnCont}
        onPress={() => {
          navigation.navigate('Training');
        }}>
        <Text style={styles.btn}>Training</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'rgb(205,205,205)',
    height: '100%',
    fontFamily: 'NotoSerifHebrew-Medium',
    padding: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: '70%',
  },
  btnCont: {},
  btn: {fontFamily: 'NotoSerifHebrew-Medium', fontSize: 18},
});
