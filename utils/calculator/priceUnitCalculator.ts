export const priceUnitCalculator = (price: number, weight: number): number => {
    const pricePerGram = price / 1000; // Hitung harga per gram
    return pricePerGram * weight; // Kembalikan harga berdasarkan gram yang dimasukkan
  };
  