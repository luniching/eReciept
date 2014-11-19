module.exports =  {

    "data": {
        "viewModel": {
            "deviceType": "iphone",
            "view": "receipt/receipt",
            "osType": "mac",
            "invoiceModel": {
                "merchantAccountNumber": "**************17934",
                "paymentType": "paypal",
                "encryptedId": "INV2-25MB-8MVD-BN5R-JJC4",
                "merchantModel": {
                    "merchantName": "Joe's Generic Business",
                    "merchantAddress1": "876 8th Street",
                    "merchantAddress2": "8166276 4th Street",
                    "merchantCity": "Wolverhampton",
                    "merchantState": "West Midlands",
                    "merchantZip": "W12 4LQ",
                    "merchantPhone": "(212) 555-1234",
                    "merchantFax": "(212) 555-8888",
                    "merchantWebsiteUrl": "http://www.paypal.com",
                    "merchantEmail": "dev-uk-b4@paypal.com"
                },
                "orderId": "0056",
                "discountAmount": "-&pound;1.96",
                "tip": "",
                "totalAmount": "&pound;18.08 GBP",
                "transactionId": "3TA598712M494552A",
                "taxes": [
                    {
                        "taxAmount": "&pound;0.40",
                        "taxValue": 40,
                        "encryptedId": "INV2-2FP8-Z5L5-W36S-94AJ",
                        "label": "Tax",
                        "currencyCode": "GBP",
                        "percent": "9.99%"
                    }
                ],
                "longitude": -77.037852,
                "latitude": 38.898556,
                "payerId": "rnallur-biz@paypal.com",
                "paypalPayment": false,
                "cardSoftDescription": "Joe's Generic Business",
                "purchaseTimestamp": "21-May-2013 18:39:40 o'clock BST",
                "items": [
                    {
                        "name": "Guitar",
                        "quantity": "2",
                        "unitPrice": "&pound;1.99",
                        "calculatedAmount": "&pound;3.98"
                    },
                    {
                        "name": "Violin",
                        "quantity": "1",
                        "unitPrice": "&pound;15.66",
                        "calculatedAmount": "&pound;15.66"
                    }
                ],
                "subTotal": "&pound;19.64",
                "status": "Completed"
            },
            "paymentInfoModel": {
                "merchantAccountNumber": 1366499629009817900,
                "paymentType": "SALE",
                "authorizationCode": "476665",
                "cardScheme": "Visa/Delta/Electron",
                "terminalId": "****0001",
                "cardNumber": "************6666",
                "cardExpirationDate": "10/20",
                "transactionSource": "Keyed",
                "successfulPayment": true,
                "signatureVerified": false,
                "pinPresent": false
            },
            "sellerReceipt": true
        },
        "links": {
            "templateBaseUrl": "https://www.stage2pph11.qa.paypal.com/eboxapps/templates/7f/a84c2ddedb424a8687c38509e7fad",
            "jsBaseUrl": "https://www.stage2pph11.qa.paypal.com/eboxapps/js/68/e4c0eb0616cef3a1022c5cf85875f6",
            "hostUrl": "https://www.stage2pph11.qa.paypal.com",
            "cssBaseUrl": "https://www.stage2pph11.qa.paypal.com/eboxapps/css/fb/26497f081a7977a7206697cfd3712d",
            "requestURI": "/webapps/userexperienceweb/page/ireceipt/get"
        }
    },
    "viewName": "receipt/receipt",
    "sys": {
        "tracking": {
            "siteCatalyst": {
                "jsFile": "https://www.stage2pph11.qa.paypal.com/js/site_catalyst/pp_jscode_paypaldev.js",
                "propVars": [
                    {
                        "value": "userexperiencespartaweb\\x2FWEB-INF\\x2Ftmpl\\x2Fdust\\x2Freceipt\\x2Freceipt.dust",
                        "prop": "s.prop1"
                    },
                    {
                        "value": "dfa775290a033",
                        "prop": "s.prop40"
                    },
                    {
                        "value": "en_GB",
                        "prop": "s.prop50"
                    },
                    {
                        "value": "aa16e9a5371fa24d0aca90b2233ac47b",
                        "prop": "s.eVar61"
                    },
                    {
                        "value": " ",
                        "prop": "s.eVar62"
                    },
                    {
                        "value": " ",
                        "prop": "s.prop62"
                    },
                    {
                        "value": "\\x7C\\x7C",
                        "prop": "s.eVar66"
                    },
                    {
                        "value": "Sparta",
                        "prop": "s.prop71"
                    },
                    {
                        "value": "unverified",
                        "prop": "s.prop8"
                    },
                    {
                        "value": "unrestricted",
                        "prop": "s.prop9"
                    },
                    {
                        "value": "testVarRemoveMe",
                        "prop": "s.prop80"
                    }
                ],
                "suiteVar": "devpaypalglobal"
            },
            "fpti": {
                "jsURL": "https://www.stage2pph11.qa.paypal.com",
                "dataString": "tmpl=userexperiencespartaweb%2FWEB-INF%2Ftmpl%2Fdust%2Freceipt%2Freceipt.dust&calc=dfa775290a033&rsta=en_GB&md5h=aa16e9a5371fa24d0aca90b2233ac47b&shfp=%7C%7C&usce=+&pgtf=Sparta&s=ci&aver=unverified&rstr=unrestricted&pfid=dfa775290a033",
                "name": "pta",
                "serverURL": "//tracking.qa.paypal.com/webapps/tracking/ts"
            }
        },
        "pageInfo": {
            "countryCode": "GB",
            "hostName": "RpLae8Bcxk%2BhBLmnv5gAk45NrPHaxSLUzIASCVuWcwkea%2FNWJtfl7kzFJ2E751Qh",
            "webVersion": "100-6118998",
            "languageCode": "en",
            "csrfToken": "gthid8pBsWkR-IuLWvK7WHpvBegkx61F3SCuN_882vBgV3z8IjujHAsUpjECprZP0VHpckGMZsq7-fIWzN1X0Txpq-vUxA2H0uIsqWeQjaZTuP8Q",
            "templateDate": "May 23, 2013 11:04:53 PDT",
            "script": "sparta",
            "rlogid": "%2BVbCEHNUQzmwzQTKuXxpSVevtAmBb8ihvs3UdV5%2B9Hh%2B47X9cr5Oxf0Uqh5C7zDNFUXE5MtNAk6UCN1fjXd9Hz6KvJw158CJMcxA1Uh0jRg_13ed290a077",
            "contentVersion": "major version: 1 minor version: 0"
        }
    }

}