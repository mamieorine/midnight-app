import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { theme } from '../theme';

export default class toggleTabs extends React.Component {
  render() {
    return (
      <View style={styles.toggleTabs}>
        <Button mode={this.state.buttonAll} onPress={() => this.toggle('all')}>
          <Text>All Goals</Text>
        </Button>
        <Button mode={this.state.buttonOverview} onPress={() => this.toggle('overview')}>
          <Text>Daily Overview</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  goalCard: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: theme.colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 50,
    width: 'auto'
  },
})
  