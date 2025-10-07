import pandas as pd
import numpy as np

lista = {
    "Producto" : ["Lapices", "Cuadernos", "Marcadores", "Resaltadores", "Carpetas"],
    "Cantidad" : [100, 50, 200, 150, 80],
    "Precio_Unitario" : [500, 2000, 800, 1200, 2500]
}

#Cree un dataframe que se llame ventas con la informaic[on anterior
ventas = pd.DataFrame(lista)

print(lista)

#Calcula una nueva columna llamada total que sea
#el producto de cantidad por precio unitario

ventas["Total"]=ventas["Cantidad"]*ventas["Precio_Unitario"]
print(ventas)

#Ussa numpy para calcular el promedio
#eL VALOR MAXIMO Y EL VALOR MINIMO DE LA COLUMNA CANTIDAD

promedio= np.mean(ventas["Cantidad"])
maximo= np.max(ventas["Cantidad"])
minimo= np.min(ventas["Cantidad"])

print(f"El promedio de las cantidades es: {promedio}")
print(f"El maximo de las cantidades es: {maximo}")
print(f"El maximo de las cantidades es: {minimo}")

#Filtre los productos cuya cantidad sea mayor al promedio usando operaciones con numpy

mayor_promedio=ventas[ventas["Cantidad"] >promedio]
print(mayor_promedio)

#Encontra el total de ingresos generados: pon todos los productos (suma de columna Total)
total = np.sum(ventas["Total"])
print("El total de ventas es : ", total)

#7. Agrupa los productos por un rango de precios

rangos= pd.cut(ventas["Precio_Unitario"], bins=[0, 1000, 2000, 3000], labels=["Entre cero y mil", "Entre mil y dos mil ", "Dos mil y tres mil"])
ventas["Rango_Precios"]=rangos

#Groupby
datos_agrupados = ventas.groupby("Rango_Precios", observed=True)["Cantidad"].sum()
print(datos_agrupados)

#Agrega un registro adicional con un producto llamado borradores y un valor faltante en cantidad, rellena este valor con este valor con el promedio de las cantidades

ventas.loc[len(ventas)]=["Borradores", np.nan, 1500, np.nan, np.nan]
#fillna
ventas["Cantidad"].fillna(promedio, inplace=True)

print("La cantidad de datos nulos usando isnull es: ", ventas.isnull().sum())
print("La cantidad de datos nulos usando isnot es: ", ventas.isna().sum())
print("La cantidad de datos nulos usando isnot es: ", ventas.isna().sum().sum())

#Exportar el dataframe 
ventas.to_csv(r"C:\renes web\frontend\k72\ventas_final.csv")