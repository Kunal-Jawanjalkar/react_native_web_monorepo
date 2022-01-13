import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button, Picker } from 'react-native'
import Separator from '../Separator/Separator'
import styles from './signupStyles'
// import { Picker } from '@react-native-picker/picker'

const Signup = (props: any) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [error, setError] = useState('')
  useEffect(() => {
    fetchCountryCodes()
  }, [])

  const handleSignUp = () => {
    if (!email && !phoneNum) {
      setError('email and phone no. cannot be empty')
      setTimeout(() => {
        setError('')
      }, 3000)
    } else {
      props.navigation.navigate('Home')
      setError('')
    }
  }
  const handleCancel = () => {
    props.navigation.navigate('Login')
  }

  const fetchCountryCodes = async () => {
    const url = 'https://dev.homzhub.com/api/v1/countries/'
    try {
      const response = await fetch(url)
      const { data } = await response.json()
      setCountries(data)
    } catch (err) {}
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Signup to continue</Text>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <TextInput
        style={styles.textInput}
        placeholder="Enter your First Name"
        onChangeText={(firstName) => setFirstName(firstName)}
        value={firstName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter your Last Name"
        onChangeText={(lastName) => setLastName(lastName)}
        value={lastName}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter your Email"
        onChangeText={(email) => setEmail(email)}
        value={email}
      />

      {/* <Picker>
        {countries.map((country) => {
          return <Picker.Item>{'picker'}</Picker.Item>
        })}
      </Picker> */}

      <Picker
        // style={{ padding: 5, width: 80, height: 40, color: '#000' }}
        onValueChange={(country) => setCountry(country)}
        selectedValue={country}
      >
        {countries.map((country: any, index) => {
          return (
            <Picker.Item
              key={index}
              label={country.phone_codes[0].phone_code}
              value={country.phone_codes[0].phone_code}
            />
          )
        })}
      </Picker>

      <TextInput
        style={styles.textInput}
        placeholder="Enter your phonenumber"
        onChangeText={(phoneNum) => setPhoneNum(phoneNum)}
        maxLength={10}
        keyboardType="numeric"
        value={phoneNum}
      />

      <View style={styles.buttonsWrapper}>
        <Button title="Signup" onPress={handleSignUp} />
        <Separator />
        <Text style={{ textAlign: 'center' }}>OR</Text>
        <Separator />
        <Button title="Cancel" onPress={handleCancel} />
      </View>
      <Separator />
    </View>
  )
}

export default Signup
