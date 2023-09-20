import React, { ReactNode } from "react";
import './Typography.scss'

type TypographyProps = {
  variant: "s1" | "s2" | "s3" | "s4" | "s5" | "s6";
  weight: "regular" | "medium" | "semiBold" | "bold" | "extraBold";
  decoration?: "underline";
  children: ReactNode;
};

function Typography({
  variant,
  weight,
  decoration,
  children,
}: TypographyProps) {
  return (
    <p className={`Typography ${variant} ${weight} ${decoration}`}>
      {children}
    </p>
  );
}

export default Typography;
