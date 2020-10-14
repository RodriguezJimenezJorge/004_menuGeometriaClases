import { leerTeclado } from '../vistas/lecturaTeclado'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1. Triángulo')
    console.log('2. Cuadrado')
    console.log('3. Círculo')
    console.log('4. Rectángulo')
    console.log('0. Salir')
    n = parseInt( await leerTeclado('Opción: ') )
    return n
}