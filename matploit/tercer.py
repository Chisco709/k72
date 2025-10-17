import matplotlib.pyplot as plt

categorias = ["A", "B", "C", "D", "E"]
valores = [5, -7, 3, -9, 6]

plt.bar(categorias, valores, color=["green" if v>=0 else "red" for v in valores])
plt.axhline(0, color="black")
plt.title("Graficas de barras con valores negativos")
plt.xlabel("Categorias")
plt.ylabel("Categorias")
plt.show()