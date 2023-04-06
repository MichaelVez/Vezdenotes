import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {read, DownloadDirectoryPath} from 'react-native-fs';

const Training = () => {
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    loadFile();
  }, []);

  const loadFile = async () => {
    try {
      const res = await read(DownloadDirectoryPath + '/training.txt');
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.pageContainer}>
      {loading ? (
        <ActivityIndicator size={'large'} style={{marginTop: 60}} />
      ) : (
        <>{display}</>
      )}
    </View>
  );
};
export default Training;
const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'rgb(205,205,205)',
    height: '100%',
    fontFamily: 'NotoSerifHebrew-Medium',
    padding: 5,
  },
});
