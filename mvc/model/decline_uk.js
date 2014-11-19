module.exports = {

    "data": {
        "viewModel": {
            "deviceType": "iphone",
            "view": "receipt/receipt",
            "osType": "mac",
            "invoiceModel": {
                "merchantAccountNumber": "**************17934",
                "paymentType": "paypal",
                "encryptedId": "INV2-STKR-WDF2-BPVT-4DBH",
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
                "orderId": "0032",
                "discountAmount": "-&pound;50.00",
                "tip": "",
                "totalAmount": "&pound;2,650.00 GBP",
                "transactionId": "3EB5639393057303M",
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
                "purchaseTimestamp": "15-May-2013 05:37:44 o'clock BST",
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
                        "value": "3cd3fd1c22d61",
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
                "dataString": "tmpl=userexperiencespartaweb%2FWEB-INF%2Ftmpl%2Fdust%2Freceipt%2Freceipt.dust&calc=3cd3fd1c22d61&rsta=en_GB&md5h=aa16e9a5371fa24d0aca90b2233ac47b&shfp=%7C%7C&usce=+&pgtf=Sparta&s=ci&aver=unverified&rstr=unrestricted&pfid=3cd3fd1c22d61",
                "name": "pta",
                "serverURL": "//tracking.qa.paypal.com/webapps/tracking/ts"
            }
        },
        "pageInfo": {
            "countryCode": "GB",
            "hostName": "dAtSGxMlV1z%2BDLRahoPJJcp1h04Kq4tpg16H34i7J%2FDkuJTGThdAxFMvS7IEQejt",
            "webVersion": "100-5962938",
            "languageCode": "en",
            "csrfToken": "52D9o-zJLyQxoJntbdm8TsDYcZc0-jzMqlj2tD60-wji8l-QoM-lDzmLGaQ_FjOyEtuIVUccGE2vQeY448Bo1Kl2LS6OPZUO8K2rSF3IqA5qsaN3",
            "templateDate": "May 21, 2013 13:40:17 PDT",
            "script": "sparta",
            "rlogid": "3l950dSolNML4VStyLFWy%2F5s3U%2BBC9cbkaV0QcsP8cSizkFWDENH2hN%2BwwNhau3mo5v86Elfc0%2BnJrm%2F%2FtiwBvu9BntByPitCdfBncXwTwk_13ec8d22c63",
            "contentVersion": "major version: 1 minor version: 0"
        }
    }

}