import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { theme } from '../../components/theme';

export default class Header extends React.Component {
  render() {
    return (
      <Appbar.Header style={styles.header}>
        <Appbar.Action icon="camera" color={theme.colors.primary} />
        <Appbar.Content title="Home" />
        <Appbar.Action icon="dots-vertical" color={theme.colors.primary} />
      </Appbar.Header>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.backgroundPrimary
  },

  logo: {
    fontSize: 24
  }
})
