import React from "react";
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
  OutlinedInput,
} from "@mui/material";

import ListaColores from "./ListaColores";
import { validarColor } from "../colores";

const AdminColores = () => {

    const [color, setColor] = React.useState("")
    const [arrayColor, setArrayColor] = React.useState([])

    const agregarColor = () => {
        if(!color.trim()){
            console.log("No existe ese color")
            setColor("")
            return
        } 
        if(!validarColor(color)){
            console.log("No tenemos ese color")
            setColor("")
            return
        }  else {
            setArrayColor([
                ...arrayColor,
                {nombreColor: color,
                id: color
                }
            ])
            console.log(color)
            setColor("")
        } 
    }

    // const eliminarColor = (color) => {
    //     console.log("eliminar")
    // }


   

  return (
    <div className="container">
      <Card xs={12} sx={{ maxWidth: "80%" }}>
        <CardHeader title="Administrar colores"></CardHeader>
        <CardMedia>
            <CardActionArea sx={{backgroundColor: "#e3f2fd"}}>
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
                style={{maxHeight: "5px"}}
                autoFocus
                type="text"
                placeholder="Elegir color. Ej: lightBlue"
                onChange={e => setColor(e.target.value)}
                value={color}
                multiline
                >
                </OutlinedInput>
                </div>
              </CardActionArea>
        </CardMedia>
        <CardActions className="justify-content-end mt-2 mb-2" >
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
      <List>
           {
                arrayColor.map(item => (
                <ListItem  key={item.id}>
                    <ListaColores colorFondo={item.nombreColor} titulo={item.nombreColor}></ListaColores>  
                </ListItem>
                ))        
            }
      </List>

      </div>
    
  );
};

export default AdminColores;
