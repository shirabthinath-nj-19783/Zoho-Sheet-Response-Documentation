---
sidebar_position: 6
description: ""
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sheet Operations

:::note
The operation type will change based on the operation being performed. Possible operation types are: META, INSERT, DELETE, RENAME, MOVE, TABCOLOR, HIDDEN_SHEETS, UNHIDDEN_SHEETS, IMPORT_AS_NEWSHEET, FIELDS_SHEET_INSERT and INSERT_SHEETS.
:::

<Tabs>

<TabItem value="delete" label="Delete | Rename" default>
<h3>Structure</h3>
```json
{
    "WORKSHEETS": {
        __operation_type__: [
            [
                __associated_sheet_name__,
                __sheet_name__
            ]
        ]
    }
}
```

<h3>Response</h3>
<BrowserOnly fallback={<div>Loading JSON...</div>}>
    {() => {
        const JsonViewer = require('@site/src/components/JsonViewer').default;
        return <JsonViewer data={{
        "WORKSHEETS": {
            "DELETE": [
                [
                    "0#",
                    "Sheet1",
                ]
            ]
        }
    }} />
    }}
 </BrowserOnly>
</TabItem>

<TabItem value="move" label="Move">
<h3>Structure</h3>
```json
{
    "WORKSHEETS": {
        __operation_type__: [
            [
                __associated_sheet_name__,
                __sheet_name__,
                __sheet_index__
            ]
        ]
    }
}
```

<h3>Response</h3>
<BrowserOnly fallback={<div>Loading JSON...</div>}>
    {() => {
        const JsonViewer = require('@site/src/components/JsonViewer').default;
        return <JsonViewer data={{
        "WORKSHEETS": {
            "MOVE": [
                [
                    "0#",
                    "Sheet1",
                    0
                ]
            ]
        }
    }} />
    }}
 </BrowserOnly>
</TabItem>

<TabItem value="others" label="Others">
<h3>Structure</h3>
```json
{
    "WORKSHEETS": {
        __operation_type__: [
            [
                __associated_sheet_name__,
                __sheet_name__,
                __sheet_index__,
                __sheet_tab_color,
                __is_hidden__
            ]
        ]
    }
}
```

<h3>Response</h3>
<BrowserOnly fallback={<div>Loading JSON...</div>}>
    {() => {
        const JsonViewer = require('@site/src/components/JsonViewer').default;
        return <JsonViewer data={{
        "WORKSHEETS": {
            "INSERT": [
                [
                    "0#",
                    "Sheet1",
                    0,
                    "transparent",
                    false
                ]
            ]
        }
    }} />
    }}
 </BrowserOnly>
</TabItem>

</Tabs>