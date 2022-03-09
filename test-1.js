const stocks = [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 },
    { symbol: "JXJ", price: 120.22, volume: 5323 },
    { symbol: "KGC", price: 205.55, volume: 43210 },
    { symbol: "JXJ", price: 199.99, volume: 988 },
    { symbol: "KAB", price: 270.10, volume: 2210 },
    { symbol: "TYD", price: 7.45, volume: 1803 },
    { symbol: "FFP", price: 26.78, volume: 711 },
    { symbol: "ABB", price: 21.12, volume: 834 },
    { symbol: "SSSS", price: 1.45, volume: 1000 }
]

// Ordena de forma ascendente por la propiedad "volume"
stocks.sort((a, b) => {
    return a.volume - b.volume;
});

console.log(stocks); // Regresa arreglo ordenado de forma ascendente