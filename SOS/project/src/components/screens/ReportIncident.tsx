import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function ReportIncident() {
    const [description, setDescription] = React.useState("");

    const submitReport = () => {
        // Aquí iría la lógica para enviar el reporte
        console.log("Reporte enviado:", description);
    };

    return (
        <scrollView style={styles.container}>
            <stackLayout style={styles.form}>
                <label className="text-xl font-bold mb-4">
                    Reportar Incidente
                </label>
                
                <textField
                    hint="Tipo de incidente"
                    className="input p-2 border rounded mb-4"
                />
                
                <textView
                    hint="Descripción del incidente"
                    className="input p-2 border rounded mb-4 h-32"
                    text={description}
                    onTextChange={(e) => setDescription(e.value)}
                />
                
                <button
                    className="bg-blue-500 text-white p-4 rounded"
                    onTap={submitReport}
                >
                    Enviar Reporte
                </button>
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    form: {
        padding: 20,
    },
});