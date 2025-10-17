import matplotlib.pyplot as plt

paises = ["Estados Unidos", "España", "México", "Rusia", "Japón"]
ventas = [25, 32, 34, 20, 25]

plt.bar(paises, ventas, color=["pink", "lightgreen", "skyblue", "magenta", "orange"], alpha=0.4, width=0.5, edgecolor = "gray", linewidth=2)
plt.title("Cantidad de ventas\npor país")
plt.xlabel("Países")
plt.ylabel("Ventas")

for i, v in enumerate(ventas):
    plt.text(i, v + 1, str(v), ha="center", fontsize=12, fontweight="bold")

for i, v in enumerate(ventas):
    plt.text(i, (v / 2) - 7, paises[i], ha="center", fontsize=12, fontweight="bold", rotation=90, color="blue")

plt.ylim(0, 40)
plt.show()
