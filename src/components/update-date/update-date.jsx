import React from 'react';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

const UpdateDate = ({ lastUpdated, loading, error }) => {
  if (error) {
    return (
      <div className="content__last-updated">
        <ErrorIndicator />;
      </div>
    );
  }

  if (loading) {
    return (
      <div className="content__last-updated">
        <Spinner />;
      </div>
    );
  }

  return (
    <div className="content__last-updated">
      <h3 className="content__subtitle content__subtitle--mid">Last updated</h3>
      <p className="content__accent">{lastUpdated}</p>
    </div>
  );
};

const mapStateToProps = ({ global: { lastUpdated }, loadingGlobal, errorGlobal }) => ({
  lastUpdated,
  loading: loadingGlobal,
  error: errorGlobal,
});

export default connect(mapStateToProps)(UpdateDate);
