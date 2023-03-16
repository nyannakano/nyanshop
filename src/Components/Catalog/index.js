import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Product from "../Product";
import Boop from '../Animation/Boop'

const Item = styled(Paper)(({ theme }) => ({  // This const defines the style for the products
    backgroundColor: '#a1def8',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
}));
export default function Catalog() {
    return (
        <React.Fragment>
            <Container  fixed>
                <Box sx={{
                    flexGrow: 1,
                    backgroundColor: 'transparent'}}>
                    <Grid container spacing={{ xs: 1, md: 1}} columns={{ xs: 4, sm: 8, md: 16 }}>
                        {Array.from(Array(8)).map((_, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Boop rotation={20} timing={200}>
                                <Item>
                                    <Product />
                                    <h1>{index+1}</h1>
                                </Item>
                                </Boop>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}