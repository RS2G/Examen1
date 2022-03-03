"use strict";
var ParametroGrid;
(function (ParametroGrid) {
    if (MensajeApp != "") {
        Toast.fire({ icon: "success", title: MensajeApp });
    }
    function OnClickEliminar(id) {
        ComfirmAlert("¿Desea eliminar el registro seleccionado?", "Eliminar", "warning", '#3085d6', '#d33')
            .then(function (result) {
            if (result.isConfirmed) {
                window.location.href = "Parametro/Grid?handler=Eliminar&id=" + id;
            }
        });
    }
    ParametroGrid.OnClickEliminar = OnClickEliminar;
    $("#GridView").DataTable();
})(ParametroGrid || (ParametroGrid = {}));
//# sourceMappingURL=Grid.js.map