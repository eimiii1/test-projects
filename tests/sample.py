scores = {
    "Anna": 88,
    "Ben": 67,
    "Cara": 90,
    "Dan": 45,
    "Ella": 76,
    "Finn": 59,
    "Gina": 84,
    "Hugo": 92,
    "Ivy": 70,
    "Jake": 66
}

top_scores = sorted(scores.items(), key=lambda item: item[1], reverse=True)
bottom_scores = sorted(scores.items(), key=lambda item: item[1])

print("Top 3 Students")
for name, grade in top_scores[:3]:
    print(f"{name}: {grade}")

print()
print("Bottom 3 Students")
for name, grade in bottom_scores[:3]:
    print(f"{name}: {grade}")
