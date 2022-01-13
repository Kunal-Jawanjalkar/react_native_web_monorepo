import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: Platform.OS === 'web' ? '30vw' : 20,
    flex: 1,
    height: 300,
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#131313',
    borderRadius: 4,
    marginVertical: 10,
    padding: 5,
  },
  buttonsWrapper: {
    marginTop: 10,
    paddingHorizontal: Platform.OS === 'web' ? 60 : 30,
  },
})

export default styles
