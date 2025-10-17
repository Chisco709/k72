import matplotlib.pyplot as plt
import numpy as np

categorias = ["A", "B", "C", "D", "E"]
valores_1 = [5, 7, 3, 9, 6]
valores_2 = [4, 6, 2, 8, 5]

pos=np.arange(len(categorias))
print(pos)

ancho=0.4
plt.bar(pos-ancho/2, valores_1, width=ancho, color="salmon", label="Valores 1")
plt.bar(pos+ancho/2, valores_2, width=ancho, color="lightgreen", label="Valores 2")
plt.title("Grafico de barras agrupados")
plt.xlabel("Categorias")
plt.ylabel("Valores")
plt.legend()
plt.xticks(pos, categorias)

plt.show()