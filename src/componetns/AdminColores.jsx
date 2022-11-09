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
import { consultarAPI, crearColorAPI, editarColorApi, eliminarColorApi, obtenerColorApi } from "../queries";
import { useState } from "react";

const AdminColores = () => {
  
  // const storageColores = JSON.parse(localStorage.getItem("listaColores")) || [];

  const [color, setColor] = React.useState("");
  const [arrayColor, setArrayColor] = React.useState([]);
  const [id, setId] = useState("")
  const [modoEdicion, setModoEdicion] = useState(false)

  const [editando, setEditando] = useState("")

  React.useEffect(() => {
    // localStorage.setItem("listaColores", JSON.stringify(arrayColor));
    consultarAPI().then(respuesta => {
      setArrayColor(respuesta)
    })
  }, []);

  const agregarColor = () => {
    if (!validarColor(color) || !color.trim()) {
      Swal.fire({
        icon: "info",
        html: "<p>Indica un color, prueba en <strong>Ingles</strong><br>Ej: blue, red, deepOrange</p>",
      });
      return;
    } else {
      crearColorAPI(color).then( respuesta => {
        if(respuesta.status === 201){
          setArrayColor([...arrayColor, { nombreColor: color, id: color }]);
          setColor("");
        }
      })
    }
  };

  const eliminarColor = (id) => {
    eliminarColorApi(id).then(respuesta => {
      if(respuesta.status === 200){
       consultarAPI().then(colores => {
        setArrayColor(colores)
       })
       setId("")
       setColor("")
          setModoEdicion(false)
      } else {
        console.log("Hubo un problema al eliminar el color")
      }
    })
    }

    const obtenerColor = id => {
      setId(id)
      obtenerColorApi(id).then((respuesta) => {
          setColor(respuesta.nombreColor)
          setModoEdicion(true)
          setEditando(respuesta)
        })
      }

    const editarColor = () => {
          editarColorApi(editando.nombreColor, editando._id).then(respuesta => {
            if(respuesta.status === 200){
              consultarAPI().then(respuesta => {
                if(respuesta === 200){
                  setArrayColor(respuesta)
                }
              })
              setId("")
              setModoEdicion(false)
            }
          })
        
      
      // editarColorApi(datos.nombreColor, datos._id).then(respuesta => {
      //   if(respuesta.status === 200){
      //       Swal.fire(
      //         "Tarea editada",
      //         "La tarea fue editado exitosamente",
      //         "success"
      //       )
      //     consultarAPI().then(respuesta => {
      //       setArrayColor(respuesta)
      //     })
      //     setModoEdicion(false)
      //   } 
      //   if(respuesta.status === 400) {
      //     Swal.fire("Hubo un error", "No pudimos editar la tarea", "error")
      //     return
      //   }
      // })
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
          {
            modoEdicion ? <Button
            variant="contained"
            type="submit"
            value={color}
            onClick={() => editarColor()}
          >
            Editar
          </Button> : 
            <Button
            variant="contained"
            type="submit"
            value={color}
            onClick={() => agregarColor()}
          >
            Guardar
          </Button>
          }
        </CardActions>
      </Card>

      <List spacing={2} 
      id="listaColor"
      xs={12} sm={12} md={12}>
        {arrayColor.map((item) => (
          <ListItem  id="listaItem">

            <ListaColores
            key={item._id}
            eliminarColor={() => eliminarColor(item._id)}
              colorFondo={item.nombreColor}
              titulo={item.nombreColor}
              editarColor={() => obtenerColor(item._id)}
            ></ListaColores>
          </ListItem>
        ))}
      </List>

    </div>

  );
};

export default AdminColores;
