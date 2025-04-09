# 1. Configuración Inicial del proyecto
1. Descargar plantilla de `https://github.com/felipebuitragocarmona/plantilla-react`
2. Instalar dependencias
``` sh
 npm install
```
3. Correr el proyecto
```sh
npm run dev
```

# 2. Estructura de un proyecto
Cuando se está desarrollando un proyecto en React es necesario seguir una estructura de archivos, la siguiente es una  recomendación:

```
/mi-proyecto
│── /public              # Archivos estáticos (favicon, index.html, imágenes globales)
│── /src                 # Código fuente
│   │── /assets          # Recursos estáticos (imágenes, estilos, fuentes)
│   │── /components      # Componentes reutilizables (botones, formularios, tarjetas, etc.)
│   │── /pages           # Páginas principales de la aplicación (Home, About, Dashboard)
│   │── /layouts         # Diseños generales de la app (Navbar, Sidebar, Footer)
│   |── / models         # Modelos e interfaces de la lógica de negocio
│   │   ── User.ts     # Interface de usuario
│   │   ── Product.ts  # Interface de producto
│   │   ── Order.ts    # Interface de pedido
│   │── /services        # Llamadas a APIs y lógica de negocio (servicios REST, Firebase, etc.)
│   │── /hooks           # Hooks personalizados para reutilización de lógica
│   │── /context         # Contextos globales de React para manejo de estado
│   │── /store           # Manejo de estado con Redux/Zustand/MobX si es necesario
│   │── /routes          # Configuración de rutas de React Router
│   │── /utils           # Funciones auxiliares y helpers
│   │── /styles          # Archivos SCSS, CSS o Tailwind (si no se usan en componentes)
│   │── App.js           # Componente raíz
│   │── index.js         # Punto de entrada de la aplicación
│── package.json         # Configuración del proyecto y dependencias
│── .gitignore           # Archivos ignorados por Git
│── README.md            # Documentación del proyecto
```

### Explicación:
- **`assets`**: Guarda imágenes, íconos y otros archivos estáticos.
- **`components`**: Contiene componentes reutilizables como botones, tarjetas o modales.
- **`pages`**: Agrupa las páginas principales, donde se ensamblan los componentes.
- **`layouts`**: Para estructuras como menús, barras de navegación y pies de página.
- **`services`**: Contiene las funciones para interactuar con APIs y otras fuentes de datos.
- **`hooks`**: Para encapsular lógica reutilizable basada en React Hooks.
- **`context`**: Si usas React Context API para manejar estados globales.
- **`store`**: Si el proyecto usa Redux, Zustand o MobX, aquí iría la configuración del estado global.
- **`routes`**: Organización de las rutas de React Router.
- **`utils`**: Funciones de ayuda como formateo de fechas o validaciones.
- **`styles`**: CSS global o configuraciones específicas de estilos.

# Páginas y Componentes

En React, una aplicación se divide en **componentes** y **páginas**:

1. **Componentes**: Son bloques reutilizables que representan partes de la UI. Pueden ser botones, formularios o cualquier otra unidad funcional. Se encuentran en la carpeta `components`.
2. **Páginas**: Representan vistas completas de la aplicación. Generalmente, cada página tiene su ruta y usa varios componentes para estructurar su contenido. Se encuentran en la carpeta `pages`.

---


## **Ejemplo de Perfil de Usuario en React con TypeScript**
#### **Estructura del Proyecto**
```
/src
  /components
    UserProfile.tsx
  /models
    user.ts
  /pages
    Profile.tsx
  main.tsx
  App.tsx
```

---

### **1. Definir la Interfaz del Usuario (models/user.ts)**
```typescript
export interface User {
    id?: number;
    name?: string;
    email?: string;
    password?:string;
    age?: number;
    city?: string;
    phone?: string;
    is_active?: boolean;
    token?:string;
}
```

---

### **2. Crear el Componente UserProfile (components/UserProfile.tsx)**
```typescript
import React from "react";
import { User } from "../models/user";

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Edad: {user.age}</p>
    </div>
  );
};

export default UserProfile;
```

---

### **3. Crear la Página del Perfil (pages/Profile.tsx)**
```typescript
import React from "react";
import UserProfile from "../components/UserProfile";
import { User } from "../models/user";

const Profile: React.FC = () => {
  const user: User = {
    id: 1,
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    age: 30
  };

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <UserProfile user={user} />
    </div>
  );
};

export default Profile;
```

---

## **¿Qué es un Prop en React?**  
En React, un **prop (propiedad)** es un mecanismo que permite pasar datos de un componente padre a un componente hijo. Los props son **inmutables**, lo que significa que el componente hijo no puede modificarlos directamente.  

Los props permiten reutilizar componentes con diferentes datos y personalizar su contenido dinámicamente.

---

### **Ejemplo Básico de Props**  
Aquí se muestra un componente que recibe un prop llamado `message` y lo muestra en pantalla.

#### **Componente Message.tsx**
```tsx
import React from "react";

interface MessageProps {
  message: string;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return <h2>{message}</h2>;
};

export default Message;
```

#### **Uso del Componente en App.tsx**
```tsx
import React from "react";
import Message from "./components/Message";

const App: React.FC = () => {
  return (
    <div>
      <Message message="¡Hola, este es un prop!" />
    </div>
  );
};

export default App;
```

Aquí, el componente `App` pasa un mensaje al componente `Message` a través de la prop `message`.

---

### **Ejemplo de Prop que Retorna un Valor**  
Un prop también puede ser una función que retorne un valor.

#### **Componente Sum.tsx**
```tsx
import React from "react";

interface OperationProps {
  a: number;
  b: number;
  calculate: (x: number, y: number) => number;
}

const Operation: React.FC<OperationProps> = ({ a, b, calculate }) => {
  return <p>Resultado: {calculate(a, b)}</p>;
};

export default Operation;
```

#### **Uso del Componente en App.tsx**
```tsx
import React from "react";
import Operation from "../../components/OperacionMatematica";

const SumPage: React.FC = () => {
  const addNumbers = (x: number, y: number): number => x + y;

  return (
    <div>
      <Operation a={5} b={3} calculate={addNumbers} />
    </div>
  );
};

export default SumPage;
```

🔹 En este ejemplo, el componente `Sum` recibe `a`, `b` y una función `calculate` que realiza la suma.  
🔹 La función `addNumbers` se pasa como prop y se ejecuta dentro del componente hijo.  

Esto muestra en pantalla:  
📌 **Resultado: 8**  

**Conclusión:**  
✅ Los props permiten pasar datos y funciones a los componentes.  
✅ Son útiles para personalizar y reutilizar componentes.  
✅ También pueden incluir funciones que devuelven valores.  

## **¿Qué es Lifting State Up?**

El concepto que se usa para pasar datos de **hijo a padre** en React es conocido como **"Lifting State Up"** (Elevar el Estado).  

### **¿Qué es Lifting State Up?**  
Cuando un componente hijo necesita enviar datos a su componente padre, se utiliza una función pasada como **prop** desde el padre. El hijo llama a esta función y le pasa los datos como argumento, permitiendo que el padre reciba y use esa información.

---

### **Ejemplo de Hijo a Padre**
Aquí hay un ejemplo donde el hijo (`Child.tsx`) envía un mensaje al padre (`Parent.tsx`).

#### **1. Componente Hijo (Child.tsx)**
```tsx
import React from "react";

interface ChildProps {
  sendMessage: (message: string) => void;
}

const Child: React.FC<ChildProps> = ({ sendMessage }) => {
  return (
    <button onClick={() => sendMessage("¡Hola desde el hijo!")}>
      Enviar Mensaje
    </button>
  );
};

export default Child;
```

---

#### **2. Componente Padre (Parent.tsx)**
```tsx
import React, { useState } from "react";
import Child from "./Child";

const Parent: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleMessage = (msg: string) => {
    setMessage(msg);
  };

  return (
    <div>
      <h2>Mensaje recibido: {message}</h2>
      <Child sendMessage={handleMessage} />
    </div>
  );
};

export default Parent;
```

---

### **¿Cómo Funciona?**
1. **El padre (`Parent.tsx`) define una función `handleMessage`** que actualiza su estado con el mensaje recibido.
2. **Esa función se pasa al hijo (`Child.tsx`) como prop (`sendMessage`)**.
3. **Cuando el usuario hace clic en el botón del hijo**, se ejecuta `sendMessage`, enviando el mensaje al padre.
4. **El padre recibe el mensaje y lo muestra en pantalla**.

---

### **Salida en Pantalla**
Antes de hacer clic:
```
Mensaje recibido:
[Botón] Enviar Mensaje
```
Después de hacer clic:
```
Mensaje recibido: ¡Hola desde el hijo!
[Botón] Enviar Mensaje
```

🔹 **Conclusión:**  
✅ Para pasar datos de **hijo a padre**, se usa **Lifting State Up**.  
✅ Se logra pasando una **función como prop** al hijo.  
✅ El hijo la ejecuta y le envía datos al padre.  


### ¿Qué es Context API en React?  

**Context API** es una herramienta integrada en **React** que permite compartir **datos globales** entre múltiples componentes sin necesidad de pasarlos manualmente como **props**. Se usa para evitar el **prop drilling**, que ocurre cuando un dato debe pasarse a través de muchos niveles de componentes innecesariamente.  

---

#### ¿Cuándo usar Context API?**  
✅ Para **autenticación** y manejo de sesiones.  
✅ Para **temas y configuraciones** globales (modo oscuro, idioma, etc.).  
✅ Para compartir **datos globales** entre múltiples componentes.  

