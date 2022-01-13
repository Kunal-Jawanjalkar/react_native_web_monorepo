import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Homzhub</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 150,
    backgroundColor: '#4a32a8',
  },
  text: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '600',
  },
})
