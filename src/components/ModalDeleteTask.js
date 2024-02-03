import { StyleSheet, Text, View, Modal, Button } from 'react-native'


const ModalDeleteTask = (prop) => {
    const {taskSelected, deleteTask, onHandlerModalDelete, modalVisible} = prop
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