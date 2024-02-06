import { StyleSheet, TextInput,View } from 'react-native'
import PrimaryButton from './PrimaryButton'


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
        <View style={styles.container}>
            <TextInput 
            value={taskTitle} 
            onChangeText={onHandlerArtist}
            placeholder = 'Artist' 
            placeholderTextColor= "#5ac62b"
            maxLength={25}
            style={styles.input}/>
            <TextInput 
            value={taskDescripcion} 
            onChangeText={onHandlerSong} 
            placeholder = 'Song' 
            placeholderTextColor= "#5ac62b"
            maxLength={100}
            style={styles.input}/>
            <TextInput 
            value={taskAlbum} 
            onChangeText={onHandlerAlbum} 
            placeholder = 'Album' 
            placeholderTextColor= "#5ac62b"
            maxLength={50}
            style={styles.input}/>
            <TextInput 
            value={taskYear} 
            onChangeText={onHandlerYear} 
            placeholder = 'Year' 
            placeholderTextColor= "#5ac62b"
            maxLength={4}
            style={styles.input}/>
            <PrimaryButton title="ADD" onPress={addTask}/>
            
        </View>

    )
}

export default AddTask

const styles = StyleSheet.create({
    container:{
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 10
            },

    input:{
        width: "100%",
        borderWidth:2,
        borderColor: "#5ac62b",
        margin:10, 
        paddingVertical:5, 
        paddingHorizontal:10,
        fontSize: 20,
        color: "white",
        borderRadius: 5,
        textAlignVertical: "top"
        
        }


})