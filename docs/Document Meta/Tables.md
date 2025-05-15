---
sidebar_position: 13
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tables

<Tabs>
<TabItem value="add" label="Add" default>
<BrowserOnly fallback={<div>Loading JSON...</div>}>
{() => {
    const JsonViewer = require('@site/src/components/JsonViewer').default;
    return <JsonViewer data={{
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
    }}
</BrowserOnly>
<br/>

:::note
- IS_FILTER_TABLE denotes whether this table is the sheetFilter's table.
- If the table response is for the sheetFilter's table, then COLUMN_HEADERS, PROPERTIES, and STYLE will not be available.
:::
</TabItem>
</Tabs>