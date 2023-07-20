"use client";

interface InputProps {
  type: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  texarea?: boolean;
  id: string;
  placeholder?: string;
  big?: boolean;
}

export default function Input({
  type,
  value,
  onChange,
  name,
  texarea,
  id,
  placeholder,
  big,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
      name={name}
      className={`
        w-full
        p-4
        pt-6
        font-light
        bg-white
        border-2
        outline-none
        text-black
        ${texarea ? "w-700px h-500px" : "w-full"}
        ${big ? "w-[700px] pb-[1rem]" : ""}`}
    />
  );
}
