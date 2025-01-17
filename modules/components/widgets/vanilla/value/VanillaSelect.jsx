/** @format */

import omit from "lodash/omit"
import React from "react"
import { mapListValues } from "react-awesome-query-builder-formatters/dist/utils/stuff"

export default ({
  listValues,
  value,
  setValue,
  allowCustomValues,
  readonly,
  customProps,
}) => {
  const renderOptions = () =>
    mapListValues(listValues, ({ title, value }) => {
      return (
        <option key={value} value={value}>
          {title}
        </option>
      )
    })

  const onChange = (e) => setValue(e.target.value)

  const hasValue = value != null
  return (
    <select
      onChange={onChange}
      value={hasValue ? value : ""}
      disabled={readonly}
      {...omit(customProps, ["showSearch", "input"])}
    >
      {!hasValue && <option disabled value={""}></option>}
      {renderOptions()}
    </select>
  )
}
