import React, { useContext } from "react";
import { Grid, Header, List, Segment } from "semantic-ui-react";
import ContentfulContext from "../context/contentful";
import get from "lodash.get";
import { Image } from "semantic-ui-react";
import { contentfulDataMapper } from "../helpers";

interface IProject {
  title: string;
  shortDescription: string;
  thumbnail: string;
}

const Project = (props: IProject) => (
  <Grid.Column>
    <Image src={props.thumbnail} size='small' width={200} />
    <Header inverted as='h4' content={props.title} />
    <List link inverted>
      <List.Item as='p'>{props.shortDescription}</List.Item>
    </List>
  </Grid.Column>
);

export function Featured() {
  const content = useContext(ContentfulContext);

  if (content) {
    const items = get(content, "items", []).slice(0, 3);
    const assets = get(content, "includes.Asset", []);

    return (
      <Segment id='Featured' inverted vertical style={{ padding: "2em" }}>
        <Header
          as='h2'
          content='Featured Projects'
          style={{ marginBottom: "2em" }}
        />
        <Grid divided inverted stackable>
          <Grid.Row columns='equal'>
            {items.map((c: any, i: number) => (
              <Project key={i} {...contentfulDataMapper(c, assets)} />
            ))}
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }

  return null;
}
