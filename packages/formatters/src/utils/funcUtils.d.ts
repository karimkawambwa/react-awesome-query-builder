export function completeValue(value: any, valueSrc: string, config: object): any | undefined;
export function completeFuncValue(value: Immutable.Map<any, any>, config: object): Immutable.Map<any, any> | undefined;
export function setFunc(value: Immutable.Map<any, any>, funcKey: string, config: object): Immutable.Map<any, any>;
export function setArgValue(value: Immutable.Map<any, any>, argKey: string, argVal: any, argConfig: object, config: any): Immutable.Map<any, any>;
export function setArgValueSrc(value: Immutable.Map<any, any>, argKey: string, argValSrc: string, _argConfig: any, _config: any): Immutable.Map<any, any>;
import Immutable from "immutable";
