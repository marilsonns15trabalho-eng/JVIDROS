import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NotFound from "./NotFound";

describe("NotFound", () => {
  it("renderiza a mensagem de página não encontrada", () => {
    render(<NotFound />);
    expect(
      screen.getByRole("heading", { level: 1, name: /Esse vão/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Voltar para o início/ }),
    ).toHaveAttribute("href", "/");
  });
});