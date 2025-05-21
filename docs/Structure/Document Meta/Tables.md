---
sidebar_position: 13
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tables

:::note
Operation type will be changed based on the operation. Possible operationTypes are : META, ADD, MODIFY, REMOVE, DELETE, COLUMN_HEADERS, TABLE_EXPANSION, CELL_STYLES, REMOVE_STYLE, DEFAULT.
:::

<Tabs>
<TabItem value="add" label="Meta | Add | Modify" default>
<h3>Structure</h3>

```json
{
        "TABLE": {
        "__operation_type__": [
            {
                "COLUMN_HEADERS" : __column_headers_array__,
                "RESIZE": _resize_boolean__,
                "RANGES":__ranges_array__,
                "ID": __id__,
                "PROPERTIES" : __properties_array__,
                "STYLE" : __style_name__,
                "NAME": __table_name__,
                "IS_FILTER_TABLE": __filter_table_boolean__
            }
        ]
    }
}
```


<h3>Response</h3>
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
- <b>Ranges array:</b> In the order of asn, startRow, startCol, endRow, endCol.  
- <b>Properties array:</b> In the order of isHeaderRowShown, isFooterRowShown, isShowFirstColumn, isShowLastColumn, isShowRowStrips, isShowColumnStrips.  
- <b>IS_FILTER_TABLE</b> denotes whether this table is the sheetFilter's table.

:::note
If the table response is for the sheetFilter's table, then COLUMN_HEADERS, PROPERTIES, and STYLE will not be available.
:::
</TabItem>

<TabItem value="remove" label="Remove">

<h3>Structure</h3>
```json
{
    "TABLE" : {
        "__operation_type__": [
            {
                "ID": __id__
            }
        ]
    }
}
```

<h3>Response</h3>
<BrowserOnly fallback={<div>Loading JSON...</div>}>
{() => {
    const JsonViewer = require('@site/src/components/JsonViewer').default;
    return <JsonViewer data={{
    "TABLE" : {
        "REMOVE": [
            {
                "ID": 0
            }
        ]
    }
    }} />
    }}
</BrowserOnly>
</TabItem>

<TabItem value="delete" label="Delete">
<h3>Structure</h3>
```json
{
    "TABLE" :{
        "__operation_type__" : [
            {
                "ASSOCIATED_SHEET_NAME": _asn__,
                "START_ROW": __index__,
                "START_COL": __index__,
                "END_ROW": __index__,
                "END_COL": __index__
            }
        ]
    }
}
```

<h3>Response</h3>
<BrowserOnly fallback={<div>Loading JSON...</div>}>
{() => {
    const JsonViewer = require('@site/src/components/JsonViewer').default;
    return <JsonViewer data={{
    "TABLE" :{
        "DELETE" : [
        {
            "ASSOCIATED_SHEET_NAME": "0#",
            "START_ROW": 28,
            "START_COL": 0,
            "END_ROW": 29,
            "END_COL": 2
        }
        ]
    }
    }} />
    }}
</BrowserOnly>
</TabItem>

<TabItem value="columnHeaders" label="Column Headers">
<h3>Structure</h3>
```json
{
    "TABLE" : {
        "__operation_type__" : [
            {
                "COLUMN_HEADERS": __column_headers_array__,
                "ID": __id__
            }
        ]
    }
}
```

<h3>Response</h3>
<BrowserOnly fallback={<div>Loading JSON...</div>}>
{() => {
    const JsonViewer = require('@site/src/components/JsonViewer').default;
    return <JsonViewer data={{
    "TABLE" : {
        "COLUMN_HEADERS" : [
        {
            "COLUMN_HEADERS": [
                "a",
                "bC",
                "ab"
            ],
            "ID": 1
        }
        ]
    }
    }} />
    }}
</BrowserOnly>
</TabItem>

<TabItem value="tableExpansion" label="Table Expansion">
<h3>Structure</h3>
```json
{
    "TABLE" : {
        "__operation_type__": [
            {
                "ID": __id__,
                "START_ROW": __index__,
                "START_COL": __index__,
                "END_ROW": __index__,
                "END_COL": __index__
            }
        ]
    }
}
```

<h3>Response</h3>
<BrowserOnly fallback={<div>Loading JSON...</div>}>
{() => {
    const JsonViewer = require('@site/src/components/JsonViewer').default;
    return <JsonViewer data={{
    "TABLE" : {
        "TABLE_EXPANSION": [
            {
                "ID": 0,
                "START_ROW": 1,
                "START_COL": 1,
                "END_ROW": 3,
                "END_COL": 2
            }
        ]
    }
    }} />
    }}
</BrowserOnly>
</TabItem>

<TabItem value="cellStyles" label="Cell Styles">
<h3>Structure</h3>
```json
{
    "TABLE" : {
        "__operation_type__": [
            {
                "ISCUSTOM": __is_custom_style_boolean__,
                "NAME": __style_name__,
                __table_style_name__: [
                    __background_color_object__,
                    __text_color_object__,
                    __font_size__,
                    __font_name__,
                    __font_weight__,
                    __font_style__,
                    __text_line-through_style__,
                    __text_underline_style_,
                    __border_array__,
                    __stripe_size__
                ]
            }
        ]
    }
}
```

<h3>Response</h3>
<BrowserOnly fallback={<div>Loading JSON...</div>}>
{() => {
    const JsonViewer = require('@site/src/components/JsonViewer').default;
    return <JsonViewer data={{
    "TABLE" : {
        "CELL_STYLES": [
            {
                "ISCUSTOM": true,
                "NAME": "Table1 Style_1",
                "firstColumn": [
                    {
                        "HEX_COLOR": "#a80a0a"
                    },
                    {},
                    "",
                    "",
                    "bold",
                    "",
                    null,
                    null,
                    [
                        {},
                        {},
                        {},
                        {},
                        {},
                        {}
                    ],
                    1
                ],
                "wholeTable": [
                    {},
                    {
                        "HEX_COLOR": "z-automatic"
                    },
                    "",
                    "",
                    "",
                    "",
                    null,
                    null,
                    [
                        {
                            "COLOR": {
                                "HEX_COLOR": "#a80a0a"
                            },
                            "STYLE": "0.0138in solid"
                        },
                        {
                            "COLOR": {
                                "HEX_COLOR": "#a80a0a"
                            },
                            "STYLE": "0.0138in solid"
                        },
                        {
                            "COLOR": {
                                "HEX_COLOR": "#a80a0a"
                            },
                            "STYLE": "0.0138in solid"
                        },
                        {
                            "COLOR": {
                                "HEX_COLOR": "#a80a0a"
                            },
                            "STYLE": "0.0346in solid"
                        },
                        {
                            "COLOR": {
                                "HEX_COLOR": "#a80a0a"
                            },
                            "STYLE": "0.0138in solid"
                        },
                        {
                            "COLOR": {
                                "HEX_COLOR": "#a80a0a"
                            },
                            "STYLE": "0.0138in solid"
                        }
                    ],
                    1
                ]
            }
        ]
    }
    }} />
    }}
</BrowserOnly>
<br/>
- firstColumn, wholeTable are tableStyle key names. Possible tableStyle keys are : wholeTable, headerRow, firstHeaderCell, lastHeaderCell, totalRow, firstTotalCell, lastTotalCell, firstColumnStripe, secondColumnStripe, firstRowStripe, secondRowStripe, firstColumn, lastColumn.  
<br/>
<h2>Color Object Description :</h2>

|Object | Description |
|------|-------------|
|Background Color, <br/> Text Color| 2 possible JSONObject's key structures, <br/> &emsp;&emsp;1. HEX_COLOR <br/> &emsp;&emsp;2. THEME_COLOR and TINT(tint is optional) <br/>&emsp;&emsp; <b>Note :</b> Only one of the formats will be used|
</TabItem>

<TabItem value="removeStyle" label="Remove Style">
<h3>Structure</h3>
```json
{
    "TABLE" : {
        "__operation_type__": [
            __style_name__
        ]
    }
}
```

<h3>Response</h3>
<BrowserOnly fallback={<div>Loading JSON...</div>}>
{() => {
    const JsonViewer = require('@site/src/components/JsonViewer').default;
    return <JsonViewer data={{
    "TABLE" : {
        "REMOVE_STYLE": [
            "Table1 Style_1"
        ]
    }
    }} />
    }}
</BrowserOnly>
</TabItem>

<TabItem value="default" label="Default">
<h3>Structure</h3>
```json
{
    "TABLE" : {
        "__operation_type__": __style_name__
    }
}
```
<h3>Response</h3>
<BrowserOnly fallback={<div>Loading JSON...</div>}>
{() => {
    const JsonViewer = require('@site/src/components/JsonViewer').default;
    return <JsonViewer data={{
    "TABLE" : {
        "DEFAULT": "Table1 Style_1"
    }
    }} />
    }}
</BrowserOnly>
</TabItem>
</Tabs>