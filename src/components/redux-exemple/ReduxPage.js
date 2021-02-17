import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

const ReduxPage = props => {
  const { name, age, changeName, changeAge } = props;
  return (
    <div>
      <h1>Redux {name}</h1>
      <h1>Redux {age}</h1>

      <input value={name} onChange={event => changeName(event.target.value)} />
      <input value={age} onChange={event => changeAge(event.target.value)} />
    </div>
  );
};

const mapStateToProps = state => ({
  name: state.user.name,
  age: state.user.age,
});

const mapDispatchToProps = dispatch => ({
  changeName: newName => dispatch(actions.changeName(newName)),
  changeAge: newAge => dispatch(actions.changeAge(newAge)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxPage);
