export const SELECT_WIDTH_OFFSET_RIGHT: 48;
export namespace BUILT_IN_PLACEMENTS {
    namespace bottomLeft {
        const points: string[];
        const offset: number[];
        namespace overflow {
            const adjustX: number;
            const adjustY: number;
        }
    }
    namespace bottomRight {
        const points_1: string[];
        export { points_1 as points };
        const offset_1: number[];
        export { offset_1 as offset };
        export namespace overflow_1 {
            const adjustX_1: number;
            export { adjustX_1 as adjustX };
            const adjustY_1: number;
            export { adjustY_1 as adjustY };
        }
        export { overflow_1 as overflow };
    }
    namespace topLeft {
        const points_2: string[];
        export { points_2 as points };
        const offset_2: number[];
        export { offset_2 as offset };
        export namespace overflow_2 {
            const adjustX_2: number;
            export { adjustX_2 as adjustX };
            const adjustY_2: number;
            export { adjustY_2 as adjustY };
        }
        export { overflow_2 as overflow };
    }
    namespace topRight {
        const points_3: string[];
        export { points_3 as points };
        const offset_3: number[];
        export { offset_3 as offset };
        export namespace overflow_3 {
            const adjustX_3: number;
            export { adjustX_3 as adjustX };
            const adjustY_3: number;
            export { adjustY_3 as adjustY };
        }
        export { overflow_3 as overflow };
    }
}
export function calcTextWidth(str: any, fontFamily?: string, fontSize?: string): any;