---

#### Pasos para usar Context API 

1. **Crear un Contexto** con `createContext`.  
2. **Definir un Proveedor** (`Provider`) que almacene el estado.  
3. **Usar `useContext`** en los componentes para acceder al estado global.  

---

#### Ejemplo: Mostrar y actualizar un usuario con Context API**  

📌 **Objetivo:**  
- Mostrar el **nombre y email** del usuario.  
- Cambiar el usuario con un **botón** al hacer clic.  

---

#### **1. Crear el Contexto (`UserContext.tsx`)**  
Ubicado en `src/context/UserContext.tsx`
```tsx
import React, { createContext, useState, ReactNode } from "react";

// Definimos la interfaz del usuario
interface User {
  name: string;
  email: string;
}

// Definimos la interfaz del contexto
interface UserContextType {
  user: User;
  setUser: (user: User) => void;
}

// Creamos el contexto
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Creamos el proveedor del contexto
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Estado global del usuario
  const [user, setUser] = useState<User>({ name: "Juan Pérez", email: "juan@example.com" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
```
🔹 **Explicación:**  
- `createContext<UserContextType | undefined>(undefined)`: Define el contexto.  
- `UserProvider`: Es el proveedor que envuelve los componentes y gestiona el usuario.  
- `setUser`: Función para cambiar el usuario.  

---

#### **2. Crear el Componente `UserProfile.tsx`**  
Ubicado en `src/components/UserProfile.tsx`
```tsx
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile: React.FC = () => {
  // Obtenemos el contexto
  const userContext = useContext(UserContext);
  if (!userContext) return <p>No hay usuario</p>;

  const { user, setUser } = userContext;

  // Función para cambiar el usuario
  const handleChangeUser = () => {
    setUser({ name: "María López", email: "maria@example.com" });
  };

  return (
    <div>
      <h2>Perfil</h2>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleChangeUser}>Cambiar Usuario</button>
    </div>
  );
};

export default UserProfile;
```
🔹 **Explicación:**  
- `useContext(UserContext)`: Accede al estado global del usuario.  
- `handleChangeUser()`: Actualiza el usuario cuando el botón es presionado.  

---

#### **3. Implementar el Contexto en `App.tsx`**  
Ubicado en `src/App.tsx`
```tsx
import React from "react";
import { UserProvider } from "./context/UserContext";
import UserProfile from "./components/UserProfile";

const App: React.FC = () => {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
};

export default App;
```
🔹 **Explicación:**  
- `UserProvider` envuelve la app, permitiendo que todos los componentes accedan al usuario.  
- `UserProfile` muestra los datos y el botón para cambiar de usuario.  

---

#### **Resultado en pantalla**
🔹 **Antes de hacer clic en el botón:**  
```
Perfil
Nombre: Juan Pérez
Email: juan@example.com
[ Cambiar Usuario ]
```
  
🔹 **Después de hacer clic en el botón:**  
```
Perfil
Nombre: María López
Email: maria@example.com
[ Cambiar Usuario ]
```

---

#### Resumen Final
✅ **Context API** permite compartir datos globales sin pasar props manualmente.  
✅ `UserProvider` almacena el estado del usuario y permite actualizarlo.  
✅ `useContext(UserContext)` nos permite acceder y modificar el usuario desde cualquier parte de la app.  


# Enrutamiento

##  Introducción al Enrutamiento
El enrutamiento en React permite gestionar la navegación entre diferentes vistas o páginas sin necesidad de recargar la aplicación. Esto es posible gracias a bibliotecas como **React Router**, que proporciona herramientas para definir rutas y manejar la navegación de manera eficiente.

## Bibliotecas de Enrutamiento
La biblioteca más utilizada para gestionar rutas en React es **React Router**. Para instalarla, ejecuta el siguiente comando:
```bash
npm install react-router-dom
```

##  Configuración del Enrutamiento
Para configurar el enrutamiento en una aplicación de React, es necesario envolver la aplicación con `BrowserRouter` y definir las rutas en `Routes`.

Ejemplo de configuración básica en `App.js`:
```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
```

## Rutas y Vistas
Cada **ruta** en `Route` está asociada a un **componente** que se renderiza cuando el usuario accede a esa URL.

Ejemplo de un componente de vista (`Home.js`):
```jsx
function Home() {
  return <h1>Bienvenido a la página de inicio</h1>;
}
export default Home;
```

## Navegación entre Páginas
Para navegar entre páginas sin recargar la aplicación, se usa el componente `Link` de `react-router-dom`.

Ejemplo de menú de navegación:
```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/about">Acerca de</Link>
    </nav>
  );
}
export default Navbar;
```

## Parámetros de Ruta
Se pueden definir rutas dinámicas utilizando `:` seguido del nombre del parámetro.

Ejemplo en `App.js`:
```jsx
<Route path="/profile/:userId" element={<Profile />} />
```

Cómo acceder a los parámetros en `Profile.js`:
```jsx
import { useParams } from "react-router-dom";

function Profile() {
  let { userId } = useParams();
  return <h1>Perfil del usuario: {userId}</h1>;
}
export default Profile;
```

## Guardias de Ruta
Los **guardias de ruta** permiten restringir el acceso a ciertas páginas según una condición (ejemplo: autenticación de usuario).

Ejemplo de una ruta protegida:
```jsx
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}
```
Uso en `App.js`:
```jsx
<Route path="/dashboard" element={<PrivateRoute isAuthenticated={userLoggedIn}><Dashboard /></PrivateRoute>} />
```

## Conclusión
El enrutamiento en React permite estructurar la navegación de forma eficiente y flexible, incorporando rutas dinámicas, navegación entre vistas y protección de rutas según sea necesario. Con **React Router**, la gestión del enrutamiento se vuelve sencilla y escalable para cualquier aplicación.

# Operaciones de CRUD
## Listar
Instalar las librerías
```sh
npm i sweetalert2 
npm i lucide-react

```
Es de tener presente que previamente se debe de poseer en la carpeta `src/models/user.ts` la "interface" que modela al usuario

Luego será necesario proceder con la configuración de la variable de entorno que permitirá definir la ubicación del backend:
```
//archivo .env
VITE_API_URL=https://xxxxxxxxxxx.mock.pstmn.io
```

En segundo lugar se realizará la implementación de la clase que servirá como servicio para las comunicaciones externas (apis) el cual debe quedar en la ubicación `src/services/userService.ts`

``` tsx
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

```

A continuación será necesario crear la componente de visualización en la ruta `src/app/pages/components/Users/ListUsers.tsx`:
```tsx
import { Eye, Edit, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";

import { getUsers, deleteUser } from "../../services/userService";
import Swal from "sweetalert2";
import { User } from "../../models/user";


const ListUsers = () => {


    // Estado para almacenar los datos del JSON
    const [data, setData] = useState<User[]>([]);

    // 🔹 Llamar `fetchData` cuando el componente se monta
    useEffect(() => {
        fetchData();
    }, []);

    // 🔹 Obtiene los datos de los usuarios
    const fetchData = async () => {
        const users = await getUsers();
        setData(users);
    };



    // Funciones para manejar las acciones
    const handleView = (id: number) => {
        console.log(`Ver registro con ID: ${id}`);

    };

    const handleEdit = (id: number) => {
        console.log(`Editar registro con ID: ${id}`);

        // Lógica para editar el registro
    };

    const handleDelete = async (id: number) => {
        console.log(`Intentando eliminar usuario con ID: ${id}`);
        Swal.fire({
            title: "Eliminación",
            text: "Está seguro de querer eliminar el registro?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar",
            cancelButtonText: "No"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const success = await deleteUser(id);
                if (success) {
                    Swal.fire({
                        title: "Eliminado",
                        text: "El registro se ha eliminado",
                        icon: "success"
                    });
                }
                // 🔹 Vuelve a obtener los usuarios después de eliminar uno
                fetchData();
            }
        });
    };

    return (
        <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
                {/* <!-- Input Fields --> */}
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Listado
                        </h3>
                    </div>
                    <div className="flex flex-col gap-5.5 p-6.5">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Nombre</th>
                                        <th scope="col" className="px-6 py-3">Correo</th>
                                        <th scope="col" className="px-6 py-3">Edad</th>
                                        <th scope="col" className="px-6 py-3">Ciudad</th>
                                        <th scope="col" className="px-6 py-3">Teléfono</th>
                                        <th scope="col" className="px-6 py-3">Activo</th>
                                        <th scope="col" className="px-6 py-3">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) => (
                                        <tr key={item.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{item.name}</td>
                                            <td className="px-6 py-4">{item.email}</td>
                                            <td className="px-6 py-4">{item.age}</td>
                                            <td className="px-6 py-4">{item.city}</td>
                                            <td className="px-6 py-4">{item.phone}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-full ${item.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                    {item.is_active ? "Activo" : "Inactivo"}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 space-x-2">
                                                <button
                                                    onClick={() => handleView(item.id ? item.id : 0)}
                                                    className="text-blue-600 dark:text-blue-500"
                                                >
                                                    <Eye size={20} /> {/* Ícono de ver */}
                                                </button>
                                                <button
                                                    onClick={() => item.id !== undefined && handleEdit(item.id)}
                                                    className="text-yellow-600 dark:text-yellow-500"
                                                >
                                                    <Edit size={20} /> {/* Ícono de editar */}
                                                </button>
                                                <button
                                                    onClick={() => item.id !== undefined && handleDelete(item.id)}
                                                    className="text-red-600 dark:text-red-500"
                                                >
                                                    <Trash2 size={20} /> {/* Ícono de eliminar */}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ListUsers;

```
Crear carpeta en la ruta `src/app/pages/Users` y dentro de esta el archivo `page.tsx`

