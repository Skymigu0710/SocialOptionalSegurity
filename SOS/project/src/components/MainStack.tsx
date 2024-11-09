import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { Login } from "./screens/auth/Login";
import { Register } from "./screens/auth/Register";
import { Home } from "./screens/Home";
import { ReportIncident } from "./screens/ReportIncident";
import { EmergencyServices } from "./screens/EmergencyServices";
import { Community } from "./screens/Community";
import { Notifications } from "./screens/Notifications";
import { UserLocation } from "./screens/UserLocation";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#1E40AF",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name="Register"
                component={Register}
                options={{ title: "Registro" }}
            />
            <StackNavigator.Screen
                name="Home"
                component={Home}
                options={{ title: "Seguridad Vecinal" }}
            />
            <StackNavigator.Screen
                name="ReportIncident"
                component={ReportIncident}
                options={{ title: "Reportar Incidente" }}
            />
            <StackNavigator.Screen
                name="EmergencyServices"
                component={EmergencyServices}
                options={{ title: "Emergencias" }}
            />
            <StackNavigator.Screen
                name="Community"
                component={Community}
                options={{ title: "Comunidad" }}
            />
            <StackNavigator.Screen
                name="Notifications"
                component={Notifications}
                options={{ title: "Notificaciones" }}
            />
            <StackNavigator.Screen
                name="UserLocation"
                component={UserLocation}
                options={{ title: "Mi Ubicación" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);