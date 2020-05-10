import React from 'react';
import styled from 'styled-components/native';
import ProgressBar from '../ProgressBar';
import { tags } from '../variables';

interface Props {
  goal: GoalProps;
}

export interface GoalProps {
  title: string;
  allowAlarm: boolean;
  currenDayProgress: number;
  days: [];
  setAlarm: string;
  tag: string;
  targetDays: number;
}

export interface State {
  title: string;
  iconImage: string;
  currenDayProgress: number;
  targetDays: number;
  tagName: string;
  tagColor: string;
  percentageProgress: string;
}

interface PointTag {
  color: string;
}

const initailValue = '';

export default class GoalCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const tagName = props.goal.tag || initailValue;
    const tagDetail = this.getTagDetails(tagName);
    const percentageProgress = this.getCurrentProgress(props.goal.currenDayProgress, props.goal.targetDays);

    this.state = {
      title: props.goal.title,
      currenDayProgress: props.goal.currenDayProgress,
      tagName: tagName,
      targetDays: props.goal.targetDays,
      percentageProgress: percentageProgress,
      iconImage: tagDetail ? tagDetail.icon : '',
      tagColor: tagDetail ? tagDetail.color : ''
    }
  }

  private getTagDetails(tagName: string) {
    if (!tagName) return;

    const currentTag = tags.find(tag => {
      return tag.name === tagName
    });

    if (!currentTag) return;

    return {
      icon: currentTag.icon,
      color: currentTag.color
    }
  }

  private getCurrentProgress(currenDayProgress: number, targetDays: number) {
    const progress = Math.round((currenDayProgress*100)/targetDays)
    
    return progress.toString();
  }

  render() {
    return (
      <Card>
        <IconImage source={{ uri: this.state.iconImage }} />
        <Content>
          <Title>{this.state.title}</Title>
          <ProgressBar value={this.state.percentageProgress} color={this.state.tagColor} />
          <FooterCard>
            <Text>Current day {this.state.currenDayProgress} from {this.state.targetDays}</Text>
            <Tag>
              <PointTag color={this.state.tagColor} />
              <Text>{this.state.tagName}</Text>
            </Tag>
          </FooterCard>
        </Content>
      </Card>
    );
  }
}

const Card = styled.View`
  position: relative;
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
  border-radius: 50px;
  background-color: #87BCBF;
  margin: 5px 0
`;

const IconImage = styled.Image`
  position: relative;
  width: 45px; 
  height: 45px;
  border-radius: 50px;
  background-color: #fff;
  margin-right: 10px;
`;

const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: 600;
`;

const Content = styled.View`
  width: 80%;
`;

const FooterCard = styled.View`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
`;

const Tag = styled.View`
  font-size: 14px;
  position: relative;
  display: flex;
  flex-flow: row;
  align-items: center;
`;

const PointTag = styled.View<PointTag>`
  background-color: ${props => props.color};
  width: 8px;
  height: 8px;
  border-radius: 50px;
  margin-right: 10px;
`;

const Text = styled.Text`
  color: #fff;
`;
