import React from "react";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
  List,
  ListItem,
  Box
} from "@mui/material";

const ListaColores = () => {
  return (
    <List>
      <ListItem>
        <Card>
          <CardHeader title="Nombre color"></CardHeader>
          <CardMedia>
            <CardActionArea>
              <Box
              ml={4.5}
              mt={1}
              mb={1}
                sx={{
                  width: 100,
                  height: 100,
                  backgroundColor: "primary.dark",
                }}
              ></Box>
            </CardActionArea>
          </CardMedia>
          <CardActions className="justify-content-end">
            <Button type="button" variant="outlined" color="error">
              Borrar
            </Button>
          </CardActions>
        </Card>
      </ListItem>
    </List>
  );
};

export default ListaColores;
