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
  if (!rentSince || !rentTo || !future_location || kilometersToDrive === 0) {
    setErrorMsg('Wypełnij wszystkie pola!');
    return false;
  } else if (!deliveryDistance) {
    setErrorMsg('Podaj poprawną lokalizację!');
    return false;
  } else if (
    new Date().getFullYear() - yearOfDrivingLicense < 3 &&
    priceCategory === 'Premium'
  ) {
    setErrorMsg(
      'Aby wypożyczyć ten model samochodu musisz posiadać prawojazdy conajmniej 3 lata!'
    );
    return false;
  } else {
    const numberOfRentDays =
      (new Date(rentTo).getTime() - new Date(rentSince).getTime()) / 86400000; // the number of days in milliseconds divided by how many milliseconds 1 day has
    let rentPrice =
      priceForOneNight * numberOfRentDays * kilometersToDrive * fuelPrice;
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
      setErrorMsg(
        'UWAGA! Posiadasz prawojazdy mniej niż 5 lat dlatego podwyższyliśmy cenę wynajmu o 20% :)'
      );
      rentPrice *= 1.2;
    }

    if (number_of_available_models < 3) {
      rentPrice *= 1.15;
    }

    const deliveryFee = 50 * (deliveryDistance / 100);

    setErrorMsg('');
    rentPrice += deliveryFee;
    return {
      priceBrutto: Math.ceil(rentPrice * 1.23),
      priceNetto: Math.ceil(rentPrice),
      numberOfRentDays,
      deliveryFee,
      fuelPrice,
    };
  }
};

export default calculateCarRentPrice;
