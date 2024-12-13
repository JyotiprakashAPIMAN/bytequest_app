import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { COMICS, COSMICBOLD } from "../../constants/fontPath";

export const AlertBtn = ({
    visible = {},
    textRight = "",
    textLeft = "",
    title = "",
    message = "",
    showRightButton = false,
    showLeftButton = false,
    backgroundColor = "",
    color = "",
    fontWeight = "",
    fontFamily = "",
    fontSize = "",
    onRequestClose = () => {
        console.log("Modal Closed");
    },

    onPressRight = () => {
        console.log("Modal Open");
    },
    onPressLeft = () => {
        console.log("Modal Closed");
    }
}) => {
    return (
        <>
            <Modal
                transparent={true}
                animationType="slide"
                visible={visible}
                onRequestClose={onRequestClose}
            >

                <View style={styles.modalOverlay}>

                    <View style={styles.modalContent}>

                        <Text style={styles.title}>{title}</Text>

                        <Text style={styles.message}>{message}</Text>

                        <View style={styles.btnView}>

                            {showLeftButton && (
                                <Pressable
                                    style={{ ...styles.button, backgroundColor: backgroundColor }}
                                    onPress={onPressLeft}
                                >
                                    <Text style={{
                                        ...styles.buttonText,
                                        color: color,
                                        fontWeight: fontWeight,
                                        fontFamily: fontFamily, fontSize: fontSize
                                    }}
                                    >

                                        {textLeft}
                                    </Text>

                                </Pressable>
                            )}

                            {showRightButton && (
                                <Pressable
                                    style={{ ...styles.button, backgroundColor: backgroundColor }}
                                    onPress={onPressRight}
                                >
                                    <Text style={{
                                        ...styles.buttonText,
                                        color: color,
                                        fontWeight: fontWeight,
                                        fontFamily: fontFamily, fontSize: fontSize
                                    }}
                                    >

                                        {textRight}
                                    </Text>

                                </Pressable>
                            )}
                        </View>
                    </View>
                </View>

            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }, modalContent: {
        width: '80%',
        // height:'20%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    }, title: {
        fontSize: 24,
        // fontWeight: 'bold',
        marginBottom: 10,
        color: "black",
        fontFamily: COSMICBOLD
    }, message: {
        fontSize: 16,
        marginBottom: 20,
        color: "black",
        fontFamily: COMICS
    }, btnView: {
        alignItems: "center",
        flexDirection: "row",
        // marginRight: 80,
        gap: 150
    }, buttonText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
    },button:{
        width:'28%'
    }
})
