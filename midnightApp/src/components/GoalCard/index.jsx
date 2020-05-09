import React from 'react';
import styled from 'styled-components/native';
import ProgressBar from './../ProgressBar';

export default class GoalCard extends React.Component {
  render() {
    return (
      <Card>
        <Icon></Icon>
        <Content>
          <Title>Goal A</Title>
          <ProgressBar value="15"/>
          <FooterCard>
            <Text>Current day 8 from 21</Text>
            <Tag>
              <PointTag />
              <Text>Productivity</Text>
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

const Icon = styled.Image`
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

const PointTag = styled.View`
  background-color: red;
  width: 8px;
  height: 8px;
  border-radius: 50px;
  margin-right: 10px;
`;

const Text = styled.Text`
  color: #fff;
`;
