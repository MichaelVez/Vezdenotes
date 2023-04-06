import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {HomeDrawerScreenProps} from '../../navigation/types';

export default function Notes({
  navigation,
}: HomeDrawerScreenProps<'HomeScreen'>) {
  const [text, setText] = useState('');
  const [AllFolders, setAllFolders] = useState<JSX.Element[]>([]);

  useEffect(() => {}, []);
  return (
    <View style={styles.pageContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NewNote');
        }}>
        <Text>+</Text>
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
  },
  inputCont: {
    flexDirection: 'row',
    //   margin: 10,
    //   padding: 10,
    height: 50,
    backgroundColor: '#9DC08B',
  },
  input: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignSelf: 'flex-end',
    borderTopWidth: 1.5,
    borderTopColor: '#40513B',
    color: 'white',
  },
  plusCont: {
    backgroundColor: '#00acb55d',
    borderRadius: 10000,
    //   padding: 10,
    justifyContent: 'center',
    position: 'absolute',
    top: -70,
    left: '50%',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  plus: {color: 'white', fontSize: 20},
});
