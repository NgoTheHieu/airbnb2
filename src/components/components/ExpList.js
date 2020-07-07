import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import Search from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";
import TextField from "@material-ui/core/TextField";
import DialogContentText from "@material-ui/core/DialogContentText";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import Datetime from "react-datetime";
// @material-ui/core components

import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
import AddExp from "components/AddExp.js";
// core components
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import RecipeReviewCard from "components/Card/Card2.js";
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

const ExpList = () => {
 
  const [exp, setExp] = useState([]);
  const url = "http://localhost:5000/exp";
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(url);
      const expData = await data.json();
      console.log(expData)
      setExp(expData);
    }
    fetchData();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {exp.map((e) => (
            <Experience {...e} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

const Experience = ({ title, pictureUrl, country, price, duration,description }) => (
    
  <div>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pictureUrl} height="448" width="336" />
      <Card.Body>
        <Card.Title>
          <h2>{title}</h2>
        </Card.Title>
        {/* <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{country}</ListGroupItem>
        <ListGroupItem>Starting from ${price}</ListGroupItem>
        <ListGroupItem>{duration} hour(s)</ListGroupItem>
      </ListGroup>
    </Card>
    
  </div>
);

export default ExpList;
