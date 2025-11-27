

const BASE_URL = 'https://api.exchangerate-api.com/v4/latest/';

export const exchangeRateApi = async (fromCurrency) => {
    try {
    const response = await fetch(`${BASE_URL}/${fromCurrency}`);
    const data = await response.json();
    return data;
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
        throw error;
    }
};

export function convertCurrency  (amount, rate)  {
   return (parseFloat(amount) * rate).toFixed(2);
}

// API