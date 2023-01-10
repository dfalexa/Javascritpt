// CLASE 11. TRUTHY y FALSY

// ¿Qué valores son falsos y qué valores son verdaderos?

// En el navegador: 
boolean(0);
//R.N: False // aparece así porque no tenemos nada, y no podemos iniciar. 
boolean(1);
//R.N: True  // podemos iniciar
boolean(null);
//R.N: False
boolean(NaN);
//R.N: False  //  NaN: Not-A-Number (No es Un Número)
boolean(undefined);
//R.N: False  // no está definido el valor. 
boolean(false);
//R.N: False 
boolean("");
//R.N: False

boolean(" ");
//R.N: True  // así este vacio, si es un objeto es verdadero. 
boolean([]);
//R.N: True  
boolean({});
//R.N: True
boolean([]);
//R.N: True
boolean(function(){});
//R.N: True 
boolean(true);
//R.N: True

// Recomendaciones:
//1. Tenerlo en cuenta para que cuando entremos con condiciones serpamos como condicionar acciones, en caso de verdadero o falso, saber que pasará. 