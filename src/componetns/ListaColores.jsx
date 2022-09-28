import React from "react";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
  Box
} from "@mui/material";


const ListaColores = (props) => {
  return (
        <Card sx={{ 
          maxWidth: 1 }}>
          <CardHeader title={props.titulo.toUpperCase()}></CardHeader>
          <CardMedia>
            <CardActionArea sx={{
              backgroundColor: "#e3f2fd"
            }}>
              <Box 
                sx={{
                  width: 100,
                  height: 100,
                  backgroundColor: `${props.colorFondo}`,
                  padding: 10,
                  margin: 3
                }}
              ></Box>
            </CardActionArea>
          </CardMedia>
          <CardActions className="justify-content-end">
            <Button type="button" variant="outlined" color="error"
            onClick={props.eliminarColor}
            >
              Borrar
            </Button>
          </CardActions>
        </Card>
  );
};

export default ListaColores;
