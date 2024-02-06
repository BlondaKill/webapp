import { StyleSheet, Text, View, Switch} from 'react-native'
import PrimaryButton from './PrimaryButton'


const CartTaskList = ({item, onHandlerModalDelete, screenWidth, updateTaskCompleted}) => {
    return (
            <View style={[styles.taskCard, {width:screenWidth -60}]}>
                <Text style={styles.text}>Artist: {item.title} </Text>
                <Text style={styles.text}>Song: {item.description} </Text>
                <View style={completedContainer}>
                    <Switch 
                        value={item.completed} 
                        onValueChange={() =>updateTaskCompleted (item.id)}
                    />
                    <Text style={styles.textCompleted}>{item.completed ? "Dowload" : "No"}</Text>
            </View>
                <PrimaryButton title= 'DEL' onPress={() => onHandlerModalDelete(item)}/>
            </View>
    )
}

export default CartTaskList

const styles = StyleSheet.create({
    taskCard:{
        backgroundColor: "black",
        padding: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: "flex-start",
        borderRadius: 5,
        gap: 25,
        },
    text:{
        width: "100%",
        color: "#5ac62b",
        fontSize: 20,
        },
    completedContainer: {
        width:"100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 15
        },
    textCompleted: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }        

})