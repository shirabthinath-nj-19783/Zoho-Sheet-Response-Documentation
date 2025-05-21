---
sidebar_position: 1
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Column Headers

<h3>Structure</h3>
```json
{
    "COLUMN_HEADERS": {
        __operation__type__: [
            [
                __col_index__,
                __cols_repeated__,
                __col_style_name__,
                __max_width_row_index___
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
        "COLUMN_HEADERS": {
    "META": [
        [
            0,
            1,
            "co1",
            -1
        ]
    ]
}
    }} />
    }}
</BrowserOnly>
