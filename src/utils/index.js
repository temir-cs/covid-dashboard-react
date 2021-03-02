const compose = (...funcs) => (comp) => funcs.reduceRight((wrapped, f) => f(wrapped), comp);

const formatNum = (num) => num.toLocaleString('de-DE');

const getCriteria = (type = 'cases', timePeriod = 'total', numberFormat = 'absolute') => {
  if (type === 'cases' && timePeriod === 'total' && numberFormat === 'per100k')
    return 'confirmedPer100K';
  if (type === 'cases' && timePeriod === 'lastUpdated' && numberFormat === 'absolute')
    return 'newConfirmed';
  if (type === 'cases' && timePeriod === 'lastUpdated' && numberFormat === 'per100k')
    return 'newConfirmedPer100K';
  if (type === 'deaths' && timePeriod === 'total' && numberFormat === 'absolute')
    return 'totalDeaths';
  if (type === 'deaths' && timePeriod === 'total' && numberFormat === 'per100k')
    return 'deathsPer100K';
  if (type === 'deaths' && timePeriod === 'lastUpdated' && numberFormat === 'absolute')
    return 'newDeaths';
  if (type === 'deaths' && timePeriod === 'lastUpdated' && numberFormat === 'per100k')
    return 'newDeathsPer100K';
  if (type === 'recovered' && timePeriod === 'total' && numberFormat === 'absolute')
    return 'totalRecovered';
  if (type === 'recovered' && timePeriod === 'total' && numberFormat === 'per100k')
    return 'recoveredPer100K';
  if (type === 'recovered' && timePeriod === 'lastUpdated' && numberFormat === 'absolute')
    return 'newRecovered';
  if (type === 'recovered' && timePeriod === 'lastUpdated' && numberFormat === 'per100k')
    return 'recoveredPer100K';
  return 'totalConfirmed';
};

const sortDatabyCriteria = (items, criteria) =>
  items.slice().sort((a, b) => b[criteria] - a[criteria]);

const getMatchingCountries = (input, countries) =>
  countries.filter((item) => item.country.toLowerCase().startsWith(input.toLowerCase()));

const findCountry = (countryName, countries) =>
  countries.find((country) => country.country === countryName);

export { compose, formatNum, getCriteria, sortDatabyCriteria, getMatchingCountries, findCountry };
