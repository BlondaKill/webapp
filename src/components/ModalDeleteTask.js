import { StyleSheet, Text, View } from 'react-native'


const ModalDeleteTask = () => {
    return (
            <Modal
            visible={modalVisible}    
    >
                <View>
                <Text>Delete Song: {taskSelected.title}?</Text>
                <Button title='si' onPress={deleteTask}/>
                <Button title='no' onPress={()=> onHandlerModalDelete({})}/>
                </View>
            </Modal>
    )
}

export default ModalDeleteTask

const styles = StyleSheet.create({})