import { useState } from "react";
import FormularioProveedor from "./componentes/FormularioProveedor";
import ListaProveedores from "./componentes/ListaProveedores";
import { useProveedores } from "./hooks/useProveedores";
import { Button } from "react-bootstrap";
import "./styles.css";

const App = () => {
    const {
        proveedores,
        proveedorActual,
        agregarProveedor,
        editarProveedor,
        eliminarProveedor,
        setProveedorActual
    } = useProveedores();

    const [show, setShow] = useState(false);

    return (
        <div className="container mt-4 text-center">
            <h1>Gestión de Proveedores</h1>
            <Button className="btn btn-primary mb-3 btn-agregar" onClick={() => setShow(true)}>
             <i className="fas fa-plus me-2"></i> Agregar Nuevo
            </Button>


            <ListaProveedores
                proveedores={proveedores}
                eliminarProveedor={eliminarProveedor}
                seleccionarProveedor={(p) => {
                    setProveedorActual(p);
                    setShow(true);
                }}
            />
            <FormularioProveedor
                agregarProveedor={agregarProveedor}
                editarProveedor={editarProveedor}
                proveedorActual={proveedorActual}
                show={show}
                handleClose={() => {
                    setShow(false);
                    setProveedorActual(null);
                }}
            />
        </div>
    );
};

export default App;
