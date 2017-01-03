import { connect } from 'react-redux';
// import { setVisibilityFilter } from '../actions';
import Link from './Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.candidate.name === state.candidate.name,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch({type: 'SET_CANDIDATE', candidate: ownProps.candidate});
  },
});

const CandidateSelect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

export default CandidateSelect;
