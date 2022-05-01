export namespace settings {
    function formatField(field: any, parts: any, label2: any, fieldDefinition: any, config: any, isForDisplay: any): any;
    namespace valueSourcesInfo {
        const value: {};
    }
    const fieldSeparator: string;
    const fieldSeparatorDisplay: string;
    const renderSize: string;
    const maxLabelsLength: number;
    const canReorder: boolean;
    const canRegroup: boolean;
    const showLock: boolean;
    const canDeleteLocked: boolean;
    const showNot: boolean;
    const canLeaveEmptyGroup: boolean;
    const shouldCreateEmptyGroup: boolean;
    const forceShowConj: boolean;
    const canShortMongoQuery: boolean;
    const removeEmptyGroupsOnLoad: boolean;
    const removeIncompleteRulesOnLoad: boolean;
    const groupActionsPosition: string;
    const setOpOnChangeField: string[];
    const groupOperators: string[];
    namespace convertableWidgets {
        const number: string[];
        const slider: string[];
        const rangeslider: string[];
        const text: string[];
        const textarea: string[];
    }
    namespace locale {
        const moment: string;
    }
    const valueLabel: string;
    const valuePlaceholder: string;
    const fieldLabel: string;
    const operatorLabel: string;
    const funcLabel: string;
    const fieldPlaceholder: string;
    const funcPlaceholder: string;
    const operatorPlaceholder: string;
    const lockLabel: string;
    const lockedLabel: string;
    const deleteLabel: null;
    const addGroupLabel: string;
    const addCaseLabel: string;
    const addDefaultCaseLabel: string;
    const defaultCaseLabel: string;
    const addRuleLabel: string;
    const addSubRuleLabel: string;
    const delGroupLabel: string;
    const notLabel: string;
    const valueSourcesPopupTitle: string;
    const removeRuleConfirmOptions: null;
    const removeGroupConfirmOptions: null;
    const defaultGroupConjunction: string;
    namespace jsonLogic {
        const groupVarKey: string;
        const altVarKey: string;
        const lockedOp: string;
    }
}
