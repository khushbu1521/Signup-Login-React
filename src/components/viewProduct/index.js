import React, {useState, useEffect} from 'react';
import './style.css';
import { Modal, Button, CardContent, Card, Paper } from '@material-ui/core';

function ViewProduct(props) {
    const [open, setOpen] = useState(true);   
    return(
        <Modal
            open={open}
            onClose={() => props.handleClose()}>
                <div className="view-product-container">
                    <Paper className="card-holder">
                        <Card>
                            <strong>Product Name :: </strong> <CardContent>{props.item.name}</CardContent>
                            <strong>Product Price ::</strong> <CardContent>{props.item.price}</CardContent>
                            <strong>Product Stock ::</strong> <CardContent>{props.item.stock}</CardContent>
                        </Card> 
                    </Paper>
                </div>

               
                    
        </Modal>    
    )
}

export default ViewProduct;