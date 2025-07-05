const beautify = require('js-beautify').js;

const validUser = "YanOfficialID";
const validPass = "VIP123";

export default function handler(req, res) {
    if (req.method === 'POST' && req.query.auth === 'true') {
        const { username, password } = req.body || {};
        if (username === validUser && password === validPass) {
            return res.status(200).json({ success: true });
        } else {
            return res.status(403).json({ success: false, message: "Invalid Credentials" });
        }
    }

    if (req.method === 'POST') {
        try {
            const kode = req.body || "";
            const hasil = beautify(kode, { indent_size: 2 });
            res.status(200).send(hasil);
        } catch (e) {
            res.status(500).send("Error: " + e.message);
        }
    } else {
        res.status(405).send("Method Not Allowed");
    }
    }
