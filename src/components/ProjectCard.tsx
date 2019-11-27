import React from 'react';
import { Header, Segment, Image, Grid} from 'semantic-ui-react';

type Props = {
  title: string;
  shortDescription: string;
  thumbnail: string;
  partner: string;
  link: string;
  tech: string;
  screenShots: string[];
};

const ScreenShots = (shot:string, i:number) => (
  <Grid.Column key={i}>
    <Image src={shot} size="small" width={100} />
  </Grid.Column>
);

export function ProjectCard(props: Props) {
  return (
  <Segment>
     <div style={{padding:"5vh 10vw"}}>
       <Grid columns={2} verticalAlign="middle" stackable>
         <Grid.Column >
            <Header as='h3' style={{ color: '#E14E54'}} >Project</Header>
            <Header as='h4' style={{ fontWeight: '800'}} >{props.title}</Header>
            <Header as='h3' style={{ color: '#E14E54' }} >Sponsor</Header>
            <p >{props.partner}</p>
        </Grid.Column>
        <Grid.Column>
            <Image src={props.thumbnail} alt={props.title} Logo size='medium' centered />
          </Grid.Column>
        </Grid>
        <p style={{marginTop:'7vh' }}>{props.shortDescription}</p> 
        <Header as='h5'>Technology and Tools Used:</Header>
        <p>{props.tech}</p>
      </div >  
      <div style={{ backgroundColor: '#E14E54', padding:"2vh 10vw" }}>
        <Header as='h3' className="white">{props.title} Screenshots</Header>     
          <Grid divided inverted stackable>
            <Grid.Row columns="equal">
              {props.screenShots.map((shot: any, i: number) => ScreenShots(shot, i) )}
            </Grid.Row>
          </Grid>
      </div>
    </Segment>
    );
  }
