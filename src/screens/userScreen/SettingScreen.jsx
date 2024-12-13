import React from "react";
import { CustomHeader } from "../../component/common/CustomHeader";
import { Image, Text, View } from "react-native";
import { BLACK, WHITE } from "../../constants/color";
import { COMICS, COSMICBOLD } from "../../constants/fontPath";
import { ADS, FAQ, LOCK, SECUREDATA, USER } from "../../constants/imagePath";

export default SettingScreen = ({ navigation }) => {
    const onPressAccount = () => {
        navigation.navigate("Account");
    }
    const onPressSignIn = () => {
        navigation.navigate("SignIn");
    }
    const onPressDataPrivacy = () => {
        navigation.navigate("DataPrivacy");
    }
    const onPressMain = () => {
        navigation.navigate("Home");
    }
    return (
        <>
            <CustomHeader
                leftHeaderBtn={true}
            />
            <View style={{
                flex: 1,
                backgroundColor: WHITE
            }}>
                <View style={{
                    flexDirection: "row"
                }}>
                    <View style={{
                        flex: 1 / 3,
                        backgroundColor: WHITE,
                        alignItems: "center",
                        marginLeft: 10
                    }}>
                        <View style={{ height: 20 }} />
                        <Image source={USER}
                            style={{
                                height: 34,
                                width: 34,
                                marginBottom: 30
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE,
                        marginRight: 110,
                        marginTop: 20
                    }}>
                        <Text onPress={onPressAccount}
                            style={{
                                fontSize: 22,
                                fontFamily: COSMICBOLD,
                                color: BLACK
                            }}>Account Prefference</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: "row"
                }}>
                    <View style={{
                        flex: 1 / 3,
                        backgroundColor: WHITE,
                        alignItems: "center",
                        marginLeft: 10
                    }}>
                        <View style={{ height: 20 }} />
                        <Image source={LOCK}
                            style={{
                                height: 34,
                                width: 34,
                                marginBottom: 30
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE,
                        marginRight: 110,
                        marginTop: 20
                    }}>
                        <Text onPress={onPressSignIn}
                            style={{
                                fontSize: 22,
                                fontFamily: COSMICBOLD,
                                color: BLACK
                            }}>Sign in and Security</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: "row"
                }}>
                    <View style={{
                        flex: 1 / 3,
                        backgroundColor: WHITE,
                        alignItems: "center",
                        marginLeft: 10
                    }}>
                        <View style={{ height: 20 }} />
                        <Image source={FAQ}
                            style={{
                                height: 34,
                                width: 34,
                                marginBottom: 30
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE,
                        marginRight: 110,
                        marginTop: 20
                    }}>
                        <Text style={{
                            fontSize: 22,
                            fontFamily: COSMICBOLD,
                            color: BLACK
                        }}>FAQ's</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: "row"
                }}>
                    <View style={{
                        flex: 1 / 3,
                        backgroundColor: WHITE,
                        alignItems: "center",
                        marginLeft: 10
                    }}>
                        <View style={{ height: 20 }} />
                        <Image source={SECUREDATA}
                            style={{
                                height: 34,
                                width: 34,
                                marginBottom: 30
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE,
                        marginRight: 110,
                        marginTop: 20
                    }}>
                        <Text onPress={onPressDataPrivacy}
                            style={{
                                fontSize: 22,
                                fontFamily: COSMICBOLD,
                                color: BLACK
                            }}>Data and Privacy</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: "row"
                }}>
                    <View style={{
                        flex: 1 / 3,
                        backgroundColor: WHITE,
                        alignItems: "center",
                        marginLeft: 10
                    }}>
                        <View style={{ height: 20 }} />
                        <Image source={ADS}
                            style={{
                                height: 34,
                                width: 34,
                                marginBottom: 30
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 2 / 3,
                        backgroundColor: WHITE,
                        marginRight: 110,
                        marginTop: 20
                    }}>
                        <Text style={{
                            fontSize: 22,
                            fontFamily: COSMICBOLD,
                            color: BLACK
                        }}>Advertising Data</Text>
                    </View>
                </View>
                <View style={{
                    height: 10,
                    paddingHorizontal: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "grey",
                }} />
                <View style={{ height: 70 }} />
                <View style={{ paddingLeft: 60 }}>
                    <Text style={{
                        fontSize: 22,
                        fontFamily: COMICS,
                        color: BLACK
                    }}>Help</Text>
                </View>
                <View style={{ height: 40 }} />
                <View style={{ paddingLeft: 60 }}>
                    <Text style={{
                        fontSize: 22,
                        fontFamily: COMICS,
                        color: BLACK
                    }}>free API's</Text>
                </View>
                <View style={{ height: 40 }} />
                <View style={{ paddingLeft: 60 }}>
                    <Text style={{
                        fontSize: 22,
                        fontFamily: COMICS,
                        color: BLACK
                    }}>User Agreement</Text>
                </View>
                <View style={{ height: 40 }} />
                <View style={{ paddingLeft: 60 }}>
                    <Text onPress={onPressMain}
                        style={{
                            fontSize: 22,
                            fontFamily: COMICS,
                            color: BLACK
                        }}>Sign Out</Text>
                </View>
            </View>
        </>
    )
}