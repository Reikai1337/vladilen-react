import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 150,
    margin: "0.5rem 0 ",
  },
}));

const MySelect = ({ value, setValue, onClick }) => {
  const classes = useStyles();
  return (
    <FormControl  size="small" variant="filled" className={classes.formControl}>
      <InputLabel>True answer</InputLabel>
      <Select
        error={value.error}
        onFocus={onClick}
        label="Age"
        value={value.title}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, title: e.target.value }))
        }
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
      </Select>
      {false ? <FormHelperText>Error</FormHelperText> : null}
    </FormControl>
  );
};

export default MySelect;
