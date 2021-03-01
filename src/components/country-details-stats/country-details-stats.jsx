import React from 'react';
import { connect } from 'react-redux';
import { formatNum, getCriteria } from '../../utils';
import Spinner from '../spinner';
import './country-details-stats.scss';

const CountryDetailsStats = ({ loading, global, currentTimePeriod, currentNumberFormat }) => {
  if (loading) {
    return <Spinner />;
  }
  const cases = formatNum(global[getCriteria('cases', currentTimePeriod, currentNumberFormat)]);
  const deaths = formatNum(global[getCriteria('deaths', currentTimePeriod, currentNumberFormat)]);
  const recovered = formatNum(
    global[getCriteria('recovered', currentTimePeriod, currentNumberFormat)]
  );
  return (
    <ul className="content__stats stats">
      <li className="stats__item">
        <span className="stats__number  stats__number--cases">{cases}</span>
        <span className="stats__tag">Cases</span>
      </li>
      <li className="stats__item">
        <span className="stats__number  stats__number--deaths">{deaths}</span>
        <span className="stats__tag">Deaths</span>
      </li>
      <li className="stats__item">
        <span className="stats__number  stats__number--recovered">{recovered}</span>
        <span className="stats__tag">Recovered</span>
      </li>
    </ul>
  );
};

const mapStateToProps = ({ loadingGlobal, global, currentTimePeriod, currentNumberFormat }) => ({
  loading: loadingGlobal,
  global,
  currentTimePeriod,
  currentNumberFormat,
});

export default connect(mapStateToProps)(CountryDetailsStats);
