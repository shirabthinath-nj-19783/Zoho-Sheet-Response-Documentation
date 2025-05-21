---
sidebar_position: 8
description: ""
---

import BrowserOnly from '@docusaurus/BrowserOnly';

# Spreadsheet Settings
<h3>Structure</h3>
```json
{
        "SPREADSHEET_SETTINGS_NEW" : {
        "VIEW": __view_object__,
        "CALCULATION": __calculation_object__,
        "FONT": __font_object__,
        "LOCALE": __locale_object__,
        "DATE": {
            "FORMAT_DATE": __formt_date_array__,
            "TIME": __time_array__,
            "DATETIME": __date_time_array__,
            "DEFAULT_DATETIME": __default_date_time_array__,
            "TIME_DURATION": __time_duration_array__
        },
        "CURRENCY": __currency_object__,
        "WORKBOOKLOCALE": __locale__,
        "FORMATCELLS_REGIONAL": __formatcells_regional_object__,
        "FORMATCELLS_CUSTOM": __formatcells_custom_object__,
        "REGIONAL_PATTERNS": __regional_patterns_array__
    }
}
```

<h3>Response</h3>
<BrowserOnly fallback={<div>Loading JSON...</div>}>
{() => {
    const JsonViewer = require('@site/src/components/JsonViewer').default;
    return <JsonViewer data={{
        "SPREADSHEET_SETTINGS_NEW" : {
        "VIEW": {
            "GRID_COLOR": "#2ecc71"
        },
        "CALCULATION": {
            "IS_ITERATIVE_CALCULATION": true,
            "MAX_NUMBER_ITERATIONS": 100,
            "THRESHOLD": 0.01,
            "PATTERN_SETTING": 2
        },
        "FONT": {
            "FONT_NAME": "ZSTHEME_MINOR",
            "FONT_SIZE": "11pt",
            "FONT_COLOR": "#000000"
        },
        "LOCALE": {
            "THOUSAND_SEPARATOR": 44,
            "DECIMAL_SEPARATOR": 46,
            "LANGUAGE": "en",
            "COUNTRY": "IN",
            "TIME_ZONE": "Asia/Kolkata",
            "SHEET_DIRECTION": 1,
            "DATE_SEPARATOR": "/",
            "DICTIONARY_LOCALE": "en_US",
            "LOCALE": "en_IN",
            "DATE_FORMAT": 2,
            "CURRENCY_LOCALE": "en_IN",
            "NUMBER_GROUPING_TYPE": 1
        },
        "DATE": {
            "FORMAT_DATE": [
                {
                    "2025/05/06": "yyyy/MM/dd"
                },
                {
                    "05/06/2025": "MM/dd/yyyy"
                },
                {
                    "06/05/2025": "dd/MM/yyyy"
                },
                {
                    "Tuesday, May 6, 2025": "EEEE, MMMM d, yyyy"
                },
                {
                    "May 6, 2025": "MMMM d, yyyy"
                },
                {
                    "May 6, 2025": "MMM d, yyyy"
                },
                {
                    "5/6/25": "M/d/yy"
                }
            ],
            "TIME": [
                {
                    "4:47:05 PM IST": "h:mm:ss a z"
                },
                null,
                {
                    "4:47:05 PM": "h:mm:ss a"
                },
                {
                    "4:47 PM": "h:mm a"
                }
            ],
            "DATETIME": [
                {
                    "Tuesday, May 6, 2025 4:47 PM": "EEEE, MMMM d, yyyy h:mm a"
                },
                {
                    "May 6, 2025 4:47:05 PM": "MMMM d, yyyy h:mm:ss a"
                },
                {
                    "May 6, 2025 4:47:05 PM IST": "MMM d, yyyy h:mm:ss a z"
                },
                {
                    "5/6/25 4:47:05 PM IST": "M/d/yy h:mm:ss a z"
                }
            ],
            "DEFAULT_DATETIME": [
                {
                    "5/6/25 4:47 PM": "M/d/yy h:mm a"
                }
            ],
            "TIME_DURATION": [
                {
                    "25:01:01": [
                        "HH"
                    ]
                },
                {
                    "25:01": [
                        "HH"
                    ]
                }
            ]
        },
        "CURRENCY": {
            "CURRENCYSYMBOL": "$",
            "LOCALUTILCURSYMBOLS": [
                {
                    "EUR": "€",
                    "GBP": "£",
                    "USD": "$",
                    "INR": "₹",
                    "CNY": "￥"
                }
            ],
            "CURRENCYSYMBOL_HTML": "&#x24;",
            "CURRENCYNAME": "CURRENCYNAME.USD",
            "WORKBOOKLOCALE": "en_US"
        },
        "WORKBOOKLOCALE": "en_US",
        "FORMATCELLS_REGIONAL": {
            "ZipCode": "Zip Code",
            "PhoneNumber": "Phone Number",
            "ZipCode4": "Zip Code +4",
            "SSN": "Social Security Number"
        },
        "FORMATCELLS_CUSTOM": {
            "ISENCODED": true,
            "USERLEVELCUSTOMFONTS": [],
            "USERLEVELCUSTOMFORMATS": [
                "%5BHH%5D%3A%5Bmm%5D",
                "%5BHH%5D%3Amm%3Ass%3A000",
                "%5Bmm%5D%3Ass.00",
                "%5Bmm%5D%3Ass.000"
            ]
        },
        "REGIONAL_PATTERNS": [
            [
                "ZipCode",
                "%2300000"
            ],
            [
                "PhoneNumber",
                "%5B%3C%3D9999999%5D%23-%23%23%23%23%3B%28%23%29%22%20%22%23%23%23-%23%23%23%23"
            ],
            [
                "ZipCode4",
                "%2300000-0000"
            ],
            [
                "SSN",
                "%23%23000-00-0000"
            ]
        ]
    }
    }} />
    }}
</BrowserOnly>