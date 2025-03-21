import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export const useProveedores = () => {
    const [proveedores, setProveedores] = useState([]);
    const [proveedorActual, setProveedorActual] = useState(null);

    // Cargar proveedores desde localStorage al iniciar
    useEffect(() => {
        const datosGuardados = JSON.parse(localStorage.getItem("proveedores")) || [];
        setProveedores(datosGuardados);
    }, []);

    // Guardar en localStorage
    const guardarEnLocalStorage = (data) => {
        localStorage.setItem("proveedores", JSON.stringify(data));
    };

    // Agregar un nuevo proveedor
    const agregarProveedor = (proveedor) => {
        const nuevosProveedores = [...proveedores, proveedor];
        setProveedores(nuevosProveedores);
        guardarEnLocalStorage(nuevosProveedores);
        Swal.fire("Éxito", "Proveedor agregado correctamente", "success");
    };

    // Editar un proveedor
    const editarProveedor = (proveedorEditado) => {
        const nuevosProveedores = proveedores.map((p) => 
            p.id === proveedorEditado.id ? proveedorEditado : p
        );
        setProveedores(nuevosProveedores);
        guardarEnLocalStorage(nuevosProveedores);
        setProveedorActual(null);
        Swal.fire("Actualizado", "Proveedor actualizado correctamente", "success");
    };

    // Eliminar un proveedor
    const eliminarProveedor = (id) => {
        const nuevosProveedores = proveedores.filter((p) => p.id !== id);
        setProveedores(nuevosProveedores);
        guardarEnLocalStorage(nuevosProveedores);
        Swal.fire("Eliminado", "Proveedor eliminado correctamente", "success");
    };

    return {
        proveedores,
        proveedorActual,
        agregarProveedor,
        editarProveedor,
        eliminarProveedor,
        setProveedorActual
    };
};
