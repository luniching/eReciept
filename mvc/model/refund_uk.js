module.exports = {

    "data": {
        "viewModel": {
            "deviceType": "iphone",
            "view": "receipt/receipt",
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
                "purchaseTimestamp": "15-May-2013 05:44:59 o'clock BST",
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
                "paymentType": "SALE",
                "authorizationCode": "123456",
                "cardScheme": "VISA DEBIT",
                "cardNumber": "************6066",
                "cardExpirationDate": "11/15",
                "applicationId": "A0000000031010",
                "transactionSource": "ICC",
                "successfulPayment": true,
                "signatureVerified": true,
                "pinPresent": false
            },
            "sellerReceipt": false
        },
        "links": {
            "templateBaseUrl": "https://www.stage2pph11.qa.paypal.com/eboxapps/templates/b4/e73b32e0fcb876d074774724006bc",
            "jsBaseUrl": "https://www.stage2pph11.qa.paypal.com/eboxapps/js/68/e4c0eb0616cef3a1022c5cf85875f6",
            "hostUrl": "https://www.stage2pph11.qa.paypal.com",
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
                        "value": "1796f58f2c640",
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
                "dataString": "tmpl=userexperiencespartaweb%2FWEB-INF%2Ftmpl%2Fdust%2Freceipt%2Freceipt.dust&calc=1796f58f2c640&rsta=en_GB&md5h=aa16e9a5371fa24d0aca90b2233ac47b&shfp=%7C%7C&usce=+&pgtf=Sparta&s=ci&aver=unverified&rstr=unrestricted&pfid=1796f58f2c640",
                "name": "pta",
                "serverURL": "//tracking.qa.paypal.com/webapps/tracking/ts"
            }
        },
        "pageInfo": {
            "countryCode": "GB",
            "hostName": "QuccZv3AIyc8BfsGk5oBifq0onW5cI%2BJvc%2BiErsuAptAR3wGKQ%2FFLp2xMSxD%2FGRI",
            "webVersion": "100-5962938",
            "languageCode": "en",
            "csrfToken": "XK-pnhjSKrkUCe9Tr7PXXER5NgriLfX0-S5pSrH2QNS0AhtUYo70Opgvsqlsj9tcYXixSO5pG020iypLLqr5ZHwBJgtkkm6TLsTP1VbMHibInBb4",
            "templateDate": "May 21, 2013 13:40:57 PDT",
            "script": "sparta",
            "rlogid": "mwoxWhsxWbMUdVbv%2FH1zBOEsDsmY3sQeh63LPVriE775nJuePI%2FaqSteghpVrhGN79nLtoz1PiuSYU7ui52KHYfcjW15cjuYOrFjrgUFKmk_13ec8d2c745",
            "contentVersion": "major version: 1 minor version: 0"
        }
    }

}