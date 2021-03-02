import React from 'react';
import { connect } from 'react-redux';
import { resetCountry } from '../../actions';

const ToGlobalButton = ({ selectedCountry, onResetToGlobal }) => (
  <button
    type="button"
    className={`content__to-global-btn content__to-global-btn--countries ${
      selectedCountry ? '' : 'content__to-global-btn--hidden'
    }`}
    onClick={onResetToGlobal}
  ></button>
);

const mapStateToProps = ({ selectedCountry }) => ({ selectedCountry });

const mapDispatchToProps = (dispatch) => ({
  onResetToGlobal: () => dispatch(resetCountry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToGlobalButton);
