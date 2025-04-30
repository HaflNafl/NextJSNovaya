import React from "react";
import { Checkbox } from "../ui/checkbox";

export interface FilterCheckboxProops {
    text: string;
    value: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
}

export const FilterCheckbox: React.FC<FilterCheckboxProops> = ({
    text,
    value,
    endAdornment,
    onCheckedChange,
    checked,

}) => {
    return (
        <div className="flex items-center space-x-2">
            { }
            <Checkbox
                onCheckedChange={onCheckedChange}
                checked={checked}
                value={value}
                className="rounded"
                id={`checkbox-${String(value)}`}
            />
            <label
                htmlFor={`checkbox-${String(value)}`}
                className="leading-none cursor-pointer flex-1"
            >
                {text}
            </label>
            {endAdornment}
        </div>
    );
}
    ;