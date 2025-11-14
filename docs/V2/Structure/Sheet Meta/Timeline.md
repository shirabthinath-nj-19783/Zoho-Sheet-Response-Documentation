---
sidebar_position: 26
description: ""
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# TimeLine

:::note
- The operation type will change based on the operation being performed. Possible operation types are: META, INSERT, MODIFY, MOVE, ADD and DELETE.
- The structure of the slicer style — specifically for <b>shadow</b> and <b>sliderStyle</b> — differs from other slicer styles.
:::
<Tabs>

<TabItem value="delete" label="Delete" default>
  <h3>Structure</h3>
    ```json
    {
        "PIVOT_TIMELINE": {
            __operation_type__: [
                __timeline_id__
            ]
        }
    }
    ```
  <h3>Response</h3>
  <BrowserOnly fallback={<div>Loading JSON...</div>}>
    {() => {
        const JsonViewer = require('@site/src/components/JsonViewer').default;
        return <JsonViewer data={{
            "PIVOT_TIMELINE": {
            "DELETE": [
                "Timeline1"
            ]
        }
        }} />
            }}
    </BrowserOnly>
  </TabItem>

<TabItem value="meta" label="Others">
<h3>Structure</h3>
```json
{
    "PIVOT_TIMELINE": {
        __operation_type__: [
            {
                "AUTO_HEIGHT": __is_auto_height_enabled__,
                "START_ROW_DIFF": __start_row_diff__,
                "SLICER_ID": __timeline_id__,
                "SELECTED_START_DATE": __selected_start_date_object__,
                "SLICER_SOURCE_COL": __source_col__,
                "SLICER_THEME_ID": __slicer_theme_id__,
                "SLICER_HEIGHT": __height__,
                "SLICER_WIDTH": __width__,
                "START_COL": __start_col__,
                "START_DATE": __start_date__,
                "SLICER_STYLE": {
                    __slicer_style_name__: [
                        __background_color_object__,
                        __text_color_object__,
                        __font_size__,
                        __font_name__,
                        __border_array__,
                        __gradient_object__
                    ]
                },
                "SELECTED_END_DATE": __selected_end_date__,
                "SLICER_LAYOUT": __timeline_layout__,
                "SLICER_NAME": __timeline_name__,
                "START_COL_DIFF": __start_col_diff__,
                "PERIOD_TYPE": __selected_period_type__,
                "SCROLL_INDEX": __current_scrollview's_start_date__,
                "CONNECTED_PIVOTS": __connected_pivot_array__,
                "FILTER_CRITERIA": __filter_criteria_applied__,
                "START_ROW": __start_row__,
                "END_DATE": __end_date__
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
        "PIVOT_TIMELINE": {
            "MODIFY": [
                {
                    "AUTO_HEIGHT": true,
                    "START_ROW_DIFF": 17.8130081300813,
                    "SLICER_ID": "Timeline1",
                    "SELECTED_START_DATE": {
                        "month": 12,
                        "year": 2023,
                        "day": 4
                    },
                    "SLICER_SOURCE_COL": "C",
                    "SLICER_THEME_ID": "1tc8",
                    "SLICER_HEIGHT": 142,
                    "SLICER_WIDTH": 350,
                    "START_COL": 7,
                    "START_DATE": {
                        "month": 1,
                        "year": 2023,
                        "day": 1
                    },
                    "SLICER_STYLE": {
                        "item_off_style": [
                            {
                                "THEME_COLOR": "TEXT1",
                                "TINT": "0.9"
                            },
                            {},
                            "",
                            "",
                            [
                                {},
                                {},
                                {},
                                {}
                            ],
                            {}
                        ],
                        "shadow": {
                            "color": {
                                "THEME_COLOR": "ACCENT1",
                                "TINT": "0.8200000000000001"
                            },
                            "x": 7,
                            "y": 7,
                            "blur": 0,
                            "opacity": 0,
                            "inner": true,
                            "spread": 6
                        },
                        "whole_table_style": [
                            {
                                "THEME_COLOR": "TEXT1",
                                "TINT": "0.98"
                            },
                            {},
                            "",
                            "",
                            [
                                {
                                    "COLOR": {
                                        "THEME_COLOR": "TEXT1",
                                        "TINT": "0.9"
                                    },
                                    "STYLE": "1.0000px solid"
                                },
                                {
                                    "COLOR": {
                                        "THEME_COLOR": "TEXT1",
                                        "TINT": "0.9"
                                    },
                                    "STYLE": "1.0000px solid"
                                },
                                {
                                    "COLOR": {
                                        "THEME_COLOR": "TEXT1",
                                        "TINT": "0.9"
                                    },
                                    "STYLE": "1.0000px solid"
                                },
                                {
                                    "COLOR": {
                                        "THEME_COLOR": "TEXT1",
                                        "TINT": "0.9"
                                    },
                                    "STYLE": "1.0000px solid"
                                }
                            ],
                            {
                                "bgStart": {
                                    "THEME_COLOR": "ACCENT1",
                                    "TINT": "0.9500000000000001"
                                },
                                "bgStop": {
                                    "THEME_COLOR": "ACCENT1",
                                    "TINT": "0.89"
                                }
                            }
                        ],
                        "item_on_style": [
                            {
                                "THEME_COLOR": "ACCENT1"
                            },
                            {},
                            "",
                            "",
                            [
                                {},
                                {},
                                {},
                                {}
                            ],
                            {}
                        ],
                        "period_label2_style": [
                            {},
                            {
                                "THEME_COLOR": "TEXT1",
                                "TINT": "0.38"
                            },
                            "",
                            "",
                            [
                                {},
                                {},
                                {},
                                {}
                            ],
                            {}
                        ],
                        "sliderStyle": "WAY_POINT",
                        "header_style": [
                            {},
                            {
                                "THEME_COLOR": "TEXT1"
                            },
                            "",
                            "",
                            [
                                {},
                                {},
                                {},
                                {}
                            ],
                            {}
                        ],
                        "time_level_style": [
                            {
                                "THEME_COLOR": "TEXT1",
                                "TINT": "0.38"
                            },
                            {},
                            "",
                            "",
                            [
                                {},
                                {},
                                {},
                                {}
                            ],
                            {}
                        ],
                        "period_label1_style": [
                            {},
                            {
                                "THEME_COLOR": "TEXT1",
                                "TINT": "0.38"
                            },
                            "",
                            "",
                            [
                                {},
                                {},
                                {},
                                {}
                            ],
                            {}
                        ],
                        "slider_label_style": [
                            {},
                            {
                                "HEX_COLOR": "z-automatic"
                            },
                            "",
                            "",
                            [
                                {},
                                {},
                                {},
                                {}
                            ],
                            {}
                        ],
                        "item_off_space_style": [
                            {
                                "THEME_COLOR": "TEXT1",
                                "TINT": "0.85"
                            },
                            {},
                            "",
                            "",
                            [
                                {},
                                {},
                                {},
                                {}
                            ],
                            {}
                        ],
                        "item_on_space_style": [
                            {
                                "THEME_COLOR": "TEXT1",
                                "TINT": "0.85"
                            },
                            {},
                            "",
                            "",
                            [
                                {},
                                {},
                                {},
                                {}
                            ],
                            {}
                        ]
                    },
                    "SELECTED_END_DATE": {
                        "month": 12,
                        "year": 2023,
                        "day": 5
                    },
                    "SLICER_LAYOUT": 0,
                    "SLICER_NAME": "C",
                    "START_COL_DIFF": 59.67479674796766,
                    "PERIOD_TYPE": "DAYS",
                    "SCROLL_INDEX": {
                        "month": 11,
                        "year": 2023,
                        "day": 25
                    },
                    "CONNECTED_PIVOTS": [
                        "PivotTable1"
                    ],
                    "FILTER_CRITERIA": "btwn",
                    "START_ROW": 6,
                    "END_DATE": {
                        "month": 12,
                        "year": 2023,
                        "day": 31
                    }
                }
            ]
    }
    }} />
    }}
</BrowserOnly>
<br/>

|Object | Description |
|------|-------------|
|Background Color, <br/> Text Color| Two possible key structures for a JSONObject. <br/> &emsp;&emsp;1. HEX_COLOR <br/> &emsp;&emsp;2. THEME_COLOR and TINT(tint is optional) <br/>&emsp;&emsp; <b>Note :</b> Only one of the formats will be used|
  </TabItem>
</Tabs>