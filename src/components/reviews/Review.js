import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

//components
import Avatar from "../Profile/Avatar";

//css
import "./review.css";

const styles = {
  card: {
    minWidth: 800,
    // marginBottom: "150px",
    // marginTop: "150px",
    display: "flex"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    // fontSize: 14,
  },
  pos: {
    marginBottom: 12
  },
  textField: {
    width: 700
  }
};
function Review(props) {
  const { classes } = props;

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await axios(
  //         '/api/profile',
  //       );
  //       console.log(result.data)
  //       setProfile(result.data);
  //     };

  //     fetchData();
  //   }, []);

  return (
    <div className="review-component">
      <Card className={classes.card} style={{ backgroundColor: "#white" }}>
        <CardContent className="review-main-card-content">
          <div className="review-avatar-and-username">
            <Avatar />

            <Typography
              variant="h5"
              className="write-a-review"
              style={{ color: "gray" }}
            >
              Username
              <br />
            </Typography>
          </div>
          <div className="review-text">
            <Typography variant="h6" className="write-a-review">
              Review
              <br />
            </Typography>
          </div>
        </CardContent>
        <CardActions className="description-card-button" />
      </Card>
    </div>
  );
}
Review.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Review);