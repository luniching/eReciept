module.exports = {

    "data": {
        "viewModel": {
            "deviceType": "iphone",
            "view": "receipt/receiptEmail",
            "osType": "mac",
            "invoiceModel": {
                "merchantAccountNumber": "**************17934",
                "paymentType": "paypal",
                "encryptedId": "INV2-QERY-NC69-YP7Z-3VCX",
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
                "orderId": "0033",
                "discountAmount": "-&pound;50.00",
                "tip": "",
                "totalAmount": "&pound;2,650.00 GBP",
                "transactionId": "1NX51128FC411471A",
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
                "longitude": -77.037852,
                "latitude": 38.898556,
                "payerId": "manikeshindia@yahoo.com",
                "paypalPayment": true,
                "purchaseTimestamp": "May 15, 2013 5:44:59 AM BST",
                "items": [
                    {
                        "name": "Guitar",
                        "quantity": "5",
                        "unitPrice": "&pound;500.00",
                        "calculatedAmount": "&pound;2,500.00"
                    }
                ],
                "subTotal": "&pound;2,500.00",
                "status": "Completed"
            },
            "paymentInfoModel": {
                "merchantAccountNumber": 1366499629009817900,
                "paymentType": "",
                "authorizationCode": "123456",
                "cardScheme": "VISA DEBIT",
                "cardNumber": "************6066",
                "cardExpirationDate": "11/15",
                "applicationId": "A0000000031010",
                "transactionSource": "",
                "successfulPayment": true,
                "signatureVerified": true,
                "pinPresent": false
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
    "viewName": "receipt/receiptEmail",
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
                        "value": "7108015854644",
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
                "dataString": "tmpl=userexperiencespartaweb%2FWEB-INF%2Ftmpl%2Fdust%2Freceipt%2Freceipt.dust&calc=7108015854644&rsta=en_US&md5h=48ad0a8424aa5261ba5722dc096da558&shfp=%7C%7C&usce=+&pgtf=Sparta&s=ci&aver=unverified&rstr=unrestricted&pfid=7108015854644",
                "name": "pta",
                "serverURL": "//tracking.qa.paypal.com/webapps/tracking/ts"
            }
        },
        "pageInfo": {
            "countryCode": "US",
            "hostName": "z9hGjJ%2BxIFs2RFusOGy%2BEuv3GvRNFR5EyULw5IJV0YS%2FbQWH%2FUvWmRD9soUdP13%2F",
            "webVersion": "100-5962938",
            "languageCode": "en",
            "csrfToken": "8hilzkxqpxOOZqq4JvlbZ34DlDV3JBg5U3AiRKkvcCSLkMj_K3FS43OxrhGYsU6D4D2QHPEQ6Ahwnx8oWI3xjKaC4R16By3M0p3GtVsaPbEZY5GE",
            "templateDate": "May 20, 2013 12:58:11 PDT",
            "script": "sparta",
            "rlogid": "KRHbJ1Ln%2BX3VzZSglZ8PSd49IJ%2FbbSMbDa468soe5QXdBNi64VxwydRcguHm6oqmXuu7Gk77W%2Fx1d%2FmHxOQnW%2FFNb8x1HLMOn1dTf%2BsGIHw_13ec38546fc",
            "contentVersion": "major version: 1 minor version: 0"
        }
    }

}