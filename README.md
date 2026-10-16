# Ink Flow Cursor

从 Shaders.com 首页桌面端提取的鼠标流体拖尾效果。页面实际使用的组件栈是：

```tsx
<Shader>
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
```

可复用组件位于 `src/ShadersInkFlowCursor.tsx`。运行演示：

```bash
npm install
npm run dev
```

上游组件库：[shader-effects-inc/shaders](https://github.com/shader-effects-inc/shaders)，MIT License。首页网站本身并未出现在 `nicooer6-source` 的 GitHub 仓库中；本项目只保留可独立运行的交互组件。
