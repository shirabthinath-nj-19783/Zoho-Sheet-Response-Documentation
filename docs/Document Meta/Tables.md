---
sidebar_position: 13
---

import JsonViewer from '@site/src/components/JsonViewer';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tables

<Tabs>
<TabItem value="add" label="Add" default>
<JsonViewer data={{
    "TABLE": {
    "ADD": [
        {
            "COLUMN_HEADERS" : [
                "A",
                "B"
            ],
            "RESIZE": false,
            "RANGES": [
                "0#",
                3,
                4,
                8,
                6
            ],
            "ID": 0,
            "PROPERTIES" : [
                1,
                0,
                0,
                0,
                1,
                0
            ],
            "STYLE" : "Table1 Style",
            "NAME": "Table1",
            "IS_FILTER_TABLE": true
        }
    ]
}
}} />

<br/>

:::note
- IS_FILTER_TABLE denotes whether this table is the sheetFilter's table.
- If the table response is for the sheetFilter's table, then COLUMN_HEADERS, PROPERTIES, and STYLE will not be available.
:::
</TabItem>
</Tabs>