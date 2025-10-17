import matplotlib.pyplot as plt


distancia = [58.5, 63.8, 64.2, 67.3, 71.5, 88.3, 90.1, 90.6, 89.5, 90.4]

ensayo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

plt.title("Experimento carro a control remoto", color="black", fontsize=20, fontname="Segoe UI")
plt.xlabel("Ensayo (n)")
plt.ylabel("Distancia (cm)")

plt.plot(ensayo, distancia, c="#f20f12", alpha=0.8, lw=2,
         marker="p", markersize=10, markerfacecolor="black",
         markeredgecolor="black", markeredgewidth=2)

plt.grid(color="black", alpha=0.4, linestyle="--", linewidth=1)
plt.tight_layout()
plt.show()