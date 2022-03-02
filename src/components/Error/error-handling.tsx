import React from "react";

export default class ErrorBoundary extends React.Component<
  { fallback: boolean | "blocking" },
  Record<string, unknown> | unknown,
  Record<string, any> | any
> {
  constructor() {
    super({ fallback: "blocking" || true || false });
  }
  public state = { hasError: false, error: null };

  static getDerivedStateFromError(error: ErrorEvent) {
    return {
      hasError: true,
      error: { ...error }
    };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
