import React from "react";

//researched this section from React Site @ "https://react-bootstrap.github.io/components/table/"
//<thead> creates a entiretable header
//<th> defines a heading for a specific column
//<tr> defines a row of cells in a table

function Table(props) {
    
    return (
        <div>
            <table id="table" className="table table-striped table-sortable text-center">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col" data-field="name" data-sortable="true">
                            <span onClick={() => props.sortBy("name", "last", "first")}>
                                Name
                            </span>
                        </th>
                        <th scope="col">
                            <span onClick={() => props.sortBy("phone")}>Phone</span>
                        </th>
                        <th scope="col">
                            <span onClick={() => props.sortBy("email")}>Email</span>
                        </th>
                        <th scope="col">
                            <span onClick={() => props.sortBy("dob", "date")}>DOB</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {props.state.filteredEmployees.map((employee) => {
                const { first, last } = employee.name;
                const fullName = `${first} ${last}`;

                const dob = props.formatDate(employee.dob.date);
                console.log(dob);
                
                return (
                    <tr key={employee.login.uuid}>
                    <td>
                        <img src={employee.picture.thumbnail} alt={fullName} />
                    </td>
                    <td className="align-middle">{fullName}</td>
                    <td className="align-middle">
                    <a href={`tel:+1${employee.phone}`}>{employee.phone}</a></td>
                    <td className="align-middle email">
                        <a href={`mailto:${employee.email}`}>{employee.email}</a>
                    </td>
                    {/* <Moment format = "L"> */}
                    <td className="align-middle">{dob}</td>
                    {/* </Moment> */}
                    </tr>
                );
                })}
            </tbody>
            </table>        
        </div>
    )
}
export default Table;