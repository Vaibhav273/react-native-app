import {
    Dimensions,
    ImageBackground,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../../types";
import Spacing from "../../theme/Space";
import Colors from "../../theme/Colors";
import Font from "../../theme/Font";

const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

const WelcomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [internalValue, setInternalValue] = useState('');

    const onChangeText = (val: string) => {

    }

    return (
        <View
            style={[
                styles.container,
                { justifyContent: "space-between" }
            ]}
        >
            <View
                style={{
                    paddingHorizontal: Spacing * 2,
                    marginTop: Spacing * 2,
                }}>
                <ImageBackground
                    style={{
                        height: height / 2.5,
                    }}
                    resizeMode="contain"
                    source={require("../../../assets/images/welcome-img.png")}
                />
                <Text
                    style={{
                        fontSize: 24,
                        fontFamily: Font["outfit-medium"],
                        marginTop: Spacing * 2
                    }}
                >
                    Welcome Zenith
                </Text>

                <Text
                    style={{
                        fontSize: 17,
                        color: Colors.text,
                        fontFamily: Font["outfit-regular"],
                    }}
                >
                    Experience the best in class workspaces Elevate your work game today
                </Text>
            </View>
            <View
                style={{
                    paddingHorizontal: Spacing * 2,
                    paddingTop: Spacing * 2,
                }}
            >
                <View>
                    <View>
                        <TextInput
                            placeholder='Enter your Mobile Number'
                            autoFocus={false}
                            autoComplete='tel'
                            keyboardType='phone-pad'
                            textContentType='telephoneNumber'
                            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                            style={{
                                borderWidth: 1,
                                padding: Spacing,
                                borderRadius: Spacing * 1.5,
                                marginBottom: Spacing * 3,
                                borderColor: Colors.text
                            }}
                        />

                        {/* <OTPTextInput ref={e => (otpInput = e)} > */}
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            backgroundColor: Colors.primary,
                            paddingVertical: Spacing * 1.5,
                            paddingHorizontal: Spacing * 2,
                            width: "55%",
                            borderRadius: Spacing * 1.5,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: Font["outfit-regular"],
                                color: Colors.text,
                                fontSize: 17,
                                textAlign: "center",
                                textTransform: "uppercase"
                            }}
                        >
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View
                style={{
                    paddingHorizontal: Spacing * 2,
                    paddingTop: Spacing * 2,
                    marginBottom: Spacing * 2
                }}
            >
                <TouchableOpacity
                    onPress={() => navigate("Register")}
                    style={{
                        padding: Spacing,
                    }}
                >
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 15,
                        fontFamily: Font["google-sans-regular"],
                    }}>
                        Not a member? Book a free day pass here :)
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: 'aliceblue',
    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
});