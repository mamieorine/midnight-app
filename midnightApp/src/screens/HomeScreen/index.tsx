import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import ToggleTabs from '../../components/ToggleTabs';
import GoalCard from '../../components/GoalCard';
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
        <ToggleTabs />
        <GoalCard />
        <GoalCard />
        <GoalCard />
        <GoalCard />
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
