import React from 'react';
import { View, Text, Button, StyleSheet, ViewStyle } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import TogglerTabs from '../../components/ToggleTabs';
import { Theme } from 'react-native-paper';
import { theme } from '../../components/theme';

type RootStacks = {
  Dashboard: undefined;
};

interface Props {
  navigation: StackNavigationProp<RootStacks>;
  theme: Theme;
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
        <TogglerTabs />
      </View>
    )
  }
}

const styles = StyleSheet.create<Styles>({
  containerHome: {
      flex: 1,
      padding: 15,
      alignItems: 'center',
      backgroundColor: theme.colors.background,
  },
})