```tsx
import ListUsers from "../../components/Users/ListUsers";
import Breadcrumb from "../../components/Breadcrumb";
const List = () => {
    return (
        <>
            <Breadcrumb pageName="Usuarios" />
            <ListUsers />
        </>
    );
};
export default List;
```

## Creación y Actualización con Validaciones
En primer lugar será necesario instalar la siguiente librería que ayudará con las validaciones:

```
npm i yup
npm i formik
```

Luego será necesario crear el archivo en la ruta ``src/components/Users/UserFormValidator.tsx`

``` tsx
import { User } from "../../models/user";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


// Definimos la interfaz para los props
interface MyFormProps {
    mode: number; // Puede ser 1 (crear) o 2 (actualizar)
    handleCreate?: (values: User) => void;
    handleUpdate?: (values: User) => void;
    user?: User | null;
}



const UserFormValidator: React.FC<MyFormProps> = ({ mode, handleCreate, handleUpdate,user }) => {

    const handleSubmit = (formattedValues: User) => {
        if (mode === 1 && handleCreate) {
            handleCreate(formattedValues);  // Si `handleCreate` está definido, lo llamamos
        } else if (mode === 2 && handleUpdate) {
            handleUpdate(formattedValues);  // Si `handleUpdate` está definido, lo llamamos
        } else {
            console.error('No function provided for the current mode');
        }
    };

    return (
        <Formik
            initialValues={user ? user :{
                name: "",
                email: "",
                age: "",
                city: "",
                phone: "",
                is_active: false,
            }}
            validationSchema={Yup.object({
                name: Yup.string().required("El nombre es obligatorio"),
                email: Yup.string().email("Email inválido").required("El email es obligatorio"),
                age: Yup.number()
                    .typeError("Debe ser un número")
                    .positive("Debe ser un número positivo")
                    .integer("Debe ser un número entero")
                    .required("La edad es obligatoria"),
                city: Yup.string().required("La ciudad es obligatoria"),
                phone: Yup.string()
                    .matches(/^\d{10}$/, "El teléfono debe tener 10 dígitos")
                    .required("El teléfono es obligatorio"),
            })}
            onSubmit={(values) => {
                const formattedValues = { ...values, age: Number(values.age) };  // Formateo adicional si es necesario
                handleSubmit(formattedValues);
            }}
            
        >
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 p-6 bg-white rounded-md shadow-md">
                    {/* Nombre */}
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                        <Field type="text" name="name" className="w-full border rounded-md p-2" />
                        <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                        <Field type="email" name="email" className="w-full border rounded-md p-2" />
                        <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
                    </div>

                    {/* Edad */}
                    <div>
                        <label htmlFor="age" className="block text-lg font-medium text-gray-700">Age</label>
                        <Field type="number" name="age" className="w-full border rounded-md p-2" />
                        <ErrorMessage name="age" component="p" className="text-red-500 text-sm" />
                    </div>

                    {/* Ciudad */}
                    <div>
                        <label htmlFor="city" className="block text-lg font-medium text-gray-700">City</label>
                        <Field type="text" name="city" className="w-full border rounded-md p-2" />
                        <ErrorMessage name="city" component="p" className="text-red-500 text-sm" />
                    </div>

                    {/* Teléfono */}
                    <div>
                        <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone</label>
                        <Field type="text" name="phone" className="w-full border rounded-md p-2" />
                        <ErrorMessage name="phone" component="p" className="text-red-500 text-sm" />
                    </div>

                    {/* Activar */}
                    <div className="flex items-center">
                        <Field type="checkbox" name="is_active" className="mr-2" />
                        <label htmlFor="is_active" className="text-lg font-medium text-gray-700">Active</label>
                    </div>

                    {/* Botón de enviar */}
                    <button
                        type="submit"
                        className={`py-2 px-4 text-white rounded-md ${mode === 1 ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"}`}
                    >
                        {mode === 1 ? "Crear" : "Actualizar"}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default UserFormValidator;
```

Ahora será necesario crear los archivos de las páginas para la creación y actualización. En primer lugar se creará en la siguiente ubicación la página de creación: `src/pages/Users/create.tsx`

``` tsx
import React, { useState } from 'react'; // Asegúrate de importar useState
import { User } from '../../models/User';
import UserFormValidator from '../../components/Users/UserFormValidator';

import Swal from 'sweetalert2';
import { userService } from "../../services/userService";
import Breadcrumb from '../../components/Breadcrumb';
import { useNavigate } from "react-router-dom";

const App = () => {
    const navigate = useNavigate();

    // Estado para almacenar el usuario a editar

    // Lógica de creación
    const handleCreateUser = async (user: User) => {

        try {
            const createdUser = await userService.createUser(user);
            if (createdUser) {
                Swal.fire({
                    title: "Completado",
                    text: "Se ha creado correctamente el registro",
                    icon: "success",
                    timer: 3000
                })
                console.log("Usuario creado con éxito:", createdUser);
                navigate("/users/list");
            } else {
                Swal.fire({
                    title: "Error",
                    text: "Existe un problema al momento de crear el registro",
                    icon: "error",
                    timer: 3000
                })
            }
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Existe un problema al momento de crear el registro",
                icon: "error",
                timer: 3000
            })
        }
    };
    return (
        <div>
            {/* Formulario para crear un nuevo usuario */}
            <h2>Create User</h2>
            <Breadcrumb pageName="Crear Usuario" />
            <UserFormValidator
                handleCreate={handleCreateUser}
                mode={1} // 1 significa creación
            />
        </div>
    );
};

export default App;


```
Ahora la actualización es necesario implementar la siguiente lógica:

``` tsx


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { userService } from "../../services/userService";
import Swal from "sweetalert2";

import { User } from '../../models/User';
import UserFormValidator from '../../components/Users/UserFormValidator';
import Breadcrumb from "../../components/Breadcrumb";

const UpdateUserPage = () => {
    const { id } = useParams(); // Obtener el ID de la URL
    
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);

    // Cargar datos del usuario después del montaje
    useEffect(() => {
        console.log("Id->"+id)
        const fetchUser = async () => {
            if (!id) return; // Evitar errores si el ID no está disponible
            const userData = await userService.getUserById(parseInt(id));
            setUser(userData);
        };

        fetchUser();
    }, [id]);

    const handleUpdateUser = async (theUser: User) => {
        try {
            const updatedUser = await userService.updateUser(theUser.id || 0, theUser);
            if (updatedUser) {
                Swal.fire({
                    title: "Completado",
                    text: "Se ha actualizado correctamente el registro",
                    icon: "success",
                    timer: 3000
                });
                navigate("/users/list"); // Redirección en React Router
            } else {
                Swal.fire({
                    title: "Error",
                    text: "Existe un problema al momento de actualizar el registro",
                    icon: "error",
                    timer: 3000
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Existe un problema al momento de actualizar el registro",
                icon: "error",
                timer: 3000
            });
        }
    };

    if (!user) {
        return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
    }

    return (
        <>
            <Breadcrumb pageName="Actualizar Usuario" />
            <UserFormValidator
                handleUpdate={handleUpdateUser}
                mode={2} // 2 significa actualización
                user={user}
            />
        </>
    );
};

export default UpdateUserPage;

```

# Seguridad

## Login
En primer lugar será necesario instalar la siguiente librería
```sh
npm install @reduxjs/toolkit react-redux --force
```
En segundo lugar será necesario crear en la siguiente ubicación los siguientes archivos `src/store/store.ts` y `src/store/userSlice.ts`


``` ts
// src/store/store.ts

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

``` ts
// src/store/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/user";

interface UserState {
    user: User | null;
}

const storedUser = localStorage.getItem("user");
const initialState: UserState = {
    user: storedUser ? JSON.parse(storedUser) : null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
            if (action.payload) {
                localStorage.setItem("user", JSON.stringify(action.payload));
            } else {
                localStorage.removeItem("user");
            }
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
```

Ahora será necesario crear el servicio `src/services/securityService.ts` el cual posee el siguiente contenido:

``` ts
import axios from "axios";
import { User } from "../models/User";
import { store } from "../store/store";
import { setUser } from "../store/userSlice";

class SecurityService extends EventTarget {
    keySession: string;
    API_URL: string;
    user: User;
    theAuthProvider: any;
    
    constructor() {
        super();

        this.keySession = 'session';
        this.API_URL = import.meta.env.VITE_API_URL || ""; // Reemplaza con la URL real
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            this.user = JSON.parse(storedUser);
        } else {
            this.user = {};
        }
    }

    async login(user: User) {
        console.log("llamando api " + `${this.API_URL}/login`);
        try {
            const response = await axios.post(`${this.API_URL}/login`, user, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = response.data;
            localStorage.setItem("user", JSON.stringify(data));
            store.dispatch(setUser(data));
            return data;
        } catch (error) {
            console.error('Error during login:', error);
            throw error;
        }
    }
    
    getUser() {
        return this.user;
    }
    
    logout() {
        this.user = {};
        localStorage.removeItem("user");
        this.dispatchEvent(new CustomEvent("userChange", { detail: null }));
    }

    isAuthenticated() {
        return localStorage.getItem(this.keySession) !== null;
    }

    getToken() {
        return localStorage.getItem(this.keySession);
    }
}

export default new SecurityService();

```

