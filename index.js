import React from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import { useState, useEffect } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import PopupCellRenderer from './PopupCellRenderer';
import './style.css';

const App = () => {
  const [rowData, setRowData] = useState(null);

  const columnDefs = [
    {
      headerName: 'Action (React)',
      cellRenderer: PopupCellRenderer,
      pinned: 'left',
      colId: 'action',
      editable: false,
      maxWidth: 150,
    },
    { field: 'make', editable: true },
    { field: 'model', editable: true },
    { field: 'price', editable: true },
  ];

  const defaultColDef = {
    flex: 1,
    minWidth: 100,
  };

  useEffect(() => {
    setRowData([
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
    ]);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <AgGridReact
        className="ag-theme-alpine"
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        editType="fullRow"
        animateRows={true}
        suppressClickEdit={true}
      ></AgGridReact>
    </div>
  );
};

render(<App />, document.getElementById('root'));
