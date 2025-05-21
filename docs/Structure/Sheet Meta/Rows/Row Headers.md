---
sidebar_position: 1
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Row Headers


Additionally, Maximum Height ColIndex along with rowIndex, rowsRepeated, rowStyleName as a 4th value sent in RowHeadersArray.

<h3>Structure</h3>
```json
{
    "ROW_HEADERS": {
        __operation_type__: [
            [
                __row_index__,
                __rows_repeated__,
                __row_style_name__,
                __max_height_col_index__
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
        "ROW_HEADERS": {
    "META": [
        [
            0,
            1,
            "ro2",
            -1
        ]
    ]
}
    }} />
    }}
</BrowserOnly>

