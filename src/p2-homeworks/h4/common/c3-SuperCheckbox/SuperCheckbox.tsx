import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import s from "./SuperCheckbox.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperCheckboxPropsType = DefaultInputPropsType & {
  onChangeChecked?: (checked: boolean) => void;
  spanClassName?: string;
};

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = ({
  type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
  onChange,
  onChangeChecked,
  className,
  spanClassName,
  children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeChecked && onChangeChecked(e.currentTarget.checked);
    onChange && onChange(e);
    // сделайте так чтоб работал onChange и onChangeChecked
  };

  const finalInputClassName = `${s.checkbox} ${className ? className : ""}`;

  return (
    <div className={s.inner}>
      <label className={s.label}>
        <input
          type={"checkbox"}
          onChange={onChangeCallback}
          className={finalInputClassName}
          {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
        />
        <div className={s.circle}>
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {children && <span className={s.spanClassName}>{children}</span>}
      </label>
    </div>
  );
};

export default SuperCheckbox;
