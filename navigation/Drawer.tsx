import React, {PropsWithChildren} from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {ReactComponent as HamburgerIcon} from '../assets/icons/hamburger-icon.svg';

export interface IDrawerButtonProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
}
const styles = StyleSheet.create({
  ButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: ' 20px',
    top: ' 50px',
    borderRadius: 20,
    height: ' 40px',
    width: ' 40px',
    background: 'white',
    border: '1px solid gray',
    shadowOffset: {height: 3, width: 0},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 4,
    zIndex: 200,
  },
});
const DrawerButton = (props: IDrawerButtonProps) => {
  return (
    <TouchableOpacity style={styles.ButtonContainer} onPress={props.onPress}>
      {/* <View style={styles.contentContainer}> */}
      <HamburgerIcon />
      {/* </View> */}
    </TouchableOpacity>
  );
};

export default DrawerButton;
