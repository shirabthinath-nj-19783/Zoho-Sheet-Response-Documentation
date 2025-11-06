---
sidebar_position: 1
---

import BrowserOnly from '@docusaurus/BrowserOnly';

# Cell Meta
<h3>Structure</h3>
```json
{
    "CELL_META": {
        "META": {
            "ROW_DATA": __row_data_array__,
            "COLUMN_DATA": {
                __row_key__: [
                    [
                        __col_index__,
                        __cols_repeated__,
                        [
                            __actual_value__,
                            __display_value__,
                            __formula__,
                            __style_name__,
                            __cond_style_name__,
                            __annotation__,
                            __hyperlink__,
                            __cell_type__,
                            __pattern_color__,
                            __is_content_valid__,
                            __has_link__,
                            __picklist__,
                            __pattern_repeat_index__,
                            __pattern_repeat_char__,
                            __cell_image__,
                            __is_type_mismatch__,
                            __auto_array__,
                            [
                                __picklist_id__,
                                [
                                    __picklist_item_id__
                                ]
                            ],
                            __rich_string__,
                            __invisible_chars_object__,
                            __picklist_multivalue_object,
                            __importrange_sync_state__
                        ]
                    ]
                ]
            }
        }
    }
}
```


<h3>Response</h3>
<BrowserOnly fallback={<div>Loading JSON...</div>}>
{() => {
    const JsonViewer = require('@site/src/components/JsonViewer').default;
    return <JsonViewer data={{
        "CELL_META": {
        "META": {
            "ROW_DATA": [
                [
                    28,
                    1,
                    "0"
                ]
            ],
            "COLUMN_DATA": {
                "0": [
                    [
                        4,
                        1,
                        [
                            "'Yet to start\nBlocked'",
                            "''",
                            "'=D26'",
                            "",
                            [],
                            [],
                            "",
                            "STRING",
                            "",
                            1,
                            0,
                            [],
                            -1,
                            "",
                            [],
                            0,
                            [],
                            [
                                0,
                                [
                                    0,
                                    1
                                ]
                            ],
                            [],
                            {},
                            {
                                "PL_LIST": [
                                    {
                                        "COLOR": {
                                            "hexColor": "#563b30"
                                        },
                                        "BG_COLOR": {
                                            "hexColor": "#e8dbd6"
                                        },
                                        "DISPLAY_STRING": "Yet to start"
                                    },
                                    {
                                        "COLOR": {
                                            "hexColor": "#606620"
                                        },
                                        "BG_COLOR": {
                                            "hexColor": "#edf0cf"
                                        },
                                        "DISPLAY_STRING": "Blocked"
                                    }
                                ],
                                "STACK_DIRECTION": "vrt"
                            },
                            0
                        ]
                    ]
                ]
            },
            "DATA_HEADER": 8381439
        },
        "APPLIED_COND_STYLE": {
            "META": [
                [
                    28,
                    4,
                    28,
                    4,
                    []
                ]
            ]
        }
    }
    }} />
    }}
</BrowserOnly>
<br/>
