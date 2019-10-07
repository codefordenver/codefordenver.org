import React, { useContext } from 'react';
import { Header, Segment, Image, Grid} from 'semantic-ui-react';
import ContentfulContext from '../context/contentful';
import get from 'lodash.get';
import { contentfulDataMapper } from '../helpers';

type Props = {
  title: string;
  shortDescription: string;
  thumbnail: string;
  link: string;
  screenShots?: string;
  tech?: string;
  sponsor?: string;
};

const ScreenShots = (props: Props) => (
  <Grid.Column>
    <Image src={props.screenShots} size="small" width={200} />
  </Grid.Column>
);

export function ProjectCard(props: Props) {
  return (
  <Segment>
     <div>
       <Grid columns={2} centered>
         <Grid.Column >
            <Header as='h2' style={{ color: ' #E14E54'}}>Project</Header>
            <Header as='h2' style={{ fontWeight: '800'}}>{props.title}</Header>
            <Header as='h2' style={{ color: ' #E14E54' }}>Sponsor</Header>
          <Header as='h2'>{props.sponsor}</Header>
        </Grid.Column>
        <Grid.Column>
            <Image src={props.thumbnail} size='large' centered />
          </Grid.Column>
        </Grid>
      </div>  
      <p>{props.shortDescription}</p> 
      <Header as='h3'>Technology used</Header>
      <p>{props.tech} TECH USED DISPLAYED HERE</p>
        <Grid style={{ backgroundColor: '#E14E54'}}>
        <Header as='h3' style={{ color: '#FFFFFF'}}>{props.title} Screenshots</Header>     
          <Grid divided inverted stackable>
            <Grid.Row columns="equal">
              {/* {props.screenShots.map((c: any, i: number) => (
                <ScreenShots key={i} {...contentfulDataMapper(c, assets)} />
              ))} */}
            </Grid.Row>
          </Grid>
      </Grid>
    </Segment>
    );
  }
// <Menu.Item as={Link} to={`${PathURL.PROJECTS}/project_one`}>
//   Example Project 1
//       </Menu.Item>
