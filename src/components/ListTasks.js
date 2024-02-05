import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import CartTaskList from './CartTaskList'


const ListTasks = ({tasks, onHandlerModalDelete}) => {
    return (
        <View style={styles.tasksContainer}>
        <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({item}) => (<CartTaskList 
                                            item={item}
                                            onHandlerModalDelete={onHandlerModalDelete}
                                            />)}
        />
        
        </View>
    )
}

export default ListTasks

const styles = StyleSheet.create({
    tasksContainer:{
        padding: 10,
    
        },
    
})