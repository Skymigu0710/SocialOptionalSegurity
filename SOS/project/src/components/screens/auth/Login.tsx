import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Dialogs } from "@nativescript/core";

export function Login({ navigation }) {
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = () => {
        if (phone && password) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });
        } else {
            Dialogs.alert({
                title: "Error",
                message: "Por favor complete todos los campos",
                okButtonText: "OK"
            });
        }
    };

    return (
        <flexboxLayout style={styles.container}>
            <stackLayout style={styles.form}>
                <image
                    src="~/assets/logo.png"
                    style={styles.logo}
                    stretch="aspectFit"
                />
                
                <label className="text-2xl font-bold text-center mb-8 text-blue-800">
                    Seguridad Vecinal
                </label>

                <textField
                    hint="Teléfono"
                    keyboardType="phone"
                    text={phone}
                    onTextChange={(e) => setPhone(e.value)}
                    className="input p-4 rounded-lg mb-4 text-lg"
                />

                <textField
                    hint="Contraseña"
                    secure={true}
                    text={password}
                    onTextChange={(e) => setPassword(e.value)}
                    className="input p-4 rounded-lg mb-6 text-lg"
                />

                <button
                    className="bg-blue-800 text-white p-4 rounded-lg text-lg font-semibold"
                    onTap={handleLogin}
                >
                    Ingresar
                </button>

                <button
                    className="text-blue-800 p-4 text-lg"
                    onTap={() => navigation.navigate("Register")}
                >
                    Crear cuenta
                </button>
            </stackLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#F3F4F6",
        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        width: "80%",
        padding: 20,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
        alignSelf: "center",
    },
});