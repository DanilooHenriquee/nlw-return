import { CircleNotch } from "phosphor-react";

export function Loading() {
    return (
        <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
            <CircleNotch className="animate-spin" />
        </div>
    );
}