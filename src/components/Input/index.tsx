import { useState } from 'react';
import { phoneMask } from './masks';
import { ContainerS } from './styles';

interface InputProps {
  type: 'text' | 'tel' | 'email' | 'checkbox';
  placeholder?: string;
  onChange: (target: EventTarget & HTMLInputElement) => void;
  min?: number;
  max?: number;
}

export const Input = ({
  placeholder,
  type,
  onChange,
  min,
  max,
}: InputProps) => {
  const [value, setValue] = useState('');

  return (
    <ContainerS type={type}>
      <input
        id={type}
        min={min}
        max={max}
        type={type}
        value={value}
        placeholder={placeholder}
        className={value.length ? 'focus' : ''}
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
