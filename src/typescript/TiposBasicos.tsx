
export const TiposBasicos = () => {
    let apellido = "perez" //Aqui typesccript nos pone por defecto que apellido es una variable tipo string

    let nombre : string | number = "El pepe"; //aqui le decimos que puede ser tanto string como number para que no tire error cuando le asignemos un numero.
    
    nombre = 123;

    return (
        <>
            <h3>Tipos Basicos</h3>
            {nombre}
        </>
    )
}
