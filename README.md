4.  Interpolación y Directivas

Directivas de Atributo
Con [ngClass] se puede asignar dinámicamente la clase CSS a un elemento HTML evaluando una condición. La propiedad hayError viene del .ts

<!-- Si no pongo las comillas en 'error' y 'success' las interpreta como una variable -->
<div [ngClass]="hayError ? 'error' : 'success'">Resultado obtenido</div>

Con [ngStyle] se puede asignar dinámicamente un estilo específico a un elemento HTML, puedo elegir cualquier estilo css. La propiedad size viene del .ts

<div [style.font-size]="size ? 'x-large' : 'smaller'">
   Mensaje en letra grande o pequeña
</div>

<!-- Si yo intento mostrar en un componente padre, un componente hijo que no está importado en el modulo del padre, no lo voy a poder ver.
Importo y export el componente hijo en el modulo hijo, y en el componente padre import el modulo hijo.
 -->
