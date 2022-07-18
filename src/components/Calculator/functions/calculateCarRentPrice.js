const vat = 1.23;
const priceCategories = {
  Basic: 1,
  Standard: 1.3,
  Medium: 1.6,
  Premium: 2,
};
const calculateCarRentPrice = (
  priceForOneNight,
  rentSince,
  rentTo,
  future_location,
  deliveryDistance,
  yearOfDrivingLicense,
  priceCategory,
  number_of_available_models,
  kilometersToDrive,
  fuelPrice,
  fuel_usage,
  setMsg
) => {
  if (!rentSince || !rentTo || !future_location || kilometersToDrive === 0) {
    setMsg('Wypełnij wszystkie pola!');
    return false;
  } else if (
    new Date().getFullYear() - yearOfDrivingLicense < 3 &&
    priceCategory === 'Premium'
  ) {
    setMsg(
      'Aby wypożyczyć ten model samochodu musisz posiadać prawojazdy conajmniej 3 lata!'
    );
    return false;
  } else {
    const numberOfRentDays =
      (new Date(rentTo).getTime() - new Date(rentSince).getTime()) / 86400000; // the number of days in milliseconds divided by how many milliseconds 1 day has
    let rentPrice = priceForOneNight * numberOfRentDays;
    rentPrice += (kilometersToDrive / 100) * fuel_usage * fuelPrice;
    switch (priceCategory) {
      case 'Basic':
        rentPrice *= priceCategories.Basic;
        break;
      case 'Standard':
        rentPrice *= priceCategories.Standard;
        break;
      case 'Medium':
        rentPrice *= priceCategories.Medium;
        break;
      case 'Premium':
        rentPrice *= priceCategories.Premium;
        break;
      default:
        return rentPrice;
    }

    if (number_of_available_models < 3) {
      rentPrice *= 1.15;
    }

    const deliveryFee = 50 * (deliveryDistance / 100);

    if (new Date().getFullYear() - yearOfDrivingLicense < 5) {
      setMsg('');
      rentPrice *= 1.2;
    } else {
      setMsg(
        'Posiadasz prawojazdy więcej niż 5 lat, z tego powodu obniżyliśmy cenę twojego wynajmu o 20%!'
      );
    }

    rentPrice += deliveryFee;
    return {
      priceBrutto: Math.ceil(rentPrice * vat),
      priceNetto: Math.ceil(rentPrice),
      numberOfRentDays,
      deliveryFee,
      fuelPrice,
    };
  }
};

export default calculateCarRentPrice;
