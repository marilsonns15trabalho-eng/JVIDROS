import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-page">
          <div className="error-content">
            <AlertTriangle
              size={40}
              className="error-icon"
              aria-hidden="true"
            />
            <h1>Algo deu errado.</h1>
            <p>
              Ocorreu um erro inesperado. Recarregue a página para continuar
              navegando.
            </p>
            <button
              type="button"
              className="button button-dark"
              onClick={() => window.location.reload()}
            >
              <RotateCcw size={16} aria-hidden="true" /> Recarregar página
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;