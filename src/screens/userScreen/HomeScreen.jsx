import React, { useEffect, useState } from "react";
import { Alert, BackHandler, StatusBar, View } from "react-native";
import { BRANDCOLOR, WHITE } from "../../constants/color";
import { CustomHeader } from "../../component/common/CustomHeader";
import { AlertBtn } from "../../component/common/AlertBtn";
import { COSMICBOLD } from "../../constants/fontPath";

export default Home = () => {
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const backAction = () => {
            setModalVisible(true);
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
            <StatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
            <CustomHeader
                leftHeaderBtn={true}
                rightHeaderBtn={true}
            />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* Render the AlertBtn modal */}
                <AlertBtn
                    visible={modalVisible}
                    title="Exit App"
                    message="Are you sure you want to exit the app?"
                    textLeft="Cancel"
                    textRight="Yes"
                    showLeftButton={true}
                    showRightButton={true}
                    backgroundColor="red"
                    color="white"
                    // fontWeight="bold"
                    fontFamily={COSMICBOLD}
                    fontSize={24}
                    onRequestClose={() => setModalVisible(false)}
                    onPressLeft={() => setModalVisible(false)}
                    onPressRight={() => BackHandler.exitApp()}
                />
            </View>
        </>
    );
};
