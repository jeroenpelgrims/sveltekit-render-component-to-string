import type { ComponentType } from "svelte";

type RenderResult = {
  head: string;
  html: string;
  css: {
    code: string;
    map: string | null;
  }
}

type ComponentProps<TComponent extends ComponentType> = ConstructorParameters<TComponent>[0]["props"];

type RenderFunction<
  TComponent extends ComponentType,
  TProps = ComponentProps<TComponent>
> = (props: TProps) => RenderResult;

type ComponentWithRender<TComponent extends ComponentType> = TComponent & {
  render: RenderFunction<TComponent>
};

export function renderToString<TComponent extends ComponentType>(
  Component: TComponent,
  props: ComponentProps<TComponent>
): string {
  const { render } = Component as ComponentWithRender<TComponent>;
  const { html, css } = render(props);
  return `<style>${css.code}</style>${html}`;
}