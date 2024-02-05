import { StyleSheet, Text, View, FlatList, Button } from 'react-native'


const ListTasks = ({tasks, onHandlerModalDelete}) => {
    return (
        <View style={styles.tasksContainer}>
        <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                                <View style={styles.taskCard}>
                                    <Text style={styles.text}>{item.title} </Text>
                                    <Button title= 'DEL' onPress={() => onHandlerModalDelete(item)}/>
                                </View>

        )}  
        />
        
        </View>
    )
}

export default ListTasks

const styles = StyleSheet.create({
    tasksContainer:{
        padding: 10,
    
        },
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