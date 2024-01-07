import React from 'react';

function Table({JsonData}) {

    console.log(JsonData);

    const DisplayData = JsonData.map(
        (hit) => {
            return ( 
                <tr>
                    <td>{hit.x}</td>
                    <td>{hit.y}</td>
                    <td>{hit.r}</td>
                    <td>{hit.response}</td>
                </tr>
            )
        }
    )

    return (
        <table>
            <thead>
                <tr>
                    <th>x</th>
                    <th>y</th>
                    <th>r</th>
                    <th>resp</th>
                </tr>
            </thead>
            <tbody>
                {DisplayData}
            </tbody>
        </table>
    );
}

export default Table;
