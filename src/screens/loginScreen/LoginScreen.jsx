import React, { useCallback, useState } from "react";
import { StatusBar, Text, TextInput, View } from "react-native";
import { BLACK, BRANDCOLOR, WHITE } from "../../constants/color";
import { InputTxt } from "../../component/common/TextInput";
import { Custombtn } from "../../component/common/CustomBtn";
import { EMAIL } from "../../constants/imagePath";
import { useFocusEffect } from "@react-navigation/native";
import { OtpInput } from "../../component/otpScreenComponent/OtpInput";
import { ToastMessage } from "../../component/toastMessageComponent/ToastMessage";
import { COMICS, COSMICBOLD } from "../../constants/fontPath";

export default LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState("");
    const [isOtpEntered, setIsOtpEntered] = useState(false);
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState(""); // To manage success or error type

    const onPressLogin = () => {
        navigation.navigate("Main");
    }
    const onPressRegister = () => {
        navigation.navigate("Register")
    };


    const onSendOtp = () => {
        if (email) {
            setIsOtpSent(true);
            setToastMessage(`OTP has been sent to your email: ${email}`);
            setToastType("success"); // Set type to success
            setToastVisible(true);
        } else {
            setToastMessage("Please enter your email.");
            setToastType("error"); // Set type to error
            setToastVisible(true);
        }
    }

    const handleOtpChange = (otpValue) => {
        setOtp(otpValue);
        if (otpValue.length === 4) { // Assuming OTP is 6 digits
            setIsOtpEntered(true);
        } else {
            setIsOtpEntered(false);
        }
    }

    useFocusEffect(
        useCallback(() => {
            setEmail("");
            setOtp("");
            setIsOtpSent(false);
            setIsOtpEntered(false);
        }, [])
    )

    return (
        <>
            <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
            <View style={{
                flex: 1,
                backgroundColor: WHITE,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <View style={{
                    height: "70%",
                    width: "80%",
                    backgroundColor: WHITE,
                    borderRadius: 20,
                }}>
                    <View style={{
                        flex: 1 / 3,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <InputTxt
                            placeholder="Enter Your Email"
                            image={EMAIL}
                            inputdata={email}
                            setInputdata={setEmail}
                            keyboardType="default"
                            editable={true}
                            type="email"
                            borderColor="black"
                        // onTouch={() => { console.log("first") }}
                        />
                    </View>
                    <View style={{
                        flex: 1 / 3,
                        alignItems: "center"
                    }}>
                        {!isOtpSent && (
                            <Custombtn
                                onPress={onSendOtp}
                                title={"Send OTP"}
                                color={WHITE}
                                fontFamily={COSMICBOLD} />
                        )}
                        {isOtpSent && (
                            <OtpInput onOtpChange={handleOtpChange} />
                        )}
                        {isOtpEntered && (
                            <Custombtn
                                onPress={onPressLogin}
                                title="Login"
                                color={WHITE}
                                fontFamily={COSMICBOLD}
                            />
                        )}
                    </View>
                    <View style={{
                        flex: 1 / 3,
                        alignItems: "center"
                    }}>
                        <View style={{ height: 60 }} />
                        <Text style={{
                            color: "black",
                            fontSize: 16,
                            fontFamily: COMICS
                        }}>Don't have account? <Text
                            onPress={onPressRegister}
                            style={{
                                color: BRANDCOLOR,
                                fontSize: 18,
                                fontFamily: COSMICBOLD
                            }}>
                                Register here</Text>
                        </Text>
                    </View>
                </View>
                <ToastMessage
                    message={toastMessage}
                    visible={toastVisible}
                    setVisible={({ visible }) => setToastVisible(visible)}
                    backgroundColor={toastType === "success" ? "green" : "red"}
                    textColor={WHITE}
                    position="buttom"
                    type={toastType}
                />
            </View>
        </>
    )
}