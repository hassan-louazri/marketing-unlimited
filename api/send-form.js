import fetch from 'node-fetch';

export default async function formHandler(req, res) {
    const url = 'https://script.google.com/macros/s/AKfycbyiQtbyE8dg6w4OdGEanDmZdlxgIPumnYIpSgTXLak7UlZlcpIKM-91tkfauF5Ro64I1g/exec';
    
    if(req.method === 'POST') {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(req.body),
            headers: { 'Content-Type': 'application/json'},
        });
    
        if(response.ok) {
            res.status(200).json({message: "Data saved to Google sheets."});
        } else {
            res.status(500).json({message: "Failed to save data."});
        }
    } else {
        res.status(405).json({message: 'Method not allowed.'});
    }
}