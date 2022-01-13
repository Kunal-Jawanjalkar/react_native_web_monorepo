// import { Header as AppHeader } from 'react-native/Libraries/NewAppScreen'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// export { AppHeader }

export const AppHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}> Welcome to homzhub mobile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#4a32a8',
  },
  headerText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
  },
})
