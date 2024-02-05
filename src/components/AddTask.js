import { StyleSheet, TextInput, Button, View } from 'react-native'


const AddTask = ({taskTitle, 
                onHandlerArtist, 
                taskDescripcion, 
                onHandlerSong, 
                taskAlbum, 
                onHandlerAlbum, 
                taskYear, 
                onHandlerYear, 
                addTask}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput value={taskTitle} onChangeText={onHandlerArtist} placeholder = 'Artist' style={styles.input}/>
            <TextInput value={taskDescripcion} onChangeText={onHandlerSong} placeholder = 'Song' style={styles.input}/>
            <TextInput value={taskAlbum} onChangeText={onHandlerAlbum} placeholder = 'Album' style={styles.input}/>
            <TextInput value={taskYear} onChangeText={onHandlerYear} placeholder = 'Year' style={styles.input}/>
            <Button color="#3921F5" title = 'ADD' onPress={addTask}/>
        </View>

    )
}

export default AddTask

const styles = StyleSheet.create({
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
        }


})