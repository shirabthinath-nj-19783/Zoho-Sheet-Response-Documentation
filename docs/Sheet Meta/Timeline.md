---
sidebar_position: 26
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# TimeLine
<Tabs>
<TabItem value="meta" label="Insert / Edit / Move / All" default>
To Insert / Edit/ Move timeLine only the key will be changed in response.
|Operation | Key | 
|----------|-----|   
|Insert | INSERT|
|Edit | MODIFY |
|Move | MOVE |
|Move To New Sheet | ADD|
|All | META|
<br/>
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

| Key         | Description |
|-------------|-------|
| <b>autoHeight</b>     | AutoHeight for TimeLine  |
| <b>srd</b>    | Start Row Diff - No of pixels from startRow   |
| <b>tlid</b>  | TimeLine Id     |
| <b>ssd</b>   |  Selected Start Date - JSONObject |
|<b>sourceCol</b> | Source Column from Pivot|
|<b>stid</b> | Slicer Theme Id - in the format of accent + "tc" + (1-8)|
|<b>ht</b>  | Height of the timeLine|
|<b>wd</b>  | Width of the timeLine|
|<b>sc</b>  | StartCol of the timeLine|
|<b>sd</b>  | Start Date of the timeLine - similar to Selected Start Date|
|<b>slicerStyle</b>  | styles for header, slider, period label etc. - JSONObject <br/> Each style will be as key-value pair.<br/> Key : styleName, Value : JSONArray [6 elements] <br/> &emsp; 0 - Background Color - JSONObject - two possible key structures <br/>&emsp;&emsp; 1. HEX_COLOR <br/>&emsp;&emsp; 2. THEME_COLOR AND TINT(optional) <br/>&emsp;&emsp; <b>Note :</b> Only one of the formats will be used <br/>&emsp; 1 - Text Color - similar to Background Color <br/> &emsp; 2 - Font Size <br/>&emsp; 3 - Font Name <br/>&emsp; 4 - Border Info <br/>&emsp; 5 - Gradient Info <br/><b> Note :</b> Shadow's style structure will be differ from other styles.|
|<b>sed</b>  | Selected End Date - JSONObject|
|<b>tlayout</b>  | TimeLine Layout Index|
|<b>tlinename</b> | TimeLine Name| 
|<b>scd</b>  | Start Col Diff - No of pixels from startCol|
|<b>spt</b>  | Selected Period Type like Days, Years|
|<b>scrollDate</b>  | Current scrollView's startDate|
|<b>connPivots</b>  | Connected pivots name|
|<b>fc</b>  | Filter criteria applied to pivot|
|<b>sr</b>  | StartRow of the timeLine |
|<b>ed</b>  | End Date - JSONObject|
  </TabItem>

  <TabItem value="delete" label="Delete" default>
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
</Tabs>