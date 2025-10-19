import "./ProductList.css";
import { data } from "../../result";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const columns = [
  { field: "id", headerName: "ID", width: 100, sortable: true, filter: true },

  {
    field: "_year",
    headerName: "Year",
    width: 150,
    sortable: true,
    sort: "asc", 
    filter: "agTextColumnFilter",
  },
  {
    field: "month",
    headerName: "Month",
    width: 120,
    sortable: true,
    filter: "agTextColumnFilter",
  },
  {
    field: "product",
    headerName: "Product",
    width: 150,
    sortable: true,
    filter: "agTextColumnFilter",
  },
  {
    field: "state",
    headerName: "State",
    width: 180,
    sortable: true,
    filter: "agTextColumnFilter",
  },
  {
    field: "requirement_in_mt_",
    headerName: "Requirement (MT)",
    width: 150,
    sortable: true,
    filter: "agNumberColumnFilter",
    valueGetter: (params) => parseFloat(params.data.requirement_in_mt_) || 0,
  },
  {
    field: "availability_in_mt_",
    headerName: "Availability (MT)",
    width: 150,
    sortable: true,
    filter: "agNumberColumnFilter",
    valueGetter: (params) => parseFloat(params.data.availability_in_mt_) || 0,
  },
];

function ProductList() {
  return (
    <div className="productList">
      <h3>Fertilizer Data Table</h3>

      <div className="productListTable">
        <div
          className="ag-theme-alpine"
          style={{ width: "100%", height: "600px" }}
          title="click to sort"
        >
          <AgGridReact
            rowData={data}
            columnDefs={columns}
            defaultColDef={{
              sortable: true,
              filter: true,
              resizable: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
