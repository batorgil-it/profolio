import { NextResponse } from "next/server";
import axios from "axios";
import { parseString } from "xml2js";

// To handle a GET request to /api
export async function GET() {
  const resp = await axios.get("https://medium.com/feed/@batorgil-it");

  const json = await new Promise((resolve, reject) => {
    parseString(resp.data, (err, res2) => {
      if (err != null) {
        reject(err);
      } else {
        resolve(res2.rss.channel[0].item);
      }
    });
  });
  return NextResponse.json(json, { status: 200 });
}
