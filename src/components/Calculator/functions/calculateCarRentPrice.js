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
  setErrorMsg
) => {
  const numberOfDays =
    (new Date(rentTo).getTime() - new Date(rentSince).getTime()) / 86400000; // the number of days in milliseconds divided by how many milliseconds 1 day has
  let rentPrice =
    priceForOneNight * numberOfDays * kilometersToDrive * fuelPrice;
  switch (priceCategory) {
    case 'Basic':
      rentPrice *= 1;
      break;
    case 'Standard':
      rentPrice *= 1.3;
      break;
    case 'Medium':
      rentPrice *= 1.6;
      break;
    case 'Premium':
      rentPrice *= 2;
      break;
    default:
      return rentPrice;
  }

  if (new Date().getFullYear() - yearOfDrivingLicense < 5) {
    rentPrice *= 1.2;
  }

  if (number_of_available_models < 3) {
    rentPrice *= 1.15;
  }

  const deliveryFee = 50 * (deliveryDistance / 100);

  if (!rentSince || !rentTo || !future_location || kilometersToDrive === 0) {
    setErrorMsg(
      'Aby sprawdzić cenę wypożyczenia samochodu musisz wypełnić wszystkie pola!'
    );
    return false;
  }

  if (
    new Date().getFullYear() - yearOfDrivingLicense < 3 &&
    priceCategory === 'Premium'
  ) {
    setErrorMsg(
      'Aby wypożyczyć ten model samochodu musisz posiadać prawojazdy conajmniej 3 lata!'
    );
    return false;
  } else {
    setErrorMsg('');
    rentPrice += deliveryFee;
    return Math.ceil(rentPrice);
  }
};

export default calculateCarRentPrice;
