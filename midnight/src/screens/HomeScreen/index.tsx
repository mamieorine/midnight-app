import React from 'react';
import { View, Text, Button, StyleSheet, ViewStyle } from 'react-native';
// containing Screen and Navigator (Navigator contain Screen as children to define for routes)ss
import { StackNavigationProp } from '@react-navigation/stack';

type RootStacks = {
  Dashboard: undefined;
};

interface Props {
  navigation: StackNavigationProp<RootStacks>;
}

interface Styles {
  containerHome: ViewStyle;
}

export default class HomeScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.containerHome}>
        <Text>This is Home Screen na ja</Text>
        <Button title="Go to dashboard" onPress={() => this.props.navigation.navigate('Dashboard')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create<Styles>({
  containerHome: {
      flex: 1,
      backgroundColor: 'tomato',
      alignItems: 'center',
      justifyContent: 'center',
  },
})
