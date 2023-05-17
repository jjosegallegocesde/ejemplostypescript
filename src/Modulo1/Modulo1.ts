import { Estudiante } from "../Interfaces/Estudiante"
import {Persona,Persona2,Profesor2} from "../Clases/Estudiante"

export let nombre:string
export let notas:number[]=[2.5,3.8,4,2.8]

let estudiantico:Persona=new Persona()
estudiantico.direccion

let profe:Profesor2= new Profesor2(5,estudiantico)


let estudiantes:Estudiante[]=[
    {nombre:"Juan",notas:[2.5,3,4.5,5],estado:true},
    {nombre:"Sara",notas:[2.5,5,4.8,5],estado:true},
    {nombre:"Mateo",notas:[2,3,4.3,5],estado:false},
    {nombre:"Lucas",notas:[.5,3.5,4.4,5],estado:true},
    {nombre:"Martha",notas:[2.5,3.8,4.7,1.2],estado:false},
]

export let filtro:Estudiante[]=estudiantes.filter(function(estudiante:Estudiante){
    return(estudiante.estado===false)
})

export let mapa:Estudiante[]=estudiantes.map(function(estudiante:Estudiante){
    estudiante.nombre="martica"
    return(estudiante)
})

export let estudiantesPOP=estudiantes.pop()
console.log(estudiantes)


/*let notabase:number=0
estudiantes.forEach(function(estudiante:Estudiante){
    estudiante.notas.forEach(function(nota){
        estudiante.definitiva=(notabase+=nota)/estudiante.notas.length  
    })
    notabase=0
})
console.log(estudiantes)*/


