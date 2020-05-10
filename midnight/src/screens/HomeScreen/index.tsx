import React from 'react';
import firebase from 'firebase';
import styled from 'styled-components/native';
import * as goalCard from '../../components/GoalCard';
import GoalCard from '../../components/GoalCard';
import ToggleTabs from '../../components/ToggleTabs';
import { theme } from '../../components/theme';

interface State {
  goals: goalCard.GoalProps[];
}

interface Props {
  navigation: any
}

export default class HomeScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const database = firebase.database();
    const goal = database.ref('/goals/');
  
    goal.on('value', (result: any) => {
      this.state = {
        goals: result.val()
      }
    });
  }

  render() {
    const goalCard = this.state.goals.map((value: goalCard.GoalProps, index: number) => {
      return <GoalCard key={`${index}-${value.title}`} goal={value} />
    })

    return (
      <ContainerHome>
        <ToggleTabs />
        {goalCard}

        <AddGoal title="+" onPress={() =>
          this.props.navigation.navigate('AddGoalScreen', { name: 'Jane' })
        } />
      </ContainerHome>
    )
  }
}

const ContainerHome = styled.View`
  flex: 1;
  padding: 15px;
  alignItems: center;
  backgroundColor: ${theme.colors.background};
`;

const AddGoal = styled.Button`
  backgroundColor: ${theme.colors.background};
  color: ${theme.colors.onSurface};
  fontSize: 30px;
  margin: auto;
`;
