import React from "react";
import { Icon } from '@iconify/react';
import axios from "axios";
export default class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            number: '',
        }

    }

    buttonClick = (e) => {
        this.gridApi = this.props.api;

        // this.setState({
        // visible: true
        // })
        let deletedRow = this.props.node.data;
        this.gridApi.updateRowData({ remove: [deletedRow] })
      
        console.log(deletedRow);

        // axios.delete(`http://192.168.1.124:8080/user/delete?${this.state.username}`)
        //     .then(res => console.log(res.data));

        axios({
            // Endpoint to DELETE user
            url: `http://localhost:8080/user/delete?userId=${deletedRow.userId}`,
            
            method: "DELETE"
        })

            // Handle the response from backend here
            .then((res) => {
                // this.gridApi.updateRowData({ remove: [deletedRow] })

            })

            // Catch errors if any
            .catch((err) => { });
    }

    // };

    render() {
        return (
            <>
                <div><button onClick={() => this.buttonClick(this.props.node)}><Icon icon="ion:trash-bin" style={{ color: 'red' }} /></button></div>

                {/* <div><button onClick={(e)=>this.deleteValues(e)}><Icon icon="ion:trash-bin" style={{ color: 'red' }}/></button></div> */}

            </>
        );
    }
}