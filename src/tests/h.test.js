import { expect } from "@esm-bundle/chai";
import { h, vdom } from "../render.js";

describe("src/render#h", () => {
    it("pragma#type", () => {
        expect(h("span")).to.deep.equal({
            vdom,
            type: "span",
            props: {},
            children: [],
            key: undefined,
            shadow: undefined,
            raw: false,
        });

        const img = new Image();
        expect(h(img)).to.deep.equal({
            vdom,
            type: img,
            props: {},
            children: [],
            key: undefined,
            shadow: undefined,
            raw: 1,
        });

        expect(h(Image)).to.deep.equal({
            vdom,
            type: Image,
            props: {},
            children: [],
            key: undefined,
            shadow: undefined,
            raw: 2,
        });
    });
    it("pragma#props", () => {
        let children = 10;
        expect(h("span", { children })).to.deep.equal({
            vdom,
            type: "span",
            props: { children },
            children: children,
            key: undefined,
            shadow: undefined,
            raw: false,
        });

        expect(h("span", {}, children)).to.deep.equal({
            vdom,
            type: "span",
            props: {},
            children: [children],
            key: undefined,
            shadow: undefined,
            raw: false,
        });
    });
});
