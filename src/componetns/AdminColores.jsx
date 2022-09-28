import React from "react";

import Swal from "sweetalert2";

import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Box,
  CardActions,
  Button,
  List,
  ListItem,
  OutlinedInput
} from "@mui/material";

import ListaColores from "./ListaColores";
import { validarColor } from "../colores";

const AdminColores = () => {
  
  const storageColores = JSON.parse(localStorage.getItem("listaColores")) || [];

  const [color, setColor] = React.useState("");
  const [arrayColor, setArrayColor] = React.useState(storageColores);

  React.useEffect(() => {
    localStorage.setItem("listaColores", JSON.stringify(arrayColor));
  }, [arrayColor]);

  const agregarColor = () => {
    if (!validarColor(color) || !color.trim()) {
      Swal.fire({
        icon: "info",
        html: "<p>Indica un color, prueba en <strong>Ingles</strong><br>Ej: blue, red, deepOrange</p>",
      });
      setColor("");
      return;
    } else {
      setArrayColor([...arrayColor, { nombreColor: color, id: color }]);
      setColor("");
    }
  };

  return (
    <div className="container-fluid">
      <Card xs={12} sx={{ maxWidth: "100%"}} mb={2}>
        <CardHeader title="Administrar colores"></CardHeader>
        <CardMedia>
          <CardActionArea sx={{ backgroundColor: "#e3f2fd" }}>
            <div className="row d-flex justify-content-center align-items-center">
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
              <OutlinedInput
                className="col-12 col-sm-12- col-md-6"
                style={{ maxHeight: "5px" }}
                autoFocus
                type="text"
                placeholder="Elegir color. Ej: lightBlue"
                onChange={(e) => setColor(e.target.value)}
                value={color}
                multiline
              ></OutlinedInput>
            </div>
          </CardActionArea>
        </CardMedia>
        <CardActions className="justify-content-end mt-2 mb-2">
          <Button
            variant="contained"
            type="submit"
            value={color}
            onClick={() => agregarColor()}
          >
            Guardar
          </Button>
        </CardActions>
      </Card>
    <div className="d-flex justify-content-evenly">
      <List className="list-group row" spacing={2}>
        {arrayColor.map((item) => (
          <ListItem key={item.id} className="list-group-item">
            <ListaColores
              colorFondo={item.nombreColor}
              titulo={item.nombreColor}
            ></ListaColores>
          </ListItem>
        ))}
      </List>
    </div>

    </div>

  );
};

export default AdminColores;
