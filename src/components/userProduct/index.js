import React, {useState, useEffect} from 'react';
import './style.css';
import { Paper, Table, TableContainer, TableBody, TableCell, TableHead, TableRow, makeStyles, Button, TextField  } from '@material-ui/core';
import ViewProduct  from "../viewProduct";

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);
  
    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);
  
    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };

    const searchProducts = (searchText) => {
        var filteredData = items.filter(function(obj) {
            return obj["name"] === searchText;
        });
        
    } 
  
    return { items: sortedItems, requestSort, sortConfig };
};

const useStyles = makeStyles({
    table: {
      maxWidth: 500,
    },
});

function UserProduct(props) {  
    const classes = useStyles();

    const { items, requestSort, searchProducts, sortConfig } = useSortableData(props.products);
    const [ viewItem, setViewItem] = useState(null);
    const [ searchText, setSearchText] = useState('');
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
          return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return(
        <div>
            <Paper elevation={3} className="product-holder">
                <h3>User Products</h3>
                <div> 
                    <TextField
                        type="text"
                        label="search"
                        className="custom-search"
                        value={searchText}
                        onChange={(e) => { 
                            setSearchText(e.target.value);
                        }}
                    />

                    <Button
                        className="btn-margin"
                        variant="contained" color="primary"
                        onClick={() => { 
                        props.searchProducts(searchText);
                    }}>Search</Button>
                </div>

                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>            
                                <TableCell align="right">
                                    <Button
                                        onClick={() => requestSort('name')}
                                        className={getClassNamesFor('name')}
                                    > Name </Button>
                                </TableCell>
                                <TableCell align="right"><Button
                                        onClick={() => requestSort('price')}
                                        className={getClassNamesFor('price')}
                                    > Price </Button>
                                </TableCell>
                                <TableCell align="right"><Button
                                        onClick={() => requestSort('stock')}
                                        className={getClassNamesFor('stock')}
                                    > Stock </Button>
                                </TableCell>
                                <TableCell align="right">
                                </TableCell>
                                <TableCell align="right">
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items && items.length > 0 && items.map((row) => (
                                <TableRow key={row.id}>              
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell align="right">{row.stock}</TableCell>
                                    <TableCell align="right"> 
                                        <Button variant="contained" color="secondary" 
                                            onClick={() => { setViewItem(row)}}>View
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right"> 
                                        <Button variant="contained" color="secondary" onClick={() => {props.deleteProduct(row.id)}}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                { viewItem ? <ViewProduct item={viewItem} handleClose={() => {setViewItem(null)}} /> : <div/>}
            </Paper>
        </div>        
    )
}

export default UserProduct;