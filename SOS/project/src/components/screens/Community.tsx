import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function Community() {
    const [posts, setPosts] = React.useState([
        { id: 1, author: "Juan", content: "Alerta: Actividad sospechosa en calle principal" },
        { id: 2, author: "María", content: "Reunión de vecinos este sábado" },
    ]);

    return (
        <scrollView style={styles.container}>
            <stackLayout style={styles.content}>
                <label className="text-xl font-bold mb-4">
                    Comunidad Vecinal
                </label>

                {posts.map(post => (
                    <stackLayout
                        key={post.id}
                        className="bg-white p-4 rounded-lg shadow-md mb-4"
                    >
                        <label className="font-bold">{post.author}</label>
                        <label className="text-gray-700">{post.content}</label>
                    </stackLayout>
                ))}

                <button
                    className="bg-blue-500 text-white p-4 rounded"
                    onTap={() => console.log("Nueva publicación")}
                >
                    Nueva Publicación
                </button>
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    content: {
        padding: 20,
    },
});