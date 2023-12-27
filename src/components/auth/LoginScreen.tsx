import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    return (
        <></>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({});