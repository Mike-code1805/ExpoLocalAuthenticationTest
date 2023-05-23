import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export const PassSreen = ({ onLogout }) => {
  return (
    <View>
      <Text>PassSreen</Text>
      <TouchableOpacity onPress={onLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
