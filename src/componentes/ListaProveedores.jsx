import Swal from "sweetalert2";

const ListaProveedores = ({ proveedores, eliminarProveedor, seleccionarProveedor }) => {
    return (
        <div className="container text-center">
            <h2>Lista de Proveedores</h2>
            <table className="table table-bordered table-striped">
            <thead>
    <tr>
        <th className="text-center"><i className="fas fa-user me-2"></i>Nombre</th>
        <th className="text-center"><i className="fas fa-building me-2"></i>Empresa</th>
        <th className="text-center"><i className="fas fa-envelope me-2"></i>Email</th>
        <th className="text-center"><i className="fas fa-phone me-2"></i>Teléfono</th>
        <th className="text-center"><i className="fas fa-map-marker-alt me-2"></i>Dirección</th>
        <th className="text-center"><i className="fas fa-cogs me-2"></i>Acciones</th>
    </tr>
</thead>

                <tbody>
                    {proveedores.map((proveedor) => (
                        <tr key={proveedor.id}>
                            <td className="text-center">{proveedor.nombre}</td>
                            <td className="text-center">{proveedor.empresa}</td>
                            <td className="text-center">{proveedor.email}</td>
                            <td className="text-center">{proveedor.telefono}</td>
                            <td className="text-center">{proveedor.direccion}</td>
                            <td className="text-center">
                                <button className="btn btn-warning btn-sm me-2" onClick={() => seleccionarProveedor(proveedor)}>
                                    <i className="fas fa-edit me-1"></i> Editar
                                </button>
                                <button className="btn btn-danger btn-sm" onClick={() => eliminarProveedor(proveedor.id)}>
                                    <i className="fas fa-trash-alt me-1"></i> Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaProveedores;
