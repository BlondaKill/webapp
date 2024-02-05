import { StyleSheet, Text, View} from 'react-native'
import PrimaryButton from './PrimaryButton'


const CartTaskList = ({item, onHandlerModalDelete, screenWidth}) => {
    return (
            <View style={[styles.taskCard, {width:screenWidth -40}]}>
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
        width: "100%",
        color: "#5ac62b",
        fontSize: 20,
        }
})