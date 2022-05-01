export function sqlEmptyValue(fieldDef: any): string;
export function mongoEmptyValue(fieldDef: any): string;
export function spelEscape(val: any, numberToFloat?: boolean, arrayToArray?: boolean): string | undefined;
export function spelFixList(val: any): string;
export function spelFormatConcat(parts: any): string;
export function spelImportConcat(val: any): any[];
export { SqlString };
