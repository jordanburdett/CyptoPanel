import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button 
            title="To Home Screen"
            onPress={() => navigation.push('Home')}
        />
      </View>
    );
  }