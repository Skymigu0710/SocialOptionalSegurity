import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function Notifications() {
    const [notifications, setNotifications] = React.useState([
        {
            id: 1,
            title: "Alerta de Seguridad",
            message: "Se reportó actividad sospechosa en tu zona",
            time: "Hace 5 minutos",
            read: false
        },
        {
            id: 2,
            title: "Nuevo Reporte",
            message: "Tu reporte ha sido procesado",
            time: "Hace 1 hora",
            read: true
        }
    ]);

    return (
        <scrollView style={styles.container}>
            <stackLayout style={styles.content}>
                {notifications.map(notification => (
                    <stackLayout
                        key={notification.id}
                        className={`p-4 rounded-lg mb-4 ${notification.read ? 'bg-gray-100' : 'bg-blue-50'}`}
                    >
                        <label className="font-bold text-lg">{notification.title}</label>
                        <label className="text-gray-700">{notification.message}</label>
                        <label className="text-gray-500 text-sm">{notification.time}</label>
                    </stackLayout>
                ))}
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#F3F4F6",
    },
    content: {
        padding: 16,
    },
});