import React from 'react';

import {graphql, QueryRenderer} from 'react-relay';

import environment from '../../createRelayEnvironment';
import ViewerBuildList from '../../components/ViewerBuildList'
import CirrusLinearProgress from "../../components/CirrusLinearProgress";
import FormGroup from "@material-ui/core/FormGroup";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Home = (props) => (
  <QueryRenderer
    environment={environment}
    query={
      graphql`
        query HomeViewerQuery {
          viewer {
            ...ViewerBuildList_viewer
          }
        }
      `
    }

    render={({error, props}) => {
      if (!props) {
        return <CirrusLinearProgress/>
      }
      if (!props.viewer) {
        return (
          <Paper elevation={1}>
            <Toolbar>
              <FormGroup>
                <Typography variant="title">Please Log In to see your recent builds</Typography>
              </FormGroup>
            </Toolbar>
          </Paper>
        );
      }
      return <ViewerBuildList viewer={props.viewer}/>
    }}
  />
);

export default Home;
