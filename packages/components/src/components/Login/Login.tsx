import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styles from './loginStyles'
import Separator from '../Separator/Separator'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Login = (props: any) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {}
  const handleSignup = () => {
    props.navigation.navigate('Signup')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login to continue</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your username"
        onChangeText={(username) => setUsername(username)}
        value={username}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter your password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        value={password}
      />
      <View style={styles.buttonsWrapper}>
        <Button title="Login" onPress={handleLogin} />
        <Separator />
        <Text style={{ textAlign: 'center' }}>OR</Text>
        <Separator />
        <Button title="Sign Up" onPress={handleSignup} />
      </View>
      <Separator />
    </View>
  )
}

export default Login
