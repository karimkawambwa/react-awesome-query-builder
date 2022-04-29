/** @format */

import React, { PureComponent } from "react";
import { Col } from "../utils";
import Field from "./Field";

export default class FieldWrapper extends PureComponent {
  render() {
    const {
      config,
      selectedField,
      setField,
      parentField,
      classname,
      readonly,
      id,
      groupId,
    } = this.props;
    return (
      <Col className={classname}>
        {config.settings.showLabels && (
          <label className="rule--label">{config.settings.fieldLabel}</label>
        )}
        <Field
          config={config}
          selectedField={selectedField}
          parentField={parentField}
          setField={setField}
          customProps={config.settings.customFieldSelectProps}
          readonly={readonly}
          id={id}
          groupId={groupId}
        />
      </Col>
    );
  }
}
