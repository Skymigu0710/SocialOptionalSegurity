import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Dialogs } from "@nativescript/core";

const DISTRITOS = [
    { id: 1, nombre: "San Isidro", comisarias: ["Comisaría San Isidro", "Comisaría Las Flores"] },
    { id: 2, nombre: "Miraflores", comisarias: ["Comisaría Miraflores", "Comisaría San Antonio"] },
    { id: 3, nombre: "San Borja", comisarias: ["Comisaría San Borja", "Comisaría Chacarilla"] },
];

export function Register({ navigation }) {
    const [nombre, setNombre] = React.useState("");
    const [apellidos, setApellidos] = React.useState("");
    const [telefono, setTelefono] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [direccion, setDireccion] = React.useState("");
    const [distrito, setDistrito] = React.useState("");
    const [comisaria, setComisaria] = React.useState("");

    const handleRegister = () => {
        if (nombre && apellidos && telefono && password && direccion && distrito) {
            Dialogs.alert({
                title: "Registro Exitoso",
                message: "Su cuenta ha sido creada correctamente",
                okButtonText: "OK"
            }).then(() => {
                navigation.navigate("Login");
            });
        } else {
            Dialogs.alert({
                title: "Error",
                message: "Por favor complete todos los campos",
                okButtonText: "OK"
            });
        }
    };

    const handleDistritoChange = (selectedDistrito) => {
        setDistrito(selectedDistrito);
        setComisaria("");
    };

    return (
        <scrollView style={styles.container}>
            <stackLayout style={styles.form}>
                <label className="text-xl font-bold mb-6 text-center text-blue-800">
                    Crear Cuenta
                </label>

                <textField
                    hint="Nombre"
                    text={nombre}
                    onTextChange={(e) => setNombre(e.value)}
                    className="input p-4 rounded-lg mb-4"
                />

                <textField
                    hint="Apellidos"
                    text={apellidos}
                    onTextChange={(e) => setApellidos(e.value)}
                    className="input p-4 rounded-lg mb-4"
                />

                <textField
                    hint="Teléfono"
                    keyboardType="phone"
                    text={telefono}
                    onTextChange={(e) => setTelefono(e.value)}
                    className="input p-4 rounded-lg mb-4"
                />

                <textField
                    hint="Contraseña"
                    secure={true}
                    text={password}
                    onTextChange={(e) => setPassword(e.value)}
                    className="input p-4 rounded-lg mb-4"
                />

                <textField
                    hint="Dirección"
                    text={direccion}
                    onTextChange={(e) => setDireccion(e.value)}
                    className="input p-4 rounded-lg mb-4"
                />

                <listPicker
                    items={DISTRITOS.map(d => d.nombre)}
                    selectedIndex={DISTRITOS.findIndex(d => d.nombre === distrito)}
                    onSelectedIndexChange={(e) => handleDistritoChange(DISTRITOS[e.value].nombre)}
                    className="input p-4 rounded-lg mb-4"
                />

                {distrito && (
                    <listPicker
                        items={DISTRITOS.find(d => d.nombre === distrito)?.comisarias || []}
                        selectedIndex={DISTRITOS.find(d => d.nombre === distrito)?.comisarias.indexOf(comisaria) || 0}
                        onSelectedIndexChange={(e) => setComisaria(DISTRITOS.find(d => d.nombre === distrito).comisarias[e.value])}
                        className="input p-4 rounded-lg mb-4"
                    />
                )}

                <button
                    className="bg-blue-800 text-white p-4 rounded-lg mt-4"
                    onTap={handleRegister}
                >
                    Registrarse
                </button>
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#F3F4F6",
    },
    form: {
        padding: 20,
    },
});