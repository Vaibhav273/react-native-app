import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, StyleSheet, Dimensions, Text, TextInput, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../../types";
import Spacing from "../../theme/Space";
import Colors from "../../theme/Colors";
import Font from "../../theme/Font";
import { useState } from "react";
import AntDIcons from '@expo/vector-icons/AntDesign';

type Props = NativeStackScreenProps<RootStackParamList, "Visitor">;

const { height, width } = Dimensions.get('screen');

const VisitorScreen: React.FC<Props> = ({ navigation: { navigate } }) => {

    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <View
            style={[
                styles.container,
            ]}>
            <View
                style={[
                    styles.box,
                ]}>
                <Text style={{
                    fontSize: 30,
                    fontFamily: Font["outfit-medium"],
                    letterSpacing: 3,
                    textTransform: "uppercase"
                }}>
                    Hola Hustler !
                </Text>
                <Text style={{
                    fontSize: 20,
                    fontFamily: Font["outfit-bold"],
                }}>
                    Here is your chance
                </Text>
                <Text style={{
                    fontSize: 14,
                    fontFamily: Font["outfit-medium"],
                }}>
                    unleash the best workspace and amazing community experience
                </Text>
            </View>

            <View>
                <Text style={[styles.formHeader]}>
                    Book Your Visit Today
                </Text>

                <Text style={[styles.formLabel, { marginTop: Spacing * 2 }]}>
                    Enter Your Full Name
                </Text>
                <TextInput
                    placeholder='We call you as'
                    autoFocus={false}
                    style={[styles.formInput]}
                />

                <Text style={[styles.formLabel]}>
                    Enter your Mobile Number
                </Text>
                <TextInput
                    placeholder='We should say hello on'
                    autoFocus={false}
                    autoComplete='tel'
                    keyboardType='phone-pad'
                    textContentType='telephoneNumber'
                    onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                    style={[styles.formInput]}
                />

                <Text style={[styles.formLabel]}>
                    Enter your Company Name
                </Text>
                <TextInput
                    placeholder='Your exciting company is'
                    autoFocus={false}
                    style={[styles.formInput]}
                />

                <Text style={[styles.formLabel]}>
                    Enter your Official e-mail address
                </Text>
                <TextInput
                    placeholder='We should say hello on'
                    autoFocus={false}
                    autoComplete="email"
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    style={[styles.formInput]}
                />
            </View>
            <View
                style={{
                    marginBottom: Spacing * 2
                }}
            >
                <TouchableOpacity
                    onPress={() => { navigate('SelectDate') }}
                    style={styles.formButton}
                >
                    <AntDIcons name="arrowright" size={40} color="black" />
                </TouchableOpacity>
            </View>
        </View >
    );
}

export default VisitorScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        paddingHorizontal: Spacing * 2,
        backgroundColor: 'aliceblue',
        justifyContent: "space-between"
    },
    box: {
        backgroundColor: Colors.visitorBox,
        height: 150,
        marginTop: Spacing * 3.5,
        paddingHorizontal: Spacing * 1.5,
        paddingVertical: Spacing * 1.5,
        borderRadius: 20
    },
    formInput: {
        borderWidth: 1,
        padding: Spacing * 1.5,
        borderRadius: Spacing * 1.5,
        marginBottom: Spacing * 2,
        borderColor: Colors.text
    },
    formHeader: {
        fontSize: 24,
        fontFamily: Font["outfit-medium"],
        marginTop: Spacing * 2,
        marginBottom: Spacing / 2
    },
    formLabel: {
        fontSize: 14,
        fontFamily: Font["outfit-medium"],
        marginBottom: Spacing / 2
    },
    formButton: {
        alignSelf: "center",
        backgroundColor: Colors.primary,
        width: 80,
        height: 80,
        borderRadius: 50,
        marginBottom: Spacing * 2,
        justifyContent: "center",
        alignItems: "center"
    }
});