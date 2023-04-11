import React from 'react';

class MyErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      console.log('Error caught by error boundary:', error, info);
      this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }
<MyErrorBoundary>
  <navbar />
</MyErrorBoundary>
  