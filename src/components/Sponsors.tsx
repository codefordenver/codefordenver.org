import React, { CSSProperties } from 'react';
import { Grid, Image, Header, Segment } from 'semantic-ui-react';
import { ExternalURL } from './Router';

type Props = {
  show?: boolean;
};

export function Sponsors(props: Props) {
  const image__css: CSSProperties = {
    margin: '0 auto',
    maxWidth: '250px',
    padding: 0
  };
  const showHeader = onAbout();

  function onAbout() {
    if (props.show === null) {
      return <Header as="h3" content="Our sponsors" />;
    }
  }
  return (
    <Segment style={{ margin: '0' }}>
      <Grid style={{ padding: '5em 0' }} columns="equal" stackable>
        {showHeader}
        <Grid.Row textAlign="center" verticalAlign="middle" columns={3}>
          <Grid.Column style={{ padding: 0 }}>
            <Image
              as="a"
              href={ExternalURL.GARYCOMMUNITY}
              style={image__css}
              src={
                process.env.PUBLIC_URL +
                '/images/sponsors/sponsor-gary_community_investments-300x236.png'
              }
            />
          </Grid.Column>
          <Grid.Column style={{ padding: 0 }}>
            <Image
              as="a"
              href={ExternalURL.WORKABILITY}
              style={image__css}
              src={process.env.PUBLIC_URL + '/images/sponsors/workAbility.png'}
            />
          </Grid.Column>
          <Grid.Column style={{ padding: 0 }}>
            <Image
              as="a"
              href={ExternalURL.JETBRAINS}
              style={image__css}
              src={
                process.env.PUBLIC_URL +
                '/images/sponsors/jetbrains-variant-4-700x391.png'
              }
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
