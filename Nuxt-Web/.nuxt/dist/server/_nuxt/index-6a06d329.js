import { _ as _export_sfc, g as getPrefixCls, i as isNumber, a as isUndefined, b as isArray, c as isNull, d as isObject, u as useI18n, e as isBoolean, I as IconHover, B as Button, f as isFunction, h as IconLoading, o as on, j as off, k as isString, l as configProviderInjectionKey, m as omit, s as setGlobalConfig, n as getComponentPrefix } from "./use-teleport-container-1599a5a4.js";
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, ref, Fragment, renderList, createVNode, watch, onUpdated, mergeProps, isVNode, toRefs, inject, reactive, watchEffect, provide, toRef, getCurrentInstance } from "vue";
import { i as isEqual, u as useScrollbar, a as useComponentRef, P as Pagination, R as ResizeObserver$1, V as VirtualList, d as debounce } from "./index-90aba227.js";
import { I as IconPlus, a as IconMinus } from "./index-08fdf206.js";
import { C as Checkbox, S as Spin } from "./index-11d38f35.js";
import { S as Scrollbar, E as Empty } from "./index-f6f6f2a5.js";
import { R as Radio } from "./index-63900e07.js";
import { R as ResizeObserver, T as Trigger } from "./index-dd449d78.js";
import { T as Tooltip } from "./index-5f48af9c.js";
import { g as getValueByPath, s as setValueByPath } from "./get-value-by-path-11166a95.js";
import { u as useChildrenComponents } from "./use-children-components-d7e0e48f.js";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  name: "IconCaretDown",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-caret-down`, { [`${prefixCls}-spin`]: props.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$3 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M24.938 34.829a1.2 1.2 0 0 1-1.875 0L9.56 17.949c-.628-.785-.069-1.949.937-1.949h27.007c1.006 0 1.565 1.164.937 1.95L24.937 34.829Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$3, 14, _hoisted_1$3);
}
var _IconCaretDown = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const IconCaretDown = Object.assign(_IconCaretDown, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconCaretDown.name, _IconCaretDown);
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  name: "IconCaretUp",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-caret-up`, { [`${prefixCls}-spin`]: props.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$2 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M23.063 13.171a1.2 1.2 0 0 1 1.875 0l13.503 16.88c.628.785.069 1.949-.937 1.949H10.497c-1.006 0-1.565-1.164-.937-1.95l13.503-16.879Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$2, 14, _hoisted_1$2);
}
var _IconCaretUp = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const IconCaretUp = Object.assign(_IconCaretUp, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconCaretUp.name, _IconCaretUp);
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  name: "IconFilter",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-filter`, { [`${prefixCls}-spin`]: props.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$1 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", { d: "M30 42V22.549a1 1 0 0 1 .463-.844l10.074-6.41A1 1 0 0 0 41 14.45V8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6.451a1 1 0 0 0 .463.844l10.074 6.41a1 1 0 0 1 .463.844V37" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$1, 14, _hoisted_1$1);
}
var _IconFilter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const IconFilter = Object.assign(_IconFilter, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconFilter.name, _IconFilter);
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: "IconDragDotVertical",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-drag-dot-vertical`, { [`${prefixCls}-spin`]: props.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("path", { d: "M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z" }, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_4, 14, _hoisted_1);
}
var _IconDragDotVertical = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const IconDragDotVertical = Object.assign(_IconDragDotVertical, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconDragDotVertical.name, _IconDragDotVertical);
  }
});
var __defProp$3 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
const getDataColumnsNumber = (columns) => {
  let count = 0;
  const travelColumns = (columns2) => {
    if (isArray(columns2) && columns2.length > 0) {
      for (const item of columns2) {
        if (!item.children) {
          count += 1;
        } else {
          travelColumns(item.children);
        }
      }
    }
  };
  travelColumns(columns);
  return count;
};
const getTotalHeaderRows = (columns) => {
  let count = 0;
  if (isArray(columns) && columns.length > 0) {
    count = 1;
    for (const item of columns) {
      if (item.children) {
        const depth = getTotalHeaderRows(item.children);
        if (depth > 0) {
          count = Math.max(count, depth + 1);
        }
      }
    }
  }
  return count;
};
const setParentFixed = (column, fixed) => {
  let { parent } = column;
  while (parent) {
    if (parent.fixed === fixed) {
      if (fixed === "left") {
        parent.isLastLeftFixed = true;
      } else {
        parent.isFirstRightFixed = true;
      }
    }
    parent = parent.parent;
  }
};
const getGroupColumns = (columns, columnMap, columnWidth) => {
  const totalHeaderRows = getTotalHeaderRows(columns);
  columnMap.clear();
  const dataColumns = [];
  const groupColumns = [...Array(totalHeaderRows)].map(() => []);
  let lastLeftFixedIndex;
  let firstRightFixedIndex;
  const travelColumns = (columns2, {
    level = 0,
    parent,
    fixed
  } = {}) => {
    var _a;
    for (const item of columns2) {
      const cell = __spreadProps$1(__spreadValues$3({}, item), { parent });
      if (isArray(cell.children)) {
        const colSpan = getDataColumnsNumber(cell.children);
        if (colSpan > 1) {
          cell.colSpan = colSpan;
        }
        groupColumns[level].push(cell);
        travelColumns(cell.children, {
          level: level + 1,
          parent: cell,
          fixed: cell.fixed
        });
      } else {
        const rowSpan = totalHeaderRows - level;
        if (rowSpan > 1) {
          cell.rowSpan = rowSpan;
        }
        if (fixed || cell.fixed) {
          cell.fixed = (_a = cell.fixed) != null ? _a : fixed;
          if (cell.fixed === "left") {
            lastLeftFixedIndex = dataColumns.length;
          } else if (isUndefined(firstRightFixedIndex)) {
            firstRightFixedIndex = dataColumns.length;
          }
        }
        if (isUndefined(cell.dataIndex) || isNull(cell.dataIndex)) {
          cell.dataIndex = `__arco_data_index_${dataColumns.length}`;
        }
        if (columnWidth[cell.dataIndex]) {
          cell._resizeWidth = columnWidth[cell.dataIndex];
        }
        columnMap.set(cell.dataIndex, cell);
        dataColumns.push(cell);
        groupColumns[level].push(cell);
      }
    }
  };
  travelColumns(columns);
  if (!isUndefined(lastLeftFixedIndex)) {
    dataColumns[lastLeftFixedIndex].isLastLeftFixed = true;
    setParentFixed(dataColumns[lastLeftFixedIndex], "left");
  }
  if (!isUndefined(firstRightFixedIndex)) {
    dataColumns[firstRightFixedIndex].isFirstRightFixed = true;
    setParentFixed(dataColumns[firstRightFixedIndex], "right");
  }
  return { dataColumns, groupColumns };
};
const getOperationColumnIndex = (operations, name) => {
  for (let i = 0; i < operations.length; i++) {
    if (operations[i].name === name) {
      return i;
    }
  }
  return -1;
};
const getOperationFixedNumber = (column, operations) => {
  var _a;
  const index2 = getOperationColumnIndex(operations, column.name);
  if (index2 <= 0) {
    return 0;
  }
  let count = 0;
  const _operations = operations.slice(0, index2);
  for (const item of _operations) {
    count += (_a = item.width) != null ? _a : 0;
  }
  return count;
};
const getFirstDataColumn = (column) => {
  if (column.children && column.children.length > 0)
    return getFirstDataColumn(column.children[0]);
  return column;
};
const getLastDataColumn = (column) => {
  if (column.children && column.children.length > 0)
    return getFirstDataColumn(column.children[column.children.length - 1]);
  return column;
};
const getFixedNumber = (column, {
  dataColumns,
  operations
}) => {
  var _a, _b, _c;
  let count = 0;
  if (column.fixed === "left") {
    for (const item of operations) {
      count += (_a = item.width) != null ? _a : 40;
    }
    const first = getFirstDataColumn(column);
    for (const item of dataColumns) {
      if (first.dataIndex === item.dataIndex) {
        break;
      }
      count += (_c = (_b = item._resizeWidth) != null ? _b : item.width) != null ? _c : 0;
    }
    return count;
  }
  const last = getLastDataColumn(column);
  for (let i = dataColumns.length - 1; i > 0; i--) {
    const item = dataColumns[i];
    if (last.dataIndex === item.dataIndex) {
      break;
    }
    if (item.fixed === "right") {
      count += item.width;
    }
  }
  return count;
};
const getOperationFixedCls = (prefixCls, column) => {
  if (column.fixed) {
    return [
      `${prefixCls}-col-fixed-left`,
      {
        [`${prefixCls}-col-fixed-left-last`]: column.isLastLeftFixed
      }
    ];
  }
  return [];
};
const getFixedCls = (prefixCls, column) => {
  if (column.fixed === "left") {
    return [
      `${prefixCls}-col-fixed-left`,
      {
        [`${prefixCls}-col-fixed-left-last`]: column.isLastLeftFixed
      }
    ];
  }
  if (column.fixed === "right") {
    return [
      `${prefixCls}-col-fixed-right`,
      {
        [`${prefixCls}-col-fixed-right-first`]: column.isFirstRightFixed
      }
    ];
  }
  return [];
};
const getStyle = (column, {
  dataColumns,
  operations
}) => {
  if (column.fixed) {
    const offset = `${getFixedNumber(column, { dataColumns, operations })}px`;
    if (column.fixed === "left") {
      return {
        left: offset
      };
    }
    return {
      right: offset
    };
  }
  return {};
};
const getOperationStyle = (column, operations) => {
  if (column.fixed) {
    return {
      left: `${getOperationFixedNumber(column, operations)}px`
    };
  }
  return {};
};
function mapArrayWithChildren(arr) {
  return arr.map((item) => {
    const newItem = __spreadValues$3({}, item);
    if (newItem.children) {
      newItem.children = mapArrayWithChildren(newItem.children);
    }
    return newItem;
  });
}
function mapRawTableData(arr) {
  return arr.map((item) => {
    const rawItem = item.raw;
    if (item.children && rawItem.children) {
      rawItem.children = mapRawTableData(item.children);
    }
    return item.raw;
  });
}
const getLeafKeys = (record) => {
  const keys = [];
  if (record.children) {
    for (const item of record.children) {
      if (item.isLeaf) {
        keys.push(item.key);
      } else {
        keys.push(...getLeafKeys(item));
      }
    }
  }
  return keys;
};
const getSelectionStatus = (selectedRowKeys, leafKeys) => {
  let checked = false;
  let indeterminate = false;
  const selectedLeafKeys = leafKeys.filter((key) => selectedRowKeys.includes(key));
  if (selectedLeafKeys.length > 0) {
    if (selectedLeafKeys.length >= leafKeys.length) {
      checked = true;
    } else {
      indeterminate = true;
    }
  }
  return {
    checked,
    indeterminate
  };
};
const union = (target, source, difference = false) => {
  return difference ? target.filter((item) => !source.includes(item)) : Array.from(new Set(target.concat(source)));
};
const useRowSelection = ({
  selectedKeys,
  defaultSelectedKeys,
  rowSelection,
  currentAllRowKeys,
  currentAllEnabledRowKeys,
  emit
}) => {
  var _a, _b, _c;
  const isRadio = computed(() => {
    var _a2;
    return ((_a2 = rowSelection.value) == null ? void 0 : _a2.type) === "radio";
  });
  const _selectedRowKeys = ref((_c = (_b = defaultSelectedKeys.value) != null ? _b : (_a = rowSelection.value) == null ? void 0 : _a.defaultSelectedRowKeys) != null ? _c : []);
  const selectedRowKeys = computed(() => {
    var _a2, _b2, _c2;
    return (_c2 = (_b2 = selectedKeys.value) != null ? _b2 : (_a2 = rowSelection.value) == null ? void 0 : _a2.selectedRowKeys) != null ? _c2 : _selectedRowKeys.value;
  });
  const currentSelectedRowKeys = computed(() => selectedRowKeys.value.filter((key) => currentAllRowKeys.value.includes(key)));
  const handleSelectAll = (checked) => {
    const newKeys = union(selectedRowKeys.value, currentAllEnabledRowKeys.value, !checked);
    _selectedRowKeys.value = newKeys;
    emit("selectAll", checked);
    emit("selectionChange", newKeys);
    emit("update:selectedKeys", newKeys);
  };
  const handleSelect = (checked, record) => {
    const selectedAllRowKeys = isRadio.value ? [record.key] : union(selectedRowKeys.value, [record.key], !checked);
    _selectedRowKeys.value = selectedAllRowKeys;
    emit("select", selectedAllRowKeys, record.key, record.raw);
    emit("selectionChange", selectedAllRowKeys);
    emit("update:selectedKeys", selectedAllRowKeys);
  };
  const handleSelectAllLeafs = (record, checked) => {
    const newKeys = union(selectedRowKeys.value, getLeafKeys(record), !checked);
    _selectedRowKeys.value = newKeys;
    emit("select", newKeys, record.key, record.raw);
    emit("selectionChange", newKeys);
    emit("update:selectedKeys", newKeys);
  };
  const select = (rowKey, checked = true) => {
    const _rowKeys = [].concat(rowKey);
    const newSelectedRowKeys = isRadio.value ? _rowKeys : union(selectedRowKeys.value, _rowKeys, !checked);
    _selectedRowKeys.value = newSelectedRowKeys;
    emit("selectionChange", newSelectedRowKeys);
    emit("update:selectedKeys", newSelectedRowKeys);
  };
  const selectAll = (checked = true) => {
    const newKeys = union(selectedRowKeys.value, currentAllEnabledRowKeys.value, !checked);
    _selectedRowKeys.value = newKeys;
    emit("selectionChange", newKeys);
    emit("update:selectedKeys", newKeys);
  };
  const clearSelected = () => {
    _selectedRowKeys.value = [];
    emit("selectionChange", []);
    emit("update:selectedKeys", []);
  };
  return {
    isRadio,
    selectedRowKeys,
    currentSelectedRowKeys,
    handleSelectAll,
    handleSelect,
    handleSelectAllLeafs,
    select,
    selectAll,
    clearSelected
  };
};
const useExpand = ({
  expandedKeys,
  defaultExpandedKeys,
  defaultExpandAllRows,
  expandable,
  allRowKeys,
  emit
}) => {
  const getDefaultExpandedRowKeys = () => {
    var _a, _b;
    if (defaultExpandedKeys.value) {
      return defaultExpandedKeys.value;
    }
    if ((_a = expandable.value) == null ? void 0 : _a.defaultExpandedRowKeys) {
      return expandable.value.defaultExpandedRowKeys;
    }
    if (defaultExpandAllRows.value || ((_b = expandable.value) == null ? void 0 : _b.defaultExpandAllRows)) {
      return [...allRowKeys.value];
    }
    return [];
  };
  const _expandedRowKeys = ref(getDefaultExpandedRowKeys());
  const expandedRowKeys = computed(() => {
    var _a, _b, _c;
    return (_c = (_b = expandedKeys.value) != null ? _b : (_a = expandable.value) == null ? void 0 : _a.expandedRowKeys) != null ? _c : _expandedRowKeys.value;
  });
  const handleExpand = (rowKey, record) => {
    const isExpanded = expandedRowKeys.value.includes(rowKey);
    const newExpandedRowKeys = isExpanded ? expandedRowKeys.value.filter((key) => rowKey !== key) : expandedRowKeys.value.concat(rowKey);
    _expandedRowKeys.value = newExpandedRowKeys;
    emit("expand", rowKey, record);
    emit("expandedChange", newExpandedRowKeys);
    emit("update:expandedKeys", newExpandedRowKeys);
  };
  const expand = (rowKey, expanded = true) => {
    const _rowKeys = [].concat(rowKey);
    const newExpandedRowKeys = expanded ? expandedRowKeys.value.concat(_rowKeys) : expandedRowKeys.value.filter((key) => !_rowKeys.includes(key));
    _expandedRowKeys.value = newExpandedRowKeys;
    emit("expandedChange", newExpandedRowKeys);
    emit("update:expandedKeys", newExpandedRowKeys);
  };
  const expandAll = (expanded = true) => {
    const newExpandedRowKeys = expanded ? [...allRowKeys.value] : [];
    _expandedRowKeys.value = newExpandedRowKeys;
    emit("expandedChange", newExpandedRowKeys);
    emit("update:expandedKeys", newExpandedRowKeys);
  };
  return {
    expandedRowKeys,
    handleExpand,
    expand,
    expandAll
  };
};
const usePagination = (props, emit) => {
  var _a, _b;
  const _page = ref(isObject(props.pagination) ? (_a = props.pagination.defaultCurrent) != null ? _a : 1 : 1);
  const _pageSize = ref(isObject(props.pagination) ? (_b = props.pagination.defaultPageSize) != null ? _b : 10 : 10);
  const pageSize = computed(() => {
    var _a2;
    return isObject(props.pagination) ? (_a2 = props.pagination.pageSize) != null ? _a2 : _pageSize.value : _pageSize.value;
  });
  const page = computed(() => {
    var _a2;
    return isObject(props.pagination) ? (_a2 = props.pagination.current) != null ? _a2 : _page.value : _page.value;
  });
  const handlePageChange = (page2) => {
    _page.value = page2;
    emit("pageChange", page2);
  };
  const handlePageSizeChange = (pageSize2) => {
    _pageSize.value = pageSize2;
    emit("pageSizeChange", pageSize2);
  };
  return {
    page,
    pageSize,
    handlePageChange,
    handlePageSizeChange
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "ColGroup",
  props: {
    dataColumns: {
      type: Array,
      required: true
    },
    operations: {
      type: Array,
      required: true
    },
    columnWidth: {
      type: Object
    }
  },
  setup() {
    const fixedWidth = (width, minWidth) => {
      if (width) {
        const min = Math.max(width, minWidth || 0);
        return {
          width: `${width}px`,
          minWidth: `${min}px`,
          maxWidth: `${width}px`
        };
      }
      if (minWidth) {
        return { minWidth: `${minWidth}px` };
      }
      return void 0;
    };
    return {
      fixedWidth
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("colgroup", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.operations, (item) => {
      return openBlock(), createElementBlock("col", {
        key: `arco-col-${item.name}`,
        class: normalizeClass(`arco-table-${item.name}-col`),
        style: normalizeStyle(_ctx.fixedWidth(item.width))
      }, null, 6);
    }), 128)),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataColumns, (item) => {
      return openBlock(), createElementBlock("col", {
        key: `arco-col-${item.dataIndex}`,
        style: normalizeStyle(_ctx.fixedWidth(_ctx.columnWidth && item.dataIndex && _ctx.columnWidth[item.dataIndex] || item.width, item.minWidth))
      }, null, 4);
    }), 128))
  ]);
}
var ColGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var Thead = /* @__PURE__ */ defineComponent({
  name: "Thead",
  setup(_, {
    slots
  }) {
    return () => {
      var _a, _b;
      return createVNode((_b = (_a = slots.thead) == null ? void 0 : _a.call(slots)[0]) != null ? _b : "thead", null, {
        default: slots.default
      });
    };
  }
});
var Tbody = /* @__PURE__ */ defineComponent({
  name: "Tbody",
  setup(_, {
    slots
  }) {
    return () => {
      var _a, _b;
      return createVNode((_b = (_a = slots.tbody) == null ? void 0 : _a.call(slots)[0]) != null ? _b : "tbody", null, {
        default: slots.default
      });
    };
  }
});
var Tr = /* @__PURE__ */ defineComponent({
  name: "Tr",
  props: {
    expand: {
      type: Boolean
    },
    empty: {
      type: Boolean
    },
    checked: {
      type: Boolean
    },
    rowIndex: Number,
    record: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("table");
    const cls = computed(() => [`${prefixCls}-tr`, {
      [`${prefixCls}-tr-expand`]: props.expand,
      [`${prefixCls}-tr-empty`]: props.empty,
      [`${prefixCls}-tr-checked`]: props.checked
    }]);
    return () => {
      var _a, _b, _c;
      return createVNode((_c = (_b = slots.tr) == null ? void 0 : _b.call(slots, {
        rowIndex: props.rowIndex,
        record: (_a = props.record) == null ? void 0 : _a.raw
      })[0]) != null ? _c : "tr", {
        class: cls.value
      }, {
        default: slots.default
      });
    };
  }
});
const useColumnSorter = ({
  column,
  tableCtx
}) => {
  const sortOrder = computed(() => {
    var _a;
    if (column.value.dataIndex && column.value.dataIndex === ((_a = tableCtx.sorter) == null ? void 0 : _a.field)) {
      return tableCtx.sorter.direction;
    }
    return void 0;
  });
  const sortDirections = computed(() => {
    var _a, _b, _c;
    return (_c = (_b = (_a = column.value) == null ? void 0 : _a.sortable) == null ? void 0 : _b.sortDirections) != null ? _c : [];
  });
  const hasSorter = computed(() => sortDirections.value.length > 0);
  const hasAscendBtn = computed(() => sortDirections.value.includes("ascend"));
  const hasDescendBtn = computed(() => sortDirections.value.includes("descend"));
  const nextSortOrder = computed(() => {
    var _a, _b;
    if (!sortOrder.value) {
      return (_a = sortDirections.value[0]) != null ? _a : "";
    }
    if (sortOrder.value === sortDirections.value[0]) {
      return (_b = sortDirections.value[1]) != null ? _b : "";
    }
    return "";
  });
  const handleClickSorter = (ev) => {
    var _a;
    if (column.value.dataIndex) {
      (_a = tableCtx.onSorterChange) == null ? void 0 : _a.call(tableCtx, column.value.dataIndex, nextSortOrder.value, ev);
    }
  };
  return {
    sortOrder,
    hasSorter,
    hasAscendBtn,
    hasDescendBtn,
    nextSortOrder,
    handleClickSorter
  };
};
const useColumnFilter = ({
  column,
  tableCtx
}) => {
  const filterValue = computed(() => {
    var _a;
    if (column.value.dataIndex && ((_a = tableCtx.filters) == null ? void 0 : _a[column.value.dataIndex])) {
      return tableCtx.filters[column.value.dataIndex];
    }
    return [];
  });
  const filterPopupVisible = ref(false);
  const isFilterActive = computed(() => filterValue.value.length > 0);
  const isMultipleFilter = computed(() => {
    var _a;
    return Boolean((_a = column.value.filterable) == null ? void 0 : _a.multiple);
  });
  const columnFilterValue = ref(filterValue.value);
  watch(filterValue, (value) => {
    if (isArray(value) && String(value) !== String(columnFilterValue.value)) {
      columnFilterValue.value = value;
    }
  });
  const handleFilterPopupVisibleChange = (value) => {
    filterPopupVisible.value = value;
  };
  const setFilterValue = (filterValue2) => {
    columnFilterValue.value = filterValue2;
  };
  const handleCheckboxFilterChange = (values) => {
    setFilterValue(values);
  };
  const handleRadioFilterChange = (value) => {
    setFilterValue([value]);
  };
  const handleFilterConfirm = (ev) => {
    var _a;
    if (column.value.dataIndex) {
      (_a = tableCtx.onFilterChange) == null ? void 0 : _a.call(tableCtx, column.value.dataIndex, columnFilterValue.value, ev);
    }
    handleFilterPopupVisibleChange(false);
  };
  const handleFilterReset = (ev) => {
    var _a;
    setFilterValue([]);
    if (column.value.dataIndex) {
      (_a = tableCtx.onFilterChange) == null ? void 0 : _a.call(tableCtx, column.value.dataIndex, columnFilterValue.value, ev);
    }
    handleFilterPopupVisibleChange(false);
  };
  return {
    filterPopupVisible,
    isFilterActive,
    isMultipleFilter,
    columnFilterValue,
    handleFilterPopupVisibleChange,
    setFilterValue,
    handleCheckboxFilterChange,
    handleRadioFilterChange,
    handleFilterConfirm,
    handleFilterReset
  };
};
const tableInjectionKey = Symbol("ArcoTable");
const tableColumnInjectionKey = Symbol("ArcoTableColumn");
function _isSlot$3(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var AutoTooltip = /* @__PURE__ */ defineComponent({
  name: "AutoTooltip",
  inheritAttrs: false,
  props: {
    tooltipProps: {
      type: Object
    }
  },
  setup(props, {
    attrs,
    slots
  }) {
    const prefix = getPrefixCls("auto-tooltip");
    const containerRef = ref();
    const contentRef = ref();
    const text = ref("");
    const showTooltip = ref(false);
    const calTooltip = () => {
      if (containerRef.value && contentRef.value) {
        const _show = contentRef.value.offsetWidth > containerRef.value.offsetWidth;
        if (_show !== showTooltip.value) {
          showTooltip.value = _show;
        }
      }
    };
    const getText = () => {
      var _a;
      if (((_a = contentRef.value) == null ? void 0 : _a.textContent) && contentRef.value.textContent !== text.value) {
        text.value = contentRef.value.textContent;
      }
    };
    const onResize = () => {
      getText();
      calTooltip();
    };
    onUpdated(() => {
      getText();
      calTooltip();
    });
    const renderContent = () => {
      return createVNode("span", mergeProps({
        "ref": containerRef,
        "class": prefix
      }, attrs), [createVNode(ResizeObserver, {
        "onResize": onResize
      }, {
        default: () => {
          var _a;
          return [createVNode("span", {
            "ref": contentRef,
            "class": `${prefix}-content`
          }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])];
        }
      })]);
    };
    return () => {
      let _slot2;
      if (showTooltip.value) {
        let _slot;
        return createVNode(Tooltip, mergeProps({
          "content": text.value,
          "onResize": onResize
        }, props.tooltipProps), _isSlot$3(_slot = renderContent()) ? _slot : {
          default: () => [_slot]
        });
      }
      return createVNode(ResizeObserver, {
        "onResize": onResize
      }, _isSlot$3(_slot2 = renderContent()) ? _slot2 : {
        default: () => [_slot2]
      });
    };
  }
});
var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
function _isSlot$2(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var Th = /* @__PURE__ */ defineComponent({
  name: "Th",
  props: {
    column: {
      type: Object,
      default: () => ({})
    },
    operations: {
      type: Array,
      default: () => []
    },
    dataColumns: {
      type: Array,
      default: () => []
    },
    resizable: Boolean
  },
  setup(props, {
    slots
  }) {
    const {
      column
    } = toRefs(props);
    const prefixCls = getPrefixCls("table");
    const {
      t
    } = useI18n();
    const tableCtx = inject(tableInjectionKey, {});
    const resizing = computed(() => {
      var _a;
      return ((_a = props.column) == null ? void 0 : _a.dataIndex) && tableCtx.resizingColumn === props.column.dataIndex;
    });
    const tooltipProps = computed(() => {
      var _a;
      if (isObject((_a = props.column) == null ? void 0 : _a.tooltip)) {
        return props.column.tooltip;
      }
      return void 0;
    });
    const filterIconAlignLeft = computed(() => {
      var _a;
      if (((_a = props.column) == null ? void 0 : _a.filterable) && isBoolean(props.column.filterable.alignLeft)) {
        return props.column.filterable.alignLeft;
      }
      return tableCtx.filterIconAlignLeft;
    });
    const {
      sortOrder,
      hasSorter,
      hasAscendBtn,
      hasDescendBtn,
      nextSortOrder,
      handleClickSorter
    } = useColumnSorter({
      column,
      tableCtx
    });
    const {
      filterPopupVisible,
      isFilterActive,
      isMultipleFilter,
      columnFilterValue,
      handleFilterPopupVisibleChange,
      setFilterValue,
      handleCheckboxFilterChange,
      handleRadioFilterChange,
      handleFilterConfirm,
      handleFilterReset
    } = useColumnFilter({
      column,
      tableCtx
    });
    const renderFilterContent = () => {
      var _a, _b, _c, _d, _e;
      let _slot, _slot2;
      const {
        filterable
      } = props.column;
      if ((_a = props.column.slots) == null ? void 0 : _a["filter-content"]) {
        return (_b = props.column.slots) == null ? void 0 : _b["filter-content"]({
          filterValue: columnFilterValue.value,
          setFilterValue,
          handleFilterConfirm,
          handleFilterReset
        });
      }
      if (filterable == null ? void 0 : filterable.slotName) {
        return (_d = (_c = tableCtx == null ? void 0 : tableCtx.slots) == null ? void 0 : _c[filterable == null ? void 0 : filterable.slotName]) == null ? void 0 : _d.call(_c, {
          filterValue: columnFilterValue.value,
          setFilterValue,
          handleFilterConfirm,
          handleFilterReset
        });
      }
      if (filterable == null ? void 0 : filterable.renderContent) {
        return filterable.renderContent({
          filterValue: columnFilterValue.value,
          setFilterValue,
          handleFilterConfirm,
          handleFilterReset
        });
      }
      return createVNode("div", {
        "class": `${prefixCls}-filters-content`
      }, [createVNode("ul", {
        "class": `${prefixCls}-filters-list`
      }, [(_e = filterable == null ? void 0 : filterable.filters) == null ? void 0 : _e.map((item, index2) => {
        var _a2;
        return createVNode("li", {
          "class": `${prefixCls}-filters-item`,
          "key": index2
        }, [isMultipleFilter.value ? createVNode(Checkbox, {
          "value": item.value,
          "modelValue": columnFilterValue.value,
          "uninjectGroupContext": true,
          "onChange": handleCheckboxFilterChange
        }, {
          default: () => [item.text]
        }) : createVNode(Radio, {
          "value": item.value,
          "modelValue": (_a2 = columnFilterValue.value[0]) != null ? _a2 : "",
          "uninjectGroupContext": true,
          "onChange": handleRadioFilterChange
        }, {
          default: () => [item.text]
        })]);
      })]), createVNode("div", {
        "class": `${prefixCls}-filters-bottom`
      }, [createVNode(Button, {
        "size": "mini",
        "onClick": handleFilterReset
      }, _isSlot$2(_slot = t("table.resetText")) ? _slot : {
        default: () => [_slot]
      }), createVNode(Button, {
        "type": "primary",
        "size": "mini",
        "onClick": handleFilterConfirm
      }, _isSlot$2(_slot2 = t("table.okText")) ? _slot2 : {
        default: () => [_slot2]
      })])]);
    };
    const renderFilter = () => {
      const {
        filterable
      } = props.column;
      if (!filterable) {
        return null;
      }
      return createVNode(Trigger, mergeProps({
        "popupVisible": filterPopupVisible.value,
        "trigger": "click",
        "autoFitPosition": true,
        "popupOffset": filterIconAlignLeft.value ? 4 : 0,
        "onPopupVisibleChange": handleFilterPopupVisibleChange
      }, filterable.triggerProps), {
        default: () => [createVNode(IconHover, {
          "class": [`${prefixCls}-filters`, {
            [`${prefixCls}-filters-active`]: isFilterActive.value,
            [`${prefixCls}-filters-open`]: filterPopupVisible.value,
            [`${prefixCls}-filters-align-left`]: filterIconAlignLeft.value
          }],
          "disabled": !filterIconAlignLeft.value,
          "onClick": (ev) => ev.stopPropagation()
        }, {
          default: () => {
            var _a, _b, _c, _d, _e;
            return [(_e = (_d = (_b = (_a = props.column.slots) == null ? void 0 : _a["filter-icon"]) == null ? void 0 : _b.call(_a)) != null ? _d : (_c = filterable.icon) == null ? void 0 : _c.call(filterable)) != null ? _e : createVNode(IconFilter, null, null)];
          }
        })],
        content: renderFilterContent
      });
    };
    const cellCls = computed(() => {
      var _a, _b;
      const cls2 = [`${prefixCls}-cell`, `${prefixCls}-cell-align-${(_b = (_a = props.column) == null ? void 0 : _a.align) != null ? _b : props.column.children ? "center" : "left"}`];
      if (hasSorter.value) {
        cls2.push(`${prefixCls}-cell-with-sorter`, {
          [`${prefixCls}-cell-next-ascend`]: nextSortOrder.value === "ascend",
          [`${prefixCls}-cell-next-descend`]: nextSortOrder.value === "descend"
        });
      }
      if (filterIconAlignLeft.value) {
        cls2.push(`${prefixCls}-cell-with-filter`);
      }
      return cls2;
    });
    const renderTitle = () => {
      var _a, _b, _c, _d, _e, _f;
      if (slots.default) {
        return slots.default();
      }
      if (((_a = props.column) == null ? void 0 : _a.titleSlotName) && ((_b = tableCtx.slots) == null ? void 0 : _b[props.column.titleSlotName])) {
        return (_d = (_c = tableCtx.slots)[props.column.titleSlotName]) == null ? void 0 : _d.call(_c, {
          column: props.column
        });
      }
      if ((_f = (_e = props.column) == null ? void 0 : _e.slots) == null ? void 0 : _f.title) {
        return props.column.slots.title();
      }
      if (isFunction(props.column.title)) {
        return props.column.title();
      }
      return props.column.title;
    };
    const renderCell = () => {
      var _a, _b, _c;
      let _slot3;
      return createVNode("span", {
        "class": cellCls.value,
        "onClick": hasSorter.value ? handleClickSorter : void 0
      }, [((_a = props.column) == null ? void 0 : _a.ellipsis) && ((_b = props.column) == null ? void 0 : _b.tooltip) ? createVNode(AutoTooltip, {
        "class": `${prefixCls}-th-title`,
        "tooltipProps": tooltipProps.value
      }, _isSlot$2(_slot3 = renderTitle()) ? _slot3 : {
        default: () => [_slot3]
      }) : createVNode("span", {
        "class": [`${prefixCls}-th-title`, {
          [`${prefixCls}-text-ellipsis`]: (_c = props.column) == null ? void 0 : _c.ellipsis
        }]
      }, [renderTitle()]), hasSorter.value && createVNode("span", {
        "class": `${prefixCls}-sorter`
      }, [hasAscendBtn.value && createVNode("div", {
        "class": [`${prefixCls}-sorter-icon`, {
          [`${prefixCls}-sorter-icon-active`]: sortOrder.value === "ascend"
        }]
      }, [createVNode(IconCaretUp, null, null)]), hasDescendBtn.value && createVNode("div", {
        "class": [`${prefixCls}-sorter-icon`, {
          [`${prefixCls}-sorter-icon-active`]: sortOrder.value === "descend"
        }]
      }, [createVNode(IconCaretDown, null, null)])]), filterIconAlignLeft.value && renderFilter()]);
    };
    const style = computed(() => {
      var _a, _b;
      return __spreadValues$2(__spreadValues$2(__spreadValues$2({}, getStyle(props.column, {
        dataColumns: props.dataColumns,
        operations: props.operations
      })), (_a = props.column) == null ? void 0 : _a.cellStyle), (_b = props.column) == null ? void 0 : _b.headerCellStyle);
    });
    const cls = computed(() => {
      var _a, _b;
      return [`${prefixCls}-th`, {
        [`${prefixCls}-col-sorted`]: Boolean(sortOrder.value),
        [`${prefixCls}-th-resizing`]: resizing.value
      }, ...getFixedCls(prefixCls, props.column), (_a = props.column) == null ? void 0 : _a.cellClass, (_b = props.column) == null ? void 0 : _b.headerCellClass];
    });
    const handleMouseDown = (ev) => {
      var _a, _b, _c;
      if ((_a = props.column) == null ? void 0 : _a.dataIndex) {
        (_c = tableCtx.onThMouseDown) == null ? void 0 : _c.call(tableCtx, (_b = props.column) == null ? void 0 : _b.dataIndex, ev);
      }
    };
    return () => {
      var _a, _b, _c, _d;
      const colSpan = (_a = props.column.colSpan) != null ? _a : 1;
      const rowSpan = (_b = props.column.rowSpan) != null ? _b : 1;
      return createVNode((_d = (_c = slots.th) == null ? void 0 : _c.call(slots, {
        column: props.column
      })[0]) != null ? _d : "th", {
        class: cls.value,
        style: style.value,
        colspan: colSpan > 1 ? colSpan : void 0,
        rowspan: rowSpan > 1 ? rowSpan : void 0
      }, {
        default: () => [renderCell(), !filterIconAlignLeft.value && renderFilter(), props.resizable && createVNode("span", {
          "class": `${prefixCls}-column-handle`,
          "onMousedown": handleMouseDown
        }, null)]
      });
    };
  }
});
var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
function _isSlot$1(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var Td = /* @__PURE__ */ defineComponent({
  name: "Td",
  props: {
    rowIndex: Number,
    record: {
      type: Object,
      default: () => ({})
    },
    column: {
      type: Object,
      default: () => ({})
    },
    type: {
      type: String,
      default: "normal"
    },
    operations: {
      type: Array,
      default: () => []
    },
    dataColumns: {
      type: Array,
      default: () => []
    },
    colSpan: {
      type: Number,
      default: 1
    },
    rowSpan: {
      type: Number,
      default: 1
    },
    isFixedExpand: {
      type: Boolean,
      default: false
    },
    containerWidth: {
      type: Number
    },
    showExpandBtn: {
      type: Boolean,
      default: false
    },
    indentSize: {
      type: Number,
      default: 0
    },
    renderExpandBtn: {
      type: Function
    },
    summary: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("table");
    const tooltipProps = computed(() => {
      var _a;
      if (isObject((_a = props.column) == null ? void 0 : _a.tooltip)) {
        return props.column.tooltip;
      }
      return void 0;
    });
    const isSorted = computed(() => {
      var _a, _b;
      return ((_a = props.column) == null ? void 0 : _a.dataIndex) && ((_b = tableCtx.sorter) == null ? void 0 : _b.field) === props.column.dataIndex;
    });
    const resizing = computed(() => {
      var _a;
      return ((_a = props.column) == null ? void 0 : _a.dataIndex) && tableCtx.resizingColumn === props.column.dataIndex;
    });
    const getCustomClass = () => {
      var _a, _b, _c, _d, _e, _f;
      if (props.summary) {
        return isFunction((_a = props.column) == null ? void 0 : _a.summaryCellClass) ? props.column.summaryCellClass((_b = props.record) == null ? void 0 : _b.raw) : (_c = props.column) == null ? void 0 : _c.summaryCellClass;
      }
      return isFunction((_d = props.column) == null ? void 0 : _d.bodyCellClass) ? props.column.bodyCellClass((_e = props.record) == null ? void 0 : _e.raw) : (_f = props.column) == null ? void 0 : _f.bodyCellClass;
    };
    const cls = computed(() => {
      var _a;
      return [`${prefixCls}-td`, {
        [`${prefixCls}-col-sorted`]: isSorted.value,
        [`${prefixCls}-td-resizing`]: resizing.value
      }, ...getFixedCls(prefixCls, props.column), (_a = props.column) == null ? void 0 : _a.cellClass, getCustomClass()];
    });
    const getCustomStyle = () => {
      var _a, _b, _c, _d, _e, _f;
      if (props.summary) {
        return isFunction((_a = props.column) == null ? void 0 : _a.summaryCellStyle) ? props.column.summaryCellStyle((_b = props.record) == null ? void 0 : _b.raw) : (_c = props.column) == null ? void 0 : _c.summaryCellStyle;
      }
      return isFunction((_d = props.column) == null ? void 0 : _d.bodyCellStyle) ? props.column.bodyCellStyle((_e = props.record) == null ? void 0 : _e.raw) : (_f = props.column) == null ? void 0 : _f.bodyCellStyle;
    };
    const style = computed(() => {
      var _a;
      const style2 = getStyle(props.column, {
        dataColumns: props.dataColumns,
        operations: props.operations
      });
      const customStyle = getCustomStyle();
      return __spreadValues$1(__spreadValues$1(__spreadValues$1({}, style2), (_a = props.column) == null ? void 0 : _a.cellStyle), customStyle);
    });
    const cellStyle = computed(() => {
      if (props.isFixedExpand && props.containerWidth) {
        return {
          width: `${props.containerWidth}px`
        };
      }
      return void 0;
    });
    const tableCtx = inject(tableInjectionKey, {});
    const renderContent = () => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (slots.default) {
        return slots.default();
      }
      const data = {
        record: (_a = props.record) == null ? void 0 : _a.raw,
        column: props.column,
        rowIndex: (_b = props.rowIndex) != null ? _b : -1
      };
      if (slots.cell) {
        return slots.cell(data);
      }
      if ((_c = props.column.slots) == null ? void 0 : _c.cell) {
        return props.column.slots.cell(data);
      }
      if (props.column.render) {
        return props.column.render(data);
      }
      if (props.column.slotName && ((_d = tableCtx.slots) == null ? void 0 : _d[props.column.slotName])) {
        return (_f = (_e = tableCtx.slots)[props.column.slotName]) == null ? void 0 : _f.call(_e, data);
      }
      return String((_h = getValueByPath((_g = props.record) == null ? void 0 : _g.raw, props.column.dataIndex)) != null ? _h : "");
    };
    const isLoading = ref(false);
    const handleClick = (ev) => {
      var _a, _b;
      if (isFunction(tableCtx.loadMore) && !((_a = props.record) == null ? void 0 : _a.isLeaf) && !((_b = props.record) == null ? void 0 : _b.children)) {
        isLoading.value = true;
        new Promise((resolve) => {
          var _a2;
          (_a2 = tableCtx.loadMore) == null ? void 0 : _a2.call(tableCtx, props.record.raw, resolve);
        }).then((children) => {
          var _a2;
          (_a2 = tableCtx.addLazyLoadData) == null ? void 0 : _a2.call(tableCtx, children, props.record);
          isLoading.value = false;
        });
      }
      ev.stopPropagation();
    };
    const renderCell = () => {
      var _a, _b, _c, _d, _e, _f;
      let _slot;
      return createVNode("span", {
        "class": [`${prefixCls}-cell`, `${prefixCls}-cell-align-${(_b = (_a = props.column) == null ? void 0 : _a.align) != null ? _b : "left"}`, {
          [`${prefixCls}-cell-fixed-expand`]: props.isFixedExpand,
          [`${prefixCls}-cell-expand-icon`]: props.showExpandBtn
        }],
        "style": cellStyle.value
      }, [props.indentSize > 0 && createVNode("span", {
        "style": {
          paddingLeft: `${props.indentSize}px`
        }
      }, null), props.showExpandBtn && createVNode("span", {
        "class": `${prefixCls}-cell-inline-icon`,
        "onClick": handleClick
      }, [isLoading.value ? createVNode(IconLoading, null, null) : (_c = props.renderExpandBtn) == null ? void 0 : _c.call(props, props.record, false)]), ((_d = props.column) == null ? void 0 : _d.ellipsis) && ((_e = props.column) == null ? void 0 : _e.tooltip) ? createVNode(AutoTooltip, {
        "class": `${prefixCls}-td-content`,
        "tooltipProps": tooltipProps.value
      }, _isSlot$1(_slot = renderContent()) ? _slot : {
        default: () => [_slot]
      }) : createVNode("span", {
        "class": [`${prefixCls}-td-content`, {
          [`${prefixCls}-text-ellipsis`]: (_f = props.column) == null ? void 0 : _f.ellipsis
        }]
      }, [renderContent()])]);
    };
    return () => {
      var _a, _b, _c, _d;
      return createVNode((_d = (_c = slots.td) == null ? void 0 : _c.call(slots, {
        record: (_a = props.record) == null ? void 0 : _a.raw,
        column: props.column,
        rowIndex: (_b = props.rowIndex) != null ? _b : -1
      })[0]) != null ? _d : "td", {
        class: cls.value,
        style: style.value,
        rowspan: props.rowSpan > 1 ? props.rowSpan : void 0,
        colspan: props.colSpan > 1 ? props.colSpan : void 0
      }, {
        default: () => [renderCell()]
      });
    };
  }
});
var OperationTh = /* @__PURE__ */ defineComponent({
  name: "OperationTh",
  props: {
    operationColumn: {
      type: Object,
      required: true
    },
    operations: {
      type: Array,
      required: true
    },
    rowSpan: {
      type: Number,
      default: 1
    },
    selectAll: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("table");
    const tableCtx = inject(tableInjectionKey, {});
    const checkboxStatus = computed(() => {
      var _a, _b, _c, _d;
      let checked = false;
      let indeterminate = false;
      const currentSelectedEnabledRowKeys = (_b = (_a = tableCtx.currentSelectedRowKeys) == null ? void 0 : _a.filter((key) => {
        var _a2, _b2;
        return (_b2 = (_a2 = tableCtx.currentAllEnabledRowKeys) == null ? void 0 : _a2.includes(key)) != null ? _b2 : true;
      })) != null ? _b : [];
      const selectedNumber = currentSelectedEnabledRowKeys.length;
      const totalEnabledNumber = (_d = (_c = tableCtx.currentAllEnabledRowKeys) == null ? void 0 : _c.length) != null ? _d : 0;
      if (selectedNumber > 0) {
        if (selectedNumber >= totalEnabledNumber) {
          checked = true;
        } else {
          indeterminate = true;
        }
      }
      return {
        checked,
        indeterminate
      };
    });
    const renderContent = () => {
      if (props.selectAll) {
        return createVNode(Checkbox, {
          "modelValue": checkboxStatus.value.checked,
          "indeterminate": checkboxStatus.value.indeterminate,
          "uninjectGroupContext": true,
          "onChange": (checked) => {
            var _a;
            (_a = tableCtx.onSelectAll) == null ? void 0 : _a.call(tableCtx, checked);
          }
        }, {
          default: isFunction(props.operationColumn.title) ? props.operationColumn.title() : props.operationColumn.title
        });
      }
      if (props.operationColumn.title) {
        return isFunction(props.operationColumn.title) ? props.operationColumn.title() : props.operationColumn.title;
      }
      return null;
    };
    const style = computed(() => getOperationStyle(props.operationColumn, props.operations));
    const cls = computed(() => [`${prefixCls}-th`, `${prefixCls}-operation`, {
      [`${prefixCls}-checkbox`]: props.selectAll
    }, ...getOperationFixedCls(prefixCls, props.operationColumn)]);
    return () => createVNode("th", {
      "class": cls.value,
      "style": style.value,
      "rowspan": props.rowSpan > 1 ? props.rowSpan : void 0
    }, [createVNode("span", {
      "class": `${prefixCls}-cell`
    }, [renderContent()])]);
  }
});
var OperationTd = /* @__PURE__ */ defineComponent({
  name: "OperationTd",
  components: {
    Checkbox,
    Radio,
    IconPlus,
    IconMinus
  },
  props: {
    operationColumn: {
      type: Object,
      required: true
    },
    operations: {
      type: Array,
      required: true
    },
    record: {
      type: Object,
      required: true
    },
    hasExpand: {
      type: Boolean,
      default: false
    },
    selectedRowKeys: {
      type: Array
    },
    renderExpandBtn: {
      type: Function
    },
    colSpan: {
      type: Number,
      default: 1
    },
    rowSpan: {
      type: Number,
      default: 1
    },
    summary: {
      type: Boolean,
      default: false
    }
  },
  emits: ["select"],
  setup(props, {
    emit,
    slots
  }) {
    const prefixCls = getPrefixCls("table");
    const tableCtx = inject(tableInjectionKey, {});
    const style = computed(() => getOperationStyle(props.operationColumn, props.operations));
    const cls = computed(() => [`${prefixCls}-td`, `${prefixCls}-operation`, {
      [`${prefixCls}-checkbox`]: props.operationColumn.name === "selection-checkbox",
      [`${prefixCls}-radio`]: props.operationColumn.name === "selection-radio",
      [`${prefixCls}-expand`]: props.operationColumn.name === "expand",
      [`${prefixCls}-drag-handle`]: props.operationColumn.name === "drag-handle"
    }, ...getOperationFixedCls(prefixCls, props.operationColumn)]);
    const leafKeys = computed(() => getLeafKeys(props.record));
    const selectionStatus = computed(() => {
      var _a;
      return getSelectionStatus((_a = tableCtx.currentSelectedRowKeys) != null ? _a : [], leafKeys.value);
    });
    const renderContent = () => {
      var _a, _b, _c, _d, _e, _f;
      if (props.summary) {
        return null;
      }
      if (props.operationColumn.render) {
        return props.operationColumn.render(props.record.raw);
      }
      if (props.operationColumn.name === "selection-checkbox") {
        const value = props.record.key;
        if (!tableCtx.checkStrictly && !props.record.isLeaf) {
          return createVNode(Checkbox, {
            "modelValue": selectionStatus.value.checked,
            "indeterminate": selectionStatus.value.indeterminate,
            "disabled": Boolean(props.record.disabled),
            "uninjectGroupContext": true,
            "onChange": (checked) => {
              var _a2;
              return (_a2 = tableCtx.onSelectAllLeafs) == null ? void 0 : _a2.call(tableCtx, props.record, checked);
            },
            "onClick": (ev) => ev.stopPropagation()
          }, null);
        }
        return createVNode(Checkbox, {
          "modelValue": (_b = (_a = props.selectedRowKeys) == null ? void 0 : _a.includes(value)) != null ? _b : false,
          "disabled": Boolean(props.record.disabled),
          "uninjectGroupContext": true,
          "onChange": (checked) => {
            var _a2;
            return (_a2 = tableCtx.onSelect) == null ? void 0 : _a2.call(tableCtx, checked, props.record);
          },
          "onClick": (ev) => ev.stopPropagation()
        }, null);
      }
      if (props.operationColumn.name === "selection-radio") {
        const value = props.record.key;
        return createVNode(Radio, {
          "modelValue": (_d = (_c = props.selectedRowKeys) == null ? void 0 : _c.includes(value)) != null ? _d : false,
          "disabled": Boolean(props.record.disabled),
          "uninjectGroupContext": true,
          "onChange": (checked) => {
            var _a2;
            return (_a2 = tableCtx.onSelect) == null ? void 0 : _a2.call(tableCtx, checked, props.record);
          },
          "onClick": (ev) => ev.stopPropagation()
        }, null);
      }
      if (props.operationColumn.name === "expand") {
        if (props.hasExpand && props.renderExpandBtn) {
          return props.renderExpandBtn(props.record);
        }
        return null;
      }
      if (props.operationColumn.name === "drag-handle") {
        return (_f = (_e = slots["drag-handle-icon"]) == null ? void 0 : _e.call(slots)) != null ? _f : createVNode(IconDragDotVertical, null, null);
      }
      return null;
    };
    return () => createVNode("td", {
      "class": cls.value,
      "style": style.value,
      "rowspan": props.rowSpan > 1 ? props.rowSpan : void 0,
      "colspan": props.colSpan > 1 ? props.colSpan : void 0
    }, [createVNode("span", {
      "class": `${prefixCls}-cell`
    }, [renderContent()])]);
  }
});
const useDrag = (draggable) => {
  const dragType = computed(() => {
    if (draggable.value) {
      if (draggable.value.type === "handle") {
        return "handle";
      }
      return "row";
    }
    return void 0;
  });
  const dragState = reactive({
    dragging: false,
    sourceKey: "",
    sourcePath: [],
    targetPath: [],
    data: {}
  });
  const clearDragState = () => {
    dragState.dragging = false;
    dragState.sourceKey = "";
    dragState.sourcePath = [];
    dragState.targetPath = [];
    dragState.data = {};
  };
  const handleDragStart = (ev, sourceKey, sourcePath, data) => {
    if (ev.dataTransfer) {
      ev.dataTransfer.effectAllowed = "move";
      if (ev.target && ev.target.tagName === "TD") {
        const { parentElement } = ev.target;
        if (parentElement && parentElement.tagName === "TR") {
          ev.dataTransfer.setDragImage(parentElement, 0, 0);
        }
      }
    }
    dragState.dragging = true;
    dragState.sourceKey = sourceKey;
    dragState.sourcePath = sourcePath;
    dragState.targetPath = [...sourcePath];
    dragState.data = data;
  };
  const handleDragEnter = (ev, targetPath) => {
    if (ev.dataTransfer) {
      ev.dataTransfer.dropEffect = "move";
    }
    if (dragState.targetPath.toString() !== targetPath.toString()) {
      dragState.targetPath = targetPath;
    }
    ev.preventDefault();
  };
  const handleDragLeave = (ev) => {
  };
  const handleDragover = (ev) => {
    if (ev.dataTransfer) {
      ev.dataTransfer.dropEffect = "move";
    }
    ev.preventDefault();
  };
  const handleDragEnd = (ev) => {
    var _a;
    if (((_a = ev.dataTransfer) == null ? void 0 : _a.dropEffect) === "none") {
      clearDragState();
    }
  };
  const handleDrop = (ev) => {
    clearDragState();
    ev.preventDefault();
  };
  return {
    dragType,
    dragState,
    handleDragStart,
    handleDragEnter,
    handleDragLeave,
    handleDragover,
    handleDragEnd,
    handleDrop
  };
};
const useColumnResize = (thRefs, emit) => {
  const resizingColumn = ref("");
  const columnWidth = reactive({});
  const handleThMouseDown = (dataIndex, ev) => {
    ev.preventDefault();
    resizingColumn.value = dataIndex;
    on(window, "mousemove", handleThMouseMoving);
    on(window, "mouseup", handleThMouseUp);
    on(window, "contextmenu", handleThMouseUp);
  };
  const handleThMouseUp = () => {
    resizingColumn.value = "";
    off(window, "mousemove", handleThMouseMoving);
    off(window, "mouseup", handleThMouseUp);
    off(window, "contextmenu", handleThMouseUp);
  };
  const handleThMouseMoving = (ev) => {
    const element = thRefs.value[resizingColumn.value];
    if (element) {
      const { clientX } = ev;
      const { x } = element.getBoundingClientRect();
      let width = Math.ceil(clientX - x);
      if (width < 40) {
        width = 40;
      }
      columnWidth[resizingColumn.value] = width;
      emit("columnResize", resizingColumn.value, width);
    }
  };
  return {
    resizingColumn,
    columnWidth,
    handleThMouseDown,
    handleThMouseUp
  };
};
const useFilter = ({
  columns,
  onFilterChange
}) => {
  const _filters = ref(getDefaultFilters(columns.value));
  watch(columns, (columns2) => {
    const newFilters = getDefaultFilters(columns2);
    if (!isEqual(newFilters, _filters.value)) {
      _filters.value = newFilters;
    }
  });
  const computedFilters = computed(() => {
    var _a, _b;
    const filters = {};
    for (const item of columns.value) {
      if (item.dataIndex) {
        const value = (_b = (_a = item.filterable) == null ? void 0 : _a.filteredValue) != null ? _b : _filters.value[item.dataIndex];
        if (value) {
          filters[item.dataIndex] = value;
        }
      }
    }
    return filters;
  });
  const resetFilters = (dataIndex) => {
    var _a;
    const _dataIndex = dataIndex ? [].concat(dataIndex) : [];
    const filters = {};
    for (const item of columns.value) {
      if (item.dataIndex && item.filterable) {
        if (_dataIndex.length === 0 || _dataIndex.includes(item.dataIndex)) {
          const filteredValue = (_a = item.filterable.defaultFilteredValue) != null ? _a : [];
          filters[item.dataIndex] = filteredValue;
          onFilterChange(item.dataIndex, filteredValue);
        }
      }
    }
    _filters.value = filters;
  };
  const clearFilters = (dataIndex) => {
    const _dataIndex = dataIndex ? [].concat(dataIndex) : [];
    const filters = {};
    for (const item of columns.value) {
      if (item.dataIndex && item.filterable) {
        if (_dataIndex.length === 0 || _dataIndex.includes(item.dataIndex)) {
          const filteredValue = [];
          filters[item.dataIndex] = filteredValue;
          onFilterChange(item.dataIndex, filteredValue);
        }
      }
    }
    _filters.value = filters;
  };
  return {
    _filters,
    computedFilters,
    resetFilters,
    clearFilters
  };
};
const getDefaultFilters = (columns) => {
  var _a;
  const filters = {};
  for (const item of columns) {
    if (item.dataIndex && ((_a = item.filterable) == null ? void 0 : _a.defaultFilteredValue)) {
      filters[item.dataIndex] = item.filterable.defaultFilteredValue;
    }
  }
  return filters;
};
const useSorter = ({
  columns,
  onSorterChange
}) => {
  const _sorter = ref(getDefaultSorter(columns.value));
  watch(columns, (columns2) => {
    const newSorter = getDefaultSorter(columns2);
    if (!isEqual(newSorter, _sorter.value)) {
      _sorter.value = newSorter;
    }
  });
  const computedSorter = computed(() => {
    var _a;
    for (const item of columns.value) {
      if (item.dataIndex && item.sortable) {
        const direction = isString(item.sortable.sortOrder) ? item.sortable.sortOrder : ((_a = _sorter.value) == null ? void 0 : _a.field) === item.dataIndex ? _sorter.value.direction : "";
        if (direction) {
          return {
            field: item.dataIndex,
            direction
          };
        }
      }
    }
    return void 0;
  });
  const resetSorters = () => {
    var _a;
    let sorter;
    for (const item of columns.value) {
      if (item.dataIndex && item.sortable) {
        if (!sorter && item.sortable.defaultSortOrder) {
          sorter = {
            field: item.dataIndex,
            direction: item.sortable.defaultSortOrder
          };
        }
        onSorterChange(item.dataIndex, (_a = item.sortable.defaultSortOrder) != null ? _a : "");
      }
    }
    _sorter.value = sorter;
  };
  const clearSorters = () => {
    for (const item of columns.value) {
      if (item.dataIndex && item.sortable) {
        onSorterChange(item.dataIndex, "");
      }
    }
  };
  return {
    _sorter,
    computedSorter,
    resetSorters,
    clearSorters
  };
};
const getDefaultSorter = (columns) => {
  var _a;
  for (const item of columns) {
    if (item.dataIndex && ((_a = item.sortable) == null ? void 0 : _a.defaultSortOrder)) {
      return {
        field: item.dataIndex,
        direction: item.sortable.defaultSortOrder
      };
    }
  }
  return void 0;
};
const useSpan = ({
  spanMethod,
  data,
  columns
}) => {
  const flattenTableSpan = (tableData, span) => {
    tableData == null ? void 0 : tableData.forEach((record, rowIndex) => {
      var _a;
      if (record.hasSubtree && ((_a = record.children) == null ? void 0 : _a.length)) {
        flattenTableSpan(record.children || [], span);
      }
      columns.value.forEach((column, columnIndex) => {
        var _a2, _b;
        const { rowspan = 1, colspan = 1 } = (_b = (_a2 = spanMethod.value) == null ? void 0 : _a2.call(spanMethod, {
          record: record.raw,
          column,
          rowIndex,
          columnIndex
        })) != null ? _b : {};
        if (rowspan > 1 || colspan > 1) {
          span[`${rowIndex}-${columnIndex}-${record.key}`] = [rowspan, colspan];
          Array.from({ length: rowspan }).forEach((_, r) => {
            var _a3;
            if (rowIndex + r < tableData.length) {
              const { key } = (_a3 = tableData[rowIndex + r]) != null ? _a3 : {};
              Array.from({ length: colspan }).forEach((_2, c) => {
                if (columnIndex + c < columns.value.length && `${rowIndex}-${columnIndex}-${record.key}` !== `${rowIndex + r}-${columnIndex + c}-${key}`) {
                  spanzero.value[`${rowIndex + r}-${columnIndex + c}-${key}`] = [0, 0];
                }
              });
            }
          });
        }
      });
    });
  };
  let spanzero = ref({});
  const tableSpan = computed(() => {
    const span = {};
    spanzero.value = {};
    if (spanMethod.value) {
      flattenTableSpan(data.value, span);
    }
    return span;
  });
  const removedCells = computed(() => {
    const data2 = [];
    for (const indexKey of Object.keys(spanzero.value)) {
      data2.push(indexKey);
    }
    return data2;
  });
  return {
    tableSpan,
    removedCells
  };
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const DEFAULT_BORDERED = {
  wrapper: true,
  cell: false,
  headerCell: false,
  bodyCell: false
};
var _Table = /* @__PURE__ */ defineComponent({
  name: "Table",
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    bordered: {
      type: [Boolean, Object],
      default: true
    },
    hoverable: {
      type: Boolean,
      default: true
    },
    stripe: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: () => {
        var _a, _b;
        return (_b = (_a = inject(configProviderInjectionKey, void 0)) == null ? void 0 : _a.size) != null ? _b : "large";
      }
    },
    tableLayoutFixed: {
      type: Boolean,
      default: false
    },
    loading: {
      type: [Boolean, Object],
      default: false
    },
    rowSelection: {
      type: Object
    },
    expandable: {
      type: Object
    },
    scroll: {
      type: Object
    },
    pagination: {
      type: [Boolean, Object],
      default: true
    },
    pagePosition: {
      type: String,
      default: "br"
    },
    indentSize: {
      type: Number,
      default: 16
    },
    rowKey: {
      type: String,
      default: "key"
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    virtualListProps: {
      type: Object
    },
    spanMethod: {
      type: Function
    },
    spanAll: {
      type: Boolean,
      default: false
    },
    components: {
      type: Object
    },
    loadMore: {
      type: Function
    },
    filterIconAlignLeft: {
      type: Boolean,
      default: false
    },
    hideExpandButtonOnEmpty: {
      type: Boolean,
      default: false
    },
    rowClass: {
      type: [String, Array, Object, Function]
    },
    draggable: {
      type: Object
    },
    rowNumber: {
      type: [Boolean, Object]
    },
    columnResizable: {
      type: Boolean
    },
    summary: {
      type: [Boolean, Function]
    },
    summaryText: {
      type: String,
      default: "Summary"
    },
    summarySpanMethod: {
      type: Function
    },
    selectedKeys: {
      type: Array
    },
    defaultSelectedKeys: {
      type: Array
    },
    expandedKeys: {
      type: Array
    },
    defaultExpandedKeys: {
      type: Array
    },
    defaultExpandAllRows: {
      type: Boolean,
      default: false
    },
    stickyHeader: {
      type: [Boolean, Number],
      default: false
    },
    scrollbar: {
      type: [Object, Boolean],
      default: true
    },
    showEmptyTree: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:selectedKeys": (rowKeys) => true,
    "update:expandedKeys": (rowKeys) => true,
    "expand": (rowKey, record) => true,
    "expandedChange": (rowKeys) => true,
    "select": (rowKeys, rowKey, record) => true,
    "selectAll": (checked) => true,
    "selectionChange": (rowKeys) => true,
    "sorterChange": (dataIndex, direction) => true,
    "filterChange": (dataIndex, filteredValues) => true,
    "pageChange": (page) => true,
    "pageSizeChange": (pageSize) => true,
    "change": (data, extra, currentData) => true,
    "cellMouseEnter": (record, column, ev) => true,
    "cellMouseLeave": (record, column, ev) => true,
    "cellClick": (record, column, ev) => true,
    "rowClick": (record, ev) => true,
    "headerClick": (column, ev) => true,
    "columnResize": (dataIndex, width) => true,
    "rowDblclick": (record, ev) => true,
    "cellDblclick": (record, column, ev) => true,
    "rowContextmenu": (record, ev) => true,
    "cellContextmenu": (record, column, ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const {
      columns,
      rowKey,
      rowSelection,
      expandable,
      loadMore,
      filterIconAlignLeft,
      selectedKeys,
      defaultSelectedKeys,
      expandedKeys,
      defaultExpandedKeys,
      defaultExpandAllRows,
      spanMethod,
      draggable,
      summarySpanMethod,
      scrollbar,
      showEmptyTree
    } = toRefs(props);
    const prefixCls = getPrefixCls("table");
    const configCtx = inject(configProviderInjectionKey, void 0);
    const bordered = computed(() => {
      if (isObject(props.bordered)) {
        return __spreadValues(__spreadValues({}, DEFAULT_BORDERED), props.bordered);
      }
      return __spreadProps(__spreadValues({}, DEFAULT_BORDERED), {
        wrapper: props.bordered
      });
    });
    const {
      children,
      components
    } = useChildrenComponents("TableColumn");
    const checkStrictly = computed(() => {
      var _a, _b;
      return (_b = (_a = rowSelection.value) == null ? void 0 : _a.checkStrictly) != null ? _b : true;
    });
    const {
      displayScrollbar,
      scrollbarProps
    } = useScrollbar(scrollbar);
    const isScroll = computed(() => {
      var _a, _b, _c, _d;
      const x = Boolean(((_a = props.scroll) == null ? void 0 : _a.x) || ((_b = props.scroll) == null ? void 0 : _b.minWidth));
      const y = Boolean(((_c = props.scroll) == null ? void 0 : _c.y) || ((_d = props.scroll) == null ? void 0 : _d.maxHeight));
      return {
        x,
        y
      };
    });
    const summaryRef = ref();
    const thRefs = ref({});
    const {
      componentRef: contentComRef,
      elementRef: contentRef
    } = useComponentRef("containerRef");
    const {
      componentRef: tbodyComRef,
      elementRef: tbodyRef
    } = useComponentRef("containerRef");
    const {
      componentRef: virtualComRef,
      elementRef: virtualRef
    } = useComponentRef("viewportRef");
    const {
      componentRef: theadComRef,
      elementRef: theadRef
    } = useComponentRef("containerRef");
    const containerElement = computed(() => {
      if (splitTable.value) {
        if (isVirtualList.value) {
          return virtualRef.value;
        }
        return tbodyRef.value;
      }
      return contentRef.value;
    });
    const splitTable = computed(() => isScroll.value.y || props.stickyHeader || isVirtualList.value || isScroll.value.x && flattenData.value.length === 0);
    const slotColumnMap = reactive(/* @__PURE__ */ new Map());
    const slotColumns = ref();
    watch([components, slotColumnMap], ([components2, slotColumnMap2]) => {
      if (components2.length > 0) {
        const columns2 = [];
        components2.forEach((id) => {
          const column = slotColumnMap2.get(id);
          if (column)
            columns2.push(column);
        });
        slotColumns.value = columns2;
      } else {
        slotColumns.value = void 0;
      }
    });
    const dataColumnMap = /* @__PURE__ */ new Map();
    const dataColumns = ref([]);
    const groupColumns = ref([]);
    const {
      resizingColumn,
      columnWidth,
      handleThMouseDown
    } = useColumnResize(thRefs, emit);
    watch([columns, slotColumns, columnWidth], ([columns2, slotColumns2]) => {
      var _a;
      const result = getGroupColumns((_a = slotColumns2 != null ? slotColumns2 : columns2) != null ? _a : [], dataColumnMap, columnWidth);
      dataColumns.value = result.dataColumns;
      groupColumns.value = result.groupColumns;
    }, {
      immediate: true,
      deep: true
    });
    const isPaginationTop = computed(() => ["tl", "top", "tr"].includes(props.pagePosition));
    const hasLeftFixedColumn = ref(false);
    const hasRightFixedColumn = ref(false);
    const hasLeftFixedDataColumns = ref(false);
    watchEffect(() => {
      var _a, _b, _c;
      let _hasLeftFixedColumn = false;
      let _hasRightFixedColumn = false;
      let _hasLeftFixedDataColumns = false;
      if (((_a = props.rowSelection) == null ? void 0 : _a.fixed) || ((_b = props.expandable) == null ? void 0 : _b.fixed) || ((_c = props.draggable) == null ? void 0 : _c.fixed)) {
        _hasLeftFixedColumn = true;
      }
      for (const column of dataColumns.value) {
        if (column.fixed === "left") {
          _hasLeftFixedColumn = true;
          _hasLeftFixedDataColumns = true;
        } else if (column.fixed === "right") {
          _hasRightFixedColumn = true;
        }
      }
      if (_hasLeftFixedColumn !== hasLeftFixedColumn.value) {
        hasLeftFixedColumn.value = _hasLeftFixedColumn;
      }
      if (_hasRightFixedColumn !== hasRightFixedColumn.value) {
        hasRightFixedColumn.value = _hasRightFixedColumn;
      }
      if (_hasLeftFixedDataColumns !== hasLeftFixedDataColumns.value) {
        hasLeftFixedDataColumns.value = _hasLeftFixedDataColumns;
      }
    });
    const hasEllipsis = computed(() => {
      for (const col of dataColumns.value) {
        if (col.ellipsis) {
          return true;
        }
      }
      return false;
    });
    const handleChange = (type) => {
      const extra = {
        type,
        page: page.value,
        pageSize: pageSize.value,
        sorter: computedSorter.value,
        filters: computedFilters.value,
        dragTarget: type === "drag" ? dragState.data : void 0
      };
      emit("change", flattenRawData.value, extra, sortedData.value);
    };
    const handleFilterChange = (dataIndex, filteredValues) => {
      _filters.value = __spreadProps(__spreadValues({}, computedFilters.value), {
        [dataIndex]: filteredValues
      });
      emit("filterChange", dataIndex, filteredValues);
      handleChange("filter");
    };
    const handleSorterChange = (dataIndex, direction) => {
      _sorter.value = direction ? {
        field: dataIndex,
        direction
      } : void 0;
      emit("sorterChange", dataIndex, direction);
      handleChange("sorter");
    };
    const {
      _filters,
      computedFilters,
      resetFilters,
      clearFilters
    } = useFilter({
      columns: dataColumns,
      onFilterChange: handleFilterChange
    });
    const {
      _sorter,
      computedSorter,
      resetSorters,
      clearSorters
    } = useSorter({
      columns: dataColumns,
      onSorterChange: handleSorterChange
    });
    const disabledKeys = /* @__PURE__ */ new Set();
    const allRowKeys = computed(() => {
      const allRowKeys2 = [];
      disabledKeys.clear();
      const travelData = (data) => {
        if (isArray(data) && data.length > 0) {
          for (const record of data) {
            allRowKeys2.push(record[rowKey.value]);
            if (record.disabled) {
              disabledKeys.add(record[rowKey.value]);
            }
            if (record.children) {
              travelData(record.children);
            }
          }
        }
      };
      travelData(props.data);
      return allRowKeys2;
    });
    const currentAllRowKeys = computed(() => {
      const keys = [];
      const travel = (data) => {
        for (const record of data) {
          keys.push(record.key);
          if (record.children) {
            travel(record.children);
          }
        }
      };
      travel(flattenData.value);
      return keys;
    });
    const currentAllEnabledRowKeys = computed(() => {
      const keys = [];
      const travel = (data) => {
        for (const record of data) {
          if (!record.disabled) {
            keys.push(record.key);
          }
          if (record.children) {
            travel(record.children);
          }
        }
      };
      travel(flattenData.value);
      return keys;
    });
    const {
      isRadio,
      selectedRowKeys,
      currentSelectedRowKeys,
      handleSelect,
      handleSelectAllLeafs,
      handleSelectAll,
      select,
      selectAll,
      clearSelected
    } = useRowSelection({
      selectedKeys,
      defaultSelectedKeys,
      rowSelection,
      currentAllRowKeys,
      currentAllEnabledRowKeys,
      emit
    });
    const {
      expandedRowKeys,
      handleExpand,
      expand,
      expandAll
    } = useExpand({
      expandedKeys,
      defaultExpandedKeys,
      defaultExpandAllRows,
      expandable,
      allRowKeys,
      emit
    });
    const lazyLoadData = reactive({});
    const addLazyLoadData = (children2, record) => {
      if (children2) {
        lazyLoadData[record.key] = children2;
      }
    };
    const isValidRecord = (record) => {
      var _a, _b;
      for (const field of Object.keys(computedFilters.value)) {
        const filteredValues = computedFilters.value[field];
        const column = dataColumnMap.get(field);
        if (column && ((_a = column.filterable) == null ? void 0 : _a.filter) && filteredValues.length > 0) {
          const result = (_b = column.filterable) == null ? void 0 : _b.filter(filteredValues, record.raw);
          if (!result) {
            return result;
          }
        }
      }
      return true;
    };
    const {
      dragType,
      dragState,
      handleDragStart,
      handleDragEnter,
      handleDragLeave,
      handleDragover,
      handleDragEnd,
      handleDrop
    } = useDrag(draggable);
    const processedData = computed(() => {
      var _a;
      const travel = (data) => {
        const result = [];
        for (const _record of data) {
          const record = {
            raw: _record,
            key: _record[props.rowKey],
            disabled: _record.disabled,
            expand: _record.expand,
            isLeaf: _record.isLeaf
          };
          if (_record.children) {
            record.isLeaf = false;
            record.children = travel(_record.children);
          } else if (props.loadMore && !_record.isLeaf) {
            record.isLeaf = false;
            if (lazyLoadData[record.key]) {
              record.children = travel(lazyLoadData[record.key]);
            }
          } else {
            record.isLeaf = true;
          }
          record.hasSubtree = Boolean(record.children ? props.hideExpandButtonOnEmpty ? record.children.length > 0 : true : props.loadMore && !record.isLeaf);
          result.push(record);
        }
        return result;
      };
      return travel((_a = props.data) != null ? _a : []);
    });
    const validData = computed(() => {
      const travel = (data) => data.filter((record) => {
        if (isValidRecord(record)) {
          if (record.children) {
            record.children = travel(record.children);
          }
          return true;
        }
        return false;
      });
      return Object.keys(computedFilters.value).length > 0 ? travel(processedData.value) : processedData.value;
    });
    const sortedData = computed(() => {
      var _a, _b, _c;
      const data = mapArrayWithChildren(validData.value);
      if (data.length > 0) {
        if ((_a = computedSorter.value) == null ? void 0 : _a.field) {
          const column = dataColumnMap.get(computedSorter.value.field);
          if (column && ((_b = column.sortable) == null ? void 0 : _b.sorter) !== true) {
            const {
              field,
              direction
            } = computedSorter.value;
            data.sort((a, b) => {
              var _a2;
              const valueA = getValueByPath(a.raw, field);
              const valueB = getValueByPath(b.raw, field);
              if (((_a2 = column.sortable) == null ? void 0 : _a2.sorter) && isFunction(column.sortable.sorter)) {
                return column.sortable.sorter(a.raw, b.raw, {
                  dataIndex: field,
                  direction
                });
              }
              const result = valueA > valueB ? 1 : -1;
              return direction === "descend" ? -result : result;
            });
          }
        }
        const {
          sourcePath,
          targetPath
        } = dragState;
        if (dragState.dragging && targetPath.length && targetPath.toString() !== sourcePath.toString()) {
          if (sourcePath.length === targetPath.length && sourcePath.slice(0, -1).toString() === targetPath.slice(0, -1).toString()) {
            let children2 = data;
            for (let i = 0; i < sourcePath.length; i++) {
              const sourceIndex = sourcePath[i];
              const isLast = i >= sourcePath.length - 1;
              if (isLast) {
                const sourceChild = children2[sourceIndex];
                const targetIndex = targetPath[i];
                if (targetIndex > sourceIndex) {
                  children2.splice(targetIndex + 1, 0, sourceChild);
                  children2.splice(sourceIndex, 1);
                } else {
                  children2.splice(targetIndex, 0, sourceChild);
                  children2.splice(sourceIndex + 1, 1);
                }
              } else {
                children2 = (_c = children2[sourceIndex].children) != null ? _c : [];
              }
            }
          }
        }
      }
      return data;
    });
    const {
      page,
      pageSize,
      handlePageChange,
      handlePageSizeChange
    } = usePagination(props, emit);
    const onlyCurrent = computed(() => {
      var _a, _b;
      return (_b = (_a = rowSelection.value) == null ? void 0 : _a.onlyCurrent) != null ? _b : false;
    });
    watch(page, (cur, pre) => {
      if (cur !== pre && onlyCurrent.value) {
        clearSelected();
      }
    });
    const flattenData = computed(() => {
      if (props.pagination && sortedData.value.length > pageSize.value) {
        return sortedData.value.slice((page.value - 1) * pageSize.value, page.value * pageSize.value);
      }
      return sortedData.value;
    });
    const flattenRawData = computed(() => mapRawTableData(flattenData.value));
    const getSummaryData = () => {
      return dataColumns.value.reduce((per, column, index2) => {
        if (column.dataIndex) {
          if (index2 === 0) {
            setValueByPath(per, column.dataIndex, props.summaryText, {
              addPath: true
            });
          } else {
            let count = 0;
            let isNotNumber = false;
            flattenData.value.forEach((data) => {
              if (column.dataIndex) {
                const _number = getValueByPath(data.raw, column.dataIndex);
                if (isNumber(_number)) {
                  count += _number;
                } else if (!isUndefined(_number) && !isNull(_number)) {
                  isNotNumber = true;
                }
              }
            });
            setValueByPath(per, column.dataIndex, isNotNumber ? "" : count, {
              addPath: true
            });
          }
        }
        return per;
      }, {});
    };
    const getTableDataWithRaw = (data) => {
      if (data && data.length > 0) {
        return data.map((raw) => {
          return {
            raw,
            key: raw[props.rowKey]
          };
        });
      }
      return [];
    };
    const summaryData = computed(() => {
      if (props.summary) {
        if (isFunction(props.summary)) {
          return getTableDataWithRaw(props.summary({
            columns: dataColumns.value,
            data: flattenRawData.value
          }));
        }
        return getTableDataWithRaw([getSummaryData()]);
      }
      return [];
    });
    const containerScrollLeft = ref(0);
    const alignLeft = ref(true);
    const alignRight = ref(true);
    const setAlignPosition = () => {
      let _alignLeft = true;
      let _alignRight = true;
      const scrollContainer = containerElement.value;
      if (scrollContainer) {
        _alignLeft = containerScrollLeft.value === 0;
        _alignRight = Math.ceil(containerScrollLeft.value + scrollContainer.offsetWidth) >= scrollContainer.scrollWidth;
      }
      if (_alignLeft !== alignLeft.value) {
        alignLeft.value = _alignLeft;
      }
      if (_alignRight !== alignRight.value) {
        alignRight.value = _alignRight;
      }
    };
    const getTableScrollCls = () => {
      if (alignLeft.value && alignRight.value) {
        return `${prefixCls}-scroll-position-both`;
      }
      if (alignLeft.value) {
        return `${prefixCls}-scroll-position-left`;
      }
      if (alignRight.value) {
        return `${prefixCls}-scroll-position-right`;
      }
      return `${prefixCls}-scroll-position-middle`;
    };
    const getTableFixedCls = () => {
      const cls2 = [];
      if (hasLeftFixedColumn.value) {
        cls2.push(`${prefixCls}-has-fixed-col-left`);
      }
      if (hasRightFixedColumn.value) {
        cls2.push(`${prefixCls}-has-fixed-col-right`);
      }
      return cls2;
    };
    const handleScroll = (e) => {
      if (e.target.scrollLeft !== containerScrollLeft.value) {
        containerScrollLeft.value = e.target.scrollLeft;
      }
      setAlignPosition();
    };
    const onTbodyScroll = (e) => {
      handleScroll(e);
      const {
        scrollLeft
      } = e.target;
      if (theadRef.value) {
        theadRef.value.scrollLeft = scrollLeft;
      }
      if (summaryRef.value) {
        summaryRef.value.scrollLeft = scrollLeft;
      }
    };
    const handleRowClick = (record, ev) => {
      emit("rowClick", record.raw, ev);
    };
    const handleRowDblclick = (record, ev) => {
      emit("rowDblclick", record.raw, ev);
    };
    const handleRowContextMenu = (record, ev) => {
      emit("rowContextmenu", record.raw, ev);
    };
    const handleCellClick = (record, column, ev) => {
      emit("cellClick", record.raw, column, ev);
    };
    const handleCellMouseEnter = debounce((record, column, ev) => {
      emit("cellMouseEnter", record.raw, column, ev);
    }, 30);
    const handleCellMouseLeave = debounce((record, column, ev) => {
      emit("cellMouseLeave", record.raw, column, ev);
    }, 30);
    const handleCellDblclick = (record, column, ev) => {
      emit("cellDblclick", record.raw, column, ev);
    };
    const handleCellContextmenu = (record, column, ev) => {
      emit("cellContextmenu", record.raw, column, ev);
    };
    const handleHeaderClick = (column, ev) => {
      emit("headerClick", column, ev);
    };
    const operations = computed(() => {
      var _a, _b;
      const operations2 = [];
      const hasFixedColumn = hasLeftFixedColumn.value || hasRightFixedColumn.value;
      let dragHandle;
      let expand2;
      let selection;
      if (((_a = props.draggable) == null ? void 0 : _a.type) === "handle") {
        dragHandle = {
          name: "drag-handle",
          title: props.draggable.title,
          width: props.draggable.width,
          fixed: props.draggable.fixed || hasFixedColumn
        };
        operations2.push(dragHandle);
      }
      if (props.expandable) {
        expand2 = {
          name: "expand",
          title: props.expandable.title,
          width: props.expandable.width,
          fixed: props.expandable.fixed || hasFixedColumn
        };
        operations2.push(expand2);
      }
      if (props.rowSelection) {
        selection = {
          name: props.rowSelection.type === "radio" ? "selection-radio" : "selection-checkbox",
          title: props.rowSelection.title,
          width: props.rowSelection.width,
          fixed: props.rowSelection.fixed || hasFixedColumn
        };
        operations2.push(selection);
      }
      if (!hasLeftFixedDataColumns.value && operations2.length > 0 && operations2[operations2.length - 1].fixed) {
        operations2[operations2.length - 1].isLastLeftFixed = true;
      }
      const operationsFn = (_b = props.components) == null ? void 0 : _b.operations;
      return isFunction(operationsFn) ? operationsFn({
        dragHandle,
        expand: expand2,
        selection
      }) : operations2;
    });
    const headerStyle = computed(() => {
      var _a, _b, _c, _d;
      if (isScroll.value.x) {
        const style2 = {
          width: isNumber((_a = props.scroll) == null ? void 0 : _a.x) ? `${(_b = props.scroll) == null ? void 0 : _b.x}px` : (_c = props.scroll) == null ? void 0 : _c.x
        };
        if ((_d = props.scroll) == null ? void 0 : _d.minWidth) {
          style2.minWidth = isNumber(props.scroll.minWidth) ? `${props.scroll.minWidth}px` : props.scroll.minWidth;
        }
        return style2;
      }
      return void 0;
    });
    const contentStyle = computed(() => {
      var _a, _b, _c, _d;
      if (isScroll.value.x && flattenData.value.length > 0) {
        const style2 = {
          width: isNumber((_a = props.scroll) == null ? void 0 : _a.x) ? `${(_b = props.scroll) == null ? void 0 : _b.x}px` : (_c = props.scroll) == null ? void 0 : _c.x
        };
        if ((_d = props.scroll) == null ? void 0 : _d.minWidth) {
          style2.minWidth = isNumber(props.scroll.minWidth) ? `${props.scroll.minWidth}px` : props.scroll.minWidth;
        }
        return style2;
      }
      return void 0;
    });
    const addColumn = (id, column) => {
      slotColumnMap.set(id, column);
    };
    const removeColumn = (id) => {
      slotColumnMap.delete(id);
    };
    provide(tableInjectionKey, reactive({
      loadMore,
      addLazyLoadData,
      slots,
      sorter: computedSorter,
      filters: computedFilters,
      filterIconAlignLeft,
      resizingColumn,
      checkStrictly,
      currentAllEnabledRowKeys,
      currentSelectedRowKeys,
      addColumn,
      removeColumn,
      onSelectAll: handleSelectAll,
      onSelect: handleSelect,
      onSelectAllLeafs: handleSelectAllLeafs,
      onSorterChange: handleSorterChange,
      onFilterChange: handleFilterChange,
      onThMouseDown: handleThMouseDown
    }));
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${props.size}`, {
      [`${prefixCls}-border`]: bordered.value.wrapper,
      [`${prefixCls}-border-cell`]: bordered.value.cell,
      [`${prefixCls}-border-header-cell`]: !bordered.value.cell && bordered.value.headerCell,
      [`${prefixCls}-border-body-cell`]: !bordered.value.cell && bordered.value.bodyCell,
      [`${prefixCls}-stripe`]: props.stripe,
      [`${prefixCls}-hover`]: props.hoverable,
      [`${prefixCls}-dragging`]: dragState.dragging,
      [`${prefixCls}-type-selection`]: Boolean(props.rowSelection),
      [`${prefixCls}-empty`]: props.data && flattenData.value.length === 0,
      [`${prefixCls}-layout-fixed`]: props.tableLayoutFixed || isScroll.value.x || splitTable.value || hasEllipsis.value
    }]);
    const paginationCls = computed(() => [`${prefixCls}-pagination`, {
      [`${prefixCls}-pagination-left`]: props.pagePosition === "tl" || props.pagePosition === "bl",
      [`${prefixCls}-pagination-center`]: props.pagePosition === "top" || props.pagePosition === "bottom",
      [`${prefixCls}-pagination-right`]: props.pagePosition === "tr" || props.pagePosition === "br",
      [`${prefixCls}-pagination-top`]: isPaginationTop.value
    }]);
    const tableCls = computed(() => {
      const cls2 = getTableFixedCls();
      if (isScroll.value.x) {
        cls2.push(getTableScrollCls());
      }
      if (splitTable.value) {
        cls2.push(`${prefixCls}-scroll-y`);
      }
      return cls2;
    });
    const isVirtualList = computed(() => Boolean(props.virtualListProps));
    const thWidth = ref({});
    const getThWidth = () => {
      const width = {};
      for (const key of Object.keys(thRefs.value)) {
        width[key] = thRefs.value[key].offsetWidth;
      }
      thWidth.value = width;
    };
    const hasScrollBar = ref(false);
    const isTbodyHasScrollBar = () => {
      if (tbodyRef.value) {
        return tbodyRef.value.offsetWidth > tbodyRef.value.clientWidth;
      }
      return false;
    };
    const handleTbodyResize = () => {
      const _hasScrollBar = isTbodyHasScrollBar();
      if (hasScrollBar.value !== _hasScrollBar) {
        hasScrollBar.value = _hasScrollBar;
      }
      setAlignPosition();
      getThWidth();
    };
    const spinProps = computed(() => isObject(props.loading) ? props.loading : {
      loading: props.loading
    });
    const renderEmpty = () => {
      return createVNode(Tr, {
        "empty": true
      }, {
        default: () => [createVNode(Td, {
          "colSpan": dataColumns.value.length + operations.value.length
        }, {
          default: () => {
            var _a, _b, _c, _d, _e;
            return [(_e = (_d = (_a = slots.empty) == null ? void 0 : _a.call(slots)) != null ? _d : (_c = configCtx == null ? void 0 : (_b = configCtx.slots).empty) == null ? void 0 : _c.call(_b, {
              component: "table"
            })) != null ? _e : createVNode(Empty, null, null)];
          }
        })]
      });
    };
    const renderExpandContent = (record) => {
      var _a;
      if (record.expand) {
        return isFunction(record.expand) ? record.expand() : record.expand;
      }
      if (slots["expand-row"]) {
        return slots["expand-row"]({
          record: record.raw
        });
      }
      if ((_a = props.expandable) == null ? void 0 : _a.expandedRowRender) {
        return props.expandable.expandedRowRender(record.raw);
      }
      return void 0;
    };
    const allColumns = computed(() => [].concat(operations.value, dataColumns.value));
    const spanColumns = computed(() => props.spanAll ? allColumns.value : dataColumns.value);
    const {
      tableSpan,
      removedCells
    } = useSpan({
      spanMethod,
      data: flattenData,
      columns: spanColumns
    });
    const {
      tableSpan: tableSummarySpan,
      removedCells: removedSummaryCells
    } = useSpan({
      spanMethod: summarySpanMethod,
      data: summaryData,
      columns: allColumns
    });
    const getVirtualColumnStyle = (name) => {
      if (!isVirtualList.value || !name || !thWidth.value[name]) {
        return void 0;
      }
      return {
        width: `${thWidth.value[name]}px`
      };
    };
    const renderSummaryRow = (record, rowIndex) => {
      return createVNode(Tr, {
        "key": `table-summary-${rowIndex}`,
        "class": [`${prefixCls}-tr-summary`, isFunction(props.rowClass) ? props.rowClass(record.raw, rowIndex) : props.rowClass],
        "onClick": (ev) => handleRowClick(record, ev)
      }, {
        default: () => [operations.value.map((operation, index2) => {
          var _a;
          const cellId = `${rowIndex}-${index2}-${record.key}`;
          const [rowspan, colspan] = (_a = tableSummarySpan.value[cellId]) != null ? _a : [1, 1];
          if (removedSummaryCells.value.includes(cellId)) {
            return null;
          }
          const style2 = getVirtualColumnStyle(operation.name);
          return createVNode(OperationTd, {
            "style": style2,
            "operationColumn": operation,
            "operations": operations.value,
            "record": record,
            "rowSpan": rowspan,
            "colSpan": colspan,
            "summary": true
          }, null);
        }), dataColumns.value.map((column, index2) => {
          var _a;
          const cellId = `${rowIndex}-${operations.value.length + index2}-${record.key}`;
          const [rowspan, colspan] = (_a = tableSummarySpan.value[cellId]) != null ? _a : [1, 1];
          if (removedSummaryCells.value.includes(cellId)) {
            return null;
          }
          const style2 = getVirtualColumnStyle(column.dataIndex);
          return createVNode(Td, {
            "key": `td-${cellId}`,
            "style": style2,
            "rowIndex": rowIndex,
            "record": record,
            "column": column,
            "operations": operations.value,
            "dataColumns": dataColumns.value,
            "rowSpan": rowspan,
            "colSpan": colspan,
            "summary": true,
            "onClick": (ev) => handleCellClick(record, column, ev),
            "onDblclick": (ev) => handleCellDblclick(record, column, ev),
            "onMouseenter": (ev) => handleCellMouseEnter(record, column, ev),
            "onMouseleave": (ev) => handleCellMouseLeave(record, column, ev),
            "onContextmenu": (ev) => handleCellContextmenu(record, column, ev)
          }, {
            td: slots.td,
            cell: slots["summary-cell"]
          });
        })],
        tr: slots.tr
      });
    };
    const renderSummary = () => {
      if (summaryData.value && summaryData.value.length > 0) {
        return createVNode("tfoot", null, [summaryData.value.map((data, index2) => renderSummaryRow(data, index2))]);
      }
      return null;
    };
    const renderExpandBtn = (record, stopPropagation = true) => {
      var _a, _b, _c, _d, _e;
      const currentKey = record.key;
      const expanded = expandedRowKeys.value.includes(currentKey);
      return createVNode("button", {
        "type": "button",
        "class": `${prefixCls}-expand-btn`,
        "onClick": (ev) => {
          handleExpand(currentKey, record.raw);
          if (stopPropagation) {
            ev.stopPropagation();
          }
        }
      }, [(_e = (_d = (_a = slots["expand-icon"]) == null ? void 0 : _a.call(slots, {
        expanded,
        record: record.raw
      })) != null ? _d : (_c = (_b = props.expandable) == null ? void 0 : _b.icon) == null ? void 0 : _c.call(_b, expanded, record.raw)) != null ? _e : expanded ? createVNode(IconMinus, null, null) : createVNode(IconPlus, null, null)]);
    };
    const renderExpand = (record, {
      indentSize,
      indexPath,
      allowDrag,
      expandContent
    }) => {
      var _a, _b;
      if (record.hasSubtree) {
        if (((_a = record.children) == null ? void 0 : _a.length) === 0 && showEmptyTree.value) {
          return renderEmpty();
        }
        return (_b = record.children) == null ? void 0 : _b.map((item, index2) => renderRecord(item, index2, {
          indentSize,
          indexPath,
          allowDrag
        }));
      }
      if (expandContent) {
        const scrollContainer = containerElement.value;
        return createVNode(Tr, {
          "key": `${record.key}-expand`,
          "expand": true
        }, {
          default: () => [createVNode(Td, {
            "isFixedExpand": hasLeftFixedColumn.value || hasRightFixedColumn.value,
            "containerWidth": scrollContainer == null ? void 0 : scrollContainer.clientWidth,
            "colSpan": dataColumns.value.length + operations.value.length
          }, _isSlot(expandContent) ? expandContent : {
            default: () => [expandContent]
          })]
        });
      }
      return null;
    };
    const renderRecord = (record, rowIndex, {
      indentSize = 0,
      indexPath,
      allowDrag = true
    } = {}) => {
      var _a;
      const currentKey = record.key;
      const currentPath = (indexPath != null ? indexPath : []).concat(rowIndex);
      const expandContent = renderExpandContent(record);
      const showExpand = expandedRowKeys.value.includes(currentKey);
      const isDragTarget = dragState.sourceKey === record.key;
      const dragSourceEvent = dragType.value ? {
        draggable: allowDrag,
        onDragstart: (ev) => {
          if (!allowDrag)
            return;
          handleDragStart(ev, record.key, currentPath, record.raw);
        },
        onDragend: (ev) => {
          if (!allowDrag)
            return;
          handleDragEnd(ev);
        }
      } : {};
      const dragTargetEvent = dragType.value ? {
        onDragenter: (ev) => {
          if (!allowDrag)
            return;
          handleDragEnter(ev, currentPath);
        },
        onDragover: (ev) => {
          if (!allowDrag)
            return;
          handleDragover(ev);
        },
        onDrop: (ev) => {
          if (!allowDrag)
            return;
          handleChange("drag");
          handleDrop(ev);
        }
      } : {};
      return createVNode(Fragment, null, [createVNode(Tr, mergeProps({
        "key": currentKey,
        "class": [{
          [`${prefixCls}-tr-draggable`]: dragType.value === "row",
          [`${prefixCls}-tr-drag`]: isDragTarget
        }, isFunction(props.rowClass) ? props.rowClass(record.raw, rowIndex) : props.rowClass],
        "rowIndex": rowIndex,
        "record": record,
        "checked": props.rowSelection && ((_a = selectedRowKeys.value) == null ? void 0 : _a.includes(currentKey)),
        "onClick": (ev) => handleRowClick(record, ev),
        "onDblclick": (ev) => handleRowDblclick(record, ev),
        "onContextmenu": (ev) => handleRowContextMenu(record, ev)
      }, dragType.value === "row" ? dragSourceEvent : {}, dragTargetEvent), {
        default: () => [operations.value.map((operation, index2) => {
          var _a2;
          const cellId = `${rowIndex}-${index2}-${record.key}`;
          const [rowspan, colspan] = props.spanAll ? (_a2 = tableSpan.value[cellId]) != null ? _a2 : [1, 1] : [1, 1];
          if (props.spanAll && removedCells.value.includes(cellId)) {
            return null;
          }
          const style2 = getVirtualColumnStyle(operation.name);
          return createVNode(OperationTd, mergeProps({
            "key": `operation-td-${index2}`,
            "style": style2,
            "operationColumn": operation,
            "operations": operations.value,
            "record": record,
            "hasExpand": Boolean(expandContent),
            "selectedRowKeys": currentSelectedRowKeys.value,
            "rowSpan": rowspan,
            "colSpan": colspan,
            "renderExpandBtn": renderExpandBtn
          }, dragType.value === "handle" ? dragSourceEvent : {}), {
            "drag-handle-icon": slots["drag-handle-icon"]
          });
        }), dataColumns.value.map((column, index2) => {
          var _a2;
          const cellId = `${rowIndex}-${props.spanAll ? operations.value.length + index2 : index2}-${record.key}`;
          const [rowspan, colspan] = (_a2 = tableSpan.value[cellId]) != null ? _a2 : [1, 1];
          if (removedCells.value.includes(cellId)) {
            return null;
          }
          const extraProps = index2 === 0 ? {
            showExpandBtn: record.hasSubtree,
            indentSize: record.hasSubtree ? indentSize - 20 : indentSize
          } : {};
          const style2 = getVirtualColumnStyle(column.dataIndex);
          return createVNode(Td, mergeProps({
            "key": `td-${index2}`,
            "style": style2,
            "rowIndex": rowIndex,
            "record": record,
            "column": column,
            "operations": operations.value,
            "dataColumns": dataColumns.value,
            "rowSpan": rowspan,
            "renderExpandBtn": renderExpandBtn,
            "colSpan": colspan
          }, extraProps, {
            "onClick": (ev) => handleCellClick(record, column, ev),
            "onDblclick": (ev) => handleCellDblclick(record, column, ev),
            "onMouseenter": (ev) => handleCellMouseEnter(record, column, ev),
            "onMouseleave": (ev) => handleCellMouseLeave(record, column, ev),
            "onContextmenu": (ev) => handleCellContextmenu(record, column, ev)
          }), {
            td: slots.td
          });
        })],
        tr: slots.tr
      }), showExpand && renderExpand(record, {
        indentSize: indentSize + props.indentSize,
        indexPath: currentPath,
        allowDrag: allowDrag && !isDragTarget,
        expandContent
      })]);
    };
    const renderBody = () => {
      const hasSubData = flattenData.value.some((record) => Boolean(record.hasSubtree));
      return createVNode(Tbody, null, {
        default: () => [flattenData.value.length > 0 ? flattenData.value.map((record, index2) => renderRecord(record, index2, {
          indentSize: hasSubData ? 20 : 0
        })) : renderEmpty()],
        tbody: slots.tbody
      });
    };
    const renderHeader = () => createVNode(Thead, null, {
      default: () => [groupColumns.value.map((row, index2) => createVNode(Tr, {
        "key": `header-row-${index2}`
      }, {
        default: () => [index2 === 0 && operations.value.map((operation, index22) => {
          var _a;
          return createVNode(OperationTh, {
            "key": `operation-th-${index22}`,
            "ref": (ins) => {
              if ((ins == null ? void 0 : ins.$el) && operation.name) {
                thRefs.value[operation.name] = ins.$el;
              }
            },
            "operationColumn": operation,
            "operations": operations.value,
            "selectAll": Boolean(operation.name === "selection-checkbox" && ((_a = props.rowSelection) == null ? void 0 : _a.showCheckedAll)),
            "rowSpan": groupColumns.value.length
          }, null);
        }), row.map((column, index22) => {
          const resizable = props.columnResizable && Boolean(column.dataIndex) && index22 < row.length - 1;
          return createVNode(Th, {
            "key": `th-${index22}`,
            "ref": (ins) => {
              if ((ins == null ? void 0 : ins.$el) && column.dataIndex) {
                thRefs.value[column.dataIndex] = ins.$el;
              }
            },
            "column": column,
            "operations": operations.value,
            "dataColumns": dataColumns.value,
            "resizable": resizable,
            "onClick": (ev) => handleHeaderClick(column, ev)
          }, {
            th: slots.th
          });
        })]
      }))],
      thead: slots.thead
    });
    const renderContent = () => {
      var _a, _b;
      if (splitTable.value) {
        const top = isNumber(props.stickyHeader) ? `${props.stickyHeader}px` : void 0;
        const mergeOuterClass = [(_a = scrollbarProps.value) == null ? void 0 : _a.outerClass];
        if (props.stickyHeader) {
          mergeOuterClass.push(`${prefixCls}-header-sticky`);
        }
        const mergeOuterStyle = __spreadValues({
          top
        }, (_b = scrollbarProps.value) == null ? void 0 : _b.outerStyle);
        const Component = displayScrollbar.value ? Scrollbar : "div";
        return createVNode(Fragment, null, [props.showHeader && createVNode(Component, mergeProps({
          "ref": theadComRef,
          "class": [`${prefixCls}-header`, {
            [`${prefixCls}-header-sticky`]: props.stickyHeader && !displayScrollbar.value
          }],
          "style": {
            overflowY: hasScrollBar.value ? "scroll" : void 0,
            top: !displayScrollbar.value ? top : void 0
          }
        }, scrollbar.value ? __spreadProps(__spreadValues({
          hide: flattenData.value.length !== 0,
          disableVertical: true
        }, scrollbarProps.value), {
          outerClass: mergeOuterClass,
          outerStyle: mergeOuterStyle
        }) : void 0), {
          default: () => [createVNode("table", {
            "class": `${prefixCls}-element`,
            "style": headerStyle.value,
            "cellpadding": 0,
            "cellspacing": 0
          }, [createVNode(ColGroup, {
            "dataColumns": dataColumns.value,
            "operations": operations.value,
            "columnWidth": columnWidth
          }, null), renderHeader()])]
        }), createVNode(ResizeObserver$1, {
          "onResize": handleTbodyResize
        }, {
          default: () => {
            var _a2, _b2;
            return [isVirtualList.value && flattenData.value.length ? createVNode(VirtualList, mergeProps({
              "ref": (ins) => {
                if (ins == null ? void 0 : ins.$el)
                  tbodyRef.value = ins.$el;
              },
              "class": `${prefixCls}-body`,
              "data": flattenData.value,
              "itemKey": "_key",
              "component": {
                list: "table",
                content: "tbody"
              },
              "listAttrs": {
                class: `${prefixCls}-element`,
                style: contentStyle.value
              },
              "paddingPosition": "list",
              "height": "auto"
            }, props.virtualListProps, {
              "onScroll": onTbodyScroll
            }), {
              item: ({
                item,
                index: index2
              }) => renderRecord(item, index2)
            }) : createVNode(Component, mergeProps({
              "ref": tbodyComRef,
              "class": `${prefixCls}-body`,
              "style": {
                maxHeight: isNumber((_a2 = props.scroll) == null ? void 0 : _a2.y) ? `${(_b2 = props.scroll) == null ? void 0 : _b2.y}px` : "100%"
              }
            }, scrollbar.value ? __spreadValues({
              outerStyle: {
                display: "flex",
                minHeight: "0"
              }
            }, scrollbarProps.value) : void 0, {
              "onScroll": onTbodyScroll
            }), {
              default: () => [createVNode("table", {
                "class": `${prefixCls}-element`,
                "style": contentStyle.value,
                "cellpadding": 0,
                "cellspacing": 0
              }, [flattenData.value.length !== 0 && createVNode(ColGroup, {
                "dataColumns": dataColumns.value,
                "operations": operations.value,
                "columnWidth": columnWidth
              }, null), renderBody()])]
            })];
          }
        }), summaryData.value && summaryData.value.length > 0 && createVNode("div", {
          "ref": summaryRef,
          "class": `${prefixCls}-tfoot`,
          "style": {
            overflowY: hasScrollBar.value ? "scroll" : "hidden"
          }
        }, [createVNode("table", {
          "class": `${prefixCls}-element`,
          "style": contentStyle.value,
          "cellpadding": 0,
          "cellspacing": 0
        }, [createVNode(ColGroup, {
          "dataColumns": dataColumns.value,
          "operations": operations.value,
          "columnWidth": columnWidth
        }, null), renderSummary()])])]);
      }
      return createVNode(ResizeObserver$1, {
        "onResize": () => setAlignPosition()
      }, {
        default: () => [createVNode("table", {
          "class": `${prefixCls}-element`,
          "cellpadding": 0,
          "cellspacing": 0,
          "style": contentStyle.value
        }, [createVNode(ColGroup, {
          "dataColumns": dataColumns.value,
          "operations": operations.value,
          "columnWidth": columnWidth
        }, null), props.showHeader && renderHeader(), renderBody(), summaryData.value && summaryData.value.length > 0 && renderSummary()])]
      });
    };
    const renderTable = (content) => {
      var _a;
      const style2 = ((_a = props.scroll) == null ? void 0 : _a.maxHeight) ? {
        maxHeight: props.scroll.maxHeight
      } : void 0;
      const Component = displayScrollbar.value ? Scrollbar : "div";
      return createVNode(Fragment, null, [createVNode("div", {
        "class": [`${prefixCls}-container`, tableCls.value]
      }, [createVNode(Component, mergeProps({
        "ref": contentComRef,
        "class": [`${prefixCls}-content`, {
          [`${prefixCls}-content-scroll-x`]: !splitTable.value
        }],
        "style": style2
      }, scrollbar.value ? __spreadValues({
        outerStyle: {
          height: "100%"
        }
      }, scrollbarProps.value) : void 0, {
        "onScroll": handleScroll
      }), {
        default: () => [content ? createVNode("table", {
          "class": `${prefixCls}-element`,
          "cellpadding": 0,
          "cellspacing": 0
        }, [content()]) : renderContent()]
      })]), slots.footer && createVNode("div", {
        "class": `${prefixCls}-footer`
      }, [slots.footer()])]);
    };
    const renderPagination = () => {
      var _a, _b;
      const paginationProps = isObject(props.pagination) ? omit(props.pagination, ["current", "pageSize", "defaultCurrent", "defaultPageSize"]) : {};
      return createVNode("div", {
        "class": paginationCls.value
      }, [(_a = slots["pagination-left"]) == null ? void 0 : _a.call(slots), createVNode(Pagination, mergeProps({
        "total": validData.value.length,
        "current": page.value,
        "pageSize": pageSize.value,
        "onChange": (page2) => {
          handlePageChange(page2);
          handleChange("pagination");
        },
        "onPageSizeChange": (pageSize2) => {
          handlePageSizeChange(pageSize2);
          handleChange("pagination");
        }
      }, paginationProps), null), (_b = slots["pagination-right"]) == null ? void 0 : _b.call(slots)]);
    };
    const style = computed(() => {
      var _a, _b;
      if (isString((_a = props.scroll) == null ? void 0 : _a.y)) {
        return {
          height: (_b = props.scroll) == null ? void 0 : _b.y
        };
      }
      return void 0;
    });
    const render = () => {
      var _a;
      if (slots.default) {
        return createVNode("div", {
          "class": cls.value
        }, [renderTable(slots.default)]);
      }
      children.value = (_a = slots.columns) == null ? void 0 : _a.call(slots);
      return createVNode("div", {
        "class": cls.value,
        "style": style.value
      }, [children.value, createVNode(Spin, spinProps.value, {
        default: () => [props.pagination !== false && (flattenData.value.length > 0 || sortedData.value.length > 0) && isPaginationTop.value && renderPagination(), renderTable(), props.pagination !== false && (flattenData.value.length > 0 || sortedData.value.length > 0) && !isPaginationTop.value && renderPagination()]
      })]);
    };
    return {
      render,
      selfExpand: expand,
      selfExpandAll: expandAll,
      selfSelect: select,
      selfSelectAll: selectAll,
      selfResetFilters: resetFilters,
      selfClearFilters: clearFilters,
      selfResetSorters: resetSorters,
      selfClearSorters: clearSorters
    };
  },
  methods: {
    selectAll(checked) {
      return this.selfSelectAll(checked);
    },
    select(rowKey, checked) {
      return this.selfSelect(rowKey, checked);
    },
    expandAll(checked) {
      return this.selfExpandAll(checked);
    },
    expand(rowKey, checked) {
      return this.selfExpand(rowKey, checked);
    },
    resetFilters(dataIndex) {
      return this.selfResetFilters(dataIndex);
    },
    clearFilters(dataIndex) {
      return this.selfClearFilters(dataIndex);
    },
    resetSorters() {
      return this.selfResetSorters();
    },
    clearSorters() {
      return this.selfClearSorters();
    }
  },
  render() {
    return this.render();
  }
});
const usePureProp = (props, name) => {
  const _value = toRef(props, name);
  const value = ref(_value.value);
  watch(_value, (cur, pre) => {
    if (!isEqual(cur, pre)) {
      value.value = cur;
    }
  });
  return value;
};
var TableColumn = /* @__PURE__ */ defineComponent({
  name: "TableColumn",
  props: {
    dataIndex: String,
    title: String,
    width: Number,
    minWidth: Number,
    align: {
      type: String
    },
    fixed: {
      type: String
    },
    ellipsis: {
      type: Boolean,
      default: false
    },
    sortable: {
      type: Object,
      default: void 0
    },
    filterable: {
      type: Object,
      default: void 0
    },
    cellClass: {
      type: [String, Array, Object]
    },
    headerCellClass: {
      type: [String, Array, Object]
    },
    bodyCellClass: {
      type: [String, Array, Object, Function]
    },
    summaryCellClass: {
      type: [String, Array, Object, Function]
    },
    cellStyle: {
      type: Object
    },
    headerCellStyle: {
      type: Object
    },
    bodyCellStyle: {
      type: [Object, Function]
    },
    summaryCellStyle: {
      type: [Object, Function]
    },
    index: {
      type: Number
    },
    tooltip: {
      type: [Boolean, Object],
      default: false
    }
  },
  setup(props, {
    slots
  }) {
    var _a;
    const {
      dataIndex,
      title,
      width,
      align,
      fixed,
      ellipsis,
      index: index2,
      minWidth
    } = toRefs(props);
    const sortable = usePureProp(props, "sortable");
    const filterable = usePureProp(props, "filterable");
    const cellClass = usePureProp(props, "cellClass");
    const headerCellClass = usePureProp(props, "headerCellClass");
    const bodyCellClass = usePureProp(props, "bodyCellClass");
    const summaryCellClass = usePureProp(props, "summaryCellClass");
    const cellStyle = usePureProp(props, "cellStyle");
    const headerCellStyle = usePureProp(props, "headerCellStyle");
    const bodyCellStyle = usePureProp(props, "bodyCellStyle");
    const summaryCellStyle = usePureProp(props, "summaryCellStyle");
    const tooltip = usePureProp(props, "tooltip");
    const instance = getCurrentInstance();
    const tableCtx = inject(tableInjectionKey, {});
    const tableColumnCtx = inject(tableColumnInjectionKey, void 0);
    const {
      children,
      components
    } = useChildrenComponents("TableColumn");
    const childrenColumnMap = reactive(/* @__PURE__ */ new Map());
    const addChild = (id, data) => {
      childrenColumnMap.set(id, data);
    };
    const removeChild = (id) => {
      childrenColumnMap.delete(id);
    };
    provide(tableColumnInjectionKey, {
      addChild,
      removeChild
    });
    const childrenColumns = ref();
    watch([components, childrenColumnMap], ([components2, childrenColumnMap2]) => {
      if (components2.length > 0) {
        const columns = [];
        components2.forEach((id) => {
          const column2 = childrenColumnMap2.get(id);
          if (column2)
            columns.push(column2);
        });
        childrenColumns.value = columns;
      } else {
        childrenColumns.value = void 0;
      }
    });
    const column = reactive({
      dataIndex,
      title,
      width,
      minWidth,
      align,
      fixed,
      ellipsis,
      sortable,
      filterable,
      cellClass,
      headerCellClass,
      bodyCellClass,
      summaryCellClass,
      cellStyle,
      headerCellStyle,
      bodyCellStyle,
      summaryCellStyle,
      index: index2,
      tooltip,
      children: childrenColumns,
      slots
    });
    if (instance) {
      if (tableColumnCtx) {
        tableColumnCtx.addChild(instance.uid, column);
      } else {
        (_a = tableCtx.addColumn) == null ? void 0 : _a.call(tableCtx, instance.uid, column);
      }
    }
    return () => {
      var _a2;
      children.value = (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
      return children.value;
    };
  }
});
const Table = Object.assign(_Table, {
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Column: TableColumn,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Table.name, _Table);
    app.component(componentPrefix + Thead.name, Thead);
    app.component(componentPrefix + Tbody.name, Tbody);
    app.component(componentPrefix + Tr.name, Tr);
    app.component(componentPrefix + Th.name, Th);
    app.component(componentPrefix + Td.name, Td);
    app.component(componentPrefix + TableColumn.name, TableColumn);
  }
});
const index$1 = "";
const index = "";
export {
  Table as T
};
//# sourceMappingURL=index-6a06d329.js.map
