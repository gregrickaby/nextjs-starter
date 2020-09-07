import React from 'react'

export interface LabelProps {
  /**
   * Required. Use &lt;input&gt; as children.
   */
  children: React.ReactElement
  /**
   * Optional. A description for the field.
   */
  text?: string
}

export const Label: React.FC<LabelProps> = ({text, children}: LabelProps) => {
  return (
    <label>
      {text}
      {children}
    </label>
  )
}
