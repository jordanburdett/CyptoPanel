import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.push('Details')}
        />
      </View>
    );
  }
  