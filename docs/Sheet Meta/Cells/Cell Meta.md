---
sidebar_position: 1
---

import JsonViewer from '@site/src/components/JsonViewer';

# Cell Meta

<JsonViewer data={{
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
<br/>

:::note
- Cell data at 9th index moved to Cell Styles Definition. Refer this [Learn Page](https://learn.zoho.com/portal/zohocorp/knowledge/manual/response-versioning/article/v2-response) for more info.
- In V2 - 17th index data should be used for PickList response instead of 11th index data.
- Additionally, 20th and 21st index data added in cell Response. 20th index data will be for multiValue pickList. 21st data points to the state of ImportRangeSync.
:::