Ahora en el archivo `src/pages/Authentication/SignIn.tsx`

``` tsx
import React from "react";


import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { User } from "../../models/user";
import SecurityService from '../../services/securityService';

import Breadcrumb from "../../components/Breadcrumb";


const SignIn: React.FC = () => {

  const handleLogin = async (user: User) => {
    console.log("aqui " + JSON.stringify(user))
    try {
      const response = await SecurityService.login(user);
      console.log('Usuario autenticado:', response);
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  }
  return (
    <>
      <Breadcrumb pageName="Sign In" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="px-26 py-17.5 text-center">

                <img
                  className="hidden dark:block"
                  src={"/images/logo/logo.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
                <img
                  className="dark:hidden"
                  src={"/images/logo/logo-dark.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />


              <p className="2xl:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
              </p>

              <span className="mt-15 inline-block">
                <svg
                  width="350"
                  height="350"
                  viewBox="0 0 350 350"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.5825 294.844L30.5069 282.723C25.0538 280.414 19.4747 278.414 13.7961 276.732L13.4079 282.365L11.8335 276.159C4.79107 274.148 0 273.263 0 273.263C0 273.263 6.46998 297.853 20.0448 316.653L35.8606 319.429L23.5737 321.2C25.2813 323.253 27.1164 325.196 29.0681 327.019C48.8132 345.333 70.8061 353.736 78.1898 345.787C85.5736 337.838 75.5526 316.547 55.8074 298.235C49.6862 292.557 41.9968 288.001 34.2994 284.415L33.5825 294.844Z"
                    fill="#F2F2F2"
                  />
                  <path
                    d="M62.8332 281.679L66.4705 269.714C62.9973 264.921 59.2562 260.327 55.2652 255.954L52.019 260.576L53.8812 254.45C48.8923 249.092 45.2489 245.86 45.2489 245.86C45.2489 245.86 38.0686 270.253 39.9627 293.358L52.0658 303.903L40.6299 299.072C41.0301 301.712 41.596 304.324 42.3243 306.893C49.7535 332.77 64.2336 351.323 74.6663 348.332C85.0989 345.341 87.534 321.939 80.1048 296.063C77.8019 288.041 73.5758 280.169 68.8419 273.123L62.8332 281.679Z"
                    fill="#F2F2F2"
                  />
                  <path
                    d="M243.681 82.9153H241.762V30.3972C241.762 26.4054 240.975 22.4527 239.447 18.7647C237.918 15.0768 235.677 11.7258 232.853 8.90314C230.028 6.0805 226.674 3.84145 222.984 2.31385C219.293 0.786245 215.337 0 211.343 0H99.99C91.9222 0 84.1848 3.20256 78.48 8.90314C72.7752 14.6037 69.5703 22.3354 69.5703 30.3972V318.52C69.5703 322.512 70.3571 326.465 71.8859 330.153C73.4146 333.841 75.6553 337.192 78.48 340.015C81.3048 342.837 84.6582 345.076 88.3489 346.604C92.0396 348.131 95.9952 348.918 99.99 348.918H211.343C219.41 348.918 227.148 345.715 232.852 340.014C238.557 334.314 241.762 326.582 241.762 318.52V120.299H243.68L243.681 82.9153Z"
                    fill="#E6E6E6"
                  />
                  <path
                    d="M212.567 7.9054H198.033C198.701 9.54305 198.957 11.3199 198.776 13.0793C198.595 14.8387 197.984 16.5267 196.997 17.9946C196.01 19.4625 194.676 20.6652 193.114 21.4967C191.552 22.3283 189.809 22.7632 188.039 22.7632H124.247C122.477 22.7631 120.734 22.3281 119.172 21.4964C117.61 20.6648 116.277 19.462 115.289 17.9942C114.302 16.5263 113.691 14.8384 113.511 13.079C113.33 11.3197 113.585 9.54298 114.254 7.9054H100.678C94.6531 7.9054 88.8749 10.297 84.6146 14.5542C80.3543 18.8113 77.9609 24.5852 77.9609 30.6057V318.31C77.9609 324.331 80.3543 330.105 84.6146 334.362C88.8749 338.619 94.6531 341.011 100.678 341.011H212.567C218.592 341.011 224.37 338.619 228.63 334.362C232.891 330.105 235.284 324.331 235.284 318.31V30.6053C235.284 24.5848 232.891 18.811 228.63 14.554C224.37 10.297 218.592 7.9054 212.567 7.9054Z"
                    fill="white"
                  />
                  <path
                    d="M142.368 122.512C142.368 120.501 142.898 118.526 143.904 116.784C144.911 115.043 146.359 113.597 148.102 112.592C146.36 111.587 144.383 111.057 142.371 111.057C140.358 111.057 138.381 111.586 136.639 112.591C134.896 113.596 133.448 115.042 132.442 116.784C131.436 118.525 130.906 120.501 130.906 122.512C130.906 124.522 131.436 126.498 132.442 128.239C133.448 129.981 134.896 131.427 136.639 132.432C138.381 133.437 140.358 133.966 142.371 133.966C144.383 133.966 146.36 133.436 148.102 132.431C146.359 131.426 144.911 129.981 143.905 128.24C142.898 126.499 142.368 124.523 142.368 122.512Z"
                    fill="#CCCCCC"
                  />
                  <path
                    d="M156.779 122.512C156.778 120.501 157.308 118.526 158.315 116.784C159.321 115.043 160.769 113.597 162.513 112.592C160.77 111.587 158.793 111.057 156.781 111.057C154.769 111.057 152.792 111.586 151.049 112.591C149.306 113.596 147.859 115.042 146.852 116.784C145.846 118.525 145.316 120.501 145.316 122.512C145.316 124.522 145.846 126.498 146.852 128.239C147.859 129.981 149.306 131.427 151.049 132.432C152.792 133.437 154.769 133.966 156.781 133.966C158.793 133.966 160.77 133.436 162.513 132.431C160.769 131.426 159.322 129.981 158.315 128.24C157.308 126.499 156.779 124.523 156.779 122.512Z"
                    fill="#CCCCCC"
                  />
                  <path
                    d="M170.862 133.966C177.192 133.966 182.325 128.838 182.325 122.512C182.325 116.186 177.192 111.057 170.862 111.057C164.531 111.057 159.398 116.186 159.398 122.512C159.398 128.838 164.531 133.966 170.862 133.966Z"
                    fill="#3056D3"
                  />
                  <path
                    d="M190.017 158.289H123.208C122.572 158.288 121.962 158.035 121.512 157.586C121.062 157.137 120.809 156.527 120.809 155.892V89.1315C120.809 88.496 121.062 87.8866 121.512 87.4372C121.962 86.9878 122.572 86.735 123.208 86.7343H190.017C190.653 86.735 191.263 86.9878 191.713 87.4372C192.163 87.8866 192.416 88.496 192.416 89.1315V155.892C192.416 156.527 192.163 157.137 191.713 157.586C191.263 158.035 190.653 158.288 190.017 158.289ZM123.208 87.6937C122.826 87.6941 122.46 87.8457 122.19 88.1154C121.92 88.385 121.769 88.7507 121.768 89.132V155.892C121.769 156.274 121.92 156.639 122.19 156.909C122.46 157.178 122.826 157.33 123.208 157.33H190.017C190.399 157.33 190.765 157.178 191.035 156.909C191.304 156.639 191.456 156.274 191.457 155.892V89.132C191.456 88.7507 191.304 88.385 191.035 88.1154C190.765 87.8457 190.399 87.6941 190.017 87.6937H123.208Z"
                    fill="#CCCCCC"
                  />
                  <path
                    d="M204.934 209.464H102.469V210.423H204.934V209.464Z"
                    fill="#CCCCCC"
                  />
                  <path
                    d="M105.705 203.477C107.492 203.477 108.941 202.029 108.941 200.243C108.941 198.457 107.492 197.01 105.705 197.01C103.918 197.01 102.469 198.457 102.469 200.243C102.469 202.029 103.918 203.477 105.705 203.477Z"
                    fill="#3056D3"
                  />
                  <path
                    d="M204.934 241.797H102.469V242.757H204.934V241.797Z"
                    fill="#CCCCCC"
                  />
                  <path
                    d="M105.705 235.811C107.492 235.811 108.941 234.363 108.941 232.577C108.941 230.791 107.492 229.344 105.705 229.344C103.918 229.344 102.469 230.791 102.469 232.577C102.469 234.363 103.918 235.811 105.705 235.811Z"
                    fill="#3056D3"
                  />
                  <path
                    d="M203.062 278.617H170.68C170.121 278.617 169.584 278.394 169.189 277.999C168.793 277.604 168.571 277.068 168.57 276.509V265.168C168.571 264.609 168.793 264.073 169.189 263.678C169.584 263.283 170.121 263.06 170.68 263.06H203.062C203.621 263.06 204.158 263.283 204.553 263.678C204.949 264.073 205.171 264.609 205.172 265.168V276.509C205.171 277.068 204.949 277.604 204.553 277.999C204.158 278.394 203.621 278.617 203.062 278.617Z"
                    fill="#3056D3"
                  />
                  <path
                    d="M116.263 203.477C118.05 203.477 119.499 202.029 119.499 200.243C119.499 198.457 118.05 197.01 116.263 197.01C114.476 197.01 113.027 198.457 113.027 200.243C113.027 202.029 114.476 203.477 116.263 203.477Z"
                    fill="#3056D3"
                  />
                  <path
                    d="M126.818 203.477C128.605 203.477 130.054 202.029 130.054 200.243C130.054 198.457 128.605 197.01 126.818 197.01C125.031 197.01 123.582 198.457 123.582 200.243C123.582 202.029 125.031 203.477 126.818 203.477Z"
                    fill="#3056D3"
                  />
                  <path
                    d="M116.263 235.811C118.05 235.811 119.499 234.363 119.499 232.577C119.499 230.791 118.05 229.344 116.263 229.344C114.476 229.344 113.027 230.791 113.027 232.577C113.027 234.363 114.476 235.811 116.263 235.811Z"
                    fill="#3056D3"
                  />
                  <path
                    d="M126.818 235.811C128.605 235.811 130.054 234.363 130.054 232.577C130.054 230.791 128.605 229.344 126.818 229.344C125.031 229.344 123.582 230.791 123.582 232.577C123.582 234.363 125.031 235.811 126.818 235.811Z"
                    fill="#3056D3"
                  />
                  <path
                    d="M264.742 229.309C264.972 229.414 265.193 229.537 265.404 229.678L286.432 220.709L287.183 215.174L295.585 215.123L295.089 227.818L267.334 235.153C267.275 235.345 267.205 235.535 267.124 235.719C266.722 236.574 266.077 237.292 265.269 237.783C264.46 238.273 263.525 238.514 262.58 238.475C261.636 238.436 260.723 238.119 259.958 237.563C259.193 237.008 258.61 236.239 258.28 235.353C257.951 234.467 257.892 233.504 258.108 232.584C258.325 231.664 258.809 230.829 259.5 230.183C260.19 229.538 261.056 229.11 261.989 228.955C262.922 228.799 263.879 228.922 264.742 229.309Z"
                    fill="#FFB8B8"
                  />
                  <path
                    d="M298.642 344.352H292.894L290.16 322.198L298.643 322.198L298.642 344.352Z"
                    fill="#FFB8B8"
                  />
                  <path
                    d="M288.788 342.711H299.873V349.685H281.809C281.809 347.835 282.544 346.062 283.853 344.754C285.162 343.446 286.937 342.711 288.788 342.711Z"
                    fill="#1C2434"
                  />
                  <path
                    d="M320.995 342.729L315.274 343.292L310.379 321.513L318.822 320.682L320.995 342.729Z"
                    fill="#FFB8B8"
                  />
                  <path
                    d="M311.028 342.061L322.059 340.975L322.744 347.916L304.766 349.685C304.676 348.774 304.767 347.854 305.033 346.977C305.299 346.101 305.735 345.285 306.317 344.577C306.898 343.869 307.614 343.283 308.422 342.851C309.23 342.419 310.116 342.151 311.028 342.061Z"
                    fill="#1C2434"
                  />
                  <path
                    d="M300.242 191.677C306.601 191.677 311.757 186.525 311.757 180.17C311.757 173.815 306.601 168.663 300.242 168.663C293.882 168.663 288.727 173.815 288.727 180.17C288.727 186.525 293.882 191.677 300.242 191.677Z"
                    fill="#FFB8B8"
                  />
                  <path
                    d="M291.607 339.872C291.113 339.873 290.635 339.7 290.256 339.383C289.877 339.066 289.623 338.626 289.537 338.139C286.562 321.636 276.838 267.676 276.605 266.181C276.6 266.147 276.597 266.112 276.598 266.077V262.054C276.597 261.907 276.643 261.764 276.729 261.645L278.013 259.847C278.074 259.761 278.154 259.689 278.247 259.639C278.34 259.588 278.444 259.559 278.549 259.554C285.874 259.211 309.86 258.206 311.019 259.652C312.183 261.106 311.772 265.512 311.678 266.38L311.682 266.471L322.459 335.337C322.543 335.886 322.408 336.446 322.082 336.896C321.756 337.347 321.265 337.65 320.717 337.742L313.986 338.85C313.485 338.931 312.971 338.829 312.539 338.563C312.107 338.297 311.784 337.885 311.63 337.401C309.548 330.754 302.568 308.393 300.149 299.741C300.133 299.686 300.099 299.639 300.051 299.607C300.004 299.576 299.946 299.563 299.89 299.571C299.834 299.579 299.782 299.608 299.745 299.651C299.708 299.694 299.688 299.749 299.689 299.806C299.81 308.054 300.102 329.098 300.203 336.366L300.214 337.148C300.218 337.678 300.023 338.191 299.668 338.584C299.313 338.978 298.823 339.224 298.295 339.274L291.804 339.863C291.738 339.869 291.672 339.872 291.607 339.872Z"
                    fill="#1C2434"
                  />
                  <path
                    d="M292.933 196.201C290.924 197.395 289.721 199.588 289.031 201.821C287.754 205.953 286.985 210.226 286.741 214.545L286.012 227.475L276.984 261.755C284.809 268.37 289.322 266.867 299.855 261.455C310.387 256.044 311.591 263.26 311.591 263.26L313.697 234.092L316.706 202.219C316.031 201.407 315.266 200.672 314.427 200.03C311.645 197.868 308.409 196.366 304.962 195.636C301.516 194.906 297.948 194.967 294.528 195.815L292.933 196.201Z"
                    fill="#3056D3"
                  />
                  <path
                    d="M290.001 236.232C290.244 236.324 290.479 236.434 290.704 236.562L311.497 226.163L311.842 220.529L320.419 219.938L320.878 232.781L293.092 241.963C292.865 242.935 292.347 243.816 291.608 244.487C290.868 245.158 289.941 245.588 288.951 245.72C287.96 245.852 286.953 245.68 286.063 245.226C285.173 244.772 284.442 244.058 283.968 243.179C283.494 242.301 283.299 241.298 283.409 240.306C283.519 239.313 283.928 238.378 284.583 237.624C285.238 236.869 286.107 236.332 287.075 236.084C288.043 235.835 289.063 235.887 290.001 236.232Z"
                    fill="#FFB8B8"
                  />
                  <path
                    d="M316.556 202.365C321.672 204.17 322.573 223.716 322.573 223.716C316.554 220.409 309.332 225.821 309.332 225.821C309.332 225.821 307.827 220.709 306.022 214.094C305.477 212.233 305.412 210.265 305.832 208.372C306.253 206.479 307.147 204.724 308.429 203.269C308.429 203.269 311.44 200.56 316.556 202.365Z"
                    fill="#3056D3"
                  />
                  <path
                    d="M310.566 183.213C309.132 182.066 307.174 184.151 307.174 184.151L306.026 173.828C306.026 173.828 298.853 174.687 294.261 173.542C289.67 172.396 288.953 177.7 288.953 177.7C288.716 175.557 288.668 173.399 288.81 171.248C289.096 168.667 292.827 166.087 299.427 164.366C306.026 162.646 309.47 170.101 309.47 170.101C314.061 172.395 312.001 184.36 310.566 183.213Z"
                    fill="#1C2434"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium">Start for free</span>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign In to TailAdmin
              </h2>

              <Formik
                initialValues={{
                  email: "",
                  password: ""
                }}
                validationSchema={Yup.object({
                  email: Yup.string().email("Email inválido").required("El email es obligatorio"),
                  password: Yup.string().required("La contraseña es obligatoria"),
                })}
                onSubmit={(values) => {
                  const formattedValues = { ...values };  // Formateo adicional si es necesario
                  handleLogin(formattedValues);
                }}

              >
                {({ handleSubmit }) => (
                  <Form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 p-6 bg-white rounded-md shadow-md">

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                      <Field type="email" name="email" className="w-full border rounded-md p-2" />
                      <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
                    </div>

                    {/* Edad */}
                    <div>
                      <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
                      <Field type="password" name="password" className="w-full border rounded-md p-2" />
                      <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
                    </div>
                    {/* Botón de enviar */}
                    <button
                      type="submit"
                      className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                    >
                      Login
                    </button>
                    <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_191_13499)">
                            <path
                              d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
                              fill="#4285F4"
                            />
                            <path
                              d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
                              fill="#34A853"
                            />
                            <path
                              d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                              fill="#FBBC05"
                            />
                            <path
                              d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
                              fill="#EB4335"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_191_13499">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      Sign in with Google
                    </button>

                  </Form>
                )}
              </Formik>

              <div className="mt-6 text-center">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

```
Posteriormente para que el nombre del usuario aparezca en el navbar y se active el sidebar es necesario activar el Provider de Redux en el siguiente archivo `src/layout/DefaultLayout.tsx`, esto permitirá que tanto el sidebar como navbar tengan acceso a la variable compartida

```
import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';
const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Provider store={store}>
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
        {/* <!-- ===== Page Wrapper Start ===== --> */}
        <div className="flex h-screen overflow-hidden">
          {/* <!-- ===== Sidebar Start ===== --> */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Sidebar End ===== --> */}

          {/* <!-- ===== Content Area Start ===== --> */}
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            {/* <!-- ===== Header Start ===== --> */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Start ===== --> */}
            <main>
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                <Outlet />
              </div>
            </main>
            {/* <!-- ===== Main Content End ===== --> */}
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
        {/* <!-- ===== Page Wrapper End ===== --> */}
      </div>
    </Provider>
  );
};

export default DefaultLayout;

```


Luego en el archivo `src/components/DropdownUser.tsx`, actualizar algunas de las líneas tal como se muestra a continuación

``` tsx
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
          <h2>Bienvenido, {user?.name || "Invitado"}</h2>
```

Para ocultar el menú de la izquierda es necesario modificar el archivo `src/components/Sidebar.tsx`, actualizar algunas de las líneas tal como se muestra a continuación

``` tsx
import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../images/logo/logo.svg';
import SidebarLinkGroup from './SidebarLinkGroup';

import { useSelector } from "react-redux";
import { RootState } from "../../src/store/store";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const user = useSelector((state: RootState) => state.user.user);
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div> {user ?
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/' || pathname.includes('dashboard')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === '/' ||
                            pathname.includes('dashboard')) &&
                          'bg-graydark dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                            fill=""
                          />
                          <path
                            d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                            fill=""
                          />
                          <path
                            d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                            fill=""
                          />
                          <path
                            d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                            fill=""
                          />
                        </svg>
                        Dashboard
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && 'rotate-180'
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              eCommerce
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Calendar --> */}
              <li>
                <NavLink
                  to="/calendar"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('calendar') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7499 2.9812H14.2874V2.36245C14.2874 2.02495 14.0062 1.71558 13.6405 1.71558C13.2749 1.71558 12.9937 1.99683 12.9937 2.36245V2.9812H4.97803V2.36245C4.97803 2.02495 4.69678 1.71558 4.33115 1.71558C3.96553 1.71558 3.68428 1.99683 3.68428 2.36245V2.9812H2.2499C1.29365 2.9812 0.478027 3.7687 0.478027 4.75308V14.5406C0.478027 15.4968 1.26553 16.3125 2.2499 16.3125H15.7499C16.7062 16.3125 17.5218 15.525 17.5218 14.5406V4.72495C17.5218 3.7687 16.7062 2.9812 15.7499 2.9812ZM1.77178 8.21245H4.1624V10.9968H1.77178V8.21245ZM5.42803 8.21245H8.38115V10.9968H5.42803V8.21245ZM8.38115 12.2625V15.0187H5.42803V12.2625H8.38115ZM9.64678 12.2625H12.5999V15.0187H9.64678V12.2625ZM9.64678 10.9968V8.21245H12.5999V10.9968H9.64678ZM13.8374 8.21245H16.228V10.9968H13.8374V8.21245ZM2.2499 4.24683H3.7124V4.83745C3.7124 5.17495 3.99365 5.48433 4.35928 5.48433C4.7249 5.48433 5.00615 5.20308 5.00615 4.83745V4.24683H13.0499V4.83745C13.0499 5.17495 13.3312 5.48433 13.6968 5.48433C14.0624 5.48433 14.3437 5.20308 14.3437 4.83745V4.24683H15.7499C16.0312 4.24683 16.2562 4.47183 16.2562 4.75308V6.94683H1.77178V4.75308C1.77178 4.47183 1.96865 4.24683 2.2499 4.24683ZM1.77178 14.5125V12.2343H4.1624V14.9906H2.2499C1.96865 15.0187 1.77178 14.7937 1.77178 14.5125ZM15.7499 15.0187H13.8374V12.2625H16.228V14.5406C16.2562 14.7937 16.0312 15.0187 15.7499 15.0187Z"
                      fill=""
                    />
                  </svg>
                  Calendar
                </NavLink>
              </li>
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Profile --> */}
              <li>
                <NavLink
                  to="/profile"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('profile') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z"
                      fill=""
                    />
                    <path
                      d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z"
                      fill=""
                    />
                  </svg>
                  Profile
                </NavLink>
              </li>
              {/* <!-- Menu Item Profile --> */}

              {/* <!-- Menu Item Forms --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/forms' || pathname.includes('forms')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === '/forms' ||
                            pathname.includes('forms')) &&
                          'bg-graydark dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.43425 7.5093H2.278C2.44675 7.5093 2.55925 7.3968 2.58737 7.31243L2.98112 6.32805H5.90612L6.27175 7.31243C6.328 7.48118 6.46862 7.5093 6.58112 7.5093H7.453C7.76237 7.48118 7.87487 7.25618 7.76237 7.03118L5.428 1.4343C5.37175 1.26555 5.3155 1.23743 5.14675 1.23743H3.88112C3.76862 1.23743 3.59987 1.29368 3.57175 1.4343L1.153 7.08743C1.0405 7.2843 1.20925 7.5093 1.43425 7.5093ZM4.47175 2.98118L5.3155 5.17493H3.59987L4.47175 2.98118Z"
                            fill=""
                          />
                          <path
                            d="M10.1249 2.5031H16.8749C17.2124 2.5031 17.5218 2.22185 17.5218 1.85623C17.5218 1.4906 17.2405 1.20935 16.8749 1.20935H10.1249C9.7874 1.20935 9.47803 1.4906 9.47803 1.85623C9.47803 2.22185 9.75928 2.5031 10.1249 2.5031Z"
                            fill=""
                          />
                          <path
                            d="M16.8749 6.21558H10.1249C9.7874 6.21558 9.47803 6.49683 9.47803 6.86245C9.47803 7.22808 9.75928 7.50933 10.1249 7.50933H16.8749C17.2124 7.50933 17.5218 7.22808 17.5218 6.86245C17.5218 6.49683 17.2124 6.21558 16.8749 6.21558Z"
                            fill=""
                          />
                          <path
                            d="M16.875 11.1656H1.77187C1.43438 11.1656 1.125 11.4469 1.125 11.8125C1.125 12.1781 1.40625 12.4594 1.77187 12.4594H16.875C17.2125 12.4594 17.5219 12.1781 17.5219 11.8125C17.5219 11.4469 17.2125 11.1656 16.875 11.1656Z"
                            fill=""
                          />
                          <path
                            d="M16.875 16.1156H1.77187C1.43438 16.1156 1.125 16.3969 1.125 16.7625C1.125 17.1281 1.40625 17.4094 1.77187 17.4094H16.875C17.2125 17.4094 17.5219 17.1281 17.5219 16.7625C17.5219 16.3969 17.2125 16.1156 16.875 16.1156Z"
                            fill="white"
                          />
                        </svg>
                        Forms
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && 'rotate-180'
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/forms/form-elements"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Form Elements
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/forms/form-layout"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Form Layout
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Forms --> */}

              {/* <!-- Menu Item Tables --> */}
              <li>
                <NavLink
                  to="/tables"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('tables') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_130_9756)">
                      <path
                        d="M15.7501 0.55835H2.2501C1.29385 0.55835 0.506348 1.34585 0.506348 2.3021V15.8021C0.506348 16.7584 1.29385 17.574 2.27822 17.574H15.7782C16.7345 17.574 17.5501 16.7865 17.5501 15.8021V2.3021C17.522 1.34585 16.7063 0.55835 15.7501 0.55835ZM6.69385 10.599V6.4646H11.3063V10.5709H6.69385V10.599ZM11.3063 11.8646V16.3083H6.69385V11.8646H11.3063ZM1.77197 6.4646H5.45635V10.5709H1.77197V6.4646ZM12.572 6.4646H16.2563V10.5709H12.572V6.4646ZM2.2501 1.82397H15.7501C16.0313 1.82397 16.2563 2.04897 16.2563 2.33022V5.2271H1.77197V2.3021C1.77197 2.02085 1.96885 1.82397 2.2501 1.82397ZM1.77197 15.8021V11.8646H5.45635V16.3083H2.2501C1.96885 16.3083 1.77197 16.0834 1.77197 15.8021ZM15.7501 16.3083H12.572V11.8646H16.2563V15.8021C16.2563 16.0834 16.0313 16.3083 15.7501 16.3083Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_9756">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.052124)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Tables
                </NavLink>
              </li>
              {/* <!-- Menu Item Tables --> */}

              {/* <!-- Menu Item Settings --> */}
              <li>
                <NavLink
                  to="/settings"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('settings') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_130_9763)">
                      <path
                        d="M17.0721 7.30835C16.7909 6.99897 16.3971 6.83022 15.9752 6.83022H15.8909C15.7502 6.83022 15.6377 6.74585 15.6096 6.63335C15.5815 6.52085 15.5252 6.43647 15.4971 6.32397C15.4409 6.21147 15.4971 6.09897 15.5815 6.0146L15.6377 5.95835C15.9471 5.6771 16.1159 5.28335 16.1159 4.86147C16.1159 4.4396 15.9752 4.04585 15.6659 3.73647L14.569 2.61147C13.9784 1.99272 12.9659 1.9646 12.3471 2.58335L12.2627 2.6396C12.1784 2.72397 12.0377 2.7521 11.8971 2.69585C11.7846 2.6396 11.6721 2.58335 11.5315 2.55522C11.3909 2.49897 11.3065 2.38647 11.3065 2.27397V2.13335C11.3065 1.26147 10.6034 0.55835 9.73148 0.55835H8.15648C7.7346 0.55835 7.34085 0.7271 7.0596 1.00835C6.75023 1.31772 6.6096 1.71147 6.6096 2.10522V2.21772C6.6096 2.33022 6.52523 2.44272 6.41273 2.49897C6.35648 2.5271 6.32835 2.5271 6.2721 2.55522C6.1596 2.61147 6.01898 2.58335 5.9346 2.49897L5.87835 2.4146C5.5971 2.10522 5.20335 1.93647 4.78148 1.93647C4.3596 1.93647 3.96585 2.0771 3.65648 2.38647L2.53148 3.48335C1.91273 4.07397 1.8846 5.08647 2.50335 5.70522L2.5596 5.7896C2.64398 5.87397 2.6721 6.0146 2.61585 6.09897C2.5596 6.21147 2.53148 6.29585 2.47523 6.40835C2.41898 6.52085 2.3346 6.5771 2.19398 6.5771H2.1096C1.68773 6.5771 1.29398 6.71772 0.984604 7.0271C0.675229 7.30835 0.506479 7.7021 0.506479 8.12397L0.478354 9.69897C0.450229 10.5708 1.15335 11.274 2.02523 11.3021H2.1096C2.25023 11.3021 2.36273 11.3865 2.39085 11.499C2.4471 11.5833 2.50335 11.6677 2.53148 11.7802C2.5596 11.8927 2.53148 12.0052 2.4471 12.0896L2.39085 12.1458C2.08148 12.4271 1.91273 12.8208 1.91273 13.2427C1.91273 13.6646 2.05335 14.0583 2.36273 14.3677L3.4596 15.4927C4.05023 16.1115 5.06273 16.1396 5.68148 15.5208L5.76585 15.4646C5.85023 15.3802 5.99085 15.3521 6.13148 15.4083C6.24398 15.4646 6.35648 15.5208 6.4971 15.549C6.63773 15.6052 6.7221 15.7177 6.7221 15.8302V15.9427C6.7221 16.8146 7.42523 17.5177 8.2971 17.5177H9.8721C10.744 17.5177 11.4471 16.8146 11.4471 15.9427V15.8302C11.4471 15.7177 11.5315 15.6052 11.644 15.549C11.7002 15.5208 11.7284 15.5208 11.7846 15.4927C11.9252 15.4365 12.0377 15.4646 12.1221 15.549L12.1784 15.6333C12.4596 15.9427 12.8534 16.1115 13.2752 16.1115C13.6971 16.1115 14.0909 15.9708 14.4002 15.6615L15.5252 14.5646C16.144 13.974 16.1721 12.9615 15.5534 12.3427L15.4971 12.2583C15.4127 12.174 15.3846 12.0333 15.4409 11.949C15.4971 11.8365 15.5252 11.7521 15.5815 11.6396C15.6377 11.5271 15.7502 11.4708 15.8627 11.4708H15.9471H15.9752C16.819 11.4708 17.5221 10.7958 17.5502 9.92397L17.5784 8.34897C17.5221 8.01147 17.3534 7.5896 17.0721 7.30835ZM16.2284 9.9521C16.2284 10.1208 16.0877 10.2615 15.919 10.2615H15.8346H15.8065C15.1596 10.2615 14.569 10.6552 14.344 11.2177C14.3159 11.3021 14.2596 11.3865 14.2315 11.4708C13.9784 12.0333 14.0909 12.7365 14.5409 13.1865L14.5971 13.2708C14.7096 13.3833 14.7096 13.5802 14.5971 13.6927L13.4721 14.7896C13.3877 14.874 13.3034 14.874 13.2471 14.874C13.1909 14.874 13.1065 14.874 13.0221 14.7896L12.9659 14.7052C12.5159 14.2271 11.8409 14.0865 11.2221 14.3677L11.1096 14.424C10.4909 14.6771 10.0971 15.2396 10.0971 15.8865V15.999C10.0971 16.1677 9.95648 16.3083 9.78773 16.3083H8.21273C8.04398 16.3083 7.90335 16.1677 7.90335 15.999V15.8865C7.90335 15.2396 7.5096 14.649 6.89085 14.424C6.80648 14.3958 6.69398 14.3396 6.6096 14.3115C6.3846 14.199 6.1596 14.1708 5.9346 14.1708C5.54085 14.1708 5.1471 14.3115 4.83773 14.6208L4.78148 14.649C4.66898 14.7615 4.4721 14.7615 4.3596 14.649L3.26273 13.524C3.17835 13.4396 3.17835 13.3552 3.17835 13.299C3.17835 13.2427 3.17835 13.1583 3.26273 13.074L3.31898 13.0177C3.7971 12.5677 3.93773 11.8646 3.6846 11.3021C3.65648 11.2177 3.62835 11.1333 3.5721 11.049C3.3471 10.4583 2.7846 10.0365 2.13773 10.0365H2.05335C1.8846 10.0365 1.74398 9.89585 1.74398 9.7271L1.7721 8.1521C1.7721 8.0396 1.82835 7.98335 1.85648 7.9271C1.8846 7.89897 1.96898 7.84272 2.08148 7.84272H2.16585C2.81273 7.87085 3.40335 7.4771 3.65648 6.88647C3.6846 6.8021 3.74085 6.71772 3.76898 6.63335C4.0221 6.07085 3.9096 5.36772 3.4596 4.91772L3.40335 4.83335C3.29085 4.72085 3.29085 4.52397 3.40335 4.41147L4.52835 3.3146C4.61273 3.23022 4.6971 3.23022 4.75335 3.23022C4.8096 3.23022 4.89398 3.23022 4.97835 3.3146L5.0346 3.39897C5.4846 3.8771 6.1596 4.01772 6.77835 3.7646L6.89085 3.70835C7.5096 3.45522 7.90335 2.89272 7.90335 2.24585V2.13335C7.90335 2.02085 7.9596 1.9646 7.98773 1.90835C8.01585 1.8521 8.10023 1.82397 8.21273 1.82397H9.78773C9.95648 1.82397 10.0971 1.9646 10.0971 2.13335V2.24585C10.0971 2.89272 10.4909 3.48335 11.1096 3.70835C11.194 3.73647 11.3065 3.79272 11.3909 3.82085C11.9815 4.1021 12.6846 3.9896 13.1627 3.5396L13.2471 3.48335C13.3596 3.37085 13.5565 3.37085 13.669 3.48335L14.7659 4.60835C14.8502 4.69272 14.8502 4.7771 14.8502 4.83335C14.8502 4.8896 14.8221 4.97397 14.7659 5.05835L14.7096 5.1146C14.2034 5.53647 14.0627 6.2396 14.2877 6.8021C14.3159 6.88647 14.344 6.97085 14.4002 7.05522C14.6252 7.64585 15.1877 8.06772 15.8346 8.06772H15.919C16.0315 8.06772 16.0877 8.12397 16.144 8.1521C16.2002 8.18022 16.2284 8.2646 16.2284 8.3771V9.9521Z"
                        fill=""
                      />
                      <path
                        d="M9.00029 5.22705C6.89092 5.22705 5.17529 6.94268 5.17529 9.05205C5.17529 11.1614 6.89092 12.8771 9.00029 12.8771C11.1097 12.8771 12.8253 11.1614 12.8253 9.05205C12.8253 6.94268 11.1097 5.22705 9.00029 5.22705ZM9.00029 11.6114C7.59404 11.6114 6.44092 10.4583 6.44092 9.05205C6.44092 7.6458 7.59404 6.49268 9.00029 6.49268C10.4065 6.49268 11.5597 7.6458 11.5597 9.05205C11.5597 10.4583 10.4065 11.6114 9.00029 11.6114Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_9763">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.052124)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Settings
                </NavLink>
              </li>
              {/* <!-- Menu Item Settings --> */}
            </ul>
          </div>

          {/* <!-- Others Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              OTHERS
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Chart --> */}
              <li>
                <NavLink
                  to="/chart"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('chart') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_130_9801)">
                      <path
                        d="M10.8563 0.55835C10.5188 0.55835 10.2095 0.8396 10.2095 1.20522V6.83022C10.2095 7.16773 10.4907 7.4771 10.8563 7.4771H16.8751C17.0438 7.4771 17.2126 7.39272 17.3251 7.28022C17.4376 7.1396 17.4938 6.97085 17.4938 6.8021C17.2688 3.28647 14.3438 0.55835 10.8563 0.55835ZM11.4751 6.15522V1.8521C13.8095 2.13335 15.6938 3.8771 16.1438 6.18335H11.4751V6.15522Z"
                        fill=""
                      />
                      <path
                        d="M15.3845 8.7427H9.1126V2.69582C9.1126 2.35832 8.83135 2.07707 8.49385 2.07707C8.40947 2.07707 8.3251 2.07707 8.24072 2.07707C3.96572 2.04895 0.506348 5.53645 0.506348 9.81145C0.506348 14.0864 3.99385 17.5739 8.26885 17.5739C12.5438 17.5739 16.0313 14.0864 16.0313 9.81145C16.0313 9.6427 16.0313 9.47395 16.0032 9.33332C16.0032 8.99582 15.722 8.7427 15.3845 8.7427ZM8.26885 16.3083C4.66885 16.3083 1.77197 13.4114 1.77197 9.81145C1.77197 6.3802 4.47197 3.53957 7.8751 3.3427V9.36145C7.8751 9.69895 8.15635 10.0083 8.52197 10.0083H14.7938C14.6813 13.4958 11.7845 16.3083 8.26885 16.3083Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_9801">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.052124)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Chart
                </NavLink>
              </li>
              {/* <!-- Menu Item Chart --> */}

              {/* <!-- Menu Item Ui Elements --> */}
              <SidebarLinkGroup
                activeCondition={pathname === '/ui' || pathname.includes('ui')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === '/ui' || pathname.includes('ui')) &&
                          'bg-graydark dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_130_9807)">
                            <path
                              d="M15.7501 0.55835H2.2501C1.29385 0.55835 0.506348 1.34585 0.506348 2.3021V7.53335C0.506348 8.4896 1.29385 9.2771 2.2501 9.2771H15.7501C16.7063 9.2771 17.4938 8.4896 17.4938 7.53335V2.3021C17.4938 1.34585 16.7063 0.55835 15.7501 0.55835ZM16.2563 7.53335C16.2563 7.8146 16.0313 8.0396 15.7501 8.0396H2.2501C1.96885 8.0396 1.74385 7.8146 1.74385 7.53335V2.3021C1.74385 2.02085 1.96885 1.79585 2.2501 1.79585H15.7501C16.0313 1.79585 16.2563 2.02085 16.2563 2.3021V7.53335Z"
                              fill=""
                            />
                            <path
                              d="M6.13135 10.9646H2.2501C1.29385 10.9646 0.506348 11.7521 0.506348 12.7083V15.8021C0.506348 16.7583 1.29385 17.5458 2.2501 17.5458H6.13135C7.0876 17.5458 7.8751 16.7583 7.8751 15.8021V12.7083C7.90322 11.7521 7.11572 10.9646 6.13135 10.9646ZM6.6376 15.8021C6.6376 16.0833 6.4126 16.3083 6.13135 16.3083H2.2501C1.96885 16.3083 1.74385 16.0833 1.74385 15.8021V12.7083C1.74385 12.4271 1.96885 12.2021 2.2501 12.2021H6.13135C6.4126 12.2021 6.6376 12.4271 6.6376 12.7083V15.8021Z"
                              fill=""
                            />
                            <path
                              d="M15.75 10.9646H11.8688C10.9125 10.9646 10.125 11.7521 10.125 12.7083V15.8021C10.125 16.7583 10.9125 17.5458 11.8688 17.5458H15.75C16.7063 17.5458 17.4938 16.7583 17.4938 15.8021V12.7083C17.4938 11.7521 16.7063 10.9646 15.75 10.9646ZM16.2562 15.8021C16.2562 16.0833 16.0312 16.3083 15.75 16.3083H11.8688C11.5875 16.3083 11.3625 16.0833 11.3625 15.8021V12.7083C11.3625 12.4271 11.5875 12.2021 11.8688 12.2021H15.75C16.0312 12.2021 16.2562 12.4271 16.2562 12.7083V15.8021Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_130_9807">
                              <rect
                                width="18"
                                height="18"
                                fill="white"
                                transform="translate(0 0.052124)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        UI Elements
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && 'rotate-180'
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Alerts
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/ui/buttons"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Buttons
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Ui Elements --> */}

              {/* <!-- Menu Item Auth Pages --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/auth' || pathname.includes('auth')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === '/auth' || pathname.includes('auth')) &&
                          'bg-graydark dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_130_9814)">
                            <path
                              d="M12.7127 0.55835H9.53457C8.80332 0.55835 8.18457 1.1771 8.18457 1.90835V3.84897C8.18457 4.18647 8.46582 4.46772 8.80332 4.46772C9.14082 4.46772 9.45019 4.18647 9.45019 3.84897V1.88022C9.45019 1.82397 9.47832 1.79585 9.53457 1.79585H12.7127C13.3877 1.79585 13.9221 2.33022 13.9221 3.00522V15.0709C13.9221 15.7459 13.3877 16.2802 12.7127 16.2802H9.53457C9.47832 16.2802 9.45019 16.2521 9.45019 16.1959V14.2552C9.45019 13.9177 9.16894 13.6365 8.80332 13.6365C8.43769 13.6365 8.18457 13.9177 8.18457 14.2552V16.1959C8.18457 16.9271 8.80332 17.5459 9.53457 17.5459H12.7127C14.0908 17.5459 15.1877 16.4209 15.1877 15.0709V3.03335C15.1877 1.65522 14.0627 0.55835 12.7127 0.55835Z"
                              fill=""
                            />
                            <path
                              d="M10.4346 8.60205L7.62207 5.7333C7.36895 5.48018 6.97519 5.48018 6.72207 5.7333C6.46895 5.98643 6.46895 6.38018 6.72207 6.6333L8.46582 8.40518H3.45957C3.12207 8.40518 2.84082 8.68643 2.84082 9.02393C2.84082 9.36143 3.12207 9.64268 3.45957 9.64268H8.49395L6.72207 11.4427C6.46895 11.6958 6.46895 12.0896 6.72207 12.3427C6.83457 12.4552 7.00332 12.5114 7.17207 12.5114C7.34082 12.5114 7.50957 12.4552 7.62207 12.3145L10.4346 9.4458C10.6877 9.24893 10.6877 8.85518 10.4346 8.60205Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_130_9814">
                              <rect
                                width="18"
                                height="18"
                                fill="white"
                                transform="translate(0 0.052124)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        Authentication
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && 'rotate-180'
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/auth/signin"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Sign In
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/auth/signup"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Sign Up
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Auth Pages --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
    :<div></div>}</div>
  );
};

export default Sidebar;

```

