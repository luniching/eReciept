module.exports = {

    "data": {
        "viewModel": {
            "deviceType": "iphone",
            "view": "receipt/receipt",
            "osType": "mac",
            "invoiceModel": {
                "merchantAccountNumber": "**************17934",
                "encryptedId": "INV2-UG5S-79V7-8KLA-2K2X",
                "merchantModel": {
                    "merchantName": "mybusiness",
                    "merchantAddress1": "address1",
                    "merchantAddress2": "81662764thStreet",
                    "merchantCity": "Wolverhampton",
                    "merchantState": "WestMidlands",
                    "merchantZip": "W124LQ",
                    "merchantPhone": "446505635282",
                    "merchantWebsiteUrl": "www.fool.com",
                    "merchantEmail": "dev-uk-b4@paypal.com"
                },
                "orderId": "0031",
                "discountAmount": "-&pound;50.00",
                "tip": "",
                "totalAmount": "&pound;2,650.00 GBP",
                "taxes": [
                    {
                        "taxAmount": "&pound;200.00",
                        "taxValue": 20000,
                        "encryptedId": "INV2-5XAK-GY52-AH5P-79PX",
                        "label": "Tax",
                        "currencyCode": "GBP",
                        "percent": "8%"
                    }
                ],
                "longitude": 0,
                "latitude": 0,
                "payerId": "manikeshindia@yahoo.com",
                "paypalPayment": true,
                "purchaseTimestamp": "May 15, 2013 4:49:01 AM BST",
                "items": [
                    {
                        "name": "Guitar",
                        "quantity": "5",
                        "unitPrice": "&pound;500.00",
                        "calculatedAmount": "&pound;2,500.00"
                    }
                ],
                "subTotal": "&pound;2,500.00",
                "status": "Draft"
            },
            "paymentInfoModel": {
                "successfulPayment": false
            },
            "sellerReceipt": false
        },
        "links": {
            "templateBaseUrl": "https://www.stage2pph11.qa.paypal.com/eboxapps/templates/b4/e73b32e0fcb876d074774724006bc",
            "jsBaseUrl": "https://www.stage2pph11.qa.paypal.com/eboxapps/js/68/e4c0eb0616cef3a1022c5cf85875f6",
            "hostUrl": "https://stage2pph11.qa.paypal.com",
            "cssBaseUrl": "https://www.stage2pph11.qa.paypal.com/eboxapps/css/2e/9c5950c769c6f9418ba1836a2cce9d",
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
                        "value": "f96eb63ba3421",
                        "prop": "s.prop40"
                    },
                    {
                        "value": "en_US",
                        "prop": "s.prop50"
                    },
                    {
                        "value": "48ad0a8424aa5261ba5722dc096da558",
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
                "dataString": "tmpl=userexperiencespartaweb%2FWEB-INF%2Ftmpl%2Fdust%2Freceipt%2Freceipt.dust&calc=f96eb63ba3421&rsta=en_US&md5h=48ad0a8424aa5261ba5722dc096da558&shfp=%7C%7C&usce=+&pgtf=Sparta&s=ci&aver=unverified&rstr=unrestricted&pfid=f96eb63ba3421",
                "name": "pta",
                "serverURL": "//tracking.qa.paypal.com/webapps/tracking/ts"
            }
        },
        "pageInfo": {
            "countryCode": "US",
            "hostName": "8em4MsCFQqY7mHzJsTQe55HemsQJLs2vips08OdI%2BU9MRk1sNiTvcbgUjVjrja6%2F",
            "webVersion": "100-5962938",
            "languageCode": "en",
            "csrfToken": "J-2a6ArrM_P4YAmTAh4Jnc6ZChrU0f-qhh8lKygP-EBTI-Db2nfTdSK_GPlBurwv3XV4xAd2bRUlJoTfw1IsAD3T1aq9C8Y-mMMEGKvduFsVFhZc",
            "templateDate": "May 20, 2013 13:03:34 PDT",
            "script": "sparta",
            "rlogid": "IezrYazz3uOLQA%2FHdjC%2BPaHMUbNBdwNyJS%2BATddEsvZ6FeHpNX8sW%2F6aS2HjasN6BIG%2B76dO3dlcLSQOx3Ebn7yhT9kQ1wwx%2BHMIFBtULeo_13ec38a349d",
            "contentVersion": "major version: 1 minor version: 0"
        }
    }

}