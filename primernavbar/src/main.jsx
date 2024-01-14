import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ReservationApp from './ReservationApp.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
    // Puedes realizar acciones de registro o enviar el error a un servicio de seguimiento de errores aquí
  }

  render() {
    if (this.state.hasError) {
      return <div>¡Algo salió mal! Por favor, recarga la página.</div>;
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)

// Renderizar al siguiente elemento aparte que corresponde a la reserva y el que se comunicará con el backend
ReactDOM.createRoot(document.getElementById('reserva-root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ReservationApp />
    </ErrorBoundary>
  </React.StrictMode>,
)