## Interceptores

Será necesario instalar la siguiente librería:

```
npm i axios
```

Luego será necesario crear el siguiente archivo `src/interceptors/axiosInterceptor.ts`

``` tsx

import axios from "axios";

// Lista de rutas que no deben ser interceptadas
const EXCLUDED_ROUTES = ["/login", "/register"];

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Cambia la URL base según tu API
    headers: { "Content-Type": "application/json" },
});

// Interceptor de solicitud
api.interceptors.request.use(
    (config) => {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        // Verificar si la URL está en la lista de excluidas
        if (EXCLUDED_ROUTES.some((route) => config.url?.includes(route)) || !user) {
            return config;
        }
        // Agregar token si la ruta no está excluida
        const token = user["token"]
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor de respuesta
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            console.log("No autorizado, redirigiendo a login...");
            window.location.href = "/login"; // Redirigir si la sesión expira
        }
        return Promise.reject(error);
    }
);

export default api;

```

Luego, en lugar de importar Axios directamente, usa el interceptor en tus servicios.

``` tsx
import api from "./axiosInterceptor";

export const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error al obtener usuarios", error);
    throw error;
  }
};

````

## Guardianes

Crear el archivo `src/components/Auth/PotectedRoute.tsx`

```
/src
 ├── /components
 │    ├── /Auth
 │    │    ├── ProtectedRoute.tsx   ✅ (Aquí)
 ├── /pages
 │    ├── LoginPage.tsx
 │    ├── Dashboard.tsx
 ├── App.tsx
 ├── main.tsx
