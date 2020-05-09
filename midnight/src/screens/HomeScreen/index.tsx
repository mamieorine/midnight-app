import React from 'react';
import styled from 'styled-components/native';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import ToggleTabs from '../../components/ToggleTabs';
import GoalCard from '../../components/GoalCard';
import firebase from 'firebase';
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

let username: any;

export default class HomeScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    var db = firebase.database();
    var ref = db.ref("/goals/");

    ref.on("value", function(snapshot: any) {
      console.log(snapshot.val());
    }, function (errorObject: any) {
      console.log("The read failed: " + errorObject.code);
    });

    return (
      <View style={styles.containerHome}>
        <ToggleTabs />
        <Text>{username}</Text>
        
        <GoalCard/>
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

const Text = styled.Text`
  font-size: 18px;
  color: red;
  font-weight: 600;
`;
