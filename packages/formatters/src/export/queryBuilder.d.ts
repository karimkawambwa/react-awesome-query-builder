export function queryBuilderFormat(item: any, config: any): {
    usedFields: never[];
    id: any;
    rules: any;
    condition: any;
    not: any;
} | {
    usedFields: never[];
    id: any;
    fieldName: any;
    type: any;
    input: any;
    operator: any;
} | undefined;
