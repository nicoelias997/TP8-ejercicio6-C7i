const URL = process.env.REACT_APP_API_COLOR

export const consultarAPI =  async () => {
    try{
        const respuesta = await fetch(URL)
        const listaColores = await respuesta.json()
        return listaColores
    } catch(e){
        console.log(e)
    }
}

export const crearColorAPI = async (color) => {
    try{
        const respuesta = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombreColor: color
            })
        }) 
        return respuesta
    } catch(e) {}

}

export const obtenerColorApi = async (_id) => {
    try{
        const respuesta = await fetch(URL+"/"+_id)
        const dataColor = await respuesta.json()
        return  dataColor
    } catch(e){
        console.log(e)
    }
}

export const eliminarColorApi = async(_id) => {
    try{
        const respuesta = await fetch(URL+"/"+_id, {
            method: "DELETE"
        })
        return respuesta
    } catch(e){
        console.log(e)
    }
}

export const editarColorApi = async(color, _id) => {
    try{
       const respuesta = await fetch(URL+"/"+_id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombreColor: color
            })
        })
        return respuesta
    } catch(e){
        console.log(e)
    }
}