```

Este debe de poseer el siguiente contenido
``` tsx
import { Navigate, Outlet } from "react-router-dom";

// Función para verificar si el usuario está autenticado
const isAuthenticated = () => {
    const user = localStorage.getItem("user");
    return user ? true : false;
};

// Componente de Ruta Protegida
const ProtectedRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/auth/signin" replace />;
};

export default ProtectedRoute;

```

Luego en el archivo de App `src/App.tsx`

```
import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';

import ProtectedRoute from "../src/components/Auth/ProtectedRoute";

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<DefaultLayout />}>
            <Route index element={<ECommerce />} />
            {routes.map((routes, index) => {
              const { path, component: Component } = routes;
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    <Suspense fallback={<Loader />}>
                      <Component />
                    </Suspense>
                  }
                />
              );
            })}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

```
# Sockets

Para implementar un cliente de **Socket.IO** en un proyecto **React** donde el backend envía notificaciones en tiempo real, sigue estos pasos:

---

### **1. Instalar Socket.IO Client**
En tu proyecto de React, instala la dependencia de `socket.io-client`:
```sh
npm install socket.io-client
```

---

### **2. Configurar el Cliente en React**
Debes establecer la conexión con el servidor y escuchar los eventos de notificación. Para esto, puedes usar **useEffect** y **useState** en un contexto global o directamente en el componente `Navbar`.

#### **Ejemplo de uso en un Navbar con estado global**  
``` tsx
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // Ajusta la URL de tu backend

