import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  containerDashboard: ViewStyle;
}

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.containerDashboard}>
        <Text>This is Dashboard na ja</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create<Styles>({
  containerDashboard: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
  },
})
