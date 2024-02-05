import { StyleSheet, Text, View, Button } from 'react-native'
import PrimaryButton from './PrimaryButton'


const CartTaskList = ({item, onHandlerModalDelete}) => {
    return (
            <View style={styles.taskCard}>
                <Text style={styles.text}>Artist: {item.title} </Text>
                <Text style={styles.text}>Song: {item.description} </Text>
                <PrimaryButton title= 'DEL' onPress={() => onHandlerModalDelete(item)}/>
            </View>
    )
}

export default CartTaskList

const styles = StyleSheet.create({
    taskCard:{
        backgroundColor: "black",
        padding: 20,
        marginVertical: 10,
        alignItems: "flex-start",
        borderRadius: 5,
        gap: 25,
        },
    text:{
        width: "70%",
        color: "#5ac62b",
        fontSize: 20,
        }
})