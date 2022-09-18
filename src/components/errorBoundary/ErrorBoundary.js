import { Component } from 'react/cjs/react.development';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  // static getDerivedStateFromError(error) {
  //   return { error: true };
  // }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <h2>Произошла ошибка</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
