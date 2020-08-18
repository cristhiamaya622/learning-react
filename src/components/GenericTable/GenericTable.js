import React from 'react';
import Table from 'react-bootstrap/Table'
import { TableConsumer } from '../../contexts/tableContext';
import './GenericTable.scss';

function GenericTable() {
  return (
    <TableConsumer>
      {({ criteria }) =>
        <div className="generic-table">
          <h2 className="generic-table__title">Resultados para "{criteria}"</h2>
          {!criteria ? "" : <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Primer Nombre</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </Table>}
        </div>
      }
    </TableConsumer>
  );
}

export default GenericTable;