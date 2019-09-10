import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type TParams = { name: string };

export function Project({ match }: RouteComponentProps<TParams>) {
  return <h2>This is a page for product with ID: {match.params.name} </h2>;
}
