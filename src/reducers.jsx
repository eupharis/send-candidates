function candidate(state = {}, action) {
  switch (action.type) {
    case 'SET_CANDIDATE':
      return action.candidate;
    default:
      return state;
  }
}

function todo() {}

export { candidate, todo};
