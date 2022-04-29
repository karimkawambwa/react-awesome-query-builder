/** @format */

import React from "react";
import { useOnPropsChanged } from "react-awesome-query-builder-formatters/dist/utils/reactUtils";
import {
  getTotalReordableNodesCountInTree,
  getTotalRulesCountInTree,
} from "react-awesome-query-builder-formatters/dist/utils/treeUtils";
import Draggable from "../containers/Draggable";
import GroupContainer from "../containers/GroupContainer";
import { ConfirmFn } from "../utils";
import { BasicGroup } from "./Group";
import { SwitchGroupActions } from "./SwitchGroupActions";

const classNames = require("classnames");

@GroupContainer
@Draggable("group switch_group")
@ConfirmFn
class SwitchGroup extends BasicGroup {
  static propTypes = {
    ...BasicGroup.propTypes,
  };

  constructor(props) {
    super(props);
    useOnPropsChanged(this);
    this.onPropsChanged(props);
  }

  onPropsChanged(nextProps) {}

  childrenClassName = () => "switch_group--children";

  renderFooterWrapper = () => null;
  hasDefaultCase = () => {
    return (
      this.props.children1.size &&
      this.props.children1.filter((c) => c.get("children1") == null).size > 0
    );
  };
  canAddGroup() {
    const { maxNumberOfCases } = this.props.config.settings;
    const totalCasesCnt = this.props.children1.size;
    if (maxNumberOfCases) {
      return totalCasesCnt < maxNumberOfCases;
    }
    return true;
  }
  canAddRule() {
    return false;
  }

  reordableNodesCnt() {
    // result will be passed to each case's `parentReordableNodesCnt` prop
    const totalCasesCnt = this.props.children1.size;
    let casesToReorder = totalCasesCnt;
    if (this.hasDefaultCase()) {
      casesToReorder--;
    }
    return casesToReorder;
  }

  totalRulesCntForItem(item) {
    return getTotalRulesCountInTree(item);
  }

  reordableNodesCntForItem(item) {
    if (this.props.isLocked) return 0;
    const { canLeaveEmptyCase, canRegroupCases } = this.props.config.settings;

    const totalCasesCnt = this.props.children1.size;
    let casesToReorder = totalCasesCnt;
    if (this.hasDefaultCase()) {
      casesToReorder--;
    }

    const nodesInCase = getTotalReordableNodesCountInTree(item);
    let cnt = nodesInCase;
    if (cnt == 1 && canRegroupCases && canLeaveEmptyCase && casesToReorder > 1)
      cnt = 111;
    return cnt;
  }

  renderHeaderWrapper() {
    return (
      <div
        key="group-header"
        className={classNames(
          "group--header",
          this.isOneChild() ? "one--child" : "",
          this.showDragIcon() ? "with--drag" : "hide--drag",
          this.showConjs() && (!this.isOneChild() || this.showNot())
            ? "with--conjs"
            : "hide--conjs"
        )}
      >
        {this.renderHeader()}
        {this.renderActions()}
      </div>
    );
  }

  renderHeader() {
    return (
      <div className={"group--conjunctions"}>
        {this.renderConjs()}
        {this.renderDrag()}
      </div>
    );
  }

  renderConjs() {
    const { renderSwitchPrefix } = this.props.config.settings;
    return renderSwitchPrefix ? renderSwitchPrefix() : null;
  }

  showNot() {
    return false;
  }

  renderActions() {
    const {
      config,
      addCaseGroup,
      addDefaultCaseGroup,
      isLocked,
      isTrueLocked,
      id,
    } = this.props;

    return (
      <SwitchGroupActions
        config={config}
        addCaseGroup={addCaseGroup}
        addDefaultCaseGroup={addDefaultCaseGroup}
        canAddDefault={!this.hasDefaultCase()}
        canAddGroup={this.canAddGroup()}
        setLock={this.setLock}
        isLocked={isLocked}
        isTrueLocked={isTrueLocked}
        id={id}
      />
    );
  }
}

export default SwitchGroup;
