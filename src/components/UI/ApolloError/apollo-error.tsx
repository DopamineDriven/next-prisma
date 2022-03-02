import { ApolloError } from "@apollo/client";
import React, { ReactNode } from "react";
import { Inspector } from "../index";
export interface ErrorInterface {
  error: ApolloError;
}
export default class ApolloErrorComponent extends React.Component<
  {},
  {},
  ApolloError
> {
  constructor(
    public readonly props: Readonly<{
      error: ApolloError;
    }> &
      Readonly<{ children?: ReactNode }>
  ) {
    super({ props: { error: new ApolloError(props.error) } });
  }

  toString(): string {
    return JSON.stringify(
      {
        ...this.props.error
      },
      null,
      2
    );
  }
  render(
    props: Readonly<{ error: ApolloError }> &
      Readonly<{ children?: ReactNode }> = this.props
  ) {
    return (
      <div>
        <>{(props = this.props)}</>
        <Inspector>{this.props.error}</Inspector>
      </div>
    );
  }
}
