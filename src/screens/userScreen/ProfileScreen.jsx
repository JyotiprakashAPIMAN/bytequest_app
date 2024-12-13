import React, { useEffect, useState } from "react";
import { Alert, BackHandler, Image, ImageBackground, Modal, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { BLACK, WHITE } from "../../constants/color";
import { BOY2, PLUS2 } from "../../constants/imagePath";
import { COMICS, COSMICBOLD } from "../../constants/fontPath";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { TERMS } from "../../assets/data/term";
import { Custombtn } from "../../component/common/CustomBtn";
import { PRIVACYPOLICY } from "../../assets/data/privacyPolicy";
import { launchCamera } from "react-native-image-picker";
import { check, PERMISSIONS, request, RESULTS } from "react-native-permissions";

export default ProfileScreen = ({ navigation }) => {
    const [visibleModal, setVisibleModal] = useState(false);
    const [vModal, setVModal] = useState(false);
    const [imageUri, setImageUri] = useState(null);
    const onPressSetting = () => {
        navigation.navigate("Setting")
    }

    const checkAndRequestCameraPermission = async () => {
        const cameraPermission = await check(PERMISSIONS.ANDROID.CAMERA);

        if (cameraPermission !== RESULTS.GRANTED) {
            const permissionRequestResult = await request(PERMISSIONS.ANDROID.CAMERA);
            if (permissionRequestResult !== RESULTS.GRANTED) {
                Alert.alert('Camera Permission', 'Camera permission not granted');
                return false;
            }
        }
        return true;
    };

    const openCamera = async () => {
        const permissionGranted = await checkAndRequestCameraPermission();
        if (!permissionGranted) return;

        // Launch the camera to capture an image
        launchCamera(
            {
                mediaType: 'photo',
                cameraType: 'back',
                saveToPhotos: true,
            },
            response => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.errorCode) {
                    console.log('ImagePicker Error: ', response.errorMessage);
                } else {
                    const uri = response.assets[0]?.uri;
                    setImageUri(uri);
                }
            }
        );
    };

    useEffect(() => {
        const backAction = () => {
            navigation.goBack();
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);


    return (
        <>
            <GestureHandlerRootView>
                <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
                <View style={{
                    flex: 1,
                    backgroundColor: WHITE
                }}>
                    <View style={{
                        height: 350,
                        width: "100%",
                        backgroundColor: WHITE,
                        padding: 10,
                        flexDirection: "row"
                    }}>
                        <View style={{
                            flex: 1 / 2,
                            justifyContent: "center",
                        }}>
                            <ImageBackground
                                source={imageUri ? { uri: imageUri } : BOY2}
                                resizeMode="cover"
                                style={{
                                    height: 140,
                                    width: 140,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                <TouchableOpacity onPress={openCamera}>
                                    <Image
                                        source={imageUri ? null : PLUS2}
                                        style={{
                                            height: 30,
                                            width: 30,
                                        }}
                                    />
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                        <View style={{
                            flex: 1 / 2,
                            // padding: 10,
                            justifyContent: "center",
                            // alignItems: "center"
                        }}>
                            <View style={{ height: 120 }} />
                            <Text style={{
                                color: BLACK,
                                fontSize: 20,
                                fontFamily: COSMICBOLD
                            }}>Name:</Text>
                            <Text style={{
                                color: BLACK,
                                fontSize: 20,
                                fontFamily: COSMICBOLD
                            }}>Email:</Text>
                            <Text style={{
                                color: BLACK,
                                fontSize: 20,
                                fontFamily: COSMICBOLD
                            }}>Age:</Text>
                            <Text style={{
                                color: BLACK,
                                fontSize: 20,
                                fontFamily: COSMICBOLD
                            }}>Number:</Text>
                            <View style={{ height: 60 }} />
                            <Custombtn
                                title="Edit profile"
                                color={WHITE}
                                fontfamily={COSMICBOLD}
                            />
                        </View>
                    </View>
                    <View style={{
                        height: 700,
                        width: "100%",
                        backgroundColor: WHITE,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <View style={{ height: 140 }} />
                        <View style={{
                            height: 40,
                            alignItems: "center"
                        }}>
                            <Text onPress={onPressSetting}
                                style={{
                                    color: BLACK,
                                    fontSize: 18,
                                    fontFamily: COSMICBOLD
                                }}>Setting</Text>
                        </View>
                        <View style={{
                            height: 40,
                            alignItems: "center"
                        }}>
                            <Text onPress={() => {
                                setVModal(true);
                            }}
                                style={{
                                    color: BLACK,
                                    fontSize: 18,
                                    fontFamily: COSMICBOLD
                                }}>Privacy & Policy</Text>
                        </View>
                        <View style={{
                            height: 50,
                            alignItems: "center"
                        }}>
                            <Text onPress={() => {
                                setVisibleModal(true);
                            }}
                                style={{
                                    color: BLACK,
                                    fontSize: 18,
                                    fontFamily: COSMICBOLD
                                }}>Terms & Conditions</Text>
                        </View>
                    </View>
                </View>
                <Modal visible={visibleModal}
                    transparent={true}
                    animationType="slide">
                    <View style={{
                        flex: 1,
                        backgroundColor: WHITE,
                        alignItems: "center",
                    }}>
                        <View style={{ height: 30 }} />
                        <View style={{
                            flex: 1,
                            height: 50,
                            width: "80%",
                            padding: 10,
                            alignItems: "center"
                        }}>
                            <View style={{ height: 10 }} />
                            <Text style={{
                                color: BLACK,
                                fontSize: 23,
                                fontFamily: COSMICBOLD
                            }}>APIMAN Terms & Conditions</Text>
                        </View>
                        <View style={{
                            height: "82%",
                            width: "100%",
                            backgroundColor: WHITE,
                            borderRadius: 20,
                            // elevation: 10,
                        }}>
                            <FlatList
                                data={TERMS}
                                renderItem={({ item }) => {
                                    // console.log(item);
                                    return (
                                        <View style={{
                                            width: "10%",
                                            // alignItems: "center"
                                        }}>
                                            <View style={{
                                                height: 200,
                                                width: 420,
                                                backgroundColor: WHITE,
                                                // elevation:10,
                                                // borderRadius: 10,
                                                // marginVertical: 10,
                                                justifyContent: "center",
                                                paddingHorizontal: 10,

                                            }}>
                                                <Text style={{
                                                    fontSize: 22,
                                                    fontFamily: COSMICBOLD,
                                                    color: BLACK
                                                }}>{item.name}</Text>
                                                <Text style={{
                                                    fontSize: 16,
                                                    fontFamily: COMICS,
                                                    color: BLACK
                                                }}>{item.desc}</Text>
                                                <Text style={{
                                                    fontSize: 16,
                                                    fontFamily: COMICS,
                                                    color: BLACK
                                                }}>{item.head}</Text>
                                                <Text style={{
                                                    fontSize: 16,
                                                    fontFamily: COMICS,
                                                    color: BLACK
                                                }}>{item.add}</Text>
                                                <Text style={{
                                                    fontSize: 16,
                                                    fontFamily: COMICS,
                                                    color: BLACK
                                                }}>{item.email}</Text>
                                                <Text style={{
                                                    fontSize: 16,
                                                    fontFamily: COMICS,
                                                    color: BLACK
                                                }}>{item.phone}</Text>
                                            </View>
                                        </View>
                                    )
                                }}
                            />
                        </View>
                        <View style={{
                            marginBottom: 10,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Custombtn
                                title={"Close"}
                                color={WHITE}
                                onPress={() => {
                                    setVisibleModal(false);
                                }}
                            />
                        </View>
                    </View>
                </Modal>
                <Modal visible={vModal}
                    transparent={true}
                    animationType="slide">
                    <View style={{
                        flex: 1,
                        backgroundColor: WHITE,
                        alignItems: "center",
                    }}>
                        <View style={{ height: 30 }} />
                        <View style={{
                            flex: 1,
                            height: 50,
                            width: "80%",
                            padding: 10,
                            alignItems: "center"
                        }}>
                            <View style={{ height: 10 }} />
                            <Text style={{
                                color: BLACK,
                                fontSize: 23,
                                fontFamily: COSMICBOLD
                            }}>APIMAN Privacy & Policy</Text>
                        </View>
                        <View style={{
                            height: "82%",
                            width: "100%",
                            backgroundColor: WHITE,
                            borderRadius: 20,
                            // elevation: 10,
                        }}>
                            <FlatList
                                data={PRIVACYPOLICY}
                                renderItem={({ item }) => {
                                    // console.log(item);
                                    return (
                                        <View style={{
                                            width: "10%",
                                            // alignItems: "center"
                                        }}>
                                            <View style={{
                                                height: 200,
                                                width: 420,
                                                backgroundColor: WHITE,
                                                // elevation:10,
                                                // borderRadius: 10,
                                                // marginVertical: 10,
                                                justifyContent: "center",
                                                paddingHorizontal: 10,

                                            }}>
                                                <Text style={{
                                                    fontSize: 22,
                                                    fontFamily: COSMICBOLD,
                                                    color: BLACK
                                                }}>{item.name}</Text>
                                                <Text style={{
                                                    fontSize: 16,
                                                    fontFamily: COMICS,
                                                    color: BLACK
                                                }}>{item.desc}</Text>
                                                <Text style={{
                                                    fontSize: 16,
                                                    fontFamily: COMICS,
                                                    color: BLACK
                                                }}>{item.head}</Text>
                                                <Text style={{
                                                    fontSize: 16,
                                                    fontFamily: COMICS,
                                                    color: BLACK
                                                }}>{item.add}</Text>
                                                <Text style={{
                                                    fontSize: 16,
                                                    fontFamily: COMICS,
                                                    color: BLACK
                                                }}>{item.email}</Text>
                                                <Text style={{
                                                    fontSize: 16,
                                                    fontFamily: COMICS,
                                                    color: BLACK
                                                }}>{item.phone}</Text>
                                            </View>
                                        </View>
                                    )
                                }}
                            />
                        </View>
                        <View style={{
                            marginBottom: 10,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Custombtn
                                title={"Close"}
                                color={WHITE}
                                onPress={() => {
                                    setVModal(false);
                                }}
                            />
                        </View>
                    </View>
                </Modal>
            </GestureHandlerRootView>
        </>
    )
}