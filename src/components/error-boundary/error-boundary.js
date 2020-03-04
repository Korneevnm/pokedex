import React, { PureComponent } from 'react';
import './styles.sass';
import openPokeball from '../../images/open-pokeball.png';

export default class ErrorBoundry extends PureComponent {
  render() {
    if (this.props.error) {
      if (this.props.error.status === 404) {
        return (
          <div className='error'>
            <img src={openPokeball} alt='open-pokeball' />
            <span>Such a Pokemon does not exist.</span>
          </div>
        );
      }
      return (
        <div className='error'>
          <span>Something has gone terribly wrong.</span>
        </div>
      );
    }

    return this.props.children;
  }
}
