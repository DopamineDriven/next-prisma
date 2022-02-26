export const fractionateDateTime = (w: string) => w.split(/[(T)]/);

export const fractionateDashSymbol = (x: string) => x.split(/([-])/);

export const fractionateCommaDelimitedData = (y: string) =>
  y.split(/([,])/);

export const fractionateAtSymbol = (z: string) => z.split(/([@])/);

export const stripDobYear = (dob: Date) => {
  return Number.parseInt(
    fractionateDateTime(new Date(dob).toISOString())[0],
    10
  );
};

export const stripEmailSubdomain = (email: string) => {
  const userEmailSubDomain = fractionateAtSymbol(email);
  return `${userEmailSubDomain[1]}${userEmailSubDomain[2]}`;
};

export async function fetchGetJSON(url: string) {
  try {
    const data = await fetch(url).then(res => res.json());
    return data;
  } catch (err) {
    throw new Error(`${err}`);
  }
}

export function n(min: number, max: number) {
  const { round, random } = Math;
  return round(random() * (max - min) + min);
}

export async function fetchPostJSON(url: string, data?: {}) {
  try {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data || {}) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  } catch (err) {
    throw new Error(`${err}`);
  }
}

export function jsonResponse(
  status: number,
  data: any,
  init?: ResponseInit
) {
  return new Response(JSON.stringify(data, null, 2), {
    ...init,
    status,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json"
    }
  });
}
