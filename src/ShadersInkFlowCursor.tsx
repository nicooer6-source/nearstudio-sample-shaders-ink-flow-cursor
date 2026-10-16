import { InkFlow, Shader, SolidColor, Stone } from 'shaders/react'

export type ShadersInkFlowCursorProps = {
  className?: string
}

/**
 * The exact component stack used by the desktop hero on shaders.com (2026-10-16).
 * Pointer input is handled by InkFlow through the Shader renderer.
 */
export function ShadersInkFlowCursor({ className }: ShadersInkFlowCursorProps) {
  return (
    <Shader className={className}>
      <SolidColor color="#0F0F10" />
      <Stone intensity={1} scale={200}>
        <InkFlow
          color1="#2216f7"
          color2="#55bdff"
          color3="#a702ff"
          colorMode="custom"
        />
      </Stone>
    </Shader>
  )
}
