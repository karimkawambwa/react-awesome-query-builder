import React from "react"
import BasicConfig from "react-awesome-query-builder-formatters"
import * as Operators from "../components/operators"
import * as VanillaWidgets from "../components/widgets"

const {
  //vanilla
  VanillaFieldSelect,
  VanillaConjs,
  VanillaButton,
  VanillaButtonGroup,
  VanillaProvider,
  VanillaValueSources,
  vanillaConfirm,
  VanillaSwitch,
  VanillaBooleanWidget,
  VanillaTextWidget,
  VanillaTextAreaWidget,
  VanillaDateWidget,
  VanillaTimeWidget,
  VanillaDateTimeWidget,
  VanillaMultiSelectWidget,
  VanillaSelectWidget,
  VanillaNumberWidget,
  VanillaSliderWidget,

  //common
  ValueFieldWidget,
  FuncWidget,
} = VanillaWidgets
const { ProximityOperator } = Operators

const settings = {
  ...BasicConfig.settings,
  renderField: (props) => <VanillaFieldSelect {...props} />,
  renderOperator: (props) => <VanillaFieldSelect {...props} />,
  renderFunc: (props) => <VanillaFieldSelect {...props} />,
  renderConjs: (props) => <VanillaConjs {...props} />,
  renderSwitch: (props) => <VanillaSwitch {...props} />,
  renderButton: (props) => <VanillaButton {...props} />,
  renderButtonGroup: (props) => <VanillaButtonGroup {...props} />,
  renderProvider: (props) => <VanillaProvider {...props} />,
  renderValueSources: (props) => <VanillaValueSources {...props} />,
  renderConfirm: vanillaConfirm,
  renderSwitchPrefix: () => <>{"Conditions"}</>,
}

const widgets = {
  ...BasicConfig.widgets,
  text: {
    ...BasicConfig.widgets.text,
    factory: (props) => <VanillaTextWidget {...props} />,
  },
  textarea: {
    ...BasicConfig.widgets.textarea,
    factory: (props) => <VanillaTextAreaWidget {...props} />,
  },
  number: {
    ...BasicConfig.widgets.number,
    factory: (props) => <VanillaNumberWidget {...props} />,
  },
  multiselect: {
    ...BasicConfig.widgets.multiselect,
    factory: (props) => <VanillaMultiSelectWidget {...props} />,
  },
  select: {
    ...BasicConfig.widgets.select,
    factory: (props) => <VanillaSelectWidget {...props} />,
  },
  slider: {
    ...BasicConfig.widgets.slider,
    factory: (props) => <VanillaSliderWidget {...props} />,
  },
  boolean: {
    ...BasicConfig.widgets.boolean,
    factory: (props) => <VanillaBooleanWidget {...props} />,
  },
  date: {
    ...BasicConfig.widgets.date,
    factory: (props) => <VanillaDateWidget {...props} />,
  },
  time: {
    ...BasicConfig.widgets.time,
    factory: (props) => <VanillaTimeWidget {...props} />,
  },
  datetime: {
    ...BasicConfig.widgets.datetime,
    factory: (props) => <VanillaDateTimeWidget {...props} />,
  },
  field: {
    ...BasicConfig.widgets.field,
    factory: (props) => <ValueFieldWidget {...props} />,
  },
  func: {
    ...BasicConfig.widgets.func,
    factory: (props) => <FuncWidget {...props} />,
  },
}

const types = {
  ...BasicConfig.types,
  number: {
    ...BasicConfig.types.number,
    widgets: {
      ...BasicConfig.types.number.widgets,
      rangeslider: {
        opProps: {
          between: {
            isSpecialRange: true,
          },
          not_between: {
            isSpecialRange: true,
          },
        },
        operators: ["between", "not_between", "is_empty", "is_not_empty"],
      },
    },
  },
}

const operators = {
  ...BasicConfig.operators,
  proximity: {
    ...BasicConfig.operators.proximity,
    options: {
      ...BasicConfig.operators.proximity.options,
      factory: (props) => <ProximityOperator {...props} />,
    },
  },
}

export default {
  ...BasicConfig,
  operators,
  types,
  widgets,
  settings,
}
