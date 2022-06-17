import React from "react"
import Switch from "@mui/material/Switch"
import FormControl from "@mui/material/FormControl"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

export default (props) => {
  const { customProps, value, setValue, labelYes, labelNo, readonly } = props

  const onChange = () => {
    setValue(!value)
  }

  return (
    <FormControl>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={0}>
          <Grid item component="span">
            {labelNo}
          </Grid>
          <Grid item component="span">
            <Switch
              checked={!!value}
              onChange={onChange}
              disabled={readonly}
              {...customProps}
            />
          </Grid>
          <Grid item component="span">
            {labelYes}
          </Grid>
        </Grid>
      </Typography>
    </FormControl>
  )
}
