# concesionaria

Proyecto corto desarrollado en javascript donde se buscan autos, datos o se ejecutan operaciones segun los requerimientos del "cliente" Digital House, tales como:

-Buscar auto por patente.
-Marcar un auto como vendido.
-Listar los autos a la venta.
-Listar los autos nuevos (menos de 100km).
-Mostrar lista de ventas.
-Retornar monto total de ventas.
-Verificar si una persona dada puede comprar o no un auto, basado en su capacidad de pago total y en cuoutas).
-Listar los autos que puede comprar una persona dada, tomando en cuenta las condiciones del punto anterior.

Instrucciones:

1) Para ver los datos que arroja el archivo es necesario colocar dentro del console.log() lo siguiente:

  concesionaria.METODO(datos)

Donde METODO corresponde a uno de los nombres dentro del listado que contienen las funciones, los metodos contenidos en el archivo son los siguientes:

-buscarAuto
-venderAuto
-autosParaLaVenta
-autosNuevos
-listaDeVentas
-totalDeVentas
-puedeComprar
-autosQuePuedeComprar

Ejemplos:

Para verificar si una persona dada puede comprar cierto auto se escribe: console.log(concesionaria.puedeComprar(auto[indice], persona))
En este caso los indices pueden ser 0 o 1.

Para ver el total de ventas: console.log(concesionaria.totalDeVentas())

2) En consola escribir node app y luego presionar ENTER, seguidamente se obtendrá el resultado por la misma.
