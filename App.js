import { useState } from 'react'
import {View, Text, StyleSheet, Dimensions, Keyboard} from 'react-native'
import uuid from 'react-native-uuid';
import ModalDeleteTask from './src/components/ModalDeleteTask';
import AddTask from './src/components/AddTask';
import ListTasks from './src/components/ListTasks';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [taskSelected, setTaskSelected] = useState({})
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescripcion, setTaskDescription] = useState("")
  const [taskAlbum, setTaskAlbum] = useState("")
  const [taskYear, setTaskYear] = useState("")
  const screenWidth = Dimensions.get('window').width
  const [tasks, setTasks] = useState([])

  const addTask = () =>{

    const newTask = {
      id: uuid.v4(),
      completed: false,
      title: taskTitle,
      description: taskDescripcion,
 
    }
    setTasks([...tasks, newTask])
    setTaskTitle("")
    setTaskDescription("")
    setTaskAlbum("")
    setTaskYear("")
    Keyboard.dismiss()
  }

  const onHandlerArtist = (t) =>{
    setTaskTitle(t)

  }
  
  const onHandlerSong = (t) => {
    setTaskDescription(t)

  }

  const onHandlerAlbum = (t) => {
    setTaskAlbum(t)

  }

  const onHandlerYear = (t) => {
    setTaskYear(t)

  }

  const onHandlerModalDelete = (task) => {
    setTaskSelected(task)
    setModalVisible(!modalVisible) 
  }

  const deleteTask = () => {
    setTasks(tasks.filter(task => task.id != taskSelected.id))
    setModalVisible(!modalVisible)
  }

  const updateTaskCompleted = (id) => {
    setTasks(tasks.map(task =>{
      if (task.id === id) return {...task,...{completed:!task.completed}}
      return task
    }))
  }

  return (
    <View style={styles.container}>
      <Text>PLAYLIST</Text>
      <AddTask taskTitle = {taskTitle} 
                onHandlerArtist = {onHandlerArtist}
                taskDescripcion = {taskDescripcion} 
                onHandlerSong = {onHandlerSong}
                taskAlbum = {taskAlbum} 
                onHandlerAlbum = {onHandlerAlbum}
                taskYear = {taskYear} 
                onHandlerYear = {onHandlerYear} 
                addTask = {addTask}
        />
        <ListTasks 
          tasks = {tasks} 
          onHandlerModalDelete={onHandlerModalDelete}
          screenWidth={screenWidth}
          updateTaskCompleted={updateTaskCompleted}
          />

        <ModalDeleteTask
          modalVisible={modalVisible}
          taskSelected={taskSelected}
          deleteTask={deleteTask}
          onHandlerModalDelete={onHandlerModalDelete}
        />

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#F2E4F6", 
    flex:1, 
    paddingTop:30
  },
  
  
})