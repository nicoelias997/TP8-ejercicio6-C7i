export const colores = [
        "red",
        "pink",
        "purple",
         "deepPurple",
         "indigo",
         "blue",
         "lightBlue",
         "cyan",
         "teal",
         "green",
         "lightGreen",
         "lime",
         "yellow",
        "amber",
         "orange",
         "deepOrange",
         "brown",
         "grey",
         "blueGrey"
    ]
    
export const validarColor = (color) => {
    for(let i = 0; i < colores.length; i++){
        if(color === colores[i]){
            return true
        }
        }
    }



