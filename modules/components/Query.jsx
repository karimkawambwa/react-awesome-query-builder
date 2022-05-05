/** @format */

import PropTypes from "prop-types"
import { PureComponent } from "react"
import {
  bindActionCreators,
  useOnPropsChanged,
} from "react-awesome-query-builder-formatters/dist/utils/reactUtils"
import { immutableEqual } from "react-awesome-query-builder-formatters/dist/utils/stuff"
import { fixPathsInTree } from "react-awesome-query-builder-formatters/dist/utils/treeUtils"
import { validateTree } from "react-awesome-query-builder-formatters/dist/utils/validation"
import * as actions from "../actions"

export const validateAndFixTree = (newTree, _oldTree, newConfig, oldConfig) => {
  let tree = validateTree(newTree, _oldTree, newConfig, oldConfig)
  tree = fixPathsInTree(tree)
  return tree
}

export default class Query extends PureComponent {
  static propTypes = {
    config: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    renderBuilder: PropTypes.func,
    tree: PropTypes.any, //instanceOf(Immutable.Map)
    //dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    useOnPropsChanged(this)

    this._updateActions(props)

    this.validatedTree = this.validateTree(props, props)
    //props.onChange && props.onChange(this.validatedTree, props.config);
  }

  validateTree(props, oldProps) {
    return validateAndFixTree(
      props.tree,
      oldProps.tree,
      props.config,
      oldProps.config
    )
  }

  _updateActions(props) {
    const { config, dispatch } = props
    this.actions = bindActionCreators(
      { ...actions.tree, ...actions.group, ...actions.rule },
      config,
      dispatch
    )
  }

  onPropsChanged(nextProps) {
    const { onChange } = nextProps
    const oldConfig = this.props.config
    const newTree = nextProps.tree
    const newConfig = nextProps.config
    const oldValidatedTree = this.validatedTree

    this.validatedTree = newTree
    if (oldConfig !== newConfig) {
      this._updateActions(nextProps)
      this.validatedTree = this.validateTree(nextProps, this.props)
    }

    const validatedTreeChanged = !immutableEqual(
      this.validatedTree,
      oldValidatedTree
    )
    if (validatedTreeChanged) {
      onChange &&
        onChange(this.validatedTree, newConfig, nextProps.__lastAction)
    }
  }

  render() {
    const { config, renderBuilder, dispatch, __isInternalValueChange } =
      this.props
    const builderProps = {
      tree: this.validatedTree,
      actions: this.actions,
      config: config,
      dispatch: dispatch,
      __isInternalValueChange,
    }

    return renderBuilder(builderProps)
  }
}
