import { useEffect, useRef, useState } from "react"
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { BLACK, PINK, WHITE } from "../constants/color"
import { STYLES, width } from "../dimension/Dimension"
import { ROBOTO_ITALIC, ROBOTO_MEDIUMITALIC, ROBOTO_REGULAR } from "../constants/fontpath"
import { MyStatusBar } from "./MyStatusBar";
import { COSMICBOLD } from "../../constants/fontPath"
export const InputTxt = ({
    placeholder = "",
    image = "",
    type = "",
    inputdata = "",
    width = "80%",
    setInputdata = {},
    keyboardType = 'default',
    editable = true,
    borderColor = "",
    maxLength = 100,
    onTouch = () => { },
}) => {
    const [tap, setTap] = useState(false);
    return (
        <Pressable
            onPress={onTouch}
            style={{
                ...Styles.container,
                borderWidth: tap ? 2 : 1,
                borderColor: borderColor,
            }}
        >
            {
                (tap || inputdata != "") &&
                <View style={{ ...Styles.lablebackgroud }} >
                    <Text allowFontScaling={false} style={{ ...Styles.lable }}>{placeholder}</Text>
                </View>
            }
            <View style={{ flexDirection: 'row', flex: 1 }}>
                {
                    image != '' &&
                    <View style={{ ...Styles.imgContainer }}>
                        <Image
                            style={{
                                height: 38,
                                width: 38
                            }}
                            source={image}
                        />
                    </View>
                }
                <TextInput
                    secureTextEntry={type === 'password' ? true : false}
                    style={{ ...Styles.txtinput }}
                    onChangeText={(res) => {
                        console.log(res);
                        if (type == 'name') {
                            if (res[0] != " " && (/[a-zA-Z" "]/.test(res[res.length - 1]))) {
                                setInputdata(res);
                            } else if ((/[a-zA-Z" "]/.test(res[res.length - 1]))) {
                                console.log("Hello", res)
                                setInputdata(res.slice(0, 0));
                            } else {
                                setInputdata('');
                            }
                        } else if (type == 'number') {
                            if (res[0] != 0 && (/[0-9]/.test(res[res.length - 1]))) {
                                setInputdata(res);
                            } else if ((/[0-9]/.test(res[res.length - 1]))) {
                                setInputdata(res.slice(0, 0));
                            } else {
                                setInputdata('');
                            }
                        } else if (type == 'email') {
                            if ((/[a-zA-Z@0-9_.-]/.test(res[res.length - 1]))) {
                                setInputdata(res);
                            } else {
                                setInputdata('');
                            }
                        } else if (type == 'password') {
                            if ((/[a-zA-Z@0-9]/.test(res[res.length - 1]))) {
                                setInputdata(res);
                            } else {
                                setInputdata('');
                            }
                        } else {
                            // console.log('others')
                            setInputdata(res);
                        }
                    }}
                    value={inputdata}
                    editable={editable}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    placeholder={tap ? "" : placeholder}
                    width={width}
                    placeholderTextColor={'gray'}
                    onFocus={() => { setTap(true) }}
                    onEndEditing={() => { setTap(false) }}
                />
            </View>
        </Pressable>
    )
}
const Styles = StyleSheet.create({
    container: {
        height: 60,
        width: "80%",//width * 0.8,
        backgroundColor: "white",
        margin: 10,
        borderRadius: 15,
        borderWidth: 1,
        elevation: 5
    }, lable: {
        color: "black",//BLACK,
        fontFamily: COSMICBOLD,
        // fontFamily:ROBOTO_MEDIUMITALIC
    }, lablebackgroud: {
        backgroundColor: "white",
        top: -10,
        left: 10,
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingHorizontal: 5,
        position: 'absolute',
        borderRadius: 10
    }, imgContainer: {
        marginLeft: 10,
        justifyContent: "center",
        alignItems: 'center',
    }, txtinput: {
        flex: 1,
        marginLeft: 10,
        fontFamily: COSMICBOLD,
        color: "black"
        // fontFamily:ROBOTO_REGULAR
    }
})