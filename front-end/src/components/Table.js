import React from 'react';
import objPath from 'object-path';

const Table = (props)=>{
    const {data, tableMap} = props;
    if(!data || !tableMap) return null;

    const tableData = data.map((row, i) => 
        <tr key={'table_' +i} >
            {Object.keys(tableMap).map(k=> <td key={k}>{objPath.get(row, tableMap[k], '')}</td>)}
        </tr>
    );

    return (
           <table className={props.className}>
                <thead>
                    <tr>
                        {Object.keys(tableMap).map(k=> <th key={k}>{k}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
    );
}

export default Table;