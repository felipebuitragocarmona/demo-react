import { User } from "../models/user";

const API_URL = import.meta.env.VITE_API_URL+"/users"||""; // Reemplaza con la URL real

// Obtener todos los usuarios
export const getUsers = async (): Promise<User[]> => {
    console.log("aqui "+API_URL)
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Error al obtener usuarios");
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

// Obtener un usuario por ID
export const getUserById = async (id: number): Promise<User | null> => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error("Usuario no encontrado");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Crear un nuevo usuario
export const createUser = async (user: Omit<User, "id">): Promise<User | null> => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        if (!response.ok) throw new Error("Error al crear usuario");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Actualizar usuario
export const updateUser = async (id: number, user: Partial<User>): Promise<User | null> => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        if (!response.ok) throw new Error("Error al actualizar usuario");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Eliminar usuario
export const deleteUser = async (id: number): Promise<boolean> => {
    try {
        const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Error al eliminar usuario");
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};
