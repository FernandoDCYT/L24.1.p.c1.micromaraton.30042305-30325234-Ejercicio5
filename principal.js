import Cl_agencia from "./Cl_agencia.js";
import Cl_suscriptor from "./Cl_suscriptor.js";

let sus1 = new Cl_suscriptor (15457858, "A")
let sus2 = new Cl_suscriptor (15457859, "B")
let sus3 = new Cl_suscriptor (15457857, "C")

let agencia = new Cl_agencia();

agencia.procesarSuscriptor(sus1)
agencia.procesarSuscriptor(sus2)
agencia.procesarSuscriptor(sus3)

let salida = document.getElementById("salida")
salida.innerHTML=`
El suscriptor con cedula ${sus1.ced} paga: ${sus1.calcTot()}$<br>
El suscriptor con cedula ${sus2.ced} paga: ${sus2.calcTot()}$<br>
El suscriptor con cedula ${sus3.ced} paga: ${sus3.calcTot()}$<br>
<br>
Porcentaje de suscriptores que no pagaron servicio de conexion: ${agencia.calcPorcC().toFixed(2)}%<br> 
Plan Favorito por los suscriptores: ${agencia.calcPlanFav()}
`
