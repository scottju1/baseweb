// @flow
import * as React from 'react';
import {
  Unstable_StatefulTreeView as StatefulTreeView,
  type TreeNodeT,
} from 'baseui/tree-view';
import ChevronRight from 'baseui/icon/chevron-right';
import ChevronDown from 'baseui/icon/chevron-down';

const initialData = [
  {
    label: 'Node 1',
    isExpanded: true,
    children: [
      {
        label: 'Child 1',
        isExpanded: true,
        children: [
          {
            label: 'Grandchild 1',
          },
        ],
      },
    ],
  },
  {
    label: 'Node 2',
    isExpanded: true,
    children: [
      {
        label: 'Child 2',
        isExpanded: true,
        children: [
          {
            label: 'Grandchild 2',
          },
        ],
      },
    ],
  },
];

export default function TreeViewOverrides() {
  return (
    <StatefulTreeView
      data={initialData}
      overrides={{
        IconContainer: {
          style: {
            borderStyle: 'none',
          },
        },
        CollapseIcon: {
          component: ChevronDown,
        },
        ExpandIcon: {
          component: ChevronRight,
        },
      }}
    />
  );
}
