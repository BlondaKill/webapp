import { Pressable, StyleSheet, Text, View } from 'react-native'


const PrimaryButton = ({title, onPress}) => {
  return (
    <Pressable  style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "50%",
        paddingHorizontal:10,
        paddingVertical: 5,
        alignItems: "center",
        padding: "center",
        borderRadius: 5,
        

    },
    text: {
        fontSize: 16,

    }



})