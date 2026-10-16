import { ShadersInkFlowCursor } from './ShadersInkFlowCursor'

export function App() {
  return (
    <main className="stage">
      <ShadersInkFlowCursor className="shader-layer" />
      <section className="content" aria-label="Shaders.com 鼠标流体动效演示">
        <span className="eyebrow">NEARSTUDIO · SAMPLE 001</span>
        <h1>移动鼠标</h1>
        <p>蓝紫色流体会跟随指针生成，并在离开后逐渐消散。</p>
      </section>
      <div className="cursor-hint" aria-hidden="true">↗</div>
    </main>
  )
}
