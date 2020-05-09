import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { theme } from '../theme';

type ButtonMode = 'text' | 'contained' | 'outlined';

interface State {
  isOverviewActive: boolean,
  buttonAll: ButtonMode,
  buttonOverview: ButtonMode
}

export default class ToggleTabs extends React.Component {
  state: State = {
    isOverviewActive: false,
    buttonAll: 'contained',
    buttonOverview: 'text'
  }

  toggle = (buttonType: string) => {
    this.setState({
      isOverviewActive: buttonType === 'overview',
      buttonAll: this.state.isOverviewActive ? 'contained' : 'text',
      buttonOverview: this.state.isOverviewActive ? 'text' : 'contained'
    });
  }

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
  toggleTabs: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: theme.colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginBottom: 20,
    borderRadius: 50,
    width: 'auto'
  },
})
  