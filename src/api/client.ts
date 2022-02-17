// A tiny wrapper around fetch(), borrowed from

export async function client(
  endpoint: RequestInfo,
  { body, ...customConfig }: RequestInit = {}
): Promise<{ status: number; data: any; headers: Headers; url: string }> {
  const headers: HeadersInit = { "Content-Type": "application/json" };

  const config: RequestInit = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  let data;
  try {
    const response = await window.fetch(endpoint, config);
    data = await response.json();
    if (response.ok) {
      // Return a result object similar to Axios
      return {
        status: response.status,
        data,
        headers: response.headers,
        url: response.url,
      };
    }
    throw new Error(response.statusText);
  } catch (err: any) {
    return Promise.reject(err.message ? err.message : data);
  }
}

client.get = function (endpoint: RequestInfo, customConfig: RequestInit = {}) {
  return client(endpoint, { ...customConfig, method: "GET" });
};

client.post = function (
  endpoint: RequestInfo,
  body: BodyInit,
  customConfig = {}
) {
  return client(endpoint, { ...customConfig, body });
};
