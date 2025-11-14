---
sidebar_position: 26
description: ""
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Shape

:::note
- The operation type will change based on the operation being performed. Possible operation types are: META, INSERT, MOVE, DELETE, RESIZE and EDIT.
:::
<Tabs>

<TabItem value="delete" label="Delete" default>
  <h3>Structure</h3>
    ```json
    {
        "SHAPE": {
            __operation_type__: [
                {
                    "SHAPE_ID" : __shape_id__,
                    "SHEET_SHAPE_ID" : __sheet_shape_id__
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
            "SHAPE": {
            "DELETE": [
                {
                    "SHAPE_ID" : 0,
                    "SHEET_SHAPE_ID" : 0
                }
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
    "SHAPE": {
        __operation_type__: [
            {
                "SHAPE_ID" : __shape_id__,
                "SHAPE_COLUMN" : __shape_column_position__,
                "SHAPE_ROW_DIFF" : __shape_row_diff__,
                "SHAPE_COL_DIFF" : __shape_col_diff__,
                "SHAPE_DATA" : __shape_data_object__,
                "SHAPE_ACTUAL_HEIGHT" : __shape_actual_height__,
                "SHAPE_ACTUAL_WIDTH" : __shape_actual_width__,
                "SHEET_SHAPE_ID" : __sheet_shape_id__,
                "WORKBOOK_SHAPE_ID" : __workbook_shape_id__,
                "SHAPE_HEIGHT" : __shape_height__,
                "SHAPE_WIDTH" : __shape_width__,
                "SHAPE_ROW" : __shape_row_position__,
                "SHAPE_ZINDEX" : __shape_zindex__
                "sn" : __sheet_name__
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
        "SHAPE": {
            "INSERT": [
                {
                    "SHAPE_ID" : 0,
                    "SHAPE_COLUMN" : 1,
                    "SHAPE_ROW_DIFF" : 0,
                    "SHAPE_COL_DIFF" : 0,
                    "SHAPE_DATA" : {
                        "containerDim": {
                            "width": 500,
                            "height": 500
                        },
                        "btransform": {
                            "dim": {
                                "width": 120,
                                "height": 120
                            },
                            "pos": {
                                "left": 0,
                                "top": 0
                            }
                        },
                        "themeRef": {
                            "strokeRef": {
                                "ref": "THEME",
                                "color": {
                                    "tweaks": {
                                        "shade": 0.5
                                    },
                                    "type": "A1"
                                }
                            },
                            "fillRef": {
                                "ref": "THEME",
                                "color": {
                                    "type": "A1"
                                }
                            },
                            "fontRef": {
                                "ref": "MINOR",
                                "color": {
                                    "type": "CUSTOM",
                                    "rgb": [
                                        255,
                                        255,
                                        255
                                    ]
                                }
                            }
                        },
                        "nvOProps": {
                            "nvDProps": {
                                "hidden": false,
                                "name": "Rectangle 1",
                                "id": "3A189A6B-4BC2-4E7A-9016-FB9026B9A608"
                            }
                        },
                        "textBody": {
                            "listStyles": [
                                {
                                    "margin": {
                                        "left": 0
                                    },
                                    "spacing": {
                                        "before": {
                                            "absolute": 0,
                                            "type": "ABSOLUTE"
                                        },
                                        "line": {
                                            "type": "PERCENT",
                                            "percent": 1
                                        },
                                        "after": {
                                            "absolute": 0,
                                            "type": "ABSOLUTE"
                                        }
                                    },
                                    "level": 1,
                                    "defPrProps": {
                                        "size": 18,
                                        "fill": {
                                            "solid": {
                                                "color": {
                                                    "type": "CUSTOM",
                                                    "rgb": [
                                                        255,
                                                        255,
                                                        255
                                                    ]
                                                }
                                            },
                                            "type": "SOLID"
                                        },
                                        "font": {
                                            "ref": "MINOR",
                                            "fontFamily": {
                                                "name": "Open Sans"
                                            }
                                        }
                                    },
                                    "halign": "LEFT",
                                    "dir": "LTR"
                                },
                                {
                                    "margin": {
                                        "left": 48
                                    },
                                    "spacing": {
                                        "before": {
                                            "absolute": 0,
                                            "type": "ABSOLUTE"
                                        },
                                        "line": {
                                            "type": "PERCENT",
                                            "percent": 1
                                        },
                                        "after": {
                                            "absolute": 0,
                                            "type": "ABSOLUTE"
                                        }
                                    },
                                    "level": 2,
                                    "defPrProps": {
                                        "size": 18,
                                        "fill": {
                                            "solid": {
                                                "color": {
                                                    "type": "CUSTOM",
                                                    "rgb": [
                                                        255,
                                                        255,
                                                        255
                                                    ]
                                                }
                                            },
                                            "type": "SOLID"
                                        },
                                        "font": {
                                            "ref": "MINOR",
                                            "fontFamily": {
                                                "name": "Open Sans"
                                            }
                                        }
                                    },
                                    "halign": "LEFT",
                                    "dir": "LTR"
                                },
                                {
                                    "margin": {
                                        "left": 96
                                    },
                                    "spacing": {
                                        "before": {
                                            "absolute": 0,
                                            "type": "ABSOLUTE"
                                        },
                                        "line": {
                                            "type": "PERCENT",
                                            "percent": 1
                                        },
                                        "after": {
                                            "absolute": 0,
                                            "type": "ABSOLUTE"
                                        }
                                    },
                                    "level": 3,
                                    "defPrProps": {
                                        "size": 18,
                                        "fill": {
                                            "solid": {
                                                "color": {
                                                    "type": "CUSTOM",
                                                    "rgb": [
                                                        255,
                                                        255,
                                                        255
                                                    ]
                                                }
                                            },
                                            "type": "SOLID"
                                        },
                                        "font": {
                                            "ref": "MINOR",
                                            "fontFamily": {
                                                "name": "Open Sans"
                                            }
                                        }
                                    },
                                    "halign": "LEFT",
                                    "dir": "LTR"
                                },
                                {
                                    "margin": {
                                        "left": 144
                                    },
                                    "spacing": {
                                        "before": {
                                            "absolute": 0,
                                            "type": "ABSOLUTE"
                                        },
                                        "line": {
                                            "type": "PERCENT",
                                            "percent": 1
                                        },
                                        "after": {
                                            "absolute": 0,
                                            "type": "ABSOLUTE"
                                        }
                                    },
                                    "level": 4,
                                    "defPrProps": {
                                        "size": 18,
                                        "fill": {
                                            "solid": {
                                                "color": {
                                                    "type": "CUSTOM",
                                                    "rgb": [
                                                        255,
                                                        255,
                                                        255
                                                    ]
                                                }
                                            },
                                            "type": "SOLID"
                                        },
                                        "font": {
                                            "ref": "MINOR",
                                            "fontFamily": {
                                                "name": "Open Sans"
                                            }
                                        }
                                    },
                                    "halign": "LEFT",
                                    "dir": "LTR"
                                },
                                {
                                    "margin": {
                                        "left": 192
                                    },
                                    "spacing": {
                                        "before": {
                                            "absolute": 0,
                                            "type": "ABSOLUTE"
                                        },
                                        "line": {
                                            "type": "PERCENT",
                                            "percent": 1
                                        },
                                        "after": {
                                            "absolute": 0,
                                            "type": "ABSOLUTE"
                                        }
                                    },
                                    "level": 5,
                                    "defPrProps": {
                                        "size": 18,
                                        "fill": {
                                            "solid": {
                                                "color": {
                                                    "type": "CUSTOM",
                                                    "rgb": [
                                                        255,
                                                        255,
                                                        255
                                                    ]
                                                }
                                            },
                                            "type": "SOLID"
                                        },
                                        "font": {
                                            "ref": "MINOR",
                                            "fontFamily": {
                                                "name": "Open Sans"
                                            }
                                        }
                                    },
                                    "halign": "LEFT",
                                    "dir": "LTR"
                                },
                                {
                                    "margin": {
                                        "left": 240
                                    },
                                    "spacing": {
                                        "before": {
                                            "absolute": 0,
                                            "type": "ABSOLUTE"
                                        },
                                        "line": {
                                            "type": "PERCENT",
                                            "percent": 1
                                        },
                                        "after": {
                                            "absolute": 0,
                                            "type": "ABSOLUTE"
                                        }
                                    },
                                    "level": 6,
                                    "defPrProps": {
                                        "size": 18,
                                        "fill": {
                                            "solid": {
                                                "color": {
                                                    "type": "CUSTOM",
                                                    "rgb": [
                                                        255,
                                                        255,
                                                        255
                                                    ]
                                                }
                                            },
                                            "type": "SOLID"
                                        },
                                        "font": {
                                            "ref": "MINOR",
                                            "fontFamily": {
                                                "name": "Open Sans"
                                            }
                                        }
                                    },
                                    "halign": "LEFT",
                                    "dir": "LTR"
                                },
                                {
                                    "margin": {
                                        "left": 288
                                    },
                                    "spacing": {
                                        "before": {
                                            "absolute": 0,
                                            "type": "ABSOLUTE"
                                        },
                                        "line": {
                                            "type": "PERCENT",
                                            "percent": 1
                                        },
                                        "after": {
                                            "absolute": 0,
                                            "type": "ABSOLUTE"
                                        }
                                    },
                                    "level": 7,
                                    "defPrProps": {
                                        "size": 18,
                                        "fill": {
                                            "solid": {
                                                "color": {
                                                    "type": "CUSTOM",
                                                    "rgb": [
                                                        255,
                                                        255,
                                                        255
                                                    ]
                                                }
                                            },
                                            "type": "SOLID"
                                        },
                                        "font": {
                                            "ref": "MINOR",
                                            "fontFamily": {
                                                "name": "Open Sans"
                                            }
                                        }
                                    },
                                    "halign": "LEFT",
                                    "dir": "LTR"
                                },
                                {
                                    "margin": {
                                        "left": 336
                                    },
                                    "spacing": {
                                        "before": {
                                            "absolute": 0,
                                            "type": "ABSOLUTE"
                                        },
                                        "line": {
                                            "type": "PERCENT",
                                            "percent": 1
                                        },
                                        "after": {
                                            "absolute": 0,
                                            "type": "ABSOLUTE"
                                        }
                                    },
                                    "level": 8,
                                    "defPrProps": {
                                        "size": 18,
                                        "fill": {
                                            "solid": {
                                                "color": {
                                                    "type": "CUSTOM",
                                                    "rgb": [
                                                        255,
                                                        255,
                                                        255
                                                    ]
                                                }
                                            },
                                            "type": "SOLID"
                                        },
                                        "font": {
                                            "ref": "MINOR",
                                            "fontFamily": {
                                                "name": "Open Sans"
                                            }
                                        }
                                    },
                                    "halign": "LEFT",
                                    "dir": "LTR"
                                },
                                {
                                    "margin": {
                                        "left": 384
                                    },
                                    "spacing": {
                                        "before": {
                                            "absolute": 0,
                                            "type": "ABSOLUTE"
                                        },
                                        "line": {
                                            "type": "PERCENT",
                                            "percent": 1
                                        },
                                        "after": {
                                            "absolute": 0,
                                            "type": "ABSOLUTE"
                                        }
                                    },
                                    "level": 9,
                                    "defPrProps": {
                                        "size": 18,
                                        "fill": {
                                            "solid": {
                                                "color": {
                                                    "type": "CUSTOM",
                                                    "rgb": [
                                                        255,
                                                        255,
                                                        255
                                                    ]
                                                }
                                            },
                                            "type": "SOLID"
                                        },
                                        "font": {
                                            "ref": "MINOR",
                                            "fontFamily": {
                                                "name": "Open Sans"
                                            }
                                        }
                                    },
                                    "halign": "LEFT",
                                    "dir": "LTR"
                                }
                            ],
                            "paras": [
                                {
                                    "style": {
                                        "margin": {
                                            "left": 0
                                        },
                                        "spacing": {
                                            "before": {
                                                "absolute": 0,
                                                "type": "ABSOLUTE"
                                            },
                                            "line": {
                                                "type": "PERCENT",
                                                "percent": 1
                                            },
                                            "after": {
                                                "absolute": 0,
                                                "type": "ABSOLUTE"
                                            }
                                        },
                                        "level": 1,
                                        "defPrProps": {
                                            "size": 18,
                                            "fill": {
                                                "solid": {
                                                    "color": {
                                                        "type": "CUSTOM",
                                                        "rgb": [
                                                            255,
                                                            255,
                                                            255
                                                        ]
                                                    }
                                                },
                                                "type": "SOLID"
                                            },
                                            "font": {
                                                "ref": "MINOR",
                                                "fontFamily": {
                                                    "name": "Open Sans"
                                                }
                                            }
                                        },
                                        "halign": "CENTER",
                                        "dir": "LTR"
                                    },
                                    "portions": [
                                        {
                                            "props": {
                                                "size": 18,
                                                "fill": {
                                                    "solid": {
                                                        "color": {
                                                            "type": "CUSTOM",
                                                            "rgb": [
                                                                255,
                                                                255,
                                                                255
                                                            ]
                                                        }
                                                    },
                                                    "type": "SOLID"
                                                },
                                                "font": {
                                                    "ref": "MINOR",
                                                    "fontFamily": {
                                                        "name": "Open Sans"
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }
                            ],
                            "props": {
                                "inset": {
                                    "top": 4.8,
                                    "left": 9.6,
                                    "bottom": 4.8,
                                    "right": 9.6
                                },
                                "column": {
                                    "num": 1,
                                    "gap": 0
                                },
                                "valign": "MIDDLE",
                                "autoFit": {
                                    "type": "NONE"
                                }
                            }
                        },
                        "type": "SHAPE",
                        "userGroup": false,
                        "props": {
                            "transform": {
                                "rotate": 0,
                                "pos": {
                                    "top": 190,
                                    "left": 190
                                },
                                "flipv": false,
                                "dim": {
                                    "width": 120,
                                    "height": 120
                                },
                                "fliph": false,
                                "rotAngle": 0
                            },
                            "fill": {
                                "solid": {
                                    "color": {
                                        "type": "A1",
                                        "rgb": [
                                            52,
                                            152,
                                            219
                                        ]
                                    }
                                },
                                "type": "SOLID"
                            },
                            "geom": {
                                "preset": {
                                    "type": "RECT"
                                },
                                "type": "PRESET"
                            },
                            "stroke": {
                                "captype": "FLAT",
                                "jointype": "ROUND",
                                "width": 1,
                                "type": "SOLID",
                                "fill": {
                                    "type": "NONE"
                                }
                            }
                        },
                        "fitModeData": {
                            "top": 0,
                            "left": 0,
                            "width": 120,
                            "height": 120
                        }
                    },
                    "SHAPE_ACTUAL_HEIGHT" : 120,
                    "SHAPE_ACTUAL_WIDTH" : 120,
                    "SHEET_SHAPE_ID" : 0,
                    "WORKBOOK_SHAPE_ID" : 0,
                    "SHAPE_HEIGHT" : 120,
                    "SHAPE_WIDTH" : 120,
                    "SHAPE_ROW" : 2,
                    "SHAPE_ZINDEX" : 0,
                    "sn" : "Sheet1"
                }
            ]
    }
    }} />
    }}
</BrowserOnly>
<br/>

  </TabItem>
</Tabs>