import React from 'react';
import { connect } from 'react-redux';
// import actions from '../../redux/actions';
import { changeName, changeAge } from '../../redux/userReduser';

const ReduxPage = props => {
  const { name, age, changeName, changeAge } = props;
  return (
    <div>
      <h1>
        Redux {name}. Age is {age}
      </h1>

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
  changeName: newName => dispatch(changeName(newName)),
  changeAge: newAge => dispatch(changeAge(newAge)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxPage);
