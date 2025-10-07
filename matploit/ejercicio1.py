import matplotlib.pyplot as plt

x=[1,2,3,4,5]
y=[1,4,9,16,25]
z=[25, 16, 9, 4, 1]

plt.plot(x,y, c="#f20f12", alpha=0.8, ls="-.", lw=2, marker="p", markersize=15, markerfacecolor="cyan", markeredgecolor="magenta", markeredgewidth=3)
plt.plot(x,z, c="green", alpha=0.8, ls=":", lw=2, marker="D", ms=20, mfc="orange", mec="brown", mew=3)
plt.title("Titulo de la grafica", c="skyblue", fontsize=20, fontname="Algerian")
plt.xlabel("Etiqueta eje x")
plt.ylabel("Etiqueta eje y")
#Agregar la grila
plt.grid(color="#50c7c7", alpha=0.4, linestyle="--", linewidth=1)
plt.show()