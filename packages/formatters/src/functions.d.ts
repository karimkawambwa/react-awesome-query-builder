export namespace LOWER {
    const label: string;
    const mongoFunc: string;
    const jsonLogic: string;
    const spelFunc: string;
    namespace jsonLogicCustomOps {
        function toLowerCase(str: any): any;
    }
    const returnType: string;
    namespace args {
        namespace str {
            const label_1: string;
            export { label_1 as label };
            export const type: string;
            export const valueSources: string[];
        }
    }
}
export namespace UPPER {
    const label_2: string;
    export { label_2 as label };
    const mongoFunc_1: string;
    export { mongoFunc_1 as mongoFunc };
    const jsonLogic_1: string;
    export { jsonLogic_1 as jsonLogic };
    const spelFunc_1: string;
    export { spelFunc_1 as spelFunc };
    export namespace jsonLogicCustomOps_1 {
        function toUpperCase(str: any): any;
    }
    export { jsonLogicCustomOps_1 as jsonLogicCustomOps };
    const returnType_1: string;
    export { returnType_1 as returnType };
    export namespace args_1 {
        export namespace str_1 {
            const label_3: string;
            export { label_3 as label };
            const type_1: string;
            export { type_1 as type };
            const valueSources_1: string[];
            export { valueSources_1 as valueSources };
        }
        export { str_1 as str };
    }
    export { args_1 as args };
}
export namespace NOW {
    const label_4: string;
    export { label_4 as label };
    const returnType_2: string;
    export { returnType_2 as returnType };
    const jsonLogic_2: string;
    export { jsonLogic_2 as jsonLogic };
    export namespace jsonLogicCustomOps_2 {
        function now(): Date;
    }
    export { jsonLogicCustomOps_2 as jsonLogicCustomOps };
    const spelFunc_2: string;
    export { spelFunc_2 as spelFunc };
    export function sqlFormatFunc(): string;
    export function mongoFormatFunc(): Date;
    export function formatFunc(): string;
}
export namespace RELATIVE_DATETIME {
    const label_5: string;
    export { label_5 as label };
    const returnType_3: string;
    export { returnType_3 as returnType };
    export const renderBrackets: string[];
    export const renderSeps: string[];
    export function jsonLogic_3({ date, op, val, dim }: {
        date: any;
        op: any;
        val: any;
        dim: any;
    }): {
        date_add: any[];
    };
    export { jsonLogic_3 as jsonLogic };
    export function jsonLogicImport(v: any): any[];
    export namespace jsonLogicCustomOps_3 {
        function date_add(date: any, val: any, dim: any): Date;
    }
    export { jsonLogicCustomOps_3 as jsonLogicCustomOps };
    export function sqlFormatFunc_1({ date, op, val, dim }: {
        date: any;
        op: any;
        val: any;
        dim: any;
    }): string;
    export { sqlFormatFunc_1 as sqlFormatFunc };
    const mongoFormatFunc_1: null;
    export { mongoFormatFunc_1 as mongoFormatFunc };
    export function formatFunc_1({ date, op, val, dim }: {
        date: any;
        op: any;
        val: any;
        dim: any;
    }): any;
    export { formatFunc_1 as formatFunc };
    export namespace args_2 {
        namespace date {
            const label_6: string;
            export { label_6 as label };
            const type_2: string;
            export { type_2 as type };
            export namespace defaultValue {
                export const func: string;
                const args_3: never[];
                export { args_3 as args };
            }
            const valueSources_2: string[];
            export { valueSources_2 as valueSources };
        }
        namespace op {
            const label_7: string;
            export { label_7 as label };
            const type_3: string;
            export { type_3 as type };
            const defaultValue_1: string;
            export { defaultValue_1 as defaultValue };
            const valueSources_3: string[];
            export { valueSources_3 as valueSources };
            export namespace mainWidgetProps {
                namespace customProps {
                    const showSearch: boolean;
                }
            }
            export namespace fieldSettings {
                namespace listValues {
                    const plus: string;
                    const minus: string;
                }
            }
        }
        namespace val {
            const label_8: string;
            export { label_8 as label };
            const type_4: string;
            export { type_4 as type };
            export namespace fieldSettings_1 {
                const min: number;
            }
            export { fieldSettings_1 as fieldSettings };
            const defaultValue_2: number;
            export { defaultValue_2 as defaultValue };
            const valueSources_4: string[];
            export { valueSources_4 as valueSources };
        }
        namespace dim {
            const label_9: string;
            export { label_9 as label };
            const type_5: string;
            export { type_5 as type };
            const defaultValue_3: string;
            export { defaultValue_3 as defaultValue };
            const valueSources_5: string[];
            export { valueSources_5 as valueSources };
            export namespace mainWidgetProps_1 {
                export namespace customProps_1 {
                    const showSearch_1: boolean;
                    export { showSearch_1 as showSearch };
                }
                export { customProps_1 as customProps };
            }
            export { mainWidgetProps_1 as mainWidgetProps };
            export namespace fieldSettings_2 {
                export namespace listValues_1 {
                    const day: string;
                    const week: string;
                    const month: string;
                    const year: string;
                }
                export { listValues_1 as listValues };
            }
            export { fieldSettings_2 as fieldSettings };
        }
    }
    export { args_2 as args };
}
export namespace LINEAR_REGRESSION {
    const label_10: string;
    export { label_10 as label };
    const returnType_4: string;
    export { returnType_4 as returnType };
    export function formatFunc_2({ coef, bias, val }: {
        coef: any;
        bias: any;
        val: any;
    }, _: any): string;
    export { formatFunc_2 as formatFunc };
    export function sqlFormatFunc_2({ coef, bias, val }: {
        coef: any;
        bias: any;
        val: any;
    }): string;
    export { sqlFormatFunc_2 as sqlFormatFunc };
    export function spelFormatFunc({ coef, bias, val }: {
        coef: any;
        bias: any;
        val: any;
    }): string;
    export function mongoFormatFunc_2({ coef, bias, val }: {
        coef: any;
        bias: any;
        val: any;
    }): {
        $sum: any[];
    };
    export { mongoFormatFunc_2 as mongoFormatFunc };
    export function jsonLogic_4({ coef, bias, val }: {
        coef: any;
        bias: any;
        val: any;
    }): {
        "+": any[];
    };
    export { jsonLogic_4 as jsonLogic };
    export function jsonLogicImport_1(v: any): any[];
    export { jsonLogicImport_1 as jsonLogicImport };
    const renderBrackets_1: string[];
    export { renderBrackets_1 as renderBrackets };
    const renderSeps_1: string[];
    export { renderSeps_1 as renderSeps };
    export namespace args_4 {
        export namespace coef {
            const label_11: string;
            export { label_11 as label };
            const type_6: string;
            export { type_6 as type };
            const defaultValue_4: number;
            export { defaultValue_4 as defaultValue };
            const valueSources_6: string[];
            export { valueSources_6 as valueSources };
        }
        export namespace val_1 {
            const label_12: string;
            export { label_12 as label };
            const type_7: string;
            export { type_7 as type };
            const valueSources_7: string[];
            export { valueSources_7 as valueSources };
        }
        export { val_1 as val };
        export namespace bias {
            const label_13: string;
            export { label_13 as label };
            const type_8: string;
            export { type_8 as type };
            const defaultValue_5: number;
            export { defaultValue_5 as defaultValue };
            const valueSources_8: string[];
            export { valueSources_8 as valueSources };
        }
    }
    export { args_4 as args };
}
