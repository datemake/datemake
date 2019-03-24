import React from "react";
import PropTypes from "prop-types";

//redux
import { connect } from "react-redux";
import { addActivityPhotoURL } from "../../ducks/reducer";

//material-ui
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

//css
import "./form-activity.css";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

function SimpleExpansionPanel(props) {
  const { classes } = props;

  // console.log(props.specificActivity);

  // props.specificActivity.result && console.log(props.specificActivity.result);

  // let photosDisplay = () => {props.specificActivity.result.map((element, index) => {
  //   return (
  //     <div key={element.id}>
  //       <img
  //         className="photos-display"
  //         alt="photos"
  //         src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
  //           props.specificActivity.result.photos[index].photo_reference
  //         }&key=AIzaSyBLWvDffmZzsXjFnRtcflsxTFsBxbZyiDA`}
  //       />
  //     </div>
  //   );
  // })
  // return photosDisplay}

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading} />
        </ExpansionPanelSummary>
        <div className="expansion-panel-two">
          <ExpansionPanelDetails className="expansion-two-photos-div">
            <Typography variant="h6">
        
        {/* Photo 0 */}
              <div className="expansion-panel-two-photo-and-checkbox-div">
                <div className="expansion-panel-two-photo-and-checkbox-text">
                  Choose this photo
                  {props.specificActivity.result &&
                  <Checkbox
                    id="0"
                    color="primary"
                    onClick={() => props.addActivityPhotoURL(
                      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                        props.specificActivity.result.photos[0].photo_reference
                      }&key=${process.env.REACT_APP_GOOGLE}`
                    )}
                  />}
                </div>
                {props.specificActivity.result && (
                  <img
                    className="expansion-two-photos"
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                      props.specificActivity.result.photos[0].photo_reference
                    }&key=${process.env.REACT_APP_GOOGLE}`}
                  />
                )}
              </div>

                {/* Photo 1 */}
                <div className="expansion-panel-two-photo-and-checkbox-div">
                <div className="expansion-panel-two-photo-and-checkbox-text">
                  Choose this photo
                  {props.specificActivity.result &&
                  <Checkbox
                    id="1"
                    color="primary"
                    onClick={() => props.addActivityPhotoURL(
                      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                        props.specificActivity.result.photos[1].photo_reference
                      }&key=${process.env.REACT_APP_GOOGLE}`
                    )}
                  />}
                </div>
                {props.specificActivity.result && (
                  <img
                    className="expansion-two-photos"
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                      props.specificActivity.result.photos[1].photo_reference
                    }&key=${process.env.REACT_APP_GOOGLE}`}
                  />
                )}
              </div>

                {/* Photo 2 */}
                <div className="expansion-panel-two-photo-and-checkbox-div">
                <div className="expansion-panel-two-photo-and-checkbox-text">
                  Choose this photo
                  {props.specificActivity.result &&
                  <Checkbox
                    id="2"
                    color="primary"
                    onClick={() => props.addActivityPhotoURL(
                      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                        props.specificActivity.result.photos[2].photo_reference
                      }&key=${process.env.REACT_APP_GOOGLE}`
                    )}
                  />}
                </div>
                {props.specificActivity.result && (
                  <img
                    className="expansion-two-photos"
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                      props.specificActivity.result.photos[2].photo_reference
                    }&key=${process.env.REACT_APP_GOOGLE}`}
                  />
                )}
              </div>

                {/* Photo 3 */}
                <div className="expansion-panel-two-photo-and-checkbox-div">
                <div className="expansion-panel-two-photo-and-checkbox-text">
                  Choose this photo
                  {props.specificActivity.result &&
                  <Checkbox
                    id="3"
                    color="primary"
                    onClick={() => props.addActivityPhotoURL(
                      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                        props.specificActivity.result.photos[3].photo_reference
                      }&key=${process.env.REACT_APP_GOOGLE}`
                    )}
                  />}
                </div>
                {props.specificActivity.result && (
                  <img
                    className="expansion-two-photos"
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                      props.specificActivity.result.photos[3].photo_reference
                    }&key=${process.env.REACT_APP_GOOGLE}`}
                  />
                )}
              </div>

                {/* Photo 4 */}
                <div className="expansion-panel-two-photo-and-checkbox-div">
                <div className="expansion-panel-two-photo-and-checkbox-text">
                  Choose this photo
                  {props.specificActivity.result &&
                  <Checkbox
                    id="4"
                    color="primary"
                    onClick={() => props.addActivityPhotoURL(
                      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                        props.specificActivity.result.photos[4].photo_reference
                      }&key=${process.env.REACT_APP_GOOGLE}`
                    )}
                  />}
                </div>
                {props.specificActivity.result && (
                  <img
                    className="expansion-two-photos"
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                      props.specificActivity.result.photos[4].photo_reference
                    }&key=${process.env.REACT_APP_GOOGLE}`}
                  />
                )}
              </div>

                {/* Photo 5 */}
                <div className="expansion-panel-two-photo-and-checkbox-div">
                <div className="expansion-panel-two-photo-and-checkbox-text">
                  Choose this photo
                  {props.specificActivity.result &&
                  <Checkbox
                    id="5"
                    color="primary"
                    onClick={() => props.addActivityPhotoURL(
                      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                        props.specificActivity.result.photos[5].photo_reference
                      }&key=${process.env.REACT_APP_GOOGLE}`
                    )}
                  />}
                </div>
                {props.specificActivity.result && (
                  <img
                    className="expansion-two-photos"
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                      props.specificActivity.result.photos[5].photo_reference
                    }&key=${process.env.REACT_APP_GOOGLE}`}
                  />
                )}
              </div>

                {/* Photo 6 */}
                <div className="expansion-panel-two-photo-and-checkbox-div">
                <div className="expansion-panel-two-photo-and-checkbox-text">
                  Choose this photo
                  {props.specificActivity.result &&
                  <Checkbox
                    id="6"
                    color="primary"
                    onClick={() => props.addActivityPhotoURL(
                      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                        props.specificActivity.result.photos[6].photo_reference
                      }&key=${process.env.REACT_APP_GOOGLE}`
                    )}
                  />}
                </div>
                {props.specificActivity.result && (
                  <img
                    className="expansion-two-photos"
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                      props.specificActivity.result.photos[6].photo_reference
                    }&key=${process.env.REACT_APP_GOOGLE}`}
                  />
                )}
              </div>

                {/* Photo 7 */}
                <div className="expansion-panel-two-photo-and-checkbox-div">
                <div className="expansion-panel-two-photo-and-checkbox-text">
                  Choose this photo
                  {props.specificActivity.result &&
                  <Checkbox
                    id="7"
                    color="primary"
                    onClick={() => props.addActivityPhotoURL(
                      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                        props.specificActivity.result.photos[7].photo_reference
                      }&key=${process.env.REACT_APP_GOOGLE}`
                    )}
                  />}
                </div>
                {props.specificActivity.result && (
                  <img
                    className="expansion-two-photos"
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                      props.specificActivity.result.photos[7].photo_reference
                    }&key=${process.env.REACT_APP_GOOGLE}`}
                  />
                )}
              </div>

                {/* Photo 8 */}
                <div className="expansion-panel-two-photo-and-checkbox-div">
                <div className="expansion-panel-two-photo-and-checkbox-text">
                  Choose this photo
                  {props.specificActivity.result &&
                  <Checkbox
                    id="8"
                    color="primary"
                    onClick={() => props.addActivityPhotoURL(
                      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                        props.specificActivity.result.photos[8].photo_reference
                      }&key=${process.env.REACT_APP_GOOGLE}`
                    )}
                  />}
                </div>
                {props.specificActivity.result && (
                  <img
                    className="expansion-two-photos"
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                      props.specificActivity.result.photos[8].photo_reference
                    }&key=${process.env.REACT_APP_GOOGLE}`}
                  />
                )}
              </div>

                {/* Photo 9 */}
                <div className="expansion-panel-two-photo-and-checkbox-div">
                <div className="expansion-panel-two-photo-and-checkbox-text">
                  Choose this photo
                  {props.specificActivity.result &&
                  <Checkbox
                    id="9"
                    color="primary"
                    onClick={() => props.addActivityPhotoURL(
                      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                        props.specificActivity.result.photos[9].photo_reference
                      }&key=${process.env.REACT_APP_GOOGLE}`
                    )}
                  />}
                </div>
                {props.specificActivity.result && (
                  <img
                    className="expansion-two-photos"
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                      props.specificActivity.result.photos[9].photo_reference
                    }&key=${process.env.REACT_APP_GOOGLE}`}
                  />
                )}
              </div>

            </Typography>
          </ExpansionPanelDetails>
        </div>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const {
    location,
    locationData,
    inputActivity,
    allMatchingActivityLocations,
    specificActivity
  } = state;
  return {
    location,
    locationData,
    inputActivity,
    allMatchingActivityLocations,
    specificActivity
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    {
      addActivityPhotoURL
    }
  )(SimpleExpansionPanel)
);
