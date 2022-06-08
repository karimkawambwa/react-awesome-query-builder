import { ComponentMeta, ComponentStory } from "@storybook/react"
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
    },
    fields: {
      html: {
        label: "Html",
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
    <>
      <QueryContainer
        {...config}
        value={tree}
        onChange={onChange}
        renderBuilder={(props) => (
          <div className="query-builder">
            <Builder {...props} />
          </div>
        )}
      />
      {Export.sqlFormat(Import.loadTree(tree), config, "d")}
    </>
  )
}

export const Main = Template.bind({})

