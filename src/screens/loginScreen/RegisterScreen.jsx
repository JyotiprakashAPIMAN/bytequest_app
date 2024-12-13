import React, { useCallback, useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { BRANDCOLOR, WHITE } from "../../constants/color";
import { InputTxt } from "../../component/common/TextInput";
import { Custombtn } from "../../component/common/CustomBtn";
import { BOY, CALENDER, EMAIL, PHONE } from "../../constants/imagePath";
import { COMICS, COSMICBOLD } from "../../constants/fontPath";
import DatePicker from "react-native-date-picker";
import dayjs from 'dayjs';
import { useFocusEffect } from "@react-navigation/native";
import { OtpInput } from "../../component/otpScreenComponent/OtpInput";
import { ToastMessage } from "../../component/toastMessageComponent/ToastMessage";

export default RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [dob, setDob] = useState("");
    const [isEditable, setIsEditable] = useState(true);
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState("");
    const [isOtpEntered, setIsOtpEntered] = useState(false);
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState(""); // To manage success or error type
    const onPressLogin = () => {
        navigation.goBack();
    }

    const handleDateConfirm = (selectedDate) => {
        const formattedDate = dayjs(selectedDate).format('DD/MM/YYYY');
        setDob(formattedDate);
        setDatePickerVisible(false);
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
            <View style={styles.headerContainer}>
                <View style={{
                    flex: 1,
                    backgroundColor: WHITE,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <View style={{
                        height: "90%",
                        width: "90%",
                        backgroundColor: WHITE,
                        borderRadius: 20,
                        // elevation: 10,
                        // alignItems: "center"
                        marginLeft: 20
                    }}>
                        <View style={{ height: 80 }} />
                        <InputTxt
                            placeholder="Enter Your Name"
                            image={BOY}
                            inputdata={name}
                            setInputdata={setName}
                            keyboardType="default"
                            editable={true}
                            type="default"
                            borderColor="black"
                        />
                        <View style={{ height: 10 }} />
                        <InputTxt
                            placeholder="Enter Your Email"
                            image={EMAIL}
                            inputdata={email}
                            setInputdata={setEmail}
                            keyboardType="default"
                            editable={true}
                            type="default"
                            borderColor="black"
                        />
                        <View style={{ height: 10 }} />
                        <InputTxt
                            placeholder="Phone Number"
                            image={PHONE}
                            inputdata={number}
                            setInputdata={setNumber}
                            keyboardType="default"
                            editable={true}
                            type="default"
                            borderColor="black"
                        />
                        <View style={{ height: 10 }} />
                        <InputTxt
                            placeholder="D O B"
                            image={CALENDER}
                            inputdata={dob}
                            setInputdata={setDob}
                            keyboardType="default"
                            width={"100%"}
                            editable={false}
                            type="default"
                            borderColor="black"
                            onTouch={() => {
                                if (isEditable) setDatePickerVisible(true);
                            }}
                        />
                        <View style={{ height: 110 }} />
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
                                    title="Register"
                                    color={WHITE}
                                    fontFamily={COSMICBOLD}
                                />
                            )}
                        </View>
                        <View style={{ height: 90 }} />
                        <View style={{ marginLeft: 70 }}>
                            <Text style={{
                                color: "black",
                                fontSize: 16,
                                fontFamily: COMICS
                            }}>Don't have account? <Text
                                onPress={onPressLogin}
                                style={{
                                    color: BRANDCOLOR,
                                    fontSize: 18,
                                    fontFamily: COSMICBOLD
                                }}>
                                    Login here</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </View >
            <DatePicker
                modal
                open={datePickerVisible}
                date={date}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={() => setDatePickerVisible(false)}
                title="Select Date of Birth"
                confirmText="Confirm"
                cancelText="Cancle"
            />
            <ToastMessage
                message={toastMessage}
                visible={toastVisible}
                setVisible={({ visible }) => setToastVisible(visible)}
                backgroundColor={toastType === "success" ? "green" : "red"}
                textColor={WHITE}
                position="buttom"
                type={toastType}
            />
        </>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        backgroundColor: WHITE,
    }, height: {
        height: 40
    }, mainContainer: {
        height: "80%",
        width: "90%",
        backgroundColor: WHITE,
        borderRadius: 20,
        elevation: 10,
    }, subMainContainer: {
        flex: 1 / 3,
        flexDirection: "row",
        padding: 10,
    },
})

