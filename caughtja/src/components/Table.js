// import React from 'react';
// import MaterialTable from 'material-table';

// export default function Table() {
//     const [state, setState] = React.useState({
//         columns: [
//             { title: 'Name', field: 'name' },
//             { title: 'Surname', field: 'surname' },
//             { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
//             {
//                 title: 'Role',
//                 field: 'role',
//                 lookup: { 34: 'Web Developer', 63: 'Engineer', 24: 'Supply Chain' },
//             },
//         ],
//         data: [
//             { name: 'Joshua', surname: 'Kuruvilla', birthYear: 1995, role: 24 },
//             { name: 'Crystal', surname: 'Ly', birthYear: 1991, role: 34 },
//             { name: 'Michael', surname: 'Abraham', birthYear: 1998, role: 63 },
//             { name: 'Matthew', surname: 'Varughese', birthYear: 1997, role: 34 },
//             { name: 'Matt', surname: 'Stanzak', birthYear: 1987, role: 63 },
//             { name: 'Gabe', surname: 'Talon', birthYear: 1994, role: 63 },
//             { name: 'Eric', surname: 'Butler', birthYear: 1989, role: 34 },
//             { name: 'Ryan', surname: 'Gillette', birthYear: 1994, role: 63 },
//             { name: 'Jessie', surname: 'Burch', birthYear: 1995, role: 24 },
//             { name: 'Lacy', surname: 'Kesler', birthYear: 1987, role: 34 },

//         ],
//     });

//     return (
//         <MaterialTable
//             title="Employee Directory"
//             columns={state.columns}
//             data={state.data}
//             editable={{
//                 onRowAdd: newData =>
//                     new Promise(resolve => {
//                         setTimeout(() => {
//                             resolve();
//                             setState(prevState => {
//                                 const data = [...prevState.data];
//                                 data.push(newData);
//                                 return { ...prevState, data };
//                             });
//                         }, 600);
//                     }),
//                 onRowUpdate: (newData, oldData) =>
//                     new Promise(resolve => {
//                         setTimeout(() => {
//                             resolve();
//                             if (oldData) {
//                                 setState(prevState => {
//                                     const data = [...prevState.data];
//                                     data[data.indexOf(oldData)] = newData;
//                                     return { ...prevState, data };
//                                 });
//                             }
//                         }, 600);
//                     }),
//                 onRowDelete: oldData =>
//                     new Promise(resolve => {
//                         setTimeout(() => {
//                             resolve();
//                             setState(prevState => {
//                                 const data = [...prevState.data];
//                                 data.splice(data.indexOf(oldData), 1);
//                                 return { ...prevState, data };
//                             });
//                         }, 600);
//                     }),
//             }}
//         />
//     );
// }