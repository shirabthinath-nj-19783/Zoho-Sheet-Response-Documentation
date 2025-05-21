---
sidebar_position: 26
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# TimeLine

:::note
- Operation type will be changed based on the operation. Possible operationTypes are : META, INSERT, MODIFY, MOVE, ADD, DELETE.
- Slicer style - <b>shadow</b> and <b>sliderStyle</b>'s structure will be differ from other slicer styles.
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
                "autoHeight": __is_auto_height_enabled__,
                "srd": __start_row_diff__,
                "tlid": __timeline_id__,
                "ssd": __selected_start_date_object__,
                "sourceCol": __source_col__,
                "stid": __slicer_theme_id__,
                "ht": __height__,
                "wd": __width__,
                "sc": __start_col__,
                "sd": __start_date__,
                "slicerStyle": {
                    __slicer_style_name__: [
                        __background_color_object__,
                        __text_color_object__,
                        __font_size__,
                        __font_name__,
                        __border_array__,
                        __gradient_object__
                    ]
                },
                "sed": __selected_end_date__,
                "tlayout": __timeline_layout__,
                "tlinename": __timeline_name__,
                "scd": __start_col_diff__,
                "spt": __selected_period_type__,
                "scrollDate": __current_scrollview's_start_date__,
                "connPivots": __connected_pivot_array__,
                "fc": __filter_criteria_applied__,
                "sr": __start_row__,
                "ed": __end_date__
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
                    "autoHeight": true,
                    "srd": 17.8130081300813,
                    "tlid": "Timeline1",
                    "ssd": {
                        "month": 12,
                        "year": 2023,
                        "day": 4
                    },
                    "sourceCol": "C",
                    "stid": "1tc8",
                    "ht": 142,
                    "wd": 350,
                    "sc": 7,
                    "sd": {
                        "month": 1,
                        "year": 2023,
                        "day": 1
                    },
                    "slicerStyle": {
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
                    "sed": {
                        "month": 12,
                        "year": 2023,
                        "day": 5
                    },
                    "tlayout": 0,
                    "tlinename": "C",
                    "scd": 59.67479674796766,
                    "spt": "DAYS",
                    "scrollDate": {
                        "month": 11,
                        "year": 2023,
                        "day": 25
                    },
                    "connPivots": [
                        "PivotTable1"
                    ],
                    "fc": "btwn",
                    "sr": 6,
                    "ed": {
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
|Background Color, <br/> Text Color| 2 possible JSONObject's key structures, <br/> &emsp;&emsp;1. HEX_COLOR <br/> &emsp;&emsp;2. THEME_COLOR and TINT(tint is optional) <br/>&emsp;&emsp; <b>Note :</b> Only one of the formats will be used|
  </TabItem>
</Tabs>