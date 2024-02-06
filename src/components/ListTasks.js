import { StyleSheet,View, FlatList} from 'react-native'
import CartTaskList from './CartTaskList'


const ListTasks = ({tasks, onHandlerModalDelete, screenWidth, updateTaskCompleted}) => {
    return (
        <View style={styles.tasksContainer}>
            <FlatList
            horizontal={true}
            pagingEnabled={true}
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({item}) => (<CartTaskList 
                                            item={item}
                                            onHandlerModalDelete={onHandlerModalDelete}
                                            screenWidth={screenWidth}
                                            updateTaskCompleted={updateTaskCompleted}
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