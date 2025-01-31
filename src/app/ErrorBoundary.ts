import React, { Component, FC, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Log from '@/helpers/Log';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log the error to an external service or console
    Log('ErrorBoundary caught an error', { error, info });
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI or redirect to logout page
      return null;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;