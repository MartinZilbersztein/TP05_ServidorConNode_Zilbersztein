const ObtenerHora = () => new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
const ObtenerFechaCompleta = () => new Date().toDateString() + " " +  new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()

export default {ObtenerHora, ObtenerFechaCompleta};