import React from 'react';
import { connect } from 'react-redux';
import { toggleTimePeriod, toggleNumberFormat } from '../../actions';
import './country-details-controls.scss';

const CountryDetailsControls = ({
  currentTimePeriod,
  currentNumberFormat,
  onToggleTimePeriod,
  onToggleNumberFormat,
}) => (
  <div className="content__controls toggle">
    <div
      className={`toggle__btn  toggle__btn--period ${
        currentTimePeriod === 'lastUpdated' ? 'toggle__btn--toggled' : ''
      }`}
      onClick={() => onToggleTimePeriod()}
    >
      <p className="toggle__txt  toggle__txt--period">{`${
        currentTimePeriod === 'total' ? 'Total period' : 'Last Updated'
      }`}</p>
    </div>
    <div
      className={`toggle__btn  toggle__btn--numbers ${
        currentNumberFormat === 'per100k' ? 'toggle__btn--toggled' : ''
      }`}
      onClick={() => onToggleNumberFormat()}
    >
      <p className="toggle__txt  toggle__txt--numbers">{`${
        currentNumberFormat === 'absolute' ? 'Absolute' : 'Per 100K'
      }`}</p>
    </div>
  </div>
);

const mapStateToProps = ({ currentTimePeriod, currentNumberFormat }) => ({
  currentTimePeriod,
  currentNumberFormat,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleTimePeriod: () => dispatch(toggleTimePeriod()),
  onToggleNumberFormat: () => dispatch(toggleNumberFormat()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetailsControls);
