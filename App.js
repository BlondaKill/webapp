import {View, Text, StyleSheet} from 'react-native'

const App = () => {
    return (
      <View style={styles.container}>

        <Text style={styles.text}> Never Give up! </Text>

      </View>

    )

}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    flex:1,
  },
text: {
  color: "orange",
  textAlign: "center",
  
  
}  

})