import matplotlib.pyplot as plt

paises = ["Estados Unidos", "España", "México", "Rusia", "Japón"]
ventas = [25, 32, 34, 20, 25]

plt.barh(paises, ventas, color=["pink", "lightgreen", "skyblue", "magenta", "orange"], alpha=0.4, edgecolor = "gray", linewidth=2)
plt.title("Cantidad de ventas\npor país")
plt.xlabel("Países")
plt.ylabel("Ventas")

for i, v in enumerate(ventas):
    plt.text(v + 1, i,  str(v), ha="center", fontsize=12, fontweight="bold")

for i, v in enumerate(ventas):
    plt.text((v / 2) - 5, i,  paises[i], ha="center", fontsize=12, fontweight="bold", color="blue")

plt.xlim(0, 40)
plt.show()
