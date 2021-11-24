import React from 'react';

function WithLogging(WrappedComponent) {
  class WithLogging extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      console.log(`Component ${displayName} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${displayName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  const displayName = getDisplayName(WrappedComponent);
  WithLogging.displayName = `WithLogging(${displayName})`;
  return WithLogging;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default WithLogging;
