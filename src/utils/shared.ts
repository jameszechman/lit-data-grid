export function pixelsToPercentOfWidth(pixels: number, width: number): number {
    if(pixels === undefined || width === undefined) return 0;
    return (pixels / width) * 100
}
