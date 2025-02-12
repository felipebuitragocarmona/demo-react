# 1. Configuración Inicial del proyecto
1. Descargar plantilla de `https://uideck.com/templates/tailadmin-react`
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

interface SumProps {
  a: number;
  b: number;
  calculate: (x: number, y: number) => number;
}

const Sum: React.FC<SumProps> = ({ a, b, calculate }) => {
  return <p>Resultado: {calculate(a, b)}</p>;
};

export default Sum;
```

#### **Uso del Componente en App.tsx**
```tsx
import React from "react";
import Sum from "./components/Sum";

const App: React.FC = () => {
  const addNumbers = (x: number, y: number): number => x + y;

  return (
    <div>
      <Sum a={5} b={3} calculate={addNumbers} />
    </div>
  );
};

export default App;
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

Ahora será necesario crear los archivos de las páginas para la creación y actualización. En primer lugar se creará en la siguiente ubicación la página de creación: `src/pages/Users/`

``` tsx
import React, { useState } from 'react'; // Asegúrate de importar useState
import { User } from '../../models/user';
import UserFormValidator from '../../components/Users/UserFormValidator'; 

import Swal from 'sweetalert2';
import { createUser } from "../../services/userService";
import Breadcrumb from '../../components/Breadcrumb';
import { useNavigate } from "react-router-dom";

const App = () => {
    const navigate = useNavigate();

    // Estado para almacenar el usuario a editar

    // Lógica de creación
    const handleCreateUser = async (user: User) => {

        try {
            const createdUser = await createUser(user);
            if (createdUser) {
                Swal.fire({
                    title: "Completado",
                    text: "Se ha creado correctamente el registro",
                    icon: "success",
                    timer: 3000
                })
                console.log("Usuario creado con éxito:", createdUser);
                navigate("/users");
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
Ahora la actualización

```
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getUserById, updateUser } from "../../services/userService";
import Swal from "sweetalert2";

import { User } from '../../models/user';
import UserFormValidator from '../../components/Users/UserFormValidator';
import Breadcrumb from "../../components/Breadcrumb";

const UpdateUserPage = () => {
    const { id } = useParams(); // Obtener el ID de la URL
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);

    // Cargar datos del usuario después del montaje
    useEffect(() => {
        const fetchUser = async () => {
            if (!id) return; // Evitar errores si el ID no está disponible
            const userData = await getUserById(parseInt(id));
            setUser(userData);
        };

        fetchUser();
    }, [id]);

    const handleUpdateUser = async (theUser: User) => {
        try {
            const updatedUser = await updateUser(theUser.id || 0, theUser);
            if (updatedUser) {
                Swal.fire({
                    title: "Completado",
                    text: "Se ha actualizado correctamente el registro",
                    icon: "success",
                    timer: 3000
                });
                navigate("/users"); // Redirección en React Router
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

```sh
npm install @reduxjs/toolkit react-redux --force
```




