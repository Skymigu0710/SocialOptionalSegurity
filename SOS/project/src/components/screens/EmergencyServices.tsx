import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Dialogs } from "@nativescript/core";

export function EmergencyServices() {
    const callEmergency = (service: string) => {
        Dialogs.alert({
            title: "Llamando a " + service,
            message: "Conectando con servicios de emergencia...",
            okButtonText: "Finalizar"
        });
    };

    return (
        <stackLayout style={styles.container}>
            <label className="text-xl font-bold mb-4">
                Servicios de Emergencia
            </label>

            <button
                className="bg-red-500 text-white p-4 rounded mb-4"
                onTap={() => callEmergency("Policía")}
            >
                Policía - 911
            </button>

            <button
                className="bg-red-500 text-white p-4 rounded mb-4"
                onTap={() => callEmergency("Bomberos")}
            >
                Bomberos
            </button>

            <button
                className="bg-red-500 text-white p-4 rounded mb-4"
                onTap={() => callEmergency("Ambulancia")}
            >
                Ambulancia
            </button>
        </stackLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 20,
    },
});