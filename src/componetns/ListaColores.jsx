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
        <Card sx={{ maxWidth: 1/2 }}>
          <CardHeader title={props.titulo}></CardHeader>
          <CardMedia>
            <CardActionArea>
              <Box
              ml={4.5}
              mt={1}
              mb={1}
                sx={{
                  width: 100,
                  height: 100,
                  backgroundColor: `${props.colorFondo}`
                }}
              ></Box>
            </CardActionArea>
          </CardMedia>
          <CardActions className="justify-content-end">
            <Button type="button" variant="outlined" color="error"
            // onClick={() => eliminarColor(props.nombreColor)}
            >
              Borrar
            </Button>
          </CardActions>
        </Card>
  );
};

export default ListaColores;
