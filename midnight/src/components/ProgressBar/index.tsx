import React from 'react';
import styled from 'styled-components/native'

interface Props {
  value: string;
  color: string
}

interface State {
  progressValue: number,
  color: string
}

interface ProgressValue {
  value: number
  color?: string
}

export default class ProgressBar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  state: State = {
    progressValue: parseFloat(this.props.value),
    color: this.props.color || '#aaa'
  }

  render() {
    return (
      <ProgressBarContainer>
        <Progress value={this.state.progressValue} color={this.state.color} />
        <ProgressValue value={this.state.progressValue}> {this.state.progressValue}% </ProgressValue>
      </ProgressBarContainer>
    );
  }
}

const ProgressBarContainer = styled.View`
  position: relative;  
  margin: 10px 0 8px;
  width: 100%;
  height: 12px;
  borderRadius: 50px;
  backgroundColor: #fff;
`;

const Progress = styled.View<ProgressValue>`
  position: absolute;
  left: 0;
  top: 0;
  width: ${props => props.value}%;
  height: 100%;
  border-radius: 50px;
  background-color: ${props => props.color};
`;

const ProgressValue = styled.Text<ProgressValue>`
  position: absolute;
  fontSize: 12px;
  top: -18px;
  color: #fff;
  fontWeight: bold;
  left: ${props => props.value}%;
  marginLeft: -10px;
`;
