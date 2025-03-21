import { FC, useCallback, useContext } from "react";
import { Controller, UseControllerProps } from "react-hook-form";

import { InputTextarea } from "primereact/inputtextarea";

import { LayoutContext } from "context/layout";
import { ContactFormValues } from "interface/contact";
import { BreakpointHeight } from "interface/enum/Breakpoint";

type TextAreaInputProps = UseControllerProps<ContactFormValues> & {
  label: string;
  className?: string;
};

const TextAreaInput: FC<TextAreaInputProps> = ({
  control,
  label,
  name,
  className = "",
  ...props
}) => {
  const { currentBreakpoint, mobile } = useContext(LayoutContext)!;
  const { height: breakpointHeight } = currentBreakpoint;

  const getRows: () => number = useCallback(() => {
    const desktopRows =
      breakpointHeight < BreakpointHeight.MD
        ? 2
        : breakpointHeight >= BreakpointHeight.MD &&
          breakpointHeight < BreakpointHeight.LG
        ? 3
        : 4;

    return mobile ? 3 : desktopRows;
  }, [breakpointHeight, mobile]);

  return (
    <Controller
      {...props}
      name={name}
      control={control}
      rules={{ required: `${label} is required` }}
      render={({ field, fieldState: { invalid }, formState: { errors } }) => (
        <div
          className={`
          flex flex-col
          ${className}
          "text-xs"
          ${breakpointHeight < BreakpointHeight.MD && "md:text-xs"}
        `}
        >
          <label htmlFor={name}>{label}:</label>
          <InputTextarea
            id={field.name}
            className={`
              resize-none
              ${breakpointHeight < BreakpointHeight.LG && "md:text-sm"}  
            `}
            invalid={invalid}
            variant={props.disabled ? "filled" : "outlined"}
            rows={getRows()}
            {...field}
          />
          {errors[field.name] && (
            <span className="text-red-900 text-xs md:text-sm">
              {errors[field.name]?.message}
            </span>
          )}
        </div>
      )}
    />
  );
};

export default TextAreaInput;
