import { L as List, a as ListItem } from "./index-7a08c899.js";
import { B as Button } from "./use-teleport-container-1599a5a4.js";
import { S as Space } from "./index-8bcd588e.js";
import "./index-dd449d78.js";
import "./index-90aba227.js";
import "./index-08fdf206.js";
/* empty css                */import "./index-11d38f35.js";
import "./index-f6f6f2a5.js";
import "./index-4ecc34e0.js";
/* empty css                */import { u as useHead, b as useUser, e as useAsyncData, n as navigateTo, A as API_URLS, f as useNuxtApp } from "../server.mjs";
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import "destr";
import "devalue";
import "klona";
import { u as useBasicsState } from "./useBasicsState-8a7a18a4.js";
import { a as turnThousandth } from "./index-a008b2db.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "resize-observer-polyfill";
import "number-precision";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "cookie-es";
import "ohash";
import "dayjs";
import "dayjs/plugin/updateLocale.js";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/utc.js";
import "@iconify/vue";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "生涯测评"
    });
    const { $zsFetch, $zsMsg } = useNuxtApp();
    const { determineLogin } = useUser();
    const [activeKey, setActiveKey] = useBasicsState(null);
    const { data: evaluateList, status } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "evaluateList",
      async () => {
        const [err, res] = await $zsFetch(API_URLS.EVALUATE.GET_EVALUATE_LIST, {});
        return res.data ?? [];
      },
      { default: () => [] }
    )), __temp = await __temp, __restore(), __temp);
    const getEvaluateTime = async (item) => {
      var _a, _b;
      const [err, res] = await $zsFetch(API_URLS.EVALUATE.GET_EVALUATE_TIME, {
        body: {
          id: item.id
        }
      });
      if (((_a = res.data) == null ? void 0 : _a.result) == 1) {
        navigateTo(`/evaluate/${item.id}`);
      } else {
        $zsMsg("waring", (_b = res.data) == null ? void 0 : _b.arriveTime);
      }
    };
    const viewReport = async (id) => {
      setActiveKey(id + "查看报告");
      const [err, res] = await $zsFetch(API_URLS.EVALUATE.VIEW_EVALUATE_REPORT, {
        body: {
          id
        }
      });
      if (res) {
        setActiveKey(null);
        window.open(res.data, "_blank");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_list = List;
      const _component_a_list_item = ListItem;
      const _component_a_button = Button;
      const _component_a_space = Space;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto min-h-[60vh]" }, _attrs))} data-v-faf75d26>`);
      _push(ssrRenderComponent(_component_a_list, {
        bordered: false,
        loading: unref(status) === "pending"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(evaluateList), (item, index2) => {
              _push2(ssrRenderComponent(_component_a_list_item, { key: index2 }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-[url(&#39;/images/evaluate.png&#39;)] bg-no-repeat bg-[length:100%_100%] mt-[20px] p-[20px_40px]" data-v-faf75d26${_scopeId2}><div class="text-[28px] font-bold" data-v-faf75d26${_scopeId2}>${ssrInterpolate(item.name)}</div><div class="mt-[10px] text-[16px] w-[700px]" data-v-faf75d26${_scopeId2}>${ssrInterpolate(item.advertiseTitle)}</div><div class="mt-[10px]" data-v-faf75d26${_scopeId2}><span class="mr-[30px]" data-v-faf75d26${_scopeId2}><i class="iconfont icon-wodeguanzhu font-bold text-[#666666] mr-[5px]" data-v-faf75d26${_scopeId2}></i><span data-v-faf75d26${_scopeId2}>已测人数：<span data-v-faf75d26${_scopeId2}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(item.userNum))}</span> 万</span></span><span class="mr-[30px]" data-v-faf75d26${_scopeId2}><i class="iconfont icon-rili font-bold text-[#666666] mr-[5px]" data-v-faf75d26${_scopeId2}></i><span data-v-faf75d26${_scopeId2}>测评周期：<span data-v-faf75d26${_scopeId2}>1天</span>/次</span></span><span class="mr-[30px]" data-v-faf75d26${_scopeId2}><i class="iconfont icon-wenjuan font-bold text-[#666666] mr-[5px]" data-v-faf75d26${_scopeId2}></i><span data-v-faf75d26${_scopeId2}>精选题目：<span data-v-faf75d26${_scopeId2}>${ssrInterpolate(item.topicNum)}</span>题</span></span><span data-v-faf75d26${_scopeId2}><i class="iconfont icon-bofangjilu font-bold text-[#666666] mr-[5px]" data-v-faf75d26${_scopeId2}></i><span data-v-faf75d26${_scopeId2}>建议时常：<span data-v-faf75d26${_scopeId2}>不限</span></span></span></div>`);
                    if (item.userEvaluationState == "1") {
                      _push3(ssrRenderComponent(_component_a_button, {
                        type: "primary",
                        class: "openButton mt-[20px]",
                        onClick: ($event) => unref(determineLogin)(() => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/evaluate/${item.id}`))
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` 开始测评 `);
                          } else {
                            return [
                              createTextVNode(" 开始测评 ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(_component_a_space, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_a_button, {
                              type: "primary",
                              class: "openButton mt-[20px]",
                              onClick: ($event) => getEvaluateTime(item)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` 开始测评 `);
                                } else {
                                  return [
                                    createTextVNode(" 开始测评 ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_a_button, {
                              type: "primary",
                              loading: unref(activeKey) === item.id + "查看报告",
                              class: "viewResult mt-[20px]",
                              onClick: ($event) => viewReport(item.id)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` 查看报告 `);
                                } else {
                                  return [
                                    createTextVNode(" 查看报告 ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_a_button, {
                                type: "primary",
                                class: "openButton mt-[20px]",
                                onClick: ($event) => getEvaluateTime(item)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 开始测评 ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              createVNode(_component_a_button, {
                                type: "primary",
                                loading: unref(activeKey) === item.id + "查看报告",
                                class: "viewResult mt-[20px]",
                                onClick: ($event) => viewReport(item.id)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 查看报告 ")
                                ]),
                                _: 2
                              }, 1032, ["loading", "onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "bg-[url('/images/evaluate.png')] bg-no-repeat bg-[length:100%_100%] mt-[20px] p-[20px_40px]" }, [
                        createVNode("div", { class: "text-[28px] font-bold" }, toDisplayString(item.name), 1),
                        createVNode("div", { class: "mt-[10px] text-[16px] w-[700px]" }, toDisplayString(item.advertiseTitle), 1),
                        createVNode("div", { class: "mt-[10px]" }, [
                          createVNode("span", { class: "mr-[30px]" }, [
                            createVNode("i", { class: "iconfont icon-wodeguanzhu font-bold text-[#666666] mr-[5px]" }),
                            createVNode("span", null, [
                              createTextVNode("已测人数："),
                              createVNode("span", null, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(item.userNum)), 1),
                              createTextVNode(" 万")
                            ])
                          ]),
                          createVNode("span", { class: "mr-[30px]" }, [
                            createVNode("i", { class: "iconfont icon-rili font-bold text-[#666666] mr-[5px]" }),
                            createVNode("span", null, [
                              createTextVNode("测评周期："),
                              createVNode("span", null, "1天"),
                              createTextVNode("/次")
                            ])
                          ]),
                          createVNode("span", { class: "mr-[30px]" }, [
                            createVNode("i", { class: "iconfont icon-wenjuan font-bold text-[#666666] mr-[5px]" }),
                            createVNode("span", null, [
                              createTextVNode("精选题目："),
                              createVNode("span", null, toDisplayString(item.topicNum), 1),
                              createTextVNode("题")
                            ])
                          ]),
                          createVNode("span", null, [
                            createVNode("i", { class: "iconfont icon-bofangjilu font-bold text-[#666666] mr-[5px]" }),
                            createVNode("span", null, [
                              createTextVNode("建议时常："),
                              createVNode("span", null, "不限")
                            ])
                          ])
                        ]),
                        item.userEvaluationState == "1" ? (openBlock(), createBlock(_component_a_button, {
                          key: 0,
                          type: "primary",
                          class: "openButton mt-[20px]",
                          onClick: ($event) => unref(determineLogin)(() => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/evaluate/${item.id}`))
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" 开始测评 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : (openBlock(), createBlock(_component_a_space, { key: 1 }, {
                          default: withCtx(() => [
                            createVNode(_component_a_button, {
                              type: "primary",
                              class: "openButton mt-[20px]",
                              onClick: ($event) => getEvaluateTime(item)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 开始测评 ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(_component_a_button, {
                              type: "primary",
                              loading: unref(activeKey) === item.id + "查看报告",
                              class: "viewResult mt-[20px]",
                              onClick: ($event) => viewReport(item.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 查看报告 ")
                              ]),
                              _: 2
                            }, 1032, ["loading", "onClick"])
                          ]),
                          _: 2
                        }, 1024))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(evaluateList), (item, index2) => {
                return openBlock(), createBlock(_component_a_list_item, { key: index2 }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "bg-[url('/images/evaluate.png')] bg-no-repeat bg-[length:100%_100%] mt-[20px] p-[20px_40px]" }, [
                      createVNode("div", { class: "text-[28px] font-bold" }, toDisplayString(item.name), 1),
                      createVNode("div", { class: "mt-[10px] text-[16px] w-[700px]" }, toDisplayString(item.advertiseTitle), 1),
                      createVNode("div", { class: "mt-[10px]" }, [
                        createVNode("span", { class: "mr-[30px]" }, [
                          createVNode("i", { class: "iconfont icon-wodeguanzhu font-bold text-[#666666] mr-[5px]" }),
                          createVNode("span", null, [
                            createTextVNode("已测人数："),
                            createVNode("span", null, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(item.userNum)), 1),
                            createTextVNode(" 万")
                          ])
                        ]),
                        createVNode("span", { class: "mr-[30px]" }, [
                          createVNode("i", { class: "iconfont icon-rili font-bold text-[#666666] mr-[5px]" }),
                          createVNode("span", null, [
                            createTextVNode("测评周期："),
                            createVNode("span", null, "1天"),
                            createTextVNode("/次")
                          ])
                        ]),
                        createVNode("span", { class: "mr-[30px]" }, [
                          createVNode("i", { class: "iconfont icon-wenjuan font-bold text-[#666666] mr-[5px]" }),
                          createVNode("span", null, [
                            createTextVNode("精选题目："),
                            createVNode("span", null, toDisplayString(item.topicNum), 1),
                            createTextVNode("题")
                          ])
                        ]),
                        createVNode("span", null, [
                          createVNode("i", { class: "iconfont icon-bofangjilu font-bold text-[#666666] mr-[5px]" }),
                          createVNode("span", null, [
                            createTextVNode("建议时常："),
                            createVNode("span", null, "不限")
                          ])
                        ])
                      ]),
                      item.userEvaluationState == "1" ? (openBlock(), createBlock(_component_a_button, {
                        key: 0,
                        type: "primary",
                        class: "openButton mt-[20px]",
                        onClick: ($event) => unref(determineLogin)(() => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/evaluate/${item.id}`))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" 开始测评 ")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : (openBlock(), createBlock(_component_a_space, { key: 1 }, {
                        default: withCtx(() => [
                          createVNode(_component_a_button, {
                            type: "primary",
                            class: "openButton mt-[20px]",
                            onClick: ($event) => getEvaluateTime(item)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 开始测评 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(_component_a_button, {
                            type: "primary",
                            loading: unref(activeKey) === item.id + "查看报告",
                            class: "viewResult mt-[20px]",
                            onClick: ($event) => viewReport(item.id)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" 查看报告 ")
                            ]),
                            _: 2
                          }, 1032, ["loading", "onClick"])
                        ]),
                        _: 2
                      }, 1024))
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_faf75d26_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/evaluate/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-faf75d26"]]);
export {
  index as default
};
//# sourceMappingURL=index-17373292.js.map
