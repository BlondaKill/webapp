import { useState } from 'react'
import {View, Text, TextInput, Button, StyleSheet, FlatList, Modal} from 'react-native'
import uuid from 'react-native-uuid';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [taskSelected, setTaskSelected] = useState({})
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescripcion, setTaskDescription] = useState("")
  const [taskAlbum, setTaskAlbum] = useState("")
  const [taskYear, setTaskYear] = useState("")
    
  const [tasks, setTasks] = useState([])

  const addTask = () =>{

    const newTask = {
      id: uuid.v4(),
      title: taskTitle,
      description: taskDescripcion,
 
    }
    setTasks([...tasks, newTask])
    console.log(tasks)
    setTaskTitle("")
    setTaskDescription("")
    setTaskAlbum("")
    setTaskYear("")
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
    setTasks(tasks.filter(task => task.id != idSelected))

  }

  return (
    <View style={styles.container}>
      <Text>PLAYLIST</Text>


      <View style={styles.inputContainer}>
        <TextInput value={taskTitle} onChangeText={onHandlerArtist} placeholder = 'Artist' style={styles.input}/>
        <TextInput value={taskDescripcion} onChangeText={onHandlerSong} placeholder = 'Song' style={styles.input}/>
        <TextInput value={taskAlbum} onChangeText={onHandlerAlbum} placeholder = 'Album' style={styles.input}/>
        <TextInput value={taskYear} onChangeText={onHandlerYear} placeholder = 'Year' style={styles.input}/>



        <Button color="#3921F5" title = 'ADD' onPress={addTask}/>
      </View>


      <View style={styles.tasksContainer}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
                            <View style={styles.taskCard}>
                              <Text style={styles.text}> {item.title} </Text>
                              <Button title= 'DEL' onPress={() => onHandlerModalDelete(item.id)}/>
                              </View>

    )}  
    />
    <Modal
      visible={modalVisible}    
    >
      <View>
        <Text>Delete?</Text>
        <Button title='si' onPress={()=> {
          deleteTask()
          setModalVisible(false)
          }}/>
        <Button title='no' onPress={()=> setModalVisible(false)}/>
      </View>
    </Modal>
    </View>

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
  inputContainer:{
    backgroundColor: "#8F2FF5",
    alignItems: "center",
    justifyContent: "space-around"

  },
  input:{
    width: 250,
    borderBottomWidth:2,
    borderColor: "white",
    margin:10, 
    paddingVertical:5, 
    paddingHorizontal:10
  },
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