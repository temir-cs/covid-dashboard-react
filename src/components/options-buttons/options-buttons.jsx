/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { selectedDisplayType } from '../../actions';
import './options-buttons.scss';

const getCheckedClass = (type, currentType) => (currentType === type ? 'options__checked' : '');

const OptionsButtons = ({ location, currentType, onSelectType }) => (
  <div className={`content__options  options  options--${location}`}>
    <input
      onClick={() => onSelectType('cases')}
      className="options__input"
      type="radio"
      name="countries-options"
      id="countries-cases"
      data-label="cases"
    />
    <label
      htmlFor="countries-cases"
      className={`options__label ${getCheckedClass('cases', currentType)}`}
    >
      Cases
    </label>
    <input
      onClick={() => onSelectType('deaths')}
      className="options__input"
      type="radio"
      name="countries-options"
      id="countries-deaths"
      data-label="deaths"
    />
    <label
      htmlFor="countries-deaths"
      className={`options__label ${getCheckedClass('deaths', currentType)}`}
    >
      Deaths
    </label>
    <input
      onClick={() => onSelectType('recovered')}
      className="options__input"
      type="radio"
      name="countries-options"
      id="countries-recovered"
      data-label="recovered"
    />
    <label
      htmlFor="countries-recovered"
      className={`options__label ${getCheckedClass('recovered', currentType)}`}
    >
      Recovered
    </label>
  </div>
);

const mapStateToProps = ({ currentType }) => ({ currentType });

const mapDispatchToProps = (dispatch) => ({
  onSelectType: (type) => dispatch(selectedDisplayType(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionsButtons);
