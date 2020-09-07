import React from 'react'

export interface LabelProps {
  /**
   * Required. Use &lt;input&gt; as children.
   */
  children: React.ReactNode
  /**
   * Optional. A description for the field.
   */
  text?: string
}

const Label: React.FC<LabelProps> = ({children, text}: LabelProps) => {
  return (
    <label>
      {text}
      {children}
    </label>
  )
}

export default Label
