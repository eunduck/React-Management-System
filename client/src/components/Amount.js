import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Checkbox } from '@material-ui/core';

class Amount extends React.Component {
    render() {
        function  clickEdit(e) {
            console.log(e);            
        }
        return (
            <TableRow>
                <TableCell><input type="checkbox"/></TableCell>
                <TableCell>{this.props.createdAt}</TableCell>
                <TableCell>{this.props.category}</TableCell>
                <TableCell>{this.props.content}</TableCell>
                <TableCell>{this.props.amount}</TableCell>
                <TableCell>
                    <button onClick={clickEdit.bind(this, this.props.id)}>
                        수정
                    </button>
                </TableCell>
            </TableRow>
        )
    }
}

export default Amount;
