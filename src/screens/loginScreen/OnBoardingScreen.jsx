import React, { useRef, useState } from "react";
import { Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BLACK, BRANDCOLOR, GREY, WHITE } from "../../constants/color";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { API, APJ, APK, LOGO } from "../../constants/imagePath";
import { COMICS, COSMICBOLD } from "../../constants/fontPath";

export default OnBoardingScreen = ({ navigation }) => {
    const [screen, setScreen] = useState("");
    const onLoginPressNavigate = () => {
        navigation.navigate("Login");
    }
    const onBoardingData = [
        {
            id: 1,
            title: 'More Bookings',
            desc: 'Get more bookings through " APIMAN " and live life easier..',
            image: API
        },
        {
            id: 2,
            title: 'More Earnings',
            desc: 'More booking means more earnings so, Earn more through " APIMAN "..',
            image: APJ
        },
        {
            id: 3,
            title: 'Get paid easily',
            desc: 'More booking means more earnings so, Earn more through " APIMAN "..',
            image: APK
        }
    ]
    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setScreen(viewableItems[0].item.id);
        }
    });
    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50, // or whatever percentage you feel appropriate
        minimumViewTime: 100 // in milliseconds
    };
    return (
        <>
            <GestureHandlerRootView>
                <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
                <View style={{
                    flex: 1,
                    backgroundColor: WHITE
                }}>
                    <View style={{
                        flex: 0.2,
                        flexDirection: "row",
                        padding: 2
                    }}>
                        <Image source={LOGO}
                            style={{
                                height: "70%",
                                width: "35%"
                            }} />
                        <View style={{
                            padding: 35
                        }}>
                            <Text style={{
                                color: BLACK,
                                fontSize: 18,
                                fontFamily: COSMICBOLD
                            }}>     Crafting the<Text style={{ color: BRANDCOLOR }}> architects</Text> of</Text>
                            <Text style={{
                                color: BLACK,
                                fontSize: 18,
                                fontFamily: COSMICBOLD
                            }}>      tomorrow's<Text style={{ color: BRANDCOLOR }}> technology</Text></Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 0.8,
                    }}>
                        <FlatList
                            data={onBoardingData}
                            horizontal={true}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => item.id.toString()}
                            pagingEnabled={true}
                            onViewableItemsChanged={onViewableItemsChanged.current}
                            viewabilityConfig={viewabilityConfig}
                            scrollEventThrottle={16}// Adjusts how often the scroll events are fired (milliseconds)
                            renderItem={({ item }) => {
                                return (
                                    <View style={{
                                        width: Dimensions.get('window').width,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Image
                                            source={item.image}
                                            style={{
                                                width: Dimensions.get('window').width,
                                                height: Dimensions.get('window').width,
                                                resizeMode: 'contain'
                                            }} />
                                        <Text style={{
                                            fontSize: 30,
                                            fontFamily: COMICS,
                                            padding: 8,
                                            marginVertical: 12,
                                            color: BLACK,
                                        }}>{item.title}</Text>
                                        <Text style={{
                                            fontSize: 16,
                                            fontFamily: COMICS,
                                            marginHorizontal: 25,
                                            textAlign: 'center',
                                            color: 'rgba(38,50,56,0.75)',
                                            lineHeight: 24,
                                        }}>{item.desc}</Text>
                                    </View>
                                )
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 0.2,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 16,
                        }}>
                            {onBoardingData.map((_, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.indicator,
                                        screen === index + 1 ? styles.activeIndicator : styles.inactiveIndicator
                                    ]}
                                />
                            ))}
                        </View>
                        <TouchableOpacity style={[
                            styles.button,
                            screen === onBoardingData.length ?
                                { backgroundColor: BRANDCOLOR } : { backgroundColor: "transparent" }
                        ]}
                            onPress={onLoginPressNavigate}
                        >
                            <Text style={[
                                styles.buttonText, { color: BLACK }
                            ]}>
                                {screen === onBoardingData.length ? 'Get Started' : "Skip"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </GestureHandlerRootView>
        </>
    )
}
const styles = StyleSheet.create({
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5
    }, activeIndicator: {
        backgroundColor: BLACK,
        width: 30,
        height: 10
    }, inactiveIndicator: {
        backgroundColor: WHITE
    }, button: {
        paddingVertical: 15,
        paddingHorizontal: 45,
        borderRadius: 25
    }, buttonText: {
        color: BLACK,
        fontFamily: COSMICBOLD,
        fontSize: 16
    }
})