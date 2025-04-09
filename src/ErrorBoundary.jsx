import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#f8f9fa', 
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
          color: '#333'
        }}>
          <h1>Something went wrong.</h1>
          <p>The application encountered an error. Please refresh the page or try again later.</p>
          <div style={{ marginTop: '20px', textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              <summary>Show Error Details</summary>
              <p>{this.state.error && this.state.error.toString()}</p>
              <p>Component Stack Error Details:</p>
              <p>{this.state.errorInfo && this.state.errorInfo.componentStack}</p>
            </details>
          </div>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              marginTop: '20px',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 