import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import LoginScreen from "../components/auth/LoginScreen";
import Colors from "../theme/Colors";
import { RootStackParamList } from "../../types";
import WelcomeScreen from "../components/onBoardScreen/WelcomeScreen";
import VisitorScreen from "../components/visitor/VisitorScreen";
import VisitorSelectDateScreen from "../components/visitor/VisitorSelectDate";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Colors.background,
    },
};

export default function Navigation() {
    return (
        <NavigationContainer theme={theme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Visitor" component={VisitorScreen} />
            <Stack.Screen name="SelectDate" component={VisitorSelectDateScreen} />
        </Stack.Navigator>
    );
}