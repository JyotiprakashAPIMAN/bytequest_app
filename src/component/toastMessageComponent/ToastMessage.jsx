import React, { useEffect, useRef } from "react";
import {Image, Text, Animated, StyleSheet } from "react-native";


export const ToastMessage = ({
    image = "",
    message = "",
    backgroundColor = "#e0e0e0",
    visible = false,
    setVisible,
    type = "",
    position = "bottom",
    textColor = "#000000",
    duration = 3000
}) => {
    const initialPosition = position == "top" ? -300 : 300;
    const slideAnim = useRef(new Animated.Value(initialPosition)).current; // Initial value for sliding
    console.log(visible)
    const slideIn = () => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const slideOut = () => {
        Animated.timing(slideAnim, {
            toValue: initialPosition,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        if (visible) {
            slideIn();
            const timer = setTimeout(() => {
                slideOut();
                setTimeout(() => {
                    setVisible({ visible: false, message: "" });
                }, 500); // Wait for the slide out animation to finish before setting visible to false
            }, duration);

            return () => clearTimeout(timer); // Clear timeout if component unmounts or visible changes
        }
    }, [visible]);

    return (
        <>
            {visible && (
                <Animated.View
                    style={{
                        ...styles.toastContainer,
                        backgroundColor: backgroundColor,
                        borderColor: (type == "success" ? "green" : (type == "error" ? "red" : "")),
                        borderBottomWidth: (((type != "") && (type == "success" || type == "error")) ? 3 : 0),
                        ...(position == "top" ? { top: 50 } : { bottom: 50 }),
                        transform: [{ translateY: slideAnim }],
                    }}>
                    {image !== "" && <Image source={image} style={styles.toastIcon} />}
                    <Text style={{ ...styles.toastText, color: textColor }}>{message}</Text>
                </Animated.View>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    toastContainer: {
        minHeight: 30,
        maxWidth: "80%",
        position: "absolute",
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignContent: "center",
        alignSelf: "center",
        elevation: 1,
    }, toastIcon: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    }, toastText: {
        marginHorizontal: 10,
        fontSize: 14,
    }
})