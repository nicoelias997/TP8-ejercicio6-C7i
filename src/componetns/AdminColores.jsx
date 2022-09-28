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

  const eliminarColor = (color) => {
    const arrayFiltrado = arrayColor.filter(item => item.id !== color)
    setArrayColor(arrayFiltrado)
    }

  return (
    <div className="container-fluid mt-2">
      <Card xs={12} sx={{ maxWidth: "100%"}} mb={2}>
        <CardHeader title="Administrar colores"></CardHeader>
        <CardMedia>
          <CardActionArea sx={{ backgroundColor: "#e3f2fd" }}>
            <div id="cajaAdmin">
              <Box
              id="boxAdmin"
                sx={{
                  width: 100,
                  height: 100,
                  backgroundColor: "primary.dark",
                  marginTop: 3,
                  marginBottom: 3,
                  marginRight: 1,
                }}
              />
              <OutlinedInput
                id="inputAdmin"
                style={{ maxHeight: "5px", maxWidth: "80%" }}
                sx={{marginBottom:"15px"}}
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

      <List spacing={2} 
      id="listaColor"
      xs={12} sm={12} md={12}>
        {arrayColor.map((item) => (
          <ListItem key={item.id} id="listaItem">
            <ListaColores
            eliminarColor={() => eliminarColor(item.id)}
              colorFondo={item.nombreColor}
              titulo={item.nombreColor}
            ></ListaColores>
          </ListItem>
        ))}
      </List>

    </div>

  );
};

export default AdminColores;
