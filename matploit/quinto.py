import matplotlib.pyplot as plt

frutas = ["Manzanas", "Bananas", "Cerezas", "Duraznos"]
porciones=[30, 40, 20, 10]

separadores=[0.2, 0.1,0.1,0.1]

plt.pie(porciones, labels=frutas, startangle=90, counterclock=False, autopct="%1.1f%%", explode=separadores, colors=["purple", "cyan", "violet", "skyblue"])
plt.title("Grafico de pie Distribución de frutas")
plt.show()