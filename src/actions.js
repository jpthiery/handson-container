
export const HANDSONENGINE_CHANGED = "HANDSONENGINE_CHANGED"

export function changeHandsOnEngine(hostname) {
    return{
        type: HANDSONENGINE_CHANGED,
        hostname
    }
}