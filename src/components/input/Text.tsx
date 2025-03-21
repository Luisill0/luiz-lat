import { FC, useContext } from "react";
import { Controller, UseControllerProps } from "react-hook-form";

import { InputText } from "primereact/inputtext";

import { LayoutContext } from "context/layout";
import { ContactFormValues } from "interface/contact";
import { BreakpointHeight } from "interface/enum/Breakpoint";

type TextInputProps = UseControllerProps<ContactFormValues> & {
  label: string;
  className?: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
};

const TextInput: FC<TextInputProps> = ({
  control,
  label,
  name,
  pattern,
  className = "",
  ...props
}) => {
  const { currentBreakpoint } = useContext(LayoutContext)!;
  const { height: breakpointHeight } = currentBreakpoint;

  return (
    <Controller
      {...props}
      name={name}
      control={control}
      rules={{ required: `${label} is required`, pattern: pattern }}
      render={({ field, fieldState: { invalid }, formState: { errors } }) => (
        <div
          className={`
          flex flex-col
          ${className}
          "p-inputtext-sm text-xs"
          ${
            breakpointHeight > BreakpointHeight.SM &&
            breakpointHeight < BreakpointHeight.LG &&
            "md:p-inputtext-sm"
          }
          ${breakpointHeight < BreakpointHeight.MD && "md:text-xs"}
        `}
        >
          <label htmlFor={name}>{label}:</label>
          <InputText
            id={field.name}
            invalid={invalid}
            variant={props.disabled ? "filled" : "outlined"}
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

export default TextInput;