const Navbar = () => {
  const [notifications, setNotifications] = useState(0);

  useEffect(() => {
    socket.on("new_notification", () => {
      setNotifications((prev) => prev + 1);
    });

    return () => {
      socket.off("new_notification");
    };
  }, []);

  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-xl">Mi App</h1>
      <div className="relative">
        <button className="relative">
          🔔 Notificaciones
          {notifications > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-xs px-2 py-1 rounded-full">
              {notifications}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
```

---

### **3. Enviar Notificaciones desde el Backend**
El backend (Node.js con Express y Socket.IO) debe emitir un evento llamado `"new_notification"` cuando llegue una nueva notificación:

``` sh
pip install flask flask-socketio eventlet
```

``` py
from flask import Flask
from flask_socketio import SocketIO
import eventlet

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")


@app.route("/")
def home():
    return "Socket.IO Server Running"

def send_notifications():
    contador=0
    """Función que emite notificaciones cada 5 segundos"""
    while True:
        eventlet.sleep(5)  # Espera 5 segundos
        socketio.emit("new_notification", {"message": "¡Tienes una nueva notificación!"})
        print("Notificación enviada "+str(contador))
        contador+=1

@socketio.on("connect")
def handle_connect():
    print("Cliente conectado")
    socketio.start_background_task(send_notifications)

@socketio.on("disconnect")
def handle_disconnect():
    print("Cliente desconectado")

if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=5000, debug=True)
```

---

### **4. Mejoras Opcionales**
- **Context API**: Si quieres usarlo en varios componentes, puedes manejar el estado de `notifications` con **Context API**.
- **Redux**: Si usas Redux, puedes actualizar el estado global con las notificaciones.
- **Limpieza de Eventos**: Es importante remover los eventos con `socket.off()` en el `useEffect` para evitar fugas de memoria.

---

### **Resumen**
1. Instala `socket.io-client`.
2. Conéctate al backend en `useEffect()`.
3. Escucha el evento `new_notification`.
4. Actualiza el estado y muestra el contador en el Navbar.
5. Emite notificaciones desde el backend con `socket.emit("new_notification")`.
