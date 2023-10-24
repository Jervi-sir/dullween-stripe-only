

export default function PriceFormatter({ price }) {
  const formatPrice = (value) => {
    let stringValue = value.toString();
    let formattedValue = stringValue.slice(0, -2) + ',' + stringValue.slice(-2);
    
    return `${formattedValue}`;
  }

  const formattedPrice = formatPrice(price);

  let parts = formattedPrice.split(',');
  let beforeComma = parts[0] + ',';
  let afterComma = parts.length > 1 ? parts[1] : ''; // Ensure there's a second part

  return (
    <>
      <span>{beforeComma}</span>
      <span style={{ fontSize: 'smaller', fontWeight: 'normal' }}>{afterComma}</span>
    </>
  );
}

