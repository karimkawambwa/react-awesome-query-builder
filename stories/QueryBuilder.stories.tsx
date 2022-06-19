import { ComponentMeta, ComponentStory } from "@storybook/react"
import { createTheme, Grid } from "@mui/material"
import React, { useCallback, useState } from "react"
import * as Export from "react-awesome-query-builder-formatters/dist/export/sql"
import * as Import from "react-awesome-query-builder-formatters/dist/import/tree"
import * as BasicUtils from "react-awesome-query-builder-formatters/dist/utils"
import Builder from "../modules/components/Builder"
import QueryContainer from "../modules/components/QueryContainer"
import MaterialConfig from "../modules/config/mui"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "QueryBuilder",
} as ComponentMeta<any>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<any> = (args) => {
  const [config] = useState({
    ...MaterialConfig,
    types: {
      ...MaterialConfig.types,
      select: {
        ...MaterialConfig.types.select,
        widgets: {
          ...MaterialConfig.types.select.widgets,
          text: {
            operators: ["like", "not_like"],
          },
        },
      },
    },
    settings: {
      ...MaterialConfig.settings,
      canReorder: true,
      canRegroup: true,
      forceShowConj: true,
      showNot: false,
      canLeaveEmptyGroup: false,
      showLabels: false,
      theme: {
        mui: createTheme({
          components: {
            MuiTextField: {
              defaultProps: {
                variant: "outlined",
              },
            },
            MuiSelect: {
              defaultProps: {
                variant: "outlined",
              },
            },
          },
        }),
      },
    },
    fields: {
      field1: {
        label: "field1",
        type: "select",
        valueSources: ["value"],
        operators: ["like", "not_like", "contains_any_in", "contains_none_in"],
        fieldSettings: {
          multiple: true,
          showSearch: true,
          allowCustomValues: true,
          listValues: [{ value: `lang=["']en["']`, title: "English" }],
        },
      },
      field2: {
        label: "field2",
        type: "select",
        valueSources: ["value"],
        operators: ["contains_any_in", "contains_none_in"],
        fieldSettings: {
          multiple: true,
          showSearch: true,
          listValues: [{ value: `lang=["']en["']`, title: "English" }],
        },
      },
      field3: {
        label: "field3",
        type: "select",
        valueSources: ["value"],
        operators: ["contains_any_in", "contains_none_in"],
        fieldSettings: {
          multiple: true,
          showSearch: true,
          listValues: [],
        },
      },
    },
  })

  const defaultTree = {
    id: BasicUtils.uuid(),
    type: "group",
  }

  const [tree, setTree] = useState(
    Import.checkTree(Import.loadTree(defaultTree), config)
  )

  const onChange = useCallback((immutableTree, config) => {
    setTree(immutableTree)
  }, [])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <QueryContainer
          {...config}
          value={tree}
          onChange={onChange}
          renderBuilder={(props) => <Builder {...props} />}
        />
      </Grid>
      <Grid item xs={12}>
        {Export.sqlFormat(Import.loadTree(tree), config, "d")}
      </Grid>
    </Grid>
  )
}

export const Main = Template.bind({})
