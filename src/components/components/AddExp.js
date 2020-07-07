import React,{useState} from "react";

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
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";
import TextField from "@material-ui/core/TextField";
import DialogContentText from "@material-ui/core/DialogContentText";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import Datetime from "react-datetime";
// @material-ui/core components
import {Form,Button } from "react-bootstrap"
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
import RecipeReviewCard from "components/Card/Card2.js";
import ExpList from "components/ExpList.js"
// core components
  const AddExp = (e) => {
    
    const url = 'http://localhost:5000/exp'

    const [title, setTitle] = useState("")
    const [pictureUrl, setPictureUrl] = useState("")
    const [country, setcountry] = useState("")
    const [price, setPrice] = useState(0)
    const [duration, setDuration] = useState(0)

    const createExp = async (e) => {
        e.preventDefault();
        const expData = {
            title,
            pictureUrl,
            country,
            price,duration
        }

        const newExp = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(expData)
        });
        alert("Experience created")
    }

    return (
        <Form onSubmit={createExp}>
          <Form.Group>
            <Form.Control 
                type="text" 
                placeholder="Title" 
                name="title"
                value={title}
                onChange = {e => setTitle(e.target.value)}
            />
            <br />

            <Form.Control 
                type="text" 
                placeholder="Picture Url" 
                name="pictureUrl"
                value={pictureUrl}
                onChange = {e => setPictureUrl(e.target.value)}
            />
            <br />

            <Form.Control 
                type="text" 
                placeholder="Country" 
                name="country"
                value={country}
                onChange = {e => setcountry(e.target.value)}
            />
            <br />

            <Button 
                variant="danger" 
                type="submit" 
                value="Create exp"
            >
                Create Experience
            </Button>
          </Form.Group>
       
        </Form>
      )
  }
  
  export default AddExp
  