import { StyleSheet, Text, View, Button } from 'react-native'


const CartTaskList = ({item, onHandlerModalDelete}) => {
    return (
            <View style={styles.taskCard}>
                <Text style={styles.text}>{item.title} </Text>
                <Button title= 'DEL' onPress={() => onHandlerModalDelete(item)}/>
            </View>
    )
}

export default CartTaskList

const styles = StyleSheet.create({
    taskCard:{
        flexDirection: "row",
        backgroundColor: "#8F2FF5",
        padding: 20,
        marginVertical: 10,
        alignItems: "center",
        borderRadius: 5,
        },
    text:{
        width: "70%",
        color: "white",
        fontSize: 16,
        }
})