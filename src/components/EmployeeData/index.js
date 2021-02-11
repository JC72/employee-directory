import React from "react";
import Moment from "react-moment"

function EmployeeData (props) {
    return(
        <div>
            <tbody>
                {props.state.filteredEmployees.map((employee) => {
                const { first, last } = employee.name;
                const fullName = `${first} ${last}`;

                // Format date
                const dob = props.formatDate(employee.dob.date);

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
                    <Moment format = "MM/DD/YYYY">
                    <td className="align-middle">{dob}</td>
                    </Moment>
                    </tr>
                );
                })}
            </tbody>
        </div>
    )
}
export default EmployeeData;