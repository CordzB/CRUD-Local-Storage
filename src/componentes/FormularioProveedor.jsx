import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Modal, Button } from "react-bootstrap";

const FormularioProveedor = ({ agregarProveedor, editarProveedor, proveedorActual, show, handleClose }) => {
    const [proveedor, setProveedor] = useState({
        id: "",
        nombre: "",
        empresa: "",
        email: "",
        telefono: "",
        direccion: ""
    });

    useEffect(() => {
        if (proveedorActual) {
            setProveedor(proveedorActual);
        }
    }, [proveedorActual]);

    const handleChange = (e) => {
        setProveedor({ ...proveedor, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!proveedor.nombre.trim()) {
            Swal.fire("Campo vacío", "Por favor ingresa el nombre del proveedor", "warning");
            return;
        }

        if (!proveedor.empresa.trim()) {
            Swal.fire("Campo vacío", "Por favor ingresa la empresa del proveedor", "warning");
            return;
        }

        if (!proveedor.email.trim()) {
            Swal.fire("Campo vacío", "Por favor ingresa el correo electrónico", "warning");
            return;
        }

        if (!proveedor.telefono.trim()) {
            Swal.fire("Campo vacío", "Por favor ingresa el número de teléfono", "warning");
            return;
        }

        if (!proveedor.direccion.trim()) {
            Swal.fire("Campo vacío", "Por favor ingresa la dirección", "warning");
            return;
        }

        if (proveedorActual) {
            editarProveedor(proveedor);
        } else {
            agregarProveedor({ ...proveedor, id: Date.now().toString() });
        }

        setProveedor({
            id: "",
            nombre: "",
            empresa: "",
            email: "",
            telefono: "",
            direccion: ""
        });

        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {proveedorActual ? (
                        <>
                            <i className="fas fa-edit me-2"></i> Editar Proveedor
                        </>
                    ) : (
                        <>
                            <i className="fas fa-plus me-2"></i> Agregar Proveedor
                        </>
                    )}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 input-group">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                        <input type="text" className="form-control" name="nombre" placeholder="Nombre del proveedor" value={proveedor.nombre} onChange={handleChange} />
                    </div>
                    <div className="mb-3 input-group">
                        <span className="input-group-text"><i className="fas fa-building"></i></span>
                        <input type="text" className="form-control" name="empresa" placeholder="Empresa" value={proveedor.empresa} onChange={handleChange} />
                    </div>
                    <div className="mb-3 input-group">
                        <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                        <input type="email" className="form-control" name="email" placeholder="Correo electrónico" value={proveedor.email} onChange={handleChange} />
                    </div>
                    <div className="mb-3 input-group">
                        <span className="input-group-text"><i className="fas fa-phone"></i></span>
                        <input type="text" className="form-control" name="telefono" placeholder="Teléfono" value={proveedor.telefono} onChange={handleChange} />
                    </div>
                    <div className="mb-3 input-group">
                        <span className="input-group-text"><i className="fas fa-map-marker-alt"></i></span>
                        <input type="text" className="form-control" name="direccion" placeholder="Dirección" value={proveedor.direccion} onChange={handleChange} />
                    </div>
                    <Button type="submit" className="btn btn-primary w-100">
                        {proveedorActual ? <><i className="fas fa-save me-2"></i> Actualizar</> : <><i className="fas fa-check me-2"></i> Agregar</>}
                    </Button>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default FormularioProveedor;
