import { useEffect, useState } from 'react';
import { phoneMask } from './masks';
import { ContainerS } from './styles';

interface InputProps {
  type: 'text' | 'tel' | 'email' | 'checkbox';
  placeholder?: string;
  onChange: (target: EventTarget & HTMLInputElement) => void;
  required?: boolean;
  value?: string;
  checked?: boolean;
  min?: number;
  max?: number;
}

export const Input = ({
  placeholder,
  type,
  required,
  value: valueProp,
  checked,
  onChange,
  min,
  max,
}: InputProps) => {
  const [value, setValue] = useState(valueProp);
  useEffect(() => {
    if (valueProp === '' || !valueProp) setValue('');
  }, [valueProp]);

  return (
    <ContainerS type={type}>
      <input
        id={type}
        min={min}
        max={max}
        type={type}
        value={value}
        checked={checked}
        required={required}
        placeholder={placeholder}
        className={value?.length ? 'focus' : ''}
        onChange={({ target }) => {
          setValue(type === 'tel' ? phoneMask(target.value) : target.value);
          if (onChange) onChange(target);
        }}
      />
      <label className="placeholder" htmlFor={type}>
        {placeholder}
      </label>
    </ContainerS>
  );
};
