var dataTable;

$(document).ready(function () {
    loadDataTable();
})


function loadDataTable() {
    dataTable = $('#tblData').dataTable({
        "ajax": {
            "url" : "/Admin/CoverType/GetAll"
        },
        "columns": [
            { "data": "name", "Width": "60%" },
            {
                "data": "id",
                "render": function (data) {
                    return `
                             <div class="text-center">
                               <a href="/Admin/CoverType/Upsert/${data}" class="btn btn-success text-white" style="cursor:pointer">
                                  <i class="fas fa-edit"></i>
                              </a>
                               <a onclick=Delete("/Admin/CoverType/Delete/${data}") class="btn btn-danger text-white" style="cursor:pointer">
                                  <i class="fas fa-trash-alt"></i>
                               </a>
                            </div>
                            `;
                }," Width" : "40%"
            }
        ]
    })
}


function Delete(url) {
    swal({
        title: "Are you sure ?",
        text: "Once deleted, you will not be able to recover",
        icon: "warning",
        buttons: true,
        dangerMode: true
    }).then((willDelete) => {
        if (willDelete) {
            $.ajax({
                type: "DELETE",
                url: url,
                success: function (data) {
                    if (data.success) {
                        toastr.success(data.message);
                        dataTable.ajax.reload();
                    }
                    toastr.error(data.message);
                }
            });
        }
    });
}

