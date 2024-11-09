import { Dialogs } from '@nativescript/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function Home({ navigation }) {
    const activateAlarm = () => {
        Dialogs.alert({
            title: "¡Alarma Activada!",
            message: "Se ha notificado a los servicios de emergencia",
            okButtonText: "OK"
        });
    };

    return (
        <flexboxLayout style={styles.container}>
            <button
                className="bg-red-600 text-white p-8 rounded-full w-40 h-40 shadow-lg"
                onTap={activateAlarm}
            >
                <label className="text-2xl font-bold">SOS</label>
            </button>
            
            <gridLayout columns="*, *" rows="auto, auto, auto" style={styles.menuGrid}>
                <button
                    col="0"
                    row="0"
                    className="bg-blue-600 text-white m-2 p-6 rounded-xl shadow-md"
                    onTap={() => navigation.navigate("ReportIncident")}
                >
                    <stackLayout>
                        <label className="text-lg font-semibold">Reportar</label>
                        <label className="text-sm">Incidente</label>
                    </stackLayout>
                </button>
                
                <button
                    col="1"
                    row="0"
                    className="bg-green-600 text-white m-2 p-6 rounded-xl shadow-md"
                    onTap={() => navigation.navigate("EmergencyServices")}
                >
                    <stackLayout>
                        <label className="text-lg font-semibold">Servicios</label>
                        <label className="text-sm">Emergencia</label>
                    </stackLayout>
                </button>
                
                <button
                    col="0"
                    row="1"
                    className="bg-purple-600 text-white m-2 p-6 rounded-xl shadow-md"
                    onTap={() => navigation.navigate("Community")}
                >
                    <stackLayout>
                        <label className="text-lg font-semibold">Comunidad</label>
                    </stackLayout>
                </button>
                
                <button
                    col="1"
                    row="1"
                    className="bg-yellow-600 text-white m-2 p-6 rounded-xl shadow-md"
                    onTap={() => navigation.navigate("Notifications")}
                >
                    <stackLayout>
                        <label className="text-lg font-semibold">Notificaciones</label>
                    </stackLayout>
                </button>

                <button
                    col="0"
                    row="2"
                    className="bg-indigo-600 text-white m-2 p-6 rounded-xl shadow-md"
                    onTap={() => navigation.navigate("UserLocation")}
                >
                    <stackLayout>
                        <label className="text-lg font-semibold">Mi Ubicación</label>
                    </stackLayout>
                </button>

                <button
                    col="1"
                    row="2"
                    className="bg-teal-600 text-white m-2 p-6 rounded-xl shadow-md"
                    onTap={() => Dialogs.alert({
                        title: "Consejos de Seguridad",
                        message: "• Mantén las puertas y ventanas cerradas\n• Conoce a tus vecinos\n• Ten a mano números de emergencia\n• Mantén iluminado el exterior de tu casa",
                        okButtonText: "Entendido"
                    })}
                >
                    <stackLayout>
                        <label className="text-lg font-semibold">Consejos</label>
                    </stackLayout>
                </button>
            </gridLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#F3F4F6",
    },
    menuGrid: {
        width: "100%",
    }
});