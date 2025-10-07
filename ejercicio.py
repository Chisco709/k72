partido = {
    "fecha": "4 de septiembre de 2025",
    "hora": "6:00 PM",
    "estadio": "Estadio Metropolitano de Barranquilla",
    "colombia": {
        "posicion": 2,
        "puntos": 16,
        "arquero": "Camilo Vargas #12",
        "defensores": ["Santiago Arias #4", "Davinson Sánchez #23", "Jhon Lucumi #3", "Johan Mojica #14"],
        "mediocampistas": ["Jefferson Lerma #16", "Richard #6", "James Rodríguez #10"],
        "delanteros": ["Jhon Arias #11", "Luis Díaz #7", "Jhon Córdoba #9"],
        "suplentes": ["David Ospina #1", "Kevin Mier #22", "Andrés Román #2", "Alvaro Angulo #8", "Yerry Mina #13", "Juan Camilo Portilla #15", "Juan Quintero #20", "Jorge Andrés Carrascal #8", "Jaminton Campaz #21", "Luis Suárez #19", "Marino Hinestroza #18", "Dayro Moreno #17"]
    },
    "bolivia": {
        "posicion": 8,
        "puntos": 6,
        "arquero": "Carlos Lampe #1",
        "defensores": ["Diego Daniel Medina #3", "Luis Haquin #4", "Efraín Morales #5", "Roberto Fernández #17", "José Sagredo #21"],
        "mediocampistas": ["Miguel Ángel Terceros #7", "Robson Matheus #14", "Gabriel Villamil #15", "Ervin Vaca #16"],
        "delanteros": ["Moises Paniagua #13"],
        "suplentes": ["Luis Banegas #12", "Guillermo Viscarra #23", "Diego Arroyo #2", "Hector Cuellar #6", "Moisés Villaroel #8", "Enzo Monteiro #9", "Carlos Melgar #10", "Carmelo Algarañaz #11", "Yomar Rocha #18", "Oscar Lopez #19", "Henry Vaca #20", "Leonardo Zabala #22"]
    },
    "canales": ["Caracol TV", "RCN", "Win Sports", "DirecTV Sports"]
}

print(" Resumen del partido ")
print(f"Fecha: {partido['fecha']}")
print(f"Hora: {partido['hora']}")
print(f"Estadio: {partido['estadio']}")

print("\n SELECCIÓN COLOMBIA ")
print(f"Posición: {partido['colombia']['posicion']}")
print(f"Puntos: {partido['colombia']['puntos']}")

print(f"\nArquero: {partido['colombia']['arquero']}")

print("\nDefensores:")
for defensor in partido['colombia']['defensores']:
    print(f"- {defensor}")

print("\nMediocampistas:")
for medio in partido['colombia']['mediocampistas']:
    print(f"- {medio}")

print("\nDelanteros:")
for delantero in partido['colombia']['delanteros']:
    print(f"- {delantero}")

print("\nSuplentes:")
for suplente in partido['colombia']['suplentes']:
    print(f"- {suplente}")

print("\n SELECCIÓN BOLIVIA ")
print(f"Posición: {partido['bolivia']['posicion']}")
print(f"Puntos: {partido['bolivia']['puntos']}")

print(f"\nArquero: {partido['bolivia']['arquero']}")

print("\nDefensores:")
for defensor in partido['bolivia']['defensores']:
    print(f"- {defensor}")

print("\nMediocampistas:")
for medio in partido['bolivia']['mediocampistas']:
    print(f"- {medio}")

print("\nDelanteros:")
for delantero in partido['bolivia']['delanteros']:
    print(f"- {delantero}")

print("\nSuplentes:")
for suplente in partido['bolivia']['suplentes']:
    print(f"- {suplente}")

partido['colombia']['goles'] = []

partido['colombia']['goles'].append("J. Quintero")
partido['colombia']['goles'].append("J. Rodríguez")
partido['colombia']['goles'].append("J. Córdoba")


print(f"\n Resultado Final ")
print(f"Colombia {len(partido['colombia']['goles'])} - 0 Bolivia")
print("Goleadores:")
for goleador in partido['colombia']['goles']:
    print(f"{goleador}")