import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { getCurrentLocation, isEnabled, enableLocationRequest } from "@nativescript/geolocation";
import { Dialogs } from "@nativescript/core";

export function UserLocation() {
    const [location, setLocation] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const getLocation = async () => {
        try {
            setLoading(true);
            const hasPermission = await isEnabled();
            
            if (!hasPermission) {
                await enableLocationRequest();
            }

            const loc = await getCurrentLocation({
                desiredAccuracy: 3,
                updateDistance: 10,
                maximumAge: 20000,
                timeout: 20000
            });

            setLocation({
                latitude: loc.latitude,
                longitude: loc.longitude,
            });
        } catch (error) {
            Dialogs.alert({
                title: "Error",
                message: "No se pudo obtener la ubicación",
                okButtonText: "OK"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <flexboxLayout style={styles.container}>
            <stackLayout style={styles.content}>
                <button
                    className={`p-4 rounded-lg ${loading ? 'bg-gray-500' : 'bg-blue-800'} text-white`}
                    onTap={getLocation}
                    isEnabled={!loading}
                >
                    {loading ? "Obteniendo ubicación..." : "Obtener Mi Ubicación"}
                </button>

                {location && (
                    <stackLayout className="mt-4">
                        <label className="font-bold">Tu ubicación actual:</label>
                        <label>Latitud: {location.latitude}</label>
                        <label>Longitud: {location.longitude}</label>
                    </stackLayout>
                )}
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
    content: {
        width: "80%",
        padding: 20,
    },
});