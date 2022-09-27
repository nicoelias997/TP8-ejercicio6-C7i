import React from "react";


import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Box,
  TextField,
  CardActions,
  Button
} from "@mui/material";

const AdminColores = () => {
  return (
      <Card xs={12} sx={{ maxWidth: "80%" }}>
        <CardHeader title="Administrar colores"></CardHeader>
        <CardMedia>
            <CardActionArea sx={{backgroundColor: "#e3f2fd"}}>
                <div className="row d-flex justify-content-center">
                <Box
                sx={{
                  width: 100,
                  height: 100,
                  backgroundColor: "primary.dark",
                  marginTop: 3,
                  marginBottom: 3,
                  marginRight: 4,
                }}
              />
              <TextField
                className="col-12 col-sm-12- col-md-6"
                margin="dense"
                type="text"
                id="standard-basic"
                label="Elegir color. Ej: azul"
                variant="standard"
              />
                </div>
              </CardActionArea>
        </CardMedia>
        <CardActions className="justify-content-end mt-2 mb-2" >
       <Button variant="contained">
        Guardar
        </Button>
        </CardActions>
      </Card>
  );
};

export default AdminColores;
