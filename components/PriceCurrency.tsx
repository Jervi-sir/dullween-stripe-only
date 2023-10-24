

export default function PriceCurrency({ currency_iso }) {
  const formatCurrency = (value) => {
    let currencySymbol;
    if(currency_iso === "usd") {
      currencySymbol = "\u0024"; // Unicode for $
    } else if(currency_iso === "eur") {
      currencySymbol = "\u20AC"; // Unicode for €
    } else {
      currencySymbol = ""; // Add default or error handling
    }
    return `${currencySymbol}`;
  }

  const formattedCurrency = formatCurrency(currency_iso);

  return (
    <>
      <span>{formattedCurrency}</span>
    </>
  );
}

