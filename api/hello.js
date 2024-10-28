export default function GET(req, res) {
    return res.status(200).send(`Hello from ${process.env.VERCEL_REGION}`);
}