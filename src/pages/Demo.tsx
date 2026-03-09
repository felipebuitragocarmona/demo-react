import { useState, useEffect } from "react";

export default function Demo() {


    useEffect(() => {
        console.log("Se cargó la página");
    }, []);

    return <p>Hola mundo</p>;
}