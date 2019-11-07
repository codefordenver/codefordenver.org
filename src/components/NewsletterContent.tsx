import React from 'react';
import { Grid } from 'semantic-ui-react';

export function NewsletterContent(props: any) {
  return (
    <>
      <Grid columns="equal" stackable doubling>
        <Grid.Row style={{ padding: '0em' }}s>
          <Grid.Column verticalAlign="middle" className="columnTextLeft" style={{ padding: '1rem 5rem' }}>
            <p>Want to stay up to date on civic tech in Colorado? Join our newsletter!</p>
          </Grid.Column>
          <Grid.Column width={props.columnWidth} style={{ padding: '1.5rem 5rem 2rem 5rem' }}>
            <iframe
              style={{
                minWidth: '320px',
                minHeight: '250px',
                border: 0
              }}
              title="Newsletter Title"
              src="https://cdn.forms-content.sg-form.com/30a57480-d5c4-11e9-b817-16af1fe961e5"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
