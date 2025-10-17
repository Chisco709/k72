import matplotlib.pyplot as plt

plt.subplot(2, 2, 1)
plt.plot([1,2,3], [1,4,9], color="red")
plt.title("Grafico 1")
plt.grid()

plt.subplot(2, 2, 2)
plt.bar([1,2,3], [3,7,2], color="lightgreen")
plt.title("Grafico 2")

plt.subplot(2, 2, 3)
plt.scatter([1,2,3], [2,3,5], c="b")
plt.title("Grafico 3")

plt.subplot(2, 2, 4)
plt.hist([1,2,1, 2, 3, 4, 5], bins=5, color="purple", edgecolor="white")
plt.title("Grafico 4")

plt.tight_layout()

plt.show()
