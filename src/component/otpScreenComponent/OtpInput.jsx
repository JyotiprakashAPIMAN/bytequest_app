import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { BLACK, BRANDCOLOR, GREY, WHITE } from "../../constants/color";
import { COSMICBOLD } from "../../constants/fontPath";

export const OtpInput = ({ onOtpChange }) => {
    const [otp, setotp] = useState(['', '', '', '']);
    const [focusedInput, setFocusedInput] = useState(null);
    const inputRefs = useRef([]);

    useEffect(() => {
        onOtpChange(otp.join(''));
    }, [otp]);

    const handleChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setotp(newOtp);

        if (value && index < 3) {
            inputRefs.current[index + 1].focus();
        }
    }

    const handleKeyPress = (event, index) => {
        if (event.nativeEvent.key === 'Backspace' && otp[index] === '') {
            if (index > 0) {
                inputRefs.current[index - 1].focus();
                const newOtp = [...otp];
                newOtp[index - 1] = '';
                setotp(newOtp);
            }
        }
    }

    const handleFocus = (index) => {
        setFocusedInput(index);
    }

    const handleBlur = () => {
        setFocusedInput(null);
    }

    return (
        <>
            <View style={styles.container}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        value={digit}
                        onChangeText={(value) => handleChange(value, index)}
                        onKeyPress={(event) => handleKeyPress(event, index)}
                        onFocus={() => handleFocus(index)}
                        onBlur={handleBlur}
                        style={[
                            styles.input,
                            focusedInput === index && styles.inputFocused,
                        ]}
                        keyboardType="numeric"
                        maxLength={1}
                        ref={(el) => (inputRefs.current[index] = el)}
                    />
                ))}
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
    },
    input: {
        width: 50,
        height: 50,
        borderWidth: 1,
        backgroundColor: WHITE,
        textAlign: 'center',
        fontSize: 18,
        marginHorizontal: 5,
        color: BLACK,
        borderRadius: 4,
        elevation: 5,
        backgroundColor: WHITE,
        fontFamily: COSMICBOLD
    },
    inputFocused: {
        borderWidth: 2,
        borderColor: BLACK
    }
})