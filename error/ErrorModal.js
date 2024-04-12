import { Modal, Text, Button, StyleSheet, View } from "react-native";
import { Color } from "../utils/CommonUtils";
const ErrorModal = ({ isVisible, payload, modalCallback }) => {
    console.log(isVisible, 'isVisible');
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible} style={modalStyles?.modalContainer}
        >
            <View style={modalStyles.centeredView}>
                <View style={modalStyles.modalView}>
                    <Text>{payload?.title}</Text>
                    <Text>{payload?.subtitle}</Text>
                    <Button title="close" onPress={() => modalCallback('close')} />
                </View>
            </View>
        </Modal>
    );
}

export default ErrorModal;

const modalStyles = StyleSheet.create({
    modalContainer: {

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView:{
        backgroundColor:"white",
        padding:20,
        borderRadius:20,
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
})

