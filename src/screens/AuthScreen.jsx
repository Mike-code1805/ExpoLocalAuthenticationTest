import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export const AuthScreen = ({ onAuthenticate }) => {
  return (
    <View>
      <Text>AuthScreen</Text>
      <TouchableOpacity onPress={onAuthenticate}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
