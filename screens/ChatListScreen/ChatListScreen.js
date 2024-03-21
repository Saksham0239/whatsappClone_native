import React from 'react';
import { View,Text,Button,StyleSheet } from 'react-native';
import { NavigationPathConst as Nav } from '../../utils/CommonUtils';
import { useNavigation } from '@react-navigation/native';

const ChatListScreen = () =>{
    const  {navigate}  = useNavigation();
    return (
        <View style={styles.container}>
            <Button title="Go to settings" onPress={()=>navigate(Nav?.ChatSettingsScreen)}/>
            <Text>Chat list screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})

export default ChatListScreen;