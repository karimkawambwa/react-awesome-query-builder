export function simulateAsyncFetch(all: any, cPageSize?: number, delay?: number): (search: any, offset: any, meta: any) => Promise<{
    values: any;
    hasMore: boolean;
}>;
export function mergeListValues(values: any, newValues: any, toStart?: boolean): any;
export function listValueToOption(lv: any): {
    title: any;
    value: any;
} | null;
export function getListValue(selectedValue: any, listValues: any): any;
