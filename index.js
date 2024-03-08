const express = require("express");
const axios = require("axios");
const app = express();

require("dotenv").config();

const cors = require("cors");

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`app is running at localhost:${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>hello from umoja<h1>");
});
const generateToken = async(req, res, next) => {

    const secret = process.env.AIRTIME_SECRET_KEY;
    await axios.get (" https://tandaio-api-uats.tanda.co.ke", {
        headers: {
            authorization: `Basic ${auth}`,
        },
    });

};

app.post("/stk", async (req, res) => {
    try {
        const phone = req.body.phone;
        const amount = req.body.amount;

        // Use the API here
        const sdk = require('api')({
            clientId: '688dd5b1-13f0-4ac4-a6a1-b316eb0e9939',
            apiUrl: 'https://tandaio-api-uats.tanda.co.ke',
        });

        const response = await sdk.prepaidAirtimeVoucher({
            commandId: 'VoucherFix',
            serviceProviderId: 'SAFARICOM',
            reference: 'ref00001'
        }, {
            organizationId: '3bde77e4-0a8b-42d9-a626-920f6733a05c'
        });

        console.log(response.data);

        // Now you can use phone and amount in your logic

        res.json({ phone, amount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
