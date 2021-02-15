import { Component } from 'react';
import styles from './WithIcon.module.css';
import SvgSprite from '../components/sprites/CustomSprite.jsx';

const withIcon = (icon, size) => WrappedComponent => {
  return class Hoc extends Component {
    render() {
      return (
        <div className={styles.withIconContainer}>
          <SvgSprite icon={icon} size={size} />
          <WrappedComponent {...this.props} iconName={icon} />
        </div>
      );
    }
  };
};
export default withIcon